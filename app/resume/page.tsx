import type { Metadata } from "next";
import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { profile } from "@/lib/profile";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: "A brief introduction to Alexander Nicholas, with contact details and a space for the current résumé.",
};

export default function ResumePage() {
  return (
    <div className="profile-page">
      <header className="page-intro">
        <p className="eyebrow">A quick introduction</p>
        <h1>The <em>essentials.</em></h1>
        <p>My background, technical interests, and a direct way to get in touch.</p>
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
        <Placeholder title="Current résumé PDF">
          Add the reviewed résumé file here. The download will be available once the document and its education, experience, and contact details are confirmed.
        </Placeholder>
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
