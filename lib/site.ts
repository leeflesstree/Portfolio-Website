/**
 * Central site config. Edit this file to change the name, copy, and links
 * that appear across the site.
 */
export const site = {
  name: "Alexander Nicholas",
  role: "Software Developer",
  /** Shown under the hero heading. */
  tagline:
    "I build web applications with a focus on clean interfaces and maintainable code. Currently looking for my next opportunity.",
  /** Shown in the About section. */
  about:
    "I’m Alexander, a software developer who cares about how things work and how they feel to use. My work spans web applications, accessible navigation concepts, and machine learning. I enjoy turning a complex problem into something clear, useful, and carefully made.",
  email: "alexandersnicholas0203@gmail.com",
  /** Used for metadata and canonical URLs. */
  url: "https://nicholas-alexander-portfolio.biggestnumber090.chatgpt.site",
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
  { label: "Work", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;
