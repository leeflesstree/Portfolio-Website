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
    status: "Academic project",
    role: "Model implementation and feature engineering · team of three",
    focus: "Facial-landmark features and model comparison",
    takeaway:
      "A landmark-based pipeline compares Logistic Regression, Decision Tree, and MLP models across seven emotion labels.",
    environment: [
      { label: "Tools", value: "Python · scikit-learn · OpenCV · face_recognition" },
      { label: "Dataset", value: "35,000+ labeled 48 × 48 grayscale images" },
      { label: "Features", value: "Distances, angles, and ratios from 68 landmarks" },
      { label: "Evaluation", value: "Cross-validation and classification metrics" },
    ],
    sections: [
      {
        id: "contribution",
        title: "My contribution",
        body: [
          "I implemented model code, facial-landmark extraction, feature engineering, and data cleanup as part of a three-person team.",
        ],
      },
      {
        id: "decisions",
        title: "Modeling approach",
        body: [
          "The project represents facial geometry with distances, angles, and ratios rather than classifying raw images with a deep CNN. Features are standardized before model evaluation.",
          "Logistic Regression and Decision Tree models provide interpretable comparisons, with an MLP as a neural-network benchmark.",
        ],
      },
      {
        id: "verification",
        title: "Evaluation and results",
        body: [
          "The pipeline evaluates seven emotion labels with cross-validation and classification metrics.",
        ],
        placeholder:
          "Add the final model comparison, evaluation setup, and confusion matrix from the project report.",
      },
      {
        id: "lessons",
        title: "Lessons and limitations",
        body: [],
        placeholder:
          "Add an observed feature or data-quality limitation, how you investigated it, and what you would improve.",
      },
    ],
    evidence: [
      {
        title: "Project repository",
        description: "Source for the team’s facial emotion recognition project.",
        href: "https://github.com/leeflesstree/cs471Final",
      },
      {
        title: "Model comparison pending",
        description: "Final metrics, a confusion matrix, and interpretation of the results.",
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
