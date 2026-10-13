/**
 * Central site config. Edit this file to change the name, copy, and links
 * that appear across the site.
 */
export const site = {
  name: "Alexander Nicholas",
  role: "Software & IT projects",
  /** Shown under the hero heading. */
  tagline:
    "I build software and explore how systems work through practical IT labs, troubleshooting, and carefully documented projects.",
  /** Shown in the About section. */
  about:
    "I’m Alexander. I enjoy turning a complex problem into something clear, useful, and carefully made. My projects span software development, machine learning, and practical IT learning, with a growing interest in networking and security.",
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
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Background", href: "/background" },
  { label: "Résumé", href: "/resume" },
  { label: "Contact", href: "/#contact" },
] as const;
