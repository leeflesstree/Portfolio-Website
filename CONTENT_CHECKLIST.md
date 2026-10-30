# Portfolio content checklist

This preview preserves the Motion Gallery visual identity while adding a clearer overview, evidence-linked skills, background, résumé access, and structured project case studies. Missing information is labeled on the pages; it is not presented as a completed credential or result.

The homepage is now intentionally limited to the introduction and large headshot, at-a-glance facts, one compact project showcase, and contact information. Skills, background, and the full project index remain available through the top navigation, including the new Home link. Edit the expanded introduction in `profile.homeSummary`.

The project deck cycles through all projects; IT Support Lab and MC Schematic are the two standalone previews. Rotation can be paused, stops after keyboard interaction until explicitly resumed, and respects reduced-motion preferences.

## Personal profile completed

- Supplied headshot added to the homepage without changing the image.
- B.S. Computer Science, California State University San Marcos, 2021–2025; GPA 3.68, Dean’s List, and relevant coursework.
- CSUSM Instructional Student Assistant and Pfizer Quality Assurance Intern, with dates and sourced responsibilities.
- CompTIA A+ earned August 20, 2026, valid through August 20, 2029; public Credly link supplied by Alexander. Candidate ID and certificate verification code are not published.
- CompTIA Network+ and Security+ are labeled study in progress, not earned credentials.
- Updated résumé copy is available as a PDF download. The original supplied PDF is unchanged. The download retains the supplied phone number and city; the homepage continues to use email rather than a phone contact.
- Career direction: help desk, technical support, and IT support, developing toward networking and cybersecurity.
- Personal Windows Server/Linux/VLAN/Raspberry Pi home lab is documented separately from the single-computer Small Office IT Support Lab starter.

Update shared profile facts in `lib/profile.ts`. Education years and degree wording were cross-checked against the exact public LinkedIn profile; employment detail comes from the supplied résumé. Certification dates come from the supplied certificate PDF. Direct live retrieval of the Credly page was unavailable; the site uses the user-supplied public verification URL.

## Project evidence status

- IT support lab: personal contribution, a completed incident ticket, diagnostic output, recovery verification, lessons, and a public repository if desired.
- MC Schematic: personal implementation details, an actual viewer screenshot, observed test results, a real-build comparison, and lessons. The current case study describes the offline viewer, not an implemented AI generator.
- Facial Expression Classification: the reproducible benchmark branch now supplies setup, contributions, recorded results, and limitations. Evidence links are pinned to commit `7867d6666221199c836da16a188e181b93cc846e`; no benchmark code was executed during this content update. The résumé project section was updated with Alexander’s approval, including the distinction between image and inferred-group evaluation.
- RollRoute: personal role, concept screens, research notes, and any completed prototype validation.
- Portfolio: personal redesign reflections and feedback. Automated implementation checks are documented separately from personal reflections.

Update these in `lib/project-case-studies.ts`. Entries without evidence URLs render as labeled placeholders, not fake links.

## Before sharing evidence

Review documents, screenshots, tickets, and logs for secrets, account identifiers, private paths, employer or customer information, and unnecessary personal information. Publish only material you own or are permitted to share.

## Local preview verification — 2026-10-12

- Production build and ESLint passed.
- All ten content routes returned successfully at 1440, 820, 390, and 320 pixels, with one page heading and no horizontal overflow.
- Gallery selection, depth toggle, main navigation, and evidence anchors passed browser checks.
- Reduced-motion behavior and keyboard skip-to-content focus passed.
- No browser runtime errors or failed page/asset responses occurred in the final run.
- Desktop, mobile, and dark-mode screenshots were reviewed. This is not a full accessibility audit.

These checks used the local static export. A temporary preview server handled this Next.js version’s Windows-specific segment-file paths; production deployment was not verified or changed during this pass.

## Homepage consolidation verification — 2026-10-13

- Production build passed after the layout and carousel-control changes.
- Homepage checked at seven widths from 320 to 1440 pixels in light and dark modes; all five slide previews fit without clipping or horizontal overflow.
- Nine other pages checked at four widths; Home navigation passed.
- Timer-driven cycling, hover pause, persistent keyboard pause, explicit keyboard/mouse resume, offscreen pause, reduced motion, and manual controls passed browser checks.
- No browser runtime errors or failed page/asset responses occurred. These are scoped checks, not a full accessibility audit or production deployment verification.

## Personal profile and benchmark update verification — 2026-10-27

- Production build passed with the supplied headshot, actual education/employment/credential data, and revised benchmark case study.
- 48 route/viewport/theme checks passed across the homepage, profile pages, project index, and benchmark case study at 1440, 820, 390, and 320 pixels in light/dark mode.
- All five gallery previews fit; current public profile pages have no personal-information placeholders.
- Résumé HTTP response and browser download match the reviewed one-page PDF copy by SHA-256. Original user files were not changed.
- HTML source excludes the résumé phone number, certificate candidate ID, certificate verification code, and private source paths. The certificate PDF is not in public assets.
- No browser runtime errors or failed local page/asset responses occurred. External credential links were checked for correct destinations, not independently fetched from the issuer.

## Quick-wins update verification — 2026-10-29

- Placeholders (pending sections, pending evidence, and pending contribution rows) appear in `npm run dev` and are omitted from the production build; set `NEXT_PUBLIC_SHOW_PLACEHOLDERS=true` to include them. Built project pages contain no placeholder labels.
- Projects now follow the array order in `lib/projects.ts` (IT Support Lab, Facial Expression Classification, MC Schematic, Personal Portfolio, RollRoute) instead of year.
- Headshot served as an 860 px WebP (about 41 KB) in place of the 2 MB PNG. Added `icon.svg`, `sitemap.xml`, `robots.txt`, a static Open Graph image, and Person structured data.
- Production build and ESLint passed. Homepage and project index checked at desktop and 375 px with no horizontal overflow; current-page navigation state confirmed.
- Automated text-contrast scan of ten routes found no pairs below WCAG AA in light or dark mode. This is not a full accessibility audit; production deployment was not changed.
