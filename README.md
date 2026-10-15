# anushkaghei.netlify.app

Personal portfolio for Anushka Ghei. React, TypeScript, Vite, Tailwind, and Framer Motion.

## Editing content

Almost everything on the site lives in one file: `src/data/portfolio.ts`
(bio, roles, projects, publications, skills, education, experience, recent updates).
The About section text is in `src/components/portfolio/AboutSection.tsx`.

To update the resume, replace `public/Anushka_Ghei_Resume.pdf` and keep the same filename.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:8080.

## Deploying

Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`).
Every push to `main` redeploys the site.
