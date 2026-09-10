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
