import Link from "next/link";
import { MotionGallery } from "@/components/motion-gallery";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProjects();
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> {site.role} / Selected work</p>
          <h1 id="hero-heading">Built to<br />be <em>felt.</em></h1>
          <p className="hero-description">Thoughtful software.<br />Interfaces with a little more life.</p>
          <a className="pill-link" href="#work">Discover my work <span aria-hidden="true">↘</span></a>
        </div>
        <MotionGallery projects={featured} />
      </section>
      <div className="hero-footnote"><p className="eyebrow">An eye for the details. A mind for the system.</p><a href="#work" className="scroll-cue">Scroll to explore <span aria-hidden="true">↓</span></a></div>
      <section className="work-section" id="work" aria-labelledby="work-heading">
        <div className="section-heading"><div><p className="eyebrow">01 / A few things I’ve made</p><h2 id="work-heading">Selected <em>work.</em></h2></div><Link className="text-link" href="/projects">All projects <span aria-hidden="true">↗</span></Link></div>
        <ul className="project-grid">{featured.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</ul>
      </section>
      <section className="about-section" id="about" aria-labelledby="about-heading">
        <div><p className="eyebrow">02 / The person behind the pixels</p><h2 id="about-heading">Curiosity.<br />Care.<br /><em>A little craft.</em></h2></div>
        <div className="about-copy"><p className="about-intro">Good software starts with<br className="desktop-break" /> a better question.</p><p>{site.about}</p><p className="availability"><span className="status-dot" /> Looking for my next opportunity.</p><div className="skills-block"><p className="eyebrow">Tools I work with</p><ul className="skills-list">{site.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div></div>
      </section>
      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <p className="eyebrow">03 / Something in mind?</p>
        <a className="contact-title" href={`mailto:${site.email}`}><h2 id="contact-heading">Let’s make<br />something <em>matter.</em></h2><span className="contact-arrow" aria-hidden="true">↗</span></a>
        <div className="contact-bottom"><a className="text-link email-link" href={`mailto:${site.email}`}>{site.email}</a><p>Open to good conversations and new opportunities.</p></div>
      </section>
    </>
  );
}
