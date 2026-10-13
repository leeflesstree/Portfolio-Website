import Link from "next/link";
import { skillGroups } from "@/lib/profile";
import { getProject } from "@/lib/projects";

export function SkillGroups({ compact = false }: { compact?: boolean }) {
  return (
    <div className="skill-groups">
      {skillGroups.map((group) => (
        <section className="skill-group" key={group.id} aria-labelledby={`skills-${group.id}`}>
          <p className="eyebrow">{group.id === "support-networking" ? "01" : group.id === "scripting-automation" ? "02" : "03"} / Practice & projects</p>
          <h3 id={`skills-${group.id}`}>{group.title}</h3>
          <p>{group.description}</p>
          <ul className="skill-items">
            {(compact ? group.items.slice(0, 2) : group.items).map((item) => {
              const project = item.projectSlug ? getProject(item.projectSlug) : undefined;
              return (
                <li className="skill-item" key={item.label}>
                  <h4>{item.label}</h4>
                  <p className="skill-context">{item.context}</p>
                  {project ? (
                    <Link className="skills-link" href={`/projects/${project.slug}`}>
                      {project.title} <span aria-hidden="true">↗</span>
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
