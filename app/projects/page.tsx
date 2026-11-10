import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "IT labs, software projects, machine learning, and the work behind each one.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  return (
    <div className="projects-page">
      <header className="page-intro">
        <h1>Projects</h1>
        <p>Practical IT learning, software tools, and machine learning. Explore the environment, decisions, and evidence behind each project.</p>
      </header>
      <ul className="project-grid">
        {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
      </ul>
    </div>
  );
}
