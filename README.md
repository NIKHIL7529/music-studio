# Third Eye Music

Responsive frontend website for Third Eye Music, built with Next.js and ready for Vercel.

## Requirements

- Node.js 24 LTS (the version is pinned in `.nvmrc`)
- npm 11+

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
npm audit --omit=dev
```

## Content updates

Update services, projects, and contact details in `app/data.ts`. Studio assets live in `public/` and are intentionally the only imagery used by the site.

## Environment variables

No environment variables are required today. Use `.env.example` as the public template if a future integration requires configuration. Never commit `.env*` files containing real values.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import it in Vercel.
3. Leave the detected Next.js settings unchanged (`npm run build`).
4. Set any future variables in Vercel’s Project Settings, rather than committing them.

Vercel will use the Node version declared in `package.json`.
