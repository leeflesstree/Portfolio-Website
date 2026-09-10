import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software projects, experiments, and the thinking behind them.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  return (
    <div className="projects-page">
      <header className="page-intro">
        <p className="eyebrow">A collection of ideas, made real</p>
        <h1>The <em>work.</em></h1>
        <p>Web experiences, machine learning, and ideas for a more accessible world. Here’s what I’ve been working on.</p>
      </header>
      <ul className="project-grid">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </ul>
    </div>
  );
}
