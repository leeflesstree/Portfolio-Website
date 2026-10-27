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
        <p className="eyebrow">The person behind the projects</p>
        <h1>A little <em>background.</em></h1>
        <p>{profile.intro}</p>
      </header>
      <div className="background-grid">
        <section className="info-section" aria-labelledby="education-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Foundations</p>
              <h2 className="section-title" id="education-heading">The <em>foundation.</em></h2>
            </div>
          </div>
          {profile.education.map(entry => <BackgroundItem key={entry.title} entry={entry} />)}
        </section>
        <section className="info-section" aria-labelledby="certifications-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Earned credentials</p>
              <h2 className="section-title" id="certifications-heading">Certified <em>fundamentals.</em></h2>
            </div>
          </div>
          {profile.certifications.map(entry => <CredentialCard key={entry.title} entry={entry} />)}
        </section>
      </div>
      <section className="info-section" id="professional-experience" aria-labelledby="experience-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Experience in context</p>
            <h2 className="section-title" id="experience-heading">Work & <em>contribution.</em></h2>
          </div>
        </div>
        <ol className="timeline">
          {profile.experience.map(entry => <li className="timeline-entry" key={`${entry.organization}-${entry.title}`}><BackgroundItem entry={entry} /></li>)}
        </ol>
      </section>
      <section className="info-section" id="home-lab" aria-labelledby="home-lab-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / Personal home lab</p>
            <h2 className="section-title" id="home-lab-heading">Hands-on <em>infrastructure.</em></h2>
          </div>
        </div>
        <div className="home-lab-panel"><BackgroundItem entry={profile.homeLab} /></div>
      </section>
      <section className="info-section" aria-labelledby="training-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / Current study</p>
            <h2 className="section-title" id="training-heading">The next <em>step.</em></h2>
          </div>
        </div>
        <div className="credential-grid">{profile.training.map(entry => <CredentialCard key={entry.title} entry={entry} status="in-progress" />)}</div>
      </section>
      <section className="info-section" aria-labelledby="project-experience-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">06 / Building through practice</p>
            <h2 className="section-title" id="project-experience-heading">Experience through <em>projects.</em></h2>
          </div>
        </div>
        <ol className="timeline">
          <li className="timeline-entry">
            <p className="eyebrow">2025 coursework / 2026 benchmark update</p>
            <h3>Facial Expression Classification</h3>
            <p>I implemented and tuned the coursework SVM and contributed feature engineering, visualizations, and reporting. I later refined a reproducible benchmark with Codex assistance.</p>
            <Link className="text-link" href="/projects/facial-emotion-recognition">Read the project <span aria-hidden="true">↗</span></Link>
          </li>
          <li className="timeline-entry">
            <p className="eyebrow">2026 / Software project</p>
            <h3>Personal Portfolio</h3>
            <p>A responsive Next.js site brings my work into one place, with typed content, reusable interfaces, and statically generated project pages.</p>
            <Link className="text-link" href="/projects/portfolio-website">Read the project <span aria-hidden="true">↗</span></Link>
          </li>
        </ol>
      </section>
    </div>
  );
}
