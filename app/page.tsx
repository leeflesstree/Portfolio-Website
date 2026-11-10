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
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    description: site.tagline,
    alumniOf: { "@type": "CollegeOrUniversity", name: "California State University San Marcos" },
    sameAs: site.socials.map(social => social.href),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <h1 id="hero-heading">IT support, with a method</h1>
          <div className="hero-summary">
            {profile.homeSummary.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="hero-actions">
            <a className="pill-link primary-pill" href="#work">Explore my projects</a>
            <Link className="pill-link" href="/resume">Résumé</Link>
          </div>
          <div className="hero-socials">{site.socials.map(social => <a key={social.href} className="text-link" href={social.href} target="_blank" rel="noreferrer">{social.label}<span aria-hidden="true">↗</span></a>)}</div>
        </div>
        <Headshot />
      </section>
      <section className="overview-section" aria-labelledby="overview-heading">
        <div className="overview-heading"><h2 id="overview-heading" className="eyebrow">At a glance</h2><Link className="text-link" href="/background">The full background</Link></div>
        <div className="overview-grid">{profile.overview.map(fact => (
          <article className="overview-card" key={fact.label}>
            <p className="eyebrow">{fact.label}</p><h3>{fact.value}</h3><p className="overview-detail">{fact.detail}</p>
            {fact.href ? <a className="text-link overview-credential" href={fact.href} target="_blank" rel="noopener noreferrer">{fact.linkLabel ?? "View details"}<span aria-hidden="true">↗</span></a> : null}
            {fact.pending ? <span className="placeholder-label">Details placeholder</span> : null}
          </article>
        ))}</div>
      </section>
      <section className="work-section home-showcase" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <h2 id="work-heading">Selected projects</h2>
          <Link className="text-link" href="/projects">All projects</Link>
        </div>
        <div className="project-showcase">
          <div className="showcase-deck"><MotionGallery projects={galleryProjects} autoRotate /></div>
          <div className="showcase-highlights">
            <ul className="project-spotlights">
              {spotlights.map(project => <ProjectSpotlight key={project.slug} project={project} />)}
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Let’s solve the next ticket</h2>
        <div className="contact-bottom"><a className="pill-link primary-pill email-link" href={`mailto:${site.email}`}>{site.email}</a><p>Open to good conversations and new opportunities.</p></div>
      </section>
    </>
  );
}
