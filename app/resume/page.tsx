import type { Metadata } from "next";
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
        <h1>Résumé</h1>
        <p>My experience, education, and technical foundation, with the résumé ready to download.</p>
      </header>
      <section className="resume-panel" aria-labelledby="resume-name">
        <div>
          <h2 className="section-title" id="resume-name">{site.name}</h2>
          <p>{profile.intro}</p>
          <div className="link-row">
            <a className="text-link email-link" href={`mailto:${site.email}`}>{site.email}</a>
            {site.socials.map((social) => (
              <a className="text-link" href={social.href} key={social.label} target="_blank" rel="noopener noreferrer">
                {social.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="resume-download">
          <a className="pill-link primary-pill" href={profile.resume.href} download="Alexander-Nicholas-Resume.pdf" type="application/pdf">Download résumé (PDF) <span aria-hidden="true">↓</span></a>
          <a className="text-link" href={profile.resume.href} type="application/pdf" target="_blank" rel="noopener noreferrer">View PDF <span className="sr-only">in a new tab</span><span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  );
}
