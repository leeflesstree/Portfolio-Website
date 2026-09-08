export type Project = {
  slug: string;
  title: string;
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

/** Dummy content — replace each entry with a real project. */
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    summary:
      "A short description of what this project does, the problem it solves, and who it is for.",
    body: [
      "Describe the problem you set out to solve and why it mattered.",
      "Walk through the approach you took, the tradeoffs you weighed, and anything you would do differently now.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    year: 2026,
    featured: true,
    repo: "https://github.com/leeflesstree/project-one",
    demo: "https://example.com/project-one",
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary:
      "A short description of what this project does, the problem it solves, and who it is for.",
    body: [
      "Describe the problem you set out to solve and why it mattered.",
      "Walk through the approach you took, the tradeoffs you weighed, and anything you would do differently now.",
    ],
    stack: ["React", "Node.js", "Postgres"],
    year: 2025,
    featured: true,
    repo: "https://github.com/leeflesstree/project-two",
  },
  {
    slug: "project-three",
    title: "Project Three",
    summary:
      "A short description of what this project does, the problem it solves, and who it is for.",
    body: [
      "Describe the problem you set out to solve and why it mattered.",
      "Walk through the approach you took, the tradeoffs you weighed, and anything you would do differently now.",
    ],
    stack: ["Python", "FastAPI", "Docker"],
    year: 2025,
    featured: true,
    repo: "https://github.com/leeflesstree/project-three",
  },
  {
    slug: "project-four",
    title: "Project Four",
    summary:
      "An older project, listed on the projects page but not featured on the landing page.",
    body: [
      "Describe the problem you set out to solve and why it mattered.",
      "Walk through the approach you took, the tradeoffs you weighed, and anything you would do differently now.",
    ],
    stack: ["JavaScript", "Express"],
    year: 2024,
    featured: false,
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
