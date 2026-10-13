import type { ReactNode } from "react";

export function Placeholder({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <aside className="content-placeholder">
      <span className="placeholder-label">Placeholder</span>
      <h3>{title}</h3>
      {children ? <p>{children}</p> : null}
    </aside>
  );
}
