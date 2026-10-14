# Deployment Requirements

This is a standard Next.js 15 app — no database, no required third-party
services. It needs a long-running Node.js process (not static hosting).

## Runtime on the server

- **Node.js 20.x LTS** (Next.js 15 requires >=18.18; 20 LTS is the safe pick)
- **npm** (comes with Node) — no yarn/pnpm lockfile in the repo, stick with npm
- **git** (to pull the repo)
- A process manager to keep `next start` alive — **pm2** (or a systemd service
  unit), since Next.js isn't static and needs a persistent Node process
- **Nginx** (or Caddy) as a reverse proxy in front of it, for the domain + TLS
  (Caddy auto-handles Let's Encrypt certs, which is less setup)

## Build / run commands

```bash
npm install
npm run build
npm run start      # serves on $PORT (default 3000)
```

## Environment variables

None required currently.

## Contact form

`app/api/contact/route.ts` validates submissions but doesn't deliver them
anywhere yet — it just `console.log`s on the server. Before relying on it in
production, wire it up to an actual delivery method:

- [Resend](https://resend.com) (simplest, email API)
- SMTP
- A webhook (Slack, Discord, Zapier, Formspider, etc.)

Otherwise every message submitted through the form will silently vanish into
server logs.

## Alternative: skip server management entirely

Since this is a stock Next.js app with no custom server logic beyond the one
API route, **[Vercel](https://vercel.com)** (made by the Next.js team) deploys
it with zero server setup — just connect the GitHub repo. No Node/pm2/Nginx
to manage. Worth it unless you specifically want this on your own VPS.
