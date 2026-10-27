import Link from "next/link";
import { MotionGallery } from "@/components/motion-gallery";
import { ProjectSpotlight } from "@/components/project-spotlight";
import { Headshot } from "@/components/headshot";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";
import { profile } from "@/lib/profile";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const spotlights = featured.slice(0, 2);
  const galleryProjects = [
    ...featured.slice(2),
    ...getAllProjects().filter(project => !featured.some(item => item.slug === project.slug)),
    ...spotlights,
  ];
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> {site.name} / {site.role}</p>
          <h1 id="hero-heading">Built to<br />be <em>felt.</em></h1>
          <div className="hero-summary">
            {profile.homeSummary.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="hero-actions">
            <a className="pill-link primary-pill" href="#work">Explore my projects <span aria-hidden="true">↗</span></a>
            <Link className="pill-link" href="/resume">Résumé <span aria-hidden="true">↘</span></Link>
          </div>
          <div className="hero-socials">{site.socials.map(social => <a key={social.href} className="text-link" href={social.href} target="_blank" rel="noreferrer">{social.label}<span aria-hidden="true">↗</span></a>)}</div>
        </div>
        <Headshot />
      </section>
      <section className="overview-section" aria-labelledby="overview-heading">
        <div className="overview-heading"><h2 id="overview-heading" className="eyebrow">At a glance</h2><Link className="text-link" href="/background">The full background <span aria-hidden="true">↗</span></Link></div>
        <div className="overview-grid">{profile.overview.map((fact, index) => (
          <article className="overview-card" data-tone={index % 3} key={fact.label}>
            <p className="eyebrow">{fact.label}</p><h3>{fact.value}</h3><p className="overview-detail">{fact.detail}</p>
            {fact.href ? <a className="text-link overview-credential" href={fact.href} target="_blank" rel="noopener noreferrer">{fact.linkLabel ?? "View details"}<span aria-hidden="true">↗</span></a> : null}
            {fact.pending ? <span className="placeholder-label">Details placeholder</span> : null}
          </article>
        ))}</div>
      </section>
      <section className="work-section home-showcase" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <div><p className="eyebrow">01 / A look at the work</p><h2 id="work-heading">Projects, in <em>motion.</em></h2></div>
          <Link className="text-link" href="/projects">All projects <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="project-showcase">
          <div className="showcase-deck"><MotionGallery projects={galleryProjects} autoRotate /></div>
          <div className="showcase-highlights">
            <p className="eyebrow">Two to start with</p>
            <ul className="project-spotlights">
              {spotlights.map((project, index) => <ProjectSpotlight key={project.slug} project={project} index={index} />)}
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <p className="eyebrow">02 / Let’s connect</p>
        <a className="contact-title" href={`mailto:${site.email}`}><h2 id="contact-heading">Let’s make<br />something <em>matter.</em></h2><span className="contact-arrow" aria-hidden="true">↗</span></a>
        <div className="contact-bottom"><a className="text-link email-link" href={`mailto:${site.email}`}>{site.email}</a><p>Open to good conversations and new opportunities.</p></div>
      </section>
    </>
  );
}
