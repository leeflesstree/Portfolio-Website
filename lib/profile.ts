export type ProfileFact = {
  label: string;
  value: string;
  detail: string;
  pending?: boolean;
  href?: string;
  linkLabel?: string;
};

export type BackgroundEntry = {
  title: string;
  detail: string;
  organization?: string;
  period?: string;
  location?: string;
  bullets?: string[];
  href?: string;
  linkLabel?: string;
};

export type Profile = {
  headshot: { src: string | null; alt: string };
  resume: { href: string };
  homeSummary: string[];
  intro: string;
  overview: ProfileFact[];
  education: BackgroundEntry[];
  experience: BackgroundEntry[];
  certifications: BackgroundEntry[];
  training: BackgroundEntry[];
  homeLab: BackgroundEntry;
  learningGoals: string[];
};

/** Personal details confirmed against the supplied résumé, certificate, and LinkedIn profile. */
export const profile: Profile = {
  headshot: {
    src: "/images/alexander-nicholas.webp",
    alt: "Portrait of Alexander Nicholas",
  },
  resume: {
    href: "/documents/alexander-nicholas-resume.pdf",
  },
  homeSummary: [
    "I’m Alexander, a CompTIA A+ certified computer science graduate pursuing IT support, technical support, and help desk opportunities. I enjoy understanding how systems work, investigating problems, and explaining the steps that lead to a solution.",
    "My background combines quality assurance at Pfizer, instructional support at CSUSM, and a personal home lab with Windows Server, Linux, virtual machines, and VLAN segmentation. I’m building toward networking and cybersecurity while preparing for CompTIA Network+ and Security+.",
  ],
  intro:
    "I’m Alexander, a CompTIA A+ certified computer science graduate focused on IT support and help desk work, with a longer-term direction in networking and cybersecurity. My background includes software quality assurance, instructional support, and hands-on systems and networking practice in a personal home lab. I value clear troubleshooting, useful documentation, and communication that helps people understand the next step.",
  overview: [
    {
      label: "Education",
      value: "B.S. Computer Science",
      detail: "California State University San Marcos · 2021–2025 · GPA 3.68.",
    },
    {
      label: "Focus",
      value: "IT support & help desk",
      detail: "Systems troubleshooting, clear documentation, and a foundation in networking and cybersecurity.",
    },
    {
      label: "Certifications",
      value: "CompTIA A+",
      detail: "Earned August 20, 2026 · Valid through August 20, 2029.",
      href: "https://www.credly.com/badges/e8c1e03a-31af-4487-a04d-0921b9ac83fd/public_url",
      linkLabel: "Verify credential",
    },
    {
      label: "Direction",
      value: "Early-career opportunities",
      detail: "IT and technical support roles, with continued development in networking and security.",
    },
  ],
  education: [
    {
      title: "B.S. Computer Science",
      organization: "California State University San Marcos",
      period: "2021–2025",
      detail: "A computer science foundation spanning systems, software, and data.",
      bullets: [
        "GPA: 3.68.",
        "Dean’s List: Spring 2022–Fall 2024.",
        "Coursework: Computer Networking, Cybersecurity, Machine Learning, Data Structures and Algorithms, and Software Engineering.",
      ],
    },
  ],
  experience: [
    {
      title: "Instructional Student Assistant",
      organization: "California State University San Marcos",
      period: "January 2025–May 2025",
      location: "San Marcos, CA",
      detail: "Supported Theory of Computing instruction through grading, individualized feedback, and coordination with the instructor.",
      bullets: [
        "Graded 250+ assignments and projects for 100+ students, meeting 98% of grading deadlines.",
        "Provided individualized feedback on automata, grammars, computability, and proofs.",
        "Clarified 20+ grading questions with the instructor.",
      ],
    },
    {
      title: "Quality Assurance Intern",
      organization: "Pfizer",
      period: "May 2023–August 2023",
      location: "Remote",
      detail: "Supported quality assurance for a web-publishing platform with Pfizer Digital’s Franklin group.",
      bullets: [
        "Performed functionality and performance checks.",
        "Prepared technical documentation and reviewed requirements and outcomes.",
      ],
    },
  ],
  certifications: [
    {
      title: "CompTIA A+",
      organization: "CompTIA",
      period: "Earned August 20, 2026 · Valid through August 20, 2029",
      detail: "Earned certification in IT support fundamentals.",
      href: "https://www.credly.com/badges/e8c1e03a-31af-4487-a04d-0921b9ac83fd/public_url",
      linkLabel: "Verify on Credly",
    },
  ],
  training: [
    {
      title: "CompTIA Network+",
      period: "In progress",
      detail: "Certification preparation in progress; credential not yet earned.",
    },
    {
      title: "CompTIA Security+",
      period: "In progress",
      detail: "Certification preparation in progress; credential not yet earned.",
    },
  ],
  homeLab: {
    title: "Personal IT & Cybersecurity Home Lab",
    period: "September 2025–Present",
    detail: "A personal multi-system environment for practicing systems administration, network segmentation, and layered troubleshooting.",
    bullets: [
      "Configured a managed switch and VLAN segmentation across virtual machines.",
      "Worked with Windows Server and Linux systems.",
      "Built a three-node Raspberry Pi Linux cluster with persistent, automatically mounted storage.",
      "Used OSI-based troubleshooting and documented the lab setup and diagnostic process.",
    ],
  },
  learningGoals: [
    "Prepare for CompTIA Network+ certification.",
    "Prepare for CompTIA Security+ certification.",
  ],
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: {
    label: string;
    context: string;
    projectSlug?: string;
    href?: string;
    linkLabel?: string;
  }[];
};

/** Context distinguishes professional work, the personal home lab, and supplied training exercises. */
export const skillGroups: SkillGroup[] = [
  {
    id: "support-networking",
    title: "Support & networking",
    description: "Systems practice and a methodical approach to investigating problems.",
    items: [
      {
        label: "VLAN segmentation & virtual machines",
        context: "Personal home lab · Configured a managed switch and VLAN segmentation across VMs.",
        href: "/background#home-lab",
        linkLabel: "Personal home lab",
      },
      {
        label: "Windows Server & Linux",
        context: "Personal home lab · Worked with Windows Server and Linux, including a three-node Raspberry Pi cluster with persistent, automatically mounted storage.",
        href: "/background#home-lab",
        linkLabel: "Personal home lab",
      },
      {
        label: "Layered troubleshooting",
        context: "Personal home lab · Used OSI-based troubleshooting and documented the setup and diagnostic process.",
        href: "/background#home-lab",
        linkLabel: "Personal home lab",
      },
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
        label: "Quality assurance & technical documentation",
        context: "Pfizer internship · Functionality and performance checks, technical documentation, and requirements/outcomes review for a web-publishing platform.",
        href: "/background#professional-experience",
        linkLabel: "Professional experience",
      },
      {
        label: "Technical feedback & communication",
        context: "CSUSM instructional support · Individualized feedback on automata, grammars, computability, and proofs, with grading questions clarified alongside the instructor.",
        href: "/background#professional-experience",
        linkLabel: "Professional experience",
      },
      {
        label: "React, Next.js & TypeScript",
        context: "Personal Portfolio · Responsive interfaces, reusable components, and statically generated project pages.",
        projectSlug: "portfolio-website",
      },
      {
        label: "Python & machine learning",
        context: "Team project · Feature pipelines and reproducible model evaluation.",
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
