// CI/CD pipeline for the Next.js portfolio
// Checkout -> Install -> Build -> SonarQube scan -> Quality Gate -> Docker build -> Deploy to Swarm -> Smoke test
pipeline {
    agent any

    options {
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
        disableConcurrentBuilds()
    }

    environment {
        APP_NAME  = 'portfolio'
        APP_PORT  = '3100'                 // host port the site is published on (3000/3001 are taken by other local dev servers)
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        NEXT_TELEMETRY_DISABLED = '1'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'node -v && npm -v'
                sh 'npm ci'
            }
        }

        stage('Build') {
            // next build also runs the TypeScript type check
            steps {
                sh 'npm run build'
            }
        }

        stage('SonarQube Analysis & Quality Gate') {
            // No webhook is used here: SonarQube's SSRF protection rejects any
            // webhook URL on a loopback/private/container-network address (which
            // http://jenkins:8080/... always is when both run in Docker on one
            // host). Instead, this stage polls SonarQube's own API for the
            // Compute Engine task result and the Quality Gate status.
            environment {
                // Name must match Manage Jenkins > Tools > SonarQube Scanner installations
                SCANNER_HOME = tool 'SonarScanner'
            }
            steps {
                // Name must match Manage Jenkins > System > SonarQube servers
                withSonarQubeEnv('SonarQube') {
                    // Single quotes: the shell expands the token, so Groovy never sees it
                    sh '''
                        "$SCANNER_HOME/bin/sonar-scanner" \
                          -Dsonar.host.url="$SONAR_HOST_URL" \
                          -Dsonar.token="$SONAR_AUTH_TOKEN" \
                          -Dsonar.projectVersion="$BUILD_NUMBER"
                    '''

                    timeout(time: 5, unit: 'MINUTES') {
                        sh '''
                            set -e
                            CE_TASK_URL=$(grep '^ceTaskUrl=' .scannerwork/report-task.txt | cut -d= -f2-)

                            STATUS="PENDING"
                            RESP=""
                            while [ "$STATUS" = "PENDING" ] || [ "$STATUS" = "IN_PROGRESS" ]; do
                              sleep 5
                              RESP=$(curl -s -u "$SONAR_AUTH_TOKEN:" "$CE_TASK_URL")
                              STATUS=$(echo "$RESP" | jq -r '.task.status')
                              echo "SonarQube analysis task status: $STATUS"
                            done

                            if [ "$STATUS" != "SUCCESS" ]; then
                              echo "SonarQube analysis task did not succeed: $STATUS"
                              exit 1
                            fi

                            ANALYSIS_ID=$(echo "$RESP" | jq -r '.task.analysisId')
                            QG=$(curl -s -u "$SONAR_AUTH_TOKEN:" "$SONAR_HOST_URL/api/qualitygates/project_status?analysisId=$ANALYSIS_ID")
                            QG_STATUS=$(echo "$QG" | jq -r '.projectStatus.status')
                            echo "Quality Gate status: $QG_STATUS"

                            if [ "$QG_STATUS" != "OK" ]; then
                              echo "$QG"
                              exit 1
                            fi
                        '''
                    }
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t "$APP_NAME:$IMAGE_TAG" -t "$APP_NAME:latest" .'
            }
        }

        stage('Deploy to Swarm') {
            // Deploys as a Docker Swarm service (devops/stack.yml) instead of a
            // plain container. `docker swarm init` is a one-time no-op after the
            // first run; this host is a single-node swarm (its own manager).
            steps {
                sh '''
                    docker swarm init >/dev/null 2>&1 || true
                    IMAGE_TAG="$IMAGE_TAG" docker stack deploy -c devops/stack.yml "$APP_NAME"
                '''
                // To enable the contact form, add a "Secret text" credential with ID
                // resend-api-key, then pass it through as an environment entry in
                // devops/stack.yml (Swarm secrets are a cleaner fit than a shell var
                // here, since `docker stack deploy` doesn't forward process env to
                // the running service).
            }
        }

        stage('Smoke Test') {
            // The image ships a Docker HEALTHCHECK (GET /api/health); this stage
            // waits on Docker's own verdict for the service's running task.
            steps {
                sh '''
                    for i in $(seq 1 20); do
                      CID=$(docker ps -q --filter "name=${APP_NAME}_${APP_NAME}" | head -1)
                      if [ -n "$CID" ]; then
                        STATUS=$(docker inspect --format='{{.State.Health.Status}}' "$CID" 2>/dev/null || echo "")
                        echo "Health status: $STATUS ($i/20)"
                        case "$STATUS" in
                          healthy)
                            echo "App is up on port $APP_PORT"
                            exit 0
                            ;;
                          unhealthy)
                            echo "Container reported unhealthy"
                            docker logs --tail 50 "$CID"
                            exit 1
                            ;;
                        esac
                      fi
                      sleep 3
                    done
                    echo "App did not become healthy in time"
                    docker service logs --tail 50 "${APP_NAME}_${APP_NAME}" || true
                    exit 1
                '''
            }
        }
    }

    post {
        success {
            echo "Deployed ${APP_NAME}:${IMAGE_TAG} -> http://localhost:${APP_PORT}"
        }
        failure {
            echo 'Pipeline failed. Check the stage logs above.'
        }
        always {
            sh 'docker image prune -f || true'
            cleanWs()
        }
    }
}
