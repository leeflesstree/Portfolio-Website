# Portfolio Website

Personal portfolio site, built to showcase projects, experience, and contact info.

> Status: early scaffold — content and design are still in progress.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page auto-updates as you edit files under `app/`.

## Project Structure

```
app/
  layout.tsx              root layout: fonts, metadata, header + footer
  page.tsx                landing page (hero, about, featured projects, contact)
  not-found.tsx           404 page
  globals.css             Tailwind entry + theme tokens
  projects/
    page.tsx              /projects — full project list
    [slug]/page.tsx       /projects/[slug] — project detail (prerendered)
components/
  site-header.tsx         sticky nav
  site-footer.tsx         footer with social links
  section.tsx             titled landing-page section wrapper
  project-card.tsx        project card used in both listings
lib/
  site.ts                 name, copy, email, skills, socials, nav items
  projects.ts             project data + getAllProjects / getFeatured / getProject
public/                   static assets
```

Content lives in `lib/`, not in the components — edit `lib/site.ts` and
`lib/projects.ts` to change what the site says. The project entries are dummy
placeholders.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — build for production
- `npm run start` — run the production build locally
- `npm run lint` — lint the codebase

## Roadmap

- [x] Replace default scaffold content in `app/page.tsx`
- [x] Add project/work sections
- [x] Add about & contact sections
- [x] Split into `components/` and `lib/` with routed project pages
- [ ] Fill in real bio and project details in `lib/`
- [ ] Set `site.url` in `lib/site.ts` to the deployed URL
- [ ] Deploy (e.g. Vercel)

## Deployment

This project is well suited for deployment on [Vercel](https://vercel.com/new), the creators of Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
