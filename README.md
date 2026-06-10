# Portfolio

A minimal, type-led personal portfolio built with **Next.js 15 (App Router)**,
**TypeScript**, and **Tailwind CSS**. Near-monochrome design with a single
indigo accent, monospace section labels, a dark-mode toggle, scroll-reveal
animations, and a working contact form.

## Getting started

You'll need [Node.js 18.18+](https://nodejs.org).

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Make it yours

Almost everything lives in one file: **`lib/data.ts`**. Edit it to change your
name, role, bio, skills, projects, and social links. You usually won't need to
touch the components at all.

- **Name / tagline / availability** → `profile`
- **About paragraphs** → `about`
- **Skills** → `skillGroups`
- **Projects** → `projects`
- **Social links** → `socials`

### Colors & fonts

- Palette: the CSS variables at the top of **`app/globals.css`** (light + dark).
- Fonts: swapped in **`app/layout.tsx`** via `next/font` (Space Grotesk,
  Inter, JetBrains Mono). Change the imports to use different typefaces.

### Contact form

The form posts to **`app/api/contact/route.ts`**, which validates input and
currently just logs the message to the server console. To actually receive
mail, follow the commented instructions in that file — the quickest path is
[Resend](https://resend.com):

```bash
npm install resend
```

Then add a `RESEND_API_KEY` to a `.env.local` file and uncomment the send block.

## Build & deploy

```bash
npm run build
npm run start
```

The easiest deploy is [Vercel](https://vercel.com) (made by the Next.js team):
push this repo to GitHub, import it on Vercel, and it ships. Remember to add any
environment variables (like `RESEND_API_KEY`) in the Vercel dashboard.

## Project structure

```
app/
  layout.tsx          fonts, metadata, no-flash theme script
  page.tsx            assembles all sections
  globals.css         design tokens + base styles
  api/contact/route.ts contact form handler
components/            Nav, Hero, About, Skills, Projects, Contact, Footer, …
lib/data.ts           ← your content lives here
```
