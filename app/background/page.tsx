import type { Metadata } from "next";
import Link from "next/link";
import { CredentialCard } from "@/components/credential-card";
import { profile, type BackgroundEntry } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Background",
  description: "Alexander Nicholas’s education, professional experience, CompTIA A+ certification, and hands-on infrastructure lab.",
};

function BackgroundItem({ entry }: { entry: BackgroundEntry }) {
  const metadata = [entry.period, entry.location].filter(Boolean).join(" · ");

  return (
    <article className="background-entry">
      <h3>{entry.title}</h3>
      {entry.organization ? <p className="background-entry-organization">{entry.organization}</p> : null}
      {metadata ? <p className="background-entry-meta">{metadata}</p> : null}
      <p>{entry.detail}</p>
      {entry.bullets?.length ? <ul className="background-entry-bullets">{entry.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul> : null}
      {entry.href ? <a className="text-link" href={entry.href} target="_blank" rel="noopener noreferrer">{entry.linkLabel ?? "Learn more"} <span aria-hidden="true">↗</span></a> : null}
    </article>
  );
}

export default function BackgroundPage() {
  return (
    <div className="profile-page">
      <header className="page-intro">
        <h1>Background</h1>
        <p>{profile.intro}</p>
      </header>
      <div className="background-grid">
        <section className="info-section" aria-labelledby="education-heading">
          <h2 className="section-title" id="education-heading">Education</h2>
          {profile.education.map(entry => <BackgroundItem key={entry.title} entry={entry} />)}
        </section>
        <section className="info-section" aria-labelledby="certifications-heading">
          <h2 className="section-title" id="certifications-heading">Certifications</h2>
          {profile.certifications.map(entry => <CredentialCard key={entry.title} entry={entry} />)}
        </section>
      </div>
      <section className="info-section" id="professional-experience" aria-labelledby="experience-heading">
        <h2 className="section-title" id="experience-heading">Experience</h2>
        <ol className="timeline">
          {profile.experience.map(entry => <li className="timeline-entry" key={`${entry.organization}-${entry.title}`}><BackgroundItem entry={entry} /></li>)}
        </ol>
      </section>
      <section className="info-section" id="home-lab" aria-labelledby="home-lab-heading">
        <h2 className="section-title" id="home-lab-heading">Home lab</h2>
        <div className="home-lab-panel"><BackgroundItem entry={profile.homeLab} /></div>
      </section>
      <section className="info-section" aria-labelledby="training-heading">
        <h2 className="section-title" id="training-heading">Currently studying</h2>
        <div className="credential-grid">{profile.training.map(entry => <CredentialCard key={entry.title} entry={entry} status="in-progress" />)}</div>
      </section>
      <section className="info-section" aria-labelledby="project-experience-heading">
        <h2 className="section-title" id="project-experience-heading">Projects</h2>
        <ol className="timeline">
          <li className="timeline-entry">
            <p className="background-entry-meta">2025 coursework, 2026 benchmark update</p>
            <h3>Facial Expression Classification</h3>
            <p>I implemented and tuned the coursework SVM and contributed feature engineering, visualizations, and reporting. I later refined a reproducible benchmark with Codex assistance.</p>
            <Link className="text-link" href="/projects/facial-emotion-recognition">Read the project</Link>
          </li>
          <li className="timeline-entry">
            <p className="background-entry-meta">2026</p>
            <h3>Personal Portfolio</h3>
            <p>A responsive Next.js site brings my work into one place, with typed content, reusable interfaces, and statically generated project pages.</p>
            <Link className="text-link" href="/projects/portfolio-website">Read the project</Link>
          </li>
        </ol>
      </section>
    </div>
  );
}
