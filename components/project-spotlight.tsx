import Link from "next/link";
import { ProjectPreview } from "@/components/project-preview";
import { caseStudies } from "@/lib/project-case-studies";
import type { Project } from "@/lib/projects";

export function ProjectSpotlight({ project, index = 0 }: { project: Project; index?: number }) {
  const study = caseStudies[project.slug];

  return (
    <li className="spotlight-card">
      <Link className="spotlight-link" href={`/projects/${project.slug}`}>
        <div className="spotlight-art" data-theme={project.theme} aria-hidden="true">
          <ProjectPreview project={project} />
        </div>
        <div className="spotlight-copy">
          <p className="eyebrow">{String(index + 1).padStart(2, "0")} / {project.category}</p>
          <h3>{project.title}</h3>
          {study ? <span className="status-badge">{study.status}</span> : null}
          <p className="spotlight-summary">{project.summary}</p>
          <span className="spotlight-action">Explore project <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </li>
  );
}
