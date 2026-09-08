/**
 * Central site config. Edit this file to change the name, copy, and links
 * that appear across the site.
 */
export const site = {
  name: "Nicholas Alexander",
  role: "Software Developer",
  /** Shown under the hero heading. */
  tagline:
    "I build web applications with a focus on clean interfaces and maintainable code. Currently looking for my next opportunity.",
  /** Shown in the About section. TODO: replace with your own story. */
  about:
    "A couple of sentences about your background, what you enjoy working on, and what you are looking for next. Replace this with your own story.",
  email: "nicholas.alexander.us@gmail.com",
  /** Used for metadata; update once the site is deployed. */
  url: "https://example.com",
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/leeflesstree" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asnicholas/" },
  ],
} as const;

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
] as const;
