import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectPreview } from "@/components/project-preview";
import { Placeholder } from "@/components/placeholder";
import { getCaseStudy, showPlaceholders } from "@/lib/project-case-studies";
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
  const study = getCaseStudy(slug);
  if (!project || !study) notFound();
  const hasEvidence = study.evidence.length > 0 || Boolean(project.demo);
  const showRole = !study.rolePending || showPlaceholders;
  const projects = getAllProjects();
  const nextProject = projects[(projects.findIndex(item => item.slug === slug) + 1) % projects.length];

  return (
    <article className="detail-page">
      <Link href="/projects" className="text-link"><span aria-hidden="true">←</span> All projects</Link>
      <header className="detail-heading">
        <p className="eyebrow">{project.category} / {project.year}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="detail-actions"><span className="status-badge">{study.status}</span>{project.repo ? <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">Source repository <span aria-hidden="true">↗</span></a> : null}{hasEvidence ? <a className="text-link" href="#evidence">View evidence <span aria-hidden="true">↓</span></a> : null}</div>
      </header>
      <div className="detail-preview" data-theme={project.theme}>
        <div className="project-art-window"><ProjectPreview project={project} /></div>
      </div>
      <p className="preview-caption">Illustrative project preview</p>
      <div className="detail-body">
        <aside className="detail-sidebar">
          <dl className="detail-facts">
            <dt>Year</dt><dd>{project.year}</dd>
            <dt>Focus</dt><dd>{study.focus}</dd>
            {showRole ? <><dt>Contribution</dt><dd>{study.role}{study.rolePending ? <span className="placeholder-label">Details pending</span> : null}</dd></> : null}
            <dt>Tools &amp; topics</dt><dd>{project.stack.join(" / ")}</dd>
          </dl>
          <nav className="case-nav" aria-label="On this project page"><p className="eyebrow">On this page</p><a href="#overview">Overview</a><a href="#environment">Environment</a>{study.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}{hasEvidence ? <a href="#evidence">Evidence &amp; links</a> : null}</nav>
        </aside>
        <div className="detail-prose">
          <section className="case-section" id="overview"><p className="eyebrow">The project</p><h2>Overview</h2><p>{project.body[0]}</p><div className="case-takeaway">{study.takeaway}</div></section>
          <section className="case-section" id="environment"><p className="eyebrow">The setup</p><h2>Environment</h2><dl className="environment-list">{study.environment.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
            {slug === "it-support-lab" ? <figure className="lab-topology"><p className="eyebrow">One Windows computer / Local training environment</p><ol className="topology-flow"><li><strong>Browser / PowerShell</strong><span>Open the intranet or run diagnostics</span></li><li><strong>127.0.0.1</strong><span>Loopback · TCP / HTTP</span></li><li><strong>Python intranet</strong><span>Local inventory service</span></li></ol><div className="topology-data"><span>Inventory CSV</span><span>Access logs</span><span>Backup &amp; SHA-256 restore</span></div><figcaption>Diagram of the supplied lab setup. All components run locally on one machine.</figcaption></figure> : null}
          </section>
          {study.sections.map(section => <section className="case-section" id={section.id} key={section.id}><h2>{section.title}</h2>{section.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.placeholder ? <Placeholder title="Details to add">{section.placeholder}</Placeholder> : null}</section>)}
          {hasEvidence ? <section className="case-section" id="evidence"><p className="eyebrow">Explore the work</p><h2>Evidence &amp; links</h2><div className="evidence-grid">{study.evidence.map(item => item.href ? <a className="evidence-link" key={item.title} href={item.href} target="_blank" rel="noreferrer"><h3>{item.title} <span aria-hidden="true">↗</span></h3><p>{item.description}</p></a> : <Placeholder key={item.title} title={item.title}>{item.description}</Placeholder>)}</div>{project.demo ? <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Try the live project <span aria-hidden="true">↗</span></a> : null}</section> : null}
        </div>
      </div>
      {nextProject && nextProject.slug !== project.slug && <Link className="next-project" href={`/projects/${nextProject.slug}`}><span><span className="eyebrow">Up next</span><strong>{nextProject.title}</strong></span><span aria-hidden="true">↗</span></Link>}
    </article>
  );
}
