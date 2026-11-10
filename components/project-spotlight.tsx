import Link from "next/link";
import { ProjectPreview } from "@/components/project-preview";
import type { Project } from "@/lib/projects";

export function ProjectSpotlight({ project }: { project: Project }) {
  return (
    <li className="spotlight-card">
      <Link className="spotlight-link" href={`/projects/${project.slug}`}>
        <div className="spotlight-art" data-theme={project.theme} aria-hidden="true">
          <ProjectPreview project={project} />
        </div>
        <div className="spotlight-copy">
          <p className="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="spotlight-summary">{project.summary}</p>
          <span className="spotlight-action">Explore project</span>
        </div>
      </Link>
    </li>
  );
}
