import type { BackgroundEntry } from "@/lib/profile";

export function CredentialCard({ entry, status = "earned" }: { entry: BackgroundEntry; status?: "earned" | "in-progress" }) {
  const earned = status === "earned";

  return (
    <article className="credential-card" data-status={status}>
      <span className="credential-mark" aria-hidden="true">{earned ? (entry.title.includes("A+") ? "A+" : "✓") : "→"}</span>
      <div className="credential-copy">
        <p className="eyebrow">{earned ? "Earned certification" : "Study in progress"}</p>
        <h3>{entry.title}</h3>
        {entry.organization ? <p className="credential-organization">{entry.organization}</p> : null}
        {entry.period ? <p className="background-entry-meta">{entry.period}</p> : null}
        <p>{entry.detail}</p>
        {entry.bullets?.length ? <ul className="background-entry-bullets">{entry.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul> : null}
        {entry.href ? <a className="text-link" href={entry.href} target="_blank" rel="noopener noreferrer">{entry.linkLabel ?? (earned ? "Verify credential" : "Explore the training")} <span aria-hidden="true">↗</span></a> : null}
      </div>
    </article>
  );
}
