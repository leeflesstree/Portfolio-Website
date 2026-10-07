export type Project = {
  slug: string;
  title: string;
  category: string;
  theme: "sage" | "clay" | "lilac";
  /** One-liner used on cards and in listings. */
  summary: string;
  /** Paragraphs rendered on the project detail page. */
  body: string[];
  stack: string[];
  year: number;
  /** Featured projects appear on the landing page. */
  featured: boolean;
  repo?: string;
  demo?: string;
};

/** Projects shown across the portfolio. */
export const projects: Project[] = [
  {
    slug: "rollroute",
    title: "RollRoute",
    category: "Product concept · Accessibility",
    theme: "sage",
    summary:
      "An accessible navigation app that makes curb cuts, step-free entrances, elevator outages, and surface conditions part of route planning.",
    body: [
      "RollRoute is a wheelchair-friendly navigation app built around a simple premise: the shortest route is not always an accessible one. It treats real mobility constraints as first-class routing data rather than an afterthought.",
      "The concept combines accessible route planning with crowdsourced accessibility pins, venue snapshots, and a Scout Mode heatmap that helps surface both well-documented and under-mapped areas.",
    ],
    stack: ["Accessible Navigation", "Routing", "Community Mapping"],
    year: 2026,
    featured: true,
  },
  {
    slug: "mc-schematic",
    title: "MC Schematic",
    category: "Minecraft tooling · In progress",
    theme: "sage",
    summary:
      "An offline Minecraft schematic viewer for exploring build layers, inspecting block states, and planning materials without uploading files.",
    body: [
      "MC Schematic makes a Minecraft build easier to inspect before placing the first block. The current browser-based viewer reads Sponge .schem versions 2 and 3 locally, decodes palettes and block states, and presents dimensions, material counts, and textured horizontal layers.",
      "A searchable material list and keyboard-accessible tile inspection connect each block to its local coordinates and properties. Bundled textures keep the viewer offline, with no account, external dependencies, or schematic uploads. Parser and texture-mapping tests cover the core decoding workflow.",
      "This is an in-progress project. The current implementation is a top-down material viewer, not a geometry-accurate 3D blueprint or an AI generator; 3D viewing and additional schematic formats are future work.",
    ],
    stack: ["JavaScript", "HTML", "CSS", "NBT Parsing", "Node.js Tests"],
    year: 2026,
    featured: true,
    repo: "https://github.com/leeflesstree/mc-schematic-starter",
  },
  {
    slug: "it-support-lab",
    title: "Small Office IT Support Lab",
    category: "IT support · Training lab",
    theme: "lilac",
    summary:
      "A local Windows training lab for practicing layered troubleshooting, access-log review, and verified file recovery across six simulated support incidents.",
    body: [
      "A fictional office inventory intranet provides a repeatable environment for exploring common support problems. A Python service runs only on the local computer, while PowerShell diagnostics separate name-resolution, TCP connectivity, and HTTP failures.",
      "Six incident exercises cover an incorrect hostname, wrong port, stopped service, missing page, denied-request log review, and damaged inventory data. The recovery workflow checks SHA-256 hashes, rejects modified backups, and preserves the replaced working file.",
      "The AI-assisted starter includes incident runbooks, reference validation, and ticket templates. It is presented as a learning project, not production support experience; supplied test results are separate from personal exercise completion. The lab does not implement enterprise identity management or authenticated access control.",
    ],
    stack: ["PowerShell", "Python", "TCP / HTTP", "SHA-256", "Incident Documentation"],
    year: 2026,
    featured: true,
  },
  {
    slug: "facial-emotion-recognition",
    title: "Facial Emotion Recognition",
    category: "Machine learning · Computer vision",
    theme: "lilac",
    summary:
      "A machine-learning project that recognizes emotions from facial-landmark geometry, comparing interpretable models with a neural-network benchmark.",
    body: [
      "Built with a three-person team, this project evaluates whether lightweight, landmark-based features can classify seven facial emotions without relying on raw-image classification or deep CNNs. The dataset contains more than 35,000 labeled 48×48 grayscale images.",
      "I implemented model code as well as facial-landmark extraction, feature engineering, and data cleanup. The pipeline detects faces, derives distances, angles, and ratios from 68 landmarks, standardizes the resulting features, and evaluates Logistic Regression, Decision Tree, and MLP models with cross-validation and classification metrics.",
    ],
    stack: ["Python", "scikit-learn", "OpenCV", "face_recognition"],
    year: 2025,
    featured: true,
    repo: "https://github.com/leeflesstree/cs471Final",
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio",
    category: "Web development · Interaction",
    theme: "clay",
    summary:
      "A responsive personal site for presenting selected work, experience, skills, and direct contact information.",
    body: [
      "I built this portfolio as a focused way to present my work and make the context behind each project easy to explore. It includes a landing page, a complete project list, and statically generated detail pages for individual projects.",
      "The site is built with Next.js App Router, React, TypeScript, and Tailwind CSS. Project and site copy live in typed data modules, which keeps content updates separate from the page components that render them.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    year: 2026,
    featured: true,
    repo: "https://github.com/leeflesstree/Portfolio-Website",
  },
];

/** Newest first. */
export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => b.year - a.year);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
