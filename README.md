# Portfolio Website

Personal portfolio for Alexander Nicholas, focused on IT support and help desk roles: project case studies, skills with supporting evidence, background, and a downloadable résumé.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router, static export to `out/`)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4 plus custom CSS in `app/globals.css`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx              root layout: fonts, metadata, header + footer
  page.tsx                home: introduction, at-a-glance facts, project showcase, contact
  projects/page.tsx       /projects — project index
  projects/[slug]/        /projects/[slug] — case studies (prerendered)
  skills/ background/ resume/
  sitemap.ts robots.ts    generated at build time
  opengraph-image.tsx     link-preview image
  icon.svg                favicon
components/               header, footer, motion gallery, cards, previews
lib/
  site.ts                 name, role, tagline, email, URL, socials, nav
  profile.ts              biography, education, experience, certifications, skills
  projects.ts             project list in display order
  project-case-studies.ts case-study sections, evidence, and placeholders
public/                   headshot, résumé PDF
```

Content lives in `lib/`, not in the components. `CONTENT_CHECKLIST.md` tracks evidence still to add and past verification checks.

## Placeholders

Case-study sections and evidence that are still pending show as labeled placeholders in `npm run dev` and are left out of the production build. To see them in a production build, set `NEXT_PUBLIC_SHOW_PLACEHOLDERS=true`.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — build the static site into `out/`
- `npm run lint` — lint the codebase
