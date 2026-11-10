import Link from "next/link";
import { skillGroups } from "@/lib/profile";
import { getProject } from "@/lib/projects";

export function SkillGroups() {
  return (
    <div className="skill-groups">
      {skillGroups.map(group => (
        <section className="skill-group" key={group.id} aria-labelledby={`skills-${group.id}`}>
          <h3 id={`skills-${group.id}`}>{group.title}</h3>
          <p>{group.description}</p>
          <ul className="skill-items">
            {group.items.map((item) => {
              const project = item.projectSlug ? getProject(item.projectSlug) : undefined;
              return (
                <li className="skill-item" key={item.label}>
                  <h4>{item.label}</h4>
                  <p className="skill-context">{item.context}</p>
                  {project ? (
                    <Link className="skills-link" href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  ) : null}
                  {item.href ? (
                    item.href.startsWith("/") || item.href.startsWith("#") ? (
                      <Link className="skills-link" href={item.href}>{item.linkLabel ?? "See the context"}</Link>
                    ) : (
                      <a className="skills-link" href={item.href} target="_blank" rel="noopener noreferrer">{item.linkLabel ?? "See the context"} <span aria-hidden="true">↗</span></a>
                    )
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
