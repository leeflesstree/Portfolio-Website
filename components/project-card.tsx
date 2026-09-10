import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectPreview } from "@/components/project-preview";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <li>
      <Link href={`/projects/${project.slug}`} className="project-link" aria-label={`Explore ${project.title}`}>
        <div className="project-visual" data-theme={project.theme} aria-hidden="true">
          <span className="project-number">{String(index + 1).padStart(2, "0")} / {project.year}</span>
          <div className="project-visual-caption"><p className="eyebrow">{project.category}</p><p className="visual-display-text">{project.slug === "rollroute" ? <>A route for<br /><em>everyone.</em></> : project.title}</p><p>{project.slug === "rollroute" ? "Because the shortest path isn’t always the right one." : project.summary}</p></div>
          <div className="project-art-window"><ProjectPreview project={project} /></div>
        </div>
        <div className="project-meta"><div><p className="eyebrow">{project.category} / {project.year}</p><h3>{project.title}</h3><p className="project-summary">{project.summary}</p></div><span className="project-arrow" aria-hidden="true">↗</span></div>
      </Link>
    </li>
  );
}
