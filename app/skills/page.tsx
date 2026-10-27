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
        <p className="eyebrow">Tools are useful. Context matters.</p>
        <h1>Skills, with <em>substance.</em></h1>
        <p>Professional experience, a personal infrastructure lab, and software projects give these skills their context.</p>
      </header>
      <section className="info-section" aria-labelledby="credentials-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Earned certification</p>
            <h2 className="section-title" id="credentials-heading">A verified <em>foundation.</em></h2>
          </div>
        </div>
        <div className="credential-grid">{profile.certifications.map(entry => <CredentialCard key={entry.title} entry={entry} />)}</div>
      </section>
      <section className="info-section" aria-labelledby="skills-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Connected to the work</p>
            <h2 className="section-title" id="skills-heading">Practice with <em>context.</em></h2>
          </div>
          <Link className="text-link" href="/projects">Explore the projects <span aria-hidden="true">↗</span></Link>
        </div>
        <SkillGroups />
      </section>
      <section className="info-section" aria-labelledby="learning-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Study in progress</p>
            <h2 className="section-title" id="learning-heading">The next <em>layer.</em></h2>
          </div>
        </div>
        <div className="credential-grid">{profile.training.map(entry => <CredentialCard key={entry.title} entry={entry} status="in-progress" />)}</div>
        <h3 className="learning-goals-heading">Current learning goals</h3>
        <ul className="learning-goals">{profile.learningGoals.map(goal => <li key={goal}>{goal}</li>)}</ul>
      </section>
    </div>
  );
}
