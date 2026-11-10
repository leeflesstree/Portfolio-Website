import Link from "next/link";
import type { Project } from "@/lib/projects";
import { caseStudies } from "@/lib/project-case-studies";
import { ProjectPreview } from "@/components/project-preview";

export function ProjectCard({ project }: { project: Project }) {
  const study = caseStudies[project.slug];
  return (
    <li>
      <Link href={`/projects/${project.slug}`} className="project-link" aria-label={`Explore ${project.title}`}>
        <div className="project-visual" data-theme={project.theme} aria-hidden="true">
          <p className="project-visual-caption">{study?.takeaway ?? project.summary}</p>
          <div className="project-art-window"><ProjectPreview project={project} /></div>
        </div>
        <div className="project-meta"><p className="eyebrow">{project.category} / {project.year}</p><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><p className="project-tags">{project.stack.slice(0, 3).join(", ")}</p></div>
      </Link>
    </li>
  );
}
