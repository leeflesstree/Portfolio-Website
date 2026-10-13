import type { Metadata } from "next";
import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Background",
  description: "The education, project experience, and interests behind Alexander Nicholas’s work.",
};

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
              <h2 className="section-title" id="education-heading">Education & <em>learning.</em></h2>
            </div>
          </div>
          {profile.education.map((entry) => <Placeholder key={entry.title} title={entry.title}>{entry.detail}</Placeholder>)}
          {profile.certifications.map((entry) => <Placeholder key={entry.title} title={entry.title}>{entry.detail}</Placeholder>)}
        </section>
        <section className="info-section" aria-labelledby="experience-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Experience in context</p>
              <h2 className="section-title" id="experience-heading">Work & <em>contribution.</em></h2>
            </div>
          </div>
          {profile.experience.map((entry) => <Placeholder key={entry.title} title={entry.title}>{entry.detail}</Placeholder>)}
        </section>
      </div>
      <section className="info-section" aria-labelledby="project-experience-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / A starting point</p>
            <h2 className="section-title" id="project-experience-heading">Experience through <em>projects.</em></h2>
          </div>
        </div>
        <ol className="timeline">
          <li className="timeline-entry">
            <p className="eyebrow">2025 / Three-person team project</p>
            <h3>Facial Emotion Recognition</h3>
            <p>I contributed model code, facial-landmark extraction, feature engineering, and data cleanup to a comparison of emotion-classification approaches.</p>
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
