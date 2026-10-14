# Jenkins + SonarQube CI/CD (Docker Swarm)

Branching follows GitFlow — see [`../GITFLOW.md`](../GITFLOW.md). Jenkins
builds `main` and deploys it to a (single-node) Docker Swarm.

```
GitHub ──► Jenkins ──► npm ci ─► next build ─► SonarQube scan ─► Quality Gate ─► docker build ─► swarm deploy :3100
             │                        (polls SonarQube's API — see note below)                      │
             └──────────────────────────────── cicd Docker network ────────────────────────────────────┘
```

Note: this does **not** use a SonarQube webhook. Recent SonarQube versions
block webhook URLs on loopback/private/container-network addresses as an
SSRF protection, and `http://jenkins:8080/...` is always one of those when
Jenkins and SonarQube both run in Docker on the same host — there's no way
around it. Instead, the Jenkinsfile's Quality Gate stage polls SonarQube's
own `/api/ce/task` and `/api/qualitygates/project_status` endpoints directly.

| Container  | URL                    | Purpose                              |
|------------|------------------------|--------------------------------------|
| jenkins    | http://localhost:8090  | Runs the pipeline (Node 22 + Docker CLI) |
| sonarqube  | http://localhost:9000  | Code quality / security analysis     |
| sonar-db   | (internal)             | Postgres for SonarQube               |
| portfolio  | http://localhost:3100  | The deployed site (created by Jenkins) |

## Where the files go

```
portfolio/                      <- your repo
├── GITFLOW.md                  <- commit (branching model)
├── Jenkinsfile                 <- commit
├── Dockerfile                  <- commit
├── .dockerignore               <- commit
├── sonar-project.properties    <- replace the existing one, commit
└── devops/                     <- commit (or keep anywhere on the server)
    ├── docker-compose.yml       (Jenkins + SonarQube + Postgres — CI/CD tooling)
    ├── stack.yml                (the portfolio's own Swarm deployment)
    ├── .env.example
    └── jenkins/
        ├── Dockerfile
        └── plugins.txt
```

## 1. Host prerequisites

- Docker Engine + Docker Compose v2 (or Docker Desktop), ~4 GB RAM free.
- **Linux only** — SonarQube's Elasticsearch needs:

```bash
sudo sysctl -w vm.max_map_count=524288
sudo sysctl -w fs.file-max=131072
# make permanent:
echo -e "vm.max_map_count=524288\nfs.file-max=131072" | sudo tee /etc/sysctl.d/99-sonarqube.conf
```

## 2. Start the stack

```bash
cd devops
cp .env.example .env
# Linux: put the docker group id in .env
sed -i "s/^DOCKER_GID=.*/DOCKER_GID=$(getent group docker | cut -d: -f3)/" .env
docker compose up -d --build
docker compose ps
```

SonarQube takes 1–2 minutes to start. Watch it with `docker logs -f sonarqube`
until you see `SonarQube is operational`.

## 3. Configure SonarQube

1. Open http://localhost:9000, log in as `admin` / `admin`, set a new password.
2. **Token:** avatar (top right) → *My Account* → *Security* → Generate a token
   (type *Global Analysis Token*, name `jenkins`). Copy it.

No webhook step here — see the note above. (If you try to add one anyway,
SonarQube will reject it with "Invalid URL: loopback, wildcard, link-local,
site-local, ... addresses ... are not allowed for webhooks.")

## 4. Configure Jenkins

1. Open http://localhost:8090. Get the unlock password:
   ```bash
   docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
   ```
   Choose *Install suggested plugins* and create your admin user.
   (The plugins this pipeline needs are already baked into the image.)
2. **Credential:** *Manage Jenkins* → *Credentials* → *System* → *Global* →
   *Add Credentials*
   - Kind: `Secret text` · Secret: the SonarQube token · ID: `sonarqube-token`
3. **SonarQube server:** *Manage Jenkins* → *System* → *SonarQube servers*
   - Tick *Environment variables*
   - Name: `SonarQube` (must match the Jenkinsfile)
   - Server URL: `http://sonarqube:9000` (container name, not localhost)
   - Token: `sonarqube-token` → Save
4. **Scanner:** *Manage Jenkins* → *Tools* → *SonarQube Scanner installations*
   → *Add* → Name: `SonarScanner` (must match the Jenkinsfile), tick
   *Install automatically* → Save.

## 5. Create the pipeline job

*New Item* → name `portfolio` → *Pipeline* → OK

- *Pipeline* section → Definition: **Pipeline script from SCM**
- SCM: Git · Repository URL: `https://github.com/Oudompanha123/portfolio.git`
- Branch: `*/main` · Script Path: `Jenkinsfile`
- *Triggers* → tick **Poll SCM**, schedule `H/5 * * * *`
  (GitHub webhooks can't reach `localhost`; use polling, or expose Jenkins
  with ngrok / a public server and use *GitHub hook trigger* instead.)

Save → **Build Now**. The Deploy stage runs `docker swarm init` (a one-time
no-op after the first build — this host becomes its own single-node swarm
manager) and then `docker stack deploy -c devops/stack.yml portfolio`. When
it's green:
- Analysis report: http://localhost:9000/dashboard?id=portfolio
- Live site: http://localhost:3100
- `docker node ls` — this host as the swarm manager
- `docker service ls` — the running `portfolio_portfolio` service

## 6. Contact form (optional)

Add a *Secret text* credential with ID `resend-api-key`, then follow the
comment in the Jenkinsfile's *Deploy to Swarm* stage to pass it into
`devops/stack.yml` as an environment entry (Swarm services don't inherit the
build's shell environment the way a plain `docker run` would).

## Troubleshooting

| Symptom | Fix |
|---|---|
| `permission denied ... /var/run/docker.sock` | Wrong `DOCKER_GID` in `.env`. Fix it and `docker compose up -d`. Lab-only fallback: `docker exec -u root jenkins chmod 666 /var/run/docker.sock` |
| SonarQube container keeps restarting | `vm.max_map_count` too low (step 1). Check `docker logs sonarqube`. |
| Scanner: `Fail to get bootstrap index from server` / connection refused | Server URL in Jenkins must be `http://sonarqube:9000`, and `sonar.host.url` must not be set to localhost in `sonar-project.properties`. |
| Quality Gate stage hangs, then times out | Check `docker logs -f sonar-db`/`sonarqube`; the pipeline polls the API directly so it shouldn't depend on network reachability from SonarQube back to Jenkins. |
| `jq: command not found` in the Quality Gate stage | Rebuild the Jenkins image: `docker compose up -d --build jenkins` (jq is installed there). |
| `tool 'SonarScanner'` / `withSonarQubeEnv('SonarQube')` not found | Names in Jenkins must match the Jenkinsfile exactly (case-sensitive). |
| `Failed to fetch ... from Google Fonts` during build | `next/font` downloads fonts at build time; the host needs internet access. |
| `APP_PORT` already in use | Change `APP_PORT` in the Jenkinsfile (defaults to 3100 since 3000/3001 are often taken by other local dev servers). |

## Useful commands

```bash
docker compose logs -f jenkins          # pipeline host logs
docker compose down                     # stop (data kept in volumes)
docker compose down -v                  # stop and wipe all Jenkins/Sonar data
docker service logs -f portfolio_portfolio   # deployed app logs
docker service ps portfolio_portfolio        # task history / why a task restarted
docker stack rm portfolio                    # tear down the deployed site (not CI/CD)
```
