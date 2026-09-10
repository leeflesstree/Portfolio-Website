import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectPreview } from "@/components/project-preview";
import { getAllProjects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary } : { title: "Project not found" };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const projects = getAllProjects();
  const nextProject = projects[(projects.findIndex(item => item.slug === slug) + 1) % projects.length];

  return (
    <article className="detail-page">
      <Link href="/projects" className="text-link"><span aria-hidden="true">←</span> All projects</Link>
      <header className="detail-heading">
        <p className="eyebrow">{project.category} / {project.year}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>
      <div className="detail-preview" data-theme={project.theme}>
        <div className="project-art-window"><ProjectPreview project={project} /></div>
      </div>
      <div className="detail-body">
        <dl className="detail-facts">
          <dt>Year</dt><dd>{project.year}</dd>
          <dt>Focus</dt><dd>{project.category}</dd>
          <dt>Tools &amp; topics</dt><dd>{project.stack.join(" / ")}</dd>
        </dl>
        <div className="detail-prose">
          <h2>The thinking behind it.</h2>
          {project.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {(project.repo || project.demo) && <ul className="project-external-links">
            {project.repo && <li><a className="text-link" href={project.repo} target="_blank" rel="noreferrer">Explore the source <span aria-hidden="true">↗</span></a></li>}
            {project.demo && <li><a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Try the live project <span aria-hidden="true">↗</span></a></li>}
          </ul>}
        </div>
      </div>
      {nextProject && nextProject.slug !== project.slug && <Link className="next-project" href={`/projects/${nextProject.slug}`}><span><span className="eyebrow">Up next</span><strong>{nextProject.title}</strong></span><span aria-hidden="true">↗</span></Link>}
    </article>
  );
}
