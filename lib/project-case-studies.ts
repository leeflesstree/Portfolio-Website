export type ProjectCaseStudy = {
  status: string;
  role: string;
  rolePending?: boolean;
  focus: string;
  takeaway: string;
  environment: { label: string; value: string }[];
  sections: {
    id: string;
    title: string;
    body: string[];
    placeholder?: string;
  }[];
  evidence: { title: string; description: string; href?: string }[];
};

/**
 * Placeholders are editing notes. They appear in `next dev` and are left out of
 * the published build unless NEXT_PUBLIC_SHOW_PLACEHOLDERS is "true".
 */
export const showPlaceholders =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";

/** A case study without its pending sections and evidence when placeholders are hidden. */
export function getCaseStudy(slug: string): ProjectCaseStudy | undefined {
  const study = caseStudies[slug];
  if (!study || showPlaceholders) return study;
  return {
    ...study,
    sections: study.sections
      .filter(section => section.body.length > 0)
      .map(section => ({ ...section, placeholder: undefined })),
    evidence: study.evidence.filter(item => item.href),
  };
}

/** Case-study content separates documented project scope from personal evidence. */
export const caseStudies: Record<string, ProjectCaseStudy> = {
  "it-support-lab": {
    status: "Training lab",
    role: "Personal contribution pending",
    rolePending: true,
    focus: "Troubleshooting, log review, and file recovery",
    takeaway:
      "Six simulated incidents connect diagnostic checks with recovery verification and support documentation.",
    environment: [
      { label: "Platform", value: "Windows · PowerShell · Python" },
      { label: "Setup", value: "Client and service on one computer" },
      { label: "Service", value: "Local inventory intranet on TCP port 8088" },
      { label: "Artifacts", value: "Inventory CSV, JSON logs, and SHA-256 manifests" },
    ],
    sections: [
      {
        id: "contribution",
        title: "My contribution",
        body: [],
        placeholder:
          "Add the incidents you completed, any scripts you changed, and your own investigation notes.",
      },
      {
        id: "decisions",
        title: "Environment and troubleshooting approach",
        body: [
          "The AI-assisted starter uses a Python service bound to the local computer. PowerShell checks separate name resolution, TCP connectivity, and HTTP responses, so each exercise isolates a different failure.",
          "The recovery exercise checks a backup against its SHA-256 manifest, preserves the replaced working file, and checks the restored bytes. Log review uses actual local requests to a route that always returns 403.",
          "This is a local learning environment, not production support experience. It does not implement enterprise identity management or authenticated access control.",
        ],
      },
      {
        id: "verification",
        title: "Verification and results",
        body: [
          "The starter includes reference validation and example tickets. Personal completion will be documented separately with before-and-after checks, observed results, and completed tickets.",
        ],
        placeholder:
          "Add one completed ticket, diagnostic output, and a recovery result from your own lab run.",
      },
      {
        id: "lessons",
        title: "Lessons and next steps",
        body: [],
        placeholder:
          "Add what you learned from a real exercise, a misleading symptom you ruled out, and what you would check next.",
      },
    ],
    evidence: [
      {
        title: "Completed ticket pending",
        description: "A personal investigation with symptoms, checks, resolution, and verification.",
      },
      {
        title: "Lab evidence pending",
        description: "Reviewed diagnostic output and a verified file-recovery result.",
      },
      {
        title: "Public repository pending",
        description: "A shareable source and documentation link for the training lab.",
      },
    ],
  },
  "mc-schematic": {
    status: "In progress",
    role: "Personal contribution pending",
    rolePending: true,
    focus: "Local file parsing and interactive build inspection",
    takeaway:
      "An offline viewer turns Sponge schematic files into inspectable layers and material lists.",
    environment: [
      { label: "Platform", value: "Browser · JavaScript · HTML · CSS" },
      { label: "Input", value: "Sponge .schem versions 2 and 3" },
      { label: "Processing", value: "Local NBT, palette, and block-state decoding" },
      { label: "Checks", value: "Node.js test files" },
    ],
    sections: [
      {
        id: "contribution",
        title: "My contribution",
        body: [],
        placeholder:
          "Add the viewer, parser, or interface work you personally completed and a specific implementation example.",
      },
      {
        id: "decisions",
        title: "Design and implementation",
        body: [
          "Schematic files are decoded locally in the browser. Bundled textures and models support inspection without an account, file upload, or external asset requests.",
          "The interface combines horizontal layers, material highlighting, and keyboard-accessible block inspection. Whole-build placement and raw-resource bills complement the current-layer material list.",
          "The current implementation is a top-down viewer, not a geometry-accurate 3D blueprint or an AI generator. Those capabilities should not be inferred from the project’s future direction.",
        ],
      },
      {
        id: "verification",
        title: "Verification and results",
        body: [
          "The repository includes tests for parsing, textures, material counts, coordinates, stair geometry, and recipe calculations. It also includes a generator for a small sample schematic.",
        ],
        placeholder:
          "Add an observed test summary and a real schematic comparison showing dimensions, block states, and orientation.",
      },
      {
        id: "lessons",
        title: "Lessons and next steps",
        body: [
          "The documented next steps are an interactive 3D view and support for structure and Litematica formats.",
        ],
        placeholder:
          "Add a parsing or rendering challenge you worked through and the tradeoff behind your solution.",
      },
    ],
    evidence: [
      {
        title: "Source and documentation",
        description: "Viewer implementation, format scope, sample generation, and included tests.",
        href: "https://github.com/leeflesstree/mc-schematic-starter",
      },
      {
        title: "Viewer screenshot pending",
        description: "An actual schematic layer with material counts and block inspection.",
      },
      {
        title: "Validation summary pending",
        description: "Observed checks and a comparison with the corresponding Minecraft build.",
      },
    ],
  },
  rollroute: {
    status: "Concept",
    role: "Personal contribution pending",
    rolePending: true,
    focus: "Accessibility-aware route planning",
    takeaway:
      "A navigation concept treats mobility constraints as part of choosing a route.",
    environment: [
      { label: "Context", value: "Wheelchair-friendly navigation concept" },
      { label: "Inputs", value: "Accessibility pins and venue information" },
      { label: "Route factors", value: "Curb cuts, entrances, elevators, and surfaces" },
      { label: "Exploration", value: "Scout Mode mapping heatmap" },
    ],
    sections: [
      {
        id: "contribution",
        title: "My contribution",
        body: [],
        placeholder:
          "Add your role in the research, product definition, interface design, or prototype.",
      },
      {
        id: "decisions",
        title: "Product approach",
        body: [
          "The concept starts with the difference between a short route and an accessible route. It brings curb cuts, step-free entrances, elevator outages, and surface conditions into route planning.",
          "Crowdsourced pins and venue snapshots describe individual places. Scout Mode highlights both documented and under-mapped areas.",
        ],
      },
      {
        id: "verification",
        title: "Research and validation",
        body: [],
        placeholder:
          "Add any completed research or prototype evaluation, including who participated, what was checked, and what changed.",
      },
      {
        id: "lessons",
        title: "Lessons and next steps",
        body: [],
        placeholder:
          "Add the most important accessibility finding and the next question to test.",
      },
    ],
    evidence: [
      {
        title: "Concept screens pending",
        description: "Route planning, venue information, and Scout Mode screens.",
      },
      {
        title: "Research notes pending",
        description: "Documented needs, assumptions, and any completed validation.",
      },
    ],
  },
  "facial-emotion-recognition": {
    status: "Reproducible benchmark",
    role: "SVM implementation, tuning, and feature engineering · team of three; later benchmark revision with Codex assistance",
    focus: "Reproducible model evaluation and related-frame sensitivity",
    takeaway:
      "SVM test macro F1 changes from 0.9897 with image splitting to 0.6230 with inferred frame groups kept together, highlighting the importance of evaluation design.",
    environment: [
      { label: "Tools", value: "Python 3.12 · scikit-learn · imbalanced-learn · PyTorch · pandas" },
      { label: "Dataset", value: "981 CK+-derived samples across seven expression labels" },
      { label: "Features", value: "25 corrected geometric features from stored MediaPipe 468-point x/y landmarks" },
      { label: "Image split", value: "686 training / 147 validation / 148 test samples · seed 42" },
      { label: "Grouped split", value: "684 training / 147 validation / 150 test samples · 327 inferred groups of three" },
      { label: "Source version", value: "Portfolio benchmark commit 7867d66 · October 13, 2026" },
    ],
    sections: [
      {
        id: "contribution",
        title: "My contribution",
        body: [
          "In the original team project, I implemented the SVM in scikit-learn and tuned it with GridSearchCV. I also contributed data and feature engineering, visualizations, code consolidation, the report, and slides. The other team members implemented the decision tree and PyTorch MLP.",
          "I subsequently revised the portfolio version with Codex assistance: correcting feature formulas, packaging a reproducible benchmark, keeping preprocessing inside cross-validation, adding an inferred-group sensitivity analysis, and producing consistent reports. The repository preserves the original coursework and its separate team attribution.",
        ],
      },
      {
        id: "decisions",
        title: "Features and evaluation design",
        body: [
          "The runnable benchmark starts from a corrected feature table, not raw images. Its 25 distances, ratios, angles, and symmetry measurements can be regenerated from the committed MediaPipe landmarks. The revision corrects double-normalized aspect ratios, normalizes symmetry offsets, and aligns landmark formulas with the feature names.",
          "Decision-tree and SVM model selection uses five training-only cross-validation folds, with scaling and any SMOTE resampling fitted inside each fold. The seeded PyTorch MLP uses validation macro F1 for tuning and checkpoint selection. Macro F1 gives each expression class equal weight; the test split remains separate from model selection.",
          "The second protocol keeps candidate groups of three frames together in both splitting and cross-validation. Those groups are inferred from expression labels, filename indices, and feature similarity; they are not verified original sequences or subject identities.",
        ],
      },
      {
        id: "verification",
        title: "Recorded benchmark results",
        body: [
          "The committed reports use the same corrected 981-sample dataset and seed 42. On the stratified image split, test macro F1 is 0.0584 for the majority baseline, 0.8105 for the decision tree, 0.9897 for the SVM, and 0.9632 for the PyTorch MLP.",
          "With inferred frame groups kept together, test macro F1 is 0.0590 for the baseline, 0.4664 for the decision tree, 0.6230 for the SVM, and 0.6570 for the MLP. The image-level split shares 127 candidate groups between training and test; the grouped run keeps those candidate groups together and tunes models under its own protocol.",
          "These values are the saved outputs of the linked portfolio benchmark. Its metrics, split manifests, predictions, per-class reports, and confusion matrices make the comparison inspectable. The two protocols use different test memberships, so the score gap is a sensitivity comparison rather than a causal estimate on identical test images.",
        ],
      },
      {
        id: "lessons",
        title: "Lessons and limitations",
        body: [
          "The central lesson is that evaluation design can matter as much as model choice. High image-split scores should not be presented as evidence that a model generalizes to new people when closely related frames may cross split boundaries.",
          "The archive has no verified subject identifiers or original sequence mapping, and raw source images are absent. Neither protocol is a subject-disjoint evaluation or an independently reproduced image-to-prediction system. These are retrospective experiments on a small, controlled, imbalanced dataset that was already explored during the coursework.",
          "The labels describe visible facial expressions, not a person’s internal emotional state. Stronger generalization claims would require appropriate source-image access, trustworthy subject and sequence metadata, and an independent evaluation dataset.",
        ],
      },
    ],
    evidence: [
      {
        title: "Benchmark source and documentation",
        description: "The requested reproducible-benchmark branch, including the package, notebook entry point, and coursework archive.",
        href: "https://github.com/leeflesstree/cs471Final/tree/portfolio/reproducible-benchmark",
      },
      {
        title: "Model comparison and evaluation protocols",
        description: "Recorded image-level and inferred-group results, split sizes, model-selection procedure, and interpretation.",
        href: "https://github.com/leeflesstree/cs471Final/blob/7867d6666221199c836da16a188e181b93cc846e/docs/results.md",
      },
      {
        title: "Image-split metrics JSON",
        description: "Machine-readable scores, selected parameters, per-class reports, environment versions, and seed.",
        href: "https://github.com/leeflesstree/cs471Final/blob/7867d6666221199c836da16a188e181b93cc846e/results/metrics.json",
      },
      {
        title: "Inferred-group metrics JSON",
        description: "The corresponding grouped sensitivity run, including test scores and per-class reports.",
        href: "https://github.com/leeflesstree/cs471Final/blob/7867d6666221199c836da16a188e181b93cc846e/results/inferred_sequence/metrics.json",
      },
      {
        title: "Feature provenance and limitations",
        description: "Corrected feature definitions, the 981-row dataset, inferred-frame evidence, and limits on generalization.",
        href: "https://github.com/leeflesstree/cs471Final/blob/7867d6666221199c836da16a188e181b93cc846e/docs/data.md",
      },
      {
        title: "Coursework history and contributions",
        description: "Original team attribution and the distinction between historical coursework and later portfolio improvements.",
        href: "https://github.com/leeflesstree/cs471Final/blob/7867d6666221199c836da16a188e181b93cc846e/docs/coursework.md",
      },
    ],
  },
  "portfolio-website": {
    status: "Implemented",
    role: "Site development and interaction design",
    focus: "Clear project presentation and responsive interfaces",
    takeaway:
      "A typed content model supports a responsive gallery, project index, and individual project pages.",
    environment: [
      { label: "Framework", value: "Next.js App Router · React" },
      { label: "Language", value: "TypeScript" },
      { label: "Styling", value: "Tailwind CSS and custom CSS" },
      { label: "Content", value: "Typed site and project modules" },
    ],
    sections: [
      {
        id: "contribution",
        title: "My contribution",
        body: [
          "I built the site to present selected work and make the context behind each project easier to explore. The implementation includes the landing page, project index, and statically generated detail pages.",
        ],
      },
      {
        id: "decisions",
        title: "Design and implementation",
        body: [
          "Typed data modules keep project and site content separate from the components that display it. Shared previews give projects a consistent visual presentation across the gallery and detail pages.",
          "The visual system pairs mint and forest green with clay and lilac project panels. Responsive layouts and reduced-motion support let the presentation adapt to different screens and preferences.",
        ],
      },
      {
        id: "verification",
        title: "Verification and results",
        body: [
          "The site uses static project routes and a shared content model, so project information appears consistently across the index and detail pages.",
        ],
        placeholder:
          "Add a dated verification summary with build, navigation, keyboard, and mobile checks.",
      },
      {
        id: "lessons",
        title: "Lessons and next steps",
        body: [
          "The current revision adds an at-a-glance overview, grouped skills, background information, and structured case studies while retaining the original visual identity.",
        ],
        placeholder:
          "Add what you learned from the redesign and any feedback that shaped the next iteration.",
      },
    ],
    evidence: [
      {
        title: "Portfolio repository",
        description: "Source for the site, shared components, and content modules.",
        href: "https://github.com/leeflesstree/Portfolio-Website",
      },
      {
        title: "Verification notes pending",
        description: "A dated record of navigation, accessibility, and responsive checks.",
      },
    ],
  },
};
