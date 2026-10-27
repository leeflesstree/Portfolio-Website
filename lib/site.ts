/**
 * Central site config. Edit this file to change the name, copy, and links
 * that appear across the site.
 */
export const site = {
  name: "Alexander Nicholas",
  role: "IT Support Candidate",
  /** Shown under the hero heading. */
  tagline:
    "CompTIA A+ certified computer science graduate pursuing IT support and help desk roles, with hands-on systems and networking lab experience.",
  /** Shown in the About section. */
  about:
    "I’m Alexander, a computer science graduate and CompTIA A+ certified IT support candidate. My background combines quality assurance at Pfizer, instructional support at CSUSM, and a personal lab with Windows Server, Linux, virtual machines, and VLAN segmentation. I’m pursuing support and help desk opportunities while developing a foundation in networking and cybersecurity.",
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
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Background", href: "/background" },
  { label: "Résumé", href: "/resume" },
  { label: "Contact", href: "/#contact" },
] as const;
