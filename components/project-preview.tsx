import type { Project } from "@/lib/projects";

/** Illustrative project previews, not screenshots or live project data. */
export function ProjectPreview({ project }: { project: Project }) {
  if (project.slug === "rollroute") {
    return (
      <div className="project-preview preview-route">
        <div className="preview-topline"><span className="preview-brand">RollRoute<span className="brand-dot" /></span><span className="micro-label">Concept preview</span></div>
        <p className="preview-headline">A clearer way<br />to get there.</p>
        <div className="route-diagram">
          <svg viewBox="0 0 360 150" role="img" aria-label="Illustrative step-free route connecting a start point and destination; not live navigation data">
            <path className="route-grid" d="M0 30H360M0 75H360M0 120H360M45 0V150M135 0V150M225 0V150M315 0V150" />
            <path className="route-alternative" d="M45 120H135V30H315" />
            <path className="route-line" d="M45 120V87Q45 75 57 75H213Q225 75 225 63V42Q225 30 237 30H315" />
            <circle className="route-start" cx="45" cy="120" r="7" />
            <circle className="route-end" cx="315" cy="30" r="9" />
            <circle className="route-end-inner" cx="315" cy="30" r="3" />
          </svg>
          <span className="route-note"><span className="status-dot" /> Step-free route concept</span>
        </div>
        <div className="preview-bottomline"><span>Curb cuts</span><span>Surface conditions</span><span>Elevator updates</span></div>
      </div>
    );
  }
  if (project.slug === "mc-schematic") {
    return (
      <div className="project-preview preview-schematic">
        <div className="preview-topline"><span className="preview-brand">MC Schematic<span className="brand-dot" /></span><span className="micro-label">Viewer study</span></div>
        <p className="preview-headline">Big ideas.<br />Block by block.</p>
        <div className="schematic-study" role="img" aria-label="Illustrative top-down block layout, not an imported schematic">
          <div className="schematic-grid" aria-hidden="true">
            {"000000000011111100012222100012332100012332100012222100011011100000000000".split("").map((block, index) => <span key={index} data-block={block} />)}
          </div>
          <span className="micro-label">Layer study / top view</span>
        </div>
        <div className="preview-bottomline"><span>Local files</span><span>Block inspection</span><span>Material counts</span></div>
      </div>
    );
  }
  if (project.slug === "it-support-lab") {
    return (
      <div className="project-preview preview-support">
        <div className="preview-topline"><span className="preview-brand">Support lab<span className="brand-dot" /></span><span className="micro-label">Training study</span></div>
        <p className="preview-headline">Find the cause.<br />Verify the fix.</p>
        <div className="support-study" aria-label="Illustrative troubleshooting sequence: name resolution, TCP connectivity, HTTP response">
          {["Name resolution", "TCP connectivity", "HTTP response"].map((step, index) => (
            <div className="support-step" key={step}><span className="micro-label">0{index + 1}</span><span>{step}</span><span aria-hidden="true">↗</span></div>
          ))}
        </div>
        <div className="preview-bottomline"><span>6 simulated incidents</span><span>Evidence-led recovery</span></div>
      </div>
    );
  }
  if (project.slug === "facial-emotion-recognition") {
    return (
      <div className="project-preview preview-emotion">
        <div className="preview-topline"><span className="preview-brand">Beyond pixels<span className="brand-dot" /></span><span className="micro-label">Model pipeline</span></div>
        <p className="preview-headline">Finding patterns.<br />Reading expression.</p>
        <div className="model-pipeline" aria-label="68 facial landmarks feed engineered features into models that classify seven emotion labels">
          <div className="pipeline-input"><strong>68</strong><span>facial landmarks</span></div><span className="pipeline-arrow" aria-hidden="true">→</span><div className="pipeline-output"><strong>7</strong><span>emotion labels</span></div>
        </div>
        <div className="preview-bottomline"><span>Logistic regression</span><span>Decision tree</span><span>MLP</span></div>
      </div>
    );
  }
  return (
    <div className="project-preview preview-portfolio">
      <div className="preview-topline"><span className="preview-brand">Alexander Nicholas.</span><span className="micro-label">Portfolio study</span></div>
      <p className="preview-portfolio-title">Built to<br />be <em>felt.</em></p>
      <div className="preview-bottomline"><span>Thoughtful software.</span><span>A little more life.</span></div>
    </div>
  );
}
