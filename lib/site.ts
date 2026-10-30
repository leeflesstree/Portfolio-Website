/**
 * Central site config. Edit this file to change the name, copy, and links
 * that appear across the site.
 */
export const site = {
  name: "Alexander Nicholas",
  role: "IT Support Candidate",
  /** Used as the site description in metadata and link previews. */
  tagline:
    "CompTIA A+ certified computer science graduate pursuing IT support and help desk roles, with hands-on systems and networking lab experience.",
  email: "alexandersnicholas0203@gmail.com",
  /** Used for metadata and canonical URLs. */
  url: "https://nicholas-alexander-portfolio.biggestnumber090.chatgpt.site",
  socials: [
    { label: "GitHub", href: "https://github.com/leeflesstree" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asnicholas/" },
  ],
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Background", href: "/background" },
  { label: "Résumé", href: "/resume" },
  { label: "Contact", href: "/#contact" },
] as const;
