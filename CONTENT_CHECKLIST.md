# Portfolio content checklist

This preview preserves the Motion Gallery visual identity while adding a clearer overview, evidence-linked skills, background, résumé access, and structured project case studies. Missing information is labeled on the pages; it is not presented as a completed credential or result.

## Personal information to supply

- Exact degree or qualification, institution, graduation date, and relevant coursework.
- Employment, volunteer, or other relevant experience: organization, role, dates, responsibilities, and outcomes. Identify academic or team work separately.
- Earned certifications and verification links, or explicitly labeled training in progress. Remove this placeholder if not applicable.
- A reviewed résumé PDF. No download link is shown until a real file is available.
- Current learning goals and completed lab exercises.

Update the shared facts in `lib/profile.ts`; the background, skills, and résumé page components render the remaining placeholders.

## Project evidence to supply

- IT support lab: personal contribution, a completed incident ticket, diagnostic output, recovery verification, lessons, and a public repository if desired.
- MC Schematic: personal implementation details, an actual viewer screenshot, observed test results, a real-build comparison, and lessons. The current case study describes the offline viewer, not an implemented AI generator.
- Facial Emotion Recognition: final model metrics, evaluation setup, confusion matrix, and limitations you observed.
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
