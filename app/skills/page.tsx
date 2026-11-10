import type { Metadata } from "next";
import Link from "next/link";
import { CredentialCard } from "@/components/credential-card";
import { SkillGroups } from "@/components/skill-groups";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Skills",
  description: "Alexander Nicholas’s technical skills, CompTIA A+ certification, current study, and the work behind them.",
};

export default function SkillsPage() {
  return (
    <div className="profile-page">
      <header className="page-intro">
        <h1>Skills</h1>
        <p>Professional experience, a personal infrastructure lab, and software projects give these skills their context.</p>
      </header>
      <section className="info-section" aria-labelledby="credentials-heading">
        <h2 className="section-title" id="credentials-heading">Certification</h2>
        <div className="credential-grid">{profile.certifications.map(entry => <CredentialCard key={entry.title} entry={entry} />)}</div>
      </section>
      <section className="info-section" aria-labelledby="skills-heading">
        <div className="section-heading">
          <h2 className="section-title" id="skills-heading">Skills in context</h2>
          <Link className="text-link" href="/projects">Explore the projects</Link>
        </div>
        <SkillGroups />
      </section>
      <section className="info-section" aria-labelledby="learning-heading">
        <h2 className="section-title" id="learning-heading">Currently studying</h2>
        <div className="credential-grid">{profile.training.map(entry => <CredentialCard key={entry.title} entry={entry} status="in-progress" />)}</div>
      </section>
    </div>
  );
}
