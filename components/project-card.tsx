import Link from "next/link";
import type { Project } from "@/lib/projects";
import { caseStudies } from "@/lib/project-case-studies";
import { ProjectPreview } from "@/components/project-preview";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const study = caseStudies[project.slug];
  return (
    <li>
      <Link href={`/projects/${project.slug}`} className="project-link" aria-label={`Explore ${project.title}`}>
        <div className="project-visual" data-theme={project.theme} aria-hidden="true">
          <span className="project-number">{String(index + 1).padStart(2, "0")} / {project.year}</span>
          <div className="project-visual-caption"><p className="eyebrow">{project.category}</p><p className="visual-display-text">{project.slug === "rollroute" ? <>A route for<br /><em>everyone.</em></> : project.slug === "it-support-lab" ? <>Find the cause.<br />Verify the <em>fix.</em></> : project.title}</p><p>{study?.takeaway ?? project.summary}</p></div>
          <div className="project-art-window"><ProjectPreview project={project} /></div>
        </div>
        <div className="project-meta"><div><div className="project-meta-top"><p className="eyebrow">{project.category} / {project.year}</p>{study ? <span className="status-badge">{study.status}</span> : null}</div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><p className="project-takeaway">{study?.takeaway}</p><ul className="project-tags" aria-label="Tools and topics">{project.stack.slice(0, 3).map(tool => <li key={tool}>{tool}</li>)}</ul></div><span className="project-arrow" aria-hidden="true">↗</span></div>
      </Link>
    </li>
  );
}
