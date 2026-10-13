import type { Metadata } from "next";
import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { SkillGroups } from "@/components/skill-groups";

export const metadata: Metadata = {
  title: "Skills",
  description: "Software skills and IT training topics, connected to the projects that give them context.",
};

export default function SkillsPage() {
  return (
    <div className="profile-page">
      <header className="page-intro">
        <p className="eyebrow">Tools are useful. Context matters.</p>
        <h1>Skills, with <em>substance.</em></h1>
        <p>From writing an interface to understanding a failed request: these are the tools and technical topics in my work, with projects you can explore.</p>
      </header>
      <section className="info-section" aria-labelledby="skills-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Connected to the work</p>
            <h2 className="section-title" id="skills-heading">Practice with <em>context.</em></h2>
          </div>
          <Link className="text-link" href="/projects">Explore the projects <span aria-hidden="true">↗</span></Link>
        </div>
        <SkillGroups />
      </section>
      <section className="info-section" aria-labelledby="learning-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Still learning</p>
            <h2 className="section-title" id="learning-heading">The next <em>layer.</em></h2>
          </div>
        </div>
        <p>The support and networking entries describe training-lab topics. Personal exercise records and verified outcomes will give those topics more detail as the lab progresses.</p>
        <Placeholder title="Learning goals & completed exercises">
          Add current learning priorities, completed lab tickets, and links to reviewed evidence. Add cybersecurity capabilities when there is corresponding work to show.
        </Placeholder>
      </section>
    </div>
  );
}
