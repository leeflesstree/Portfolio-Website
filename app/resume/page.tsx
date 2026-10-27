import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/profile";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Download Alexander Nicholas’s résumé and explore his IT support, systems, networking, and software background.",
};

export default function ResumePage() {
  return (
    <div className="profile-page">
      <header className="page-intro">
        <p className="eyebrow">IT support · Systems & networking</p>
        <h1>The <em>essentials.</em></h1>
        <p>My experience, education, and technical foundation, with the résumé ready to download.</p>
      </header>
      <section className="resume-panel" aria-labelledby="resume-name">
        <div>
          <p className="eyebrow">Résumé / Profile</p>
          <h2 className="section-title" id="resume-name">{site.name}</h2>
          <p>{profile.intro}</p>
          <p className="status-badge">Early-career opportunities</p>
          <div className="link-row">
            <a className="text-link email-link" href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a>
            {site.socials.map((social) => (
              <a className="text-link" href={social.href} key={social.label} target="_blank" rel="noopener noreferrer">
                {social.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="resume-download">
          <p className="eyebrow">Current résumé / PDF</p>
          <h3>Experience at a glance.</h3>
          <p>A downloadable overview of my background, qualifications, and technical work.</p>
          <a className="pill-link" href={profile.resume.href} download="Alexander-Nicholas-Resume.pdf" type="application/pdf">Download résumé (PDF) <span aria-hidden="true">↓</span></a>
          <a className="text-link" href={profile.resume.href} type="application/pdf" target="_blank" rel="noopener noreferrer">View PDF <span className="sr-only">in a new tab</span><span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="info-section" aria-labelledby="resume-explore-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">While you’re here</p>
            <h2 className="section-title" id="resume-explore-heading">Explore the <em>details.</em></h2>
          </div>
        </div>
        <div className="link-row">
          <Link className="pill-link" href="/projects">Project case studies <span aria-hidden="true">↗</span></Link>
          <Link className="pill-link" href="/skills">Skills & project context <span aria-hidden="true">↗</span></Link>
          <Link className="pill-link" href="/background">Background <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
