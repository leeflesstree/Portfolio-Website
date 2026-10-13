export type ProfileFact = {
  label: string;
  value: string;
  detail: string;
  pending?: boolean;
};

export type BackgroundEntry = {
  title: string;
  detail: string;
};

/** Confirmed context and clearly marked spaces for the next content pass. */
export const profile = {
  intro:
    "I’m Alexander. My projects connect software development with an interest in IT support and networking, from local troubleshooting exercises to browser tools and machine learning. I care about understanding how a system works, making it useful, and explaining the decisions behind it.",
  overview: [
    {
      label: "Education",
      value: "Computer science",
      detail: "Placeholder: add the exact degree, institution, and graduation date.",
      pending: true,
    },
    {
      label: "Focus",
      value: "IT, networks & software",
      detail: "Exploring practical support workflows alongside software projects.",
    },
    {
      label: "Approach",
      value: "Build. Test. Document.",
      detail: "Understand the problem, check the behavior, and explain the result.",
    },
    {
      label: "Direction",
      value: "Early-career opportunities",
      detail: "Interested in work that brings technical problem-solving and continued learning together.",
    },
  ] satisfies ProfileFact[],
  education: [
    {
      title: "Education details",
      detail: "Add the exact computer science qualification, institution, graduation date, and relevant coursework or academic achievements.",
    },
  ] satisfies BackgroundEntry[],
  experience: [
    {
      title: "Work & relevant experience",
      detail: "Add employers or organizations, roles, dates, and concrete responsibilities. Academic, volunteer, and team experience can be included with its context clearly identified.",
    },
  ] satisfies BackgroundEntry[],
  certifications: [
    {
      title: "Certifications & training",
      detail: "Add earned credentials, issuing organizations, dates, and verification links. Any training in progress should be labeled separately.",
    },
  ] satisfies BackgroundEntry[],
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: {
    label: string;
    context: string;
    projectSlug?: string;
  }[];
};

/** Project context is evidence of scope, not a claim of completed lab exercises. */
export const skillGroups: SkillGroup[] = [
  {
    id: "support-networking",
    title: "Support & networking",
    description: "A foundation for investigating problems one layer at a time.",
    items: [
      {
        label: "Name resolution, TCP & HTTP",
        context: "Training lab · Separate hostname, port, service, and page failures on one local Windows computer.",
        projectSlug: "it-support-lab",
      },
      {
        label: "Incident documentation",
        context: "Training lab · Runbooks and ticket templates structure symptoms, diagnostic steps, and verification.",
        projectSlug: "it-support-lab",
      },
      {
        label: "Access-log review",
        context: "Training lab · Examine simulated denied requests in a local service log.",
        projectSlug: "it-support-lab",
      },
      {
        label: "File integrity & recovery",
        context: "Training lab · A SHA-256 recovery workflow checks backups and preserves replaced working files.",
        projectSlug: "it-support-lab",
      },
    ],
  },
  {
    id: "scripting-automation",
    title: "Scripting & automation",
    description: "Small tools that make behavior easier to inspect and repeat.",
    items: [
      {
        label: "PowerShell & Python",
        context: "Training lab · PowerShell diagnostics work alongside a Python service bound to the local computer.",
        projectSlug: "it-support-lab",
      },
      {
        label: "JavaScript & binary parsing",
        context: "MC Schematic · Read local schematic files, decode block palettes, and expose material and layer data.",
        projectSlug: "mc-schematic",
      },
      {
        label: "Automated checks",
        context: "MC Schematic · Node.js tests cover parsing and texture mapping in the viewer.",
        projectSlug: "mc-schematic",
      },
    ],
  },
  {
    id: "software-data",
    title: "Software & data",
    description: "Interfaces, useful tools, and experiments grounded in data.",
    items: [
      {
        label: "React, Next.js & TypeScript",
        context: "Personal Portfolio · Responsive interfaces, reusable components, and statically generated project pages.",
        projectSlug: "portfolio-website",
      },
      {
        label: "Python & machine learning",
        context: "Team project · Facial-landmark extraction, feature engineering, data cleanup, and model comparison.",
        projectSlug: "facial-emotion-recognition",
      },
      {
        label: "HTML, CSS & accessible interaction",
        context: "MC Schematic · Searchable materials and keyboard-accessible block inspection in an offline browser tool.",
        projectSlug: "mc-schematic",
      },
    ],
  },
];
