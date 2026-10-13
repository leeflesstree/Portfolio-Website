import Link from "next/link";
import { MotionGallery } from "@/components/motion-gallery";
import { ProjectCard } from "@/components/project-card";
import { SkillGroups } from "@/components/skill-groups";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";
import { profile } from "@/lib/profile";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const more = getAllProjects().filter(project => !featured.some(item => item.slug === project.slug));
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> {site.name} / {site.role}</p>
          <h1 id="hero-heading">Built to<br />be <em>felt.</em></h1>
          <p className="hero-description">{site.tagline}</p>
          <div className="hero-actions">
            <a className="pill-link primary-pill" href="#work">Explore my projects <span aria-hidden="true">↘</span></a>
            <Link className="pill-link" href="/resume">Résumé <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-socials">{site.socials.map(social => <a key={social.href} className="text-link" href={social.href} target="_blank" rel="noreferrer">{social.label}<span aria-hidden="true">↗</span></a>)}</div>
        </div>
        <MotionGallery projects={featured} />
      </section>
      <section className="overview-section" aria-labelledby="overview-heading">
        <div className="overview-heading"><h2 id="overview-heading" className="eyebrow">At a glance</h2><Link className="text-link" href="/background">The full background <span aria-hidden="true">↗</span></Link></div>
        <div className="overview-grid">{profile.overview.map((fact, index) => (
          <article className="overview-card" data-tone={index % 3} key={fact.label}>
            <p className="eyebrow">{fact.label}</p><h3>{fact.value}</h3><p className="overview-detail">{fact.detail}</p>
            {fact.pending ? <span className="placeholder-label">Details placeholder</span> : null}
          </article>
        ))}</div>
      </section>
      <section className="work-section" id="work" aria-labelledby="work-heading">
        <div className="section-heading"><div><p className="eyebrow">01 / Selected projects</p><h2 id="work-heading">Ideas, put<br />into <em>practice.</em></h2></div><Link className="text-link" href="/projects">All projects <span aria-hidden="true">↗</span></Link></div>
        <ul className="project-grid">{featured.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</ul>
        <div className="more-work"><p className="eyebrow">Also exploring</p>{more.map(project => <Link key={project.slug} href={`/projects/${project.slug}`}><span><strong>{project.title}</strong><span>{project.category}</span></span><span aria-hidden="true">↗</span></Link>)}</div>
      </section>
      <section className="skills-section" aria-labelledby="skills-heading">
        <div className="section-heading"><div><p className="eyebrow">02 / Skills in context</p><h2 id="skills-heading">The tools.<br />The <em>thinking.</em></h2></div><Link className="text-link" href="/skills">Explore the skills <span aria-hidden="true">↗</span></Link></div>
        <SkillGroups compact />
      </section>
      <section className="about-section" id="about" aria-labelledby="about-heading">
        <div><p className="eyebrow">03 / A little background</p><h2 id="about-heading">Curiosity.<br />Care.<br /><em>A little craft.</em></h2></div>
        <div className="about-copy"><p className="about-intro">Good work starts with<br className="desktop-break" /> a better question.</p><p>{site.about}</p><p className="availability"><span className="status-dot" /> Open to early-career opportunities.</p><Link className="text-link" href="/background">Education &amp; experience <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <p className="eyebrow">04 / Let’s connect</p>
        <a className="contact-title" href={`mailto:${site.email}`}><h2 id="contact-heading">Let’s make<br />something <em>matter.</em></h2><span className="contact-arrow" aria-hidden="true">↗</span></a>
        <div className="contact-bottom"><a className="text-link email-link" href={`mailto:${site.email}`}>{site.email}</a><p>Open to good conversations and new opportunities.</p></div>
      </section>
    </>
  );
}
