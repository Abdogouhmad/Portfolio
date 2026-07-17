export type ProjectStatus = "done" | "in_progress" | "not_started" | "blocked";

export const projectStatusConfig: Record<ProjectStatus, { label: string; color: string }> = {
  done: { label: "Done", color: "bg-green-500" },
  in_progress: { label: "In Progress", color: "bg-orange-500" },
  not_started: { label: "Not Started", color: "bg-gray-400" },
  blocked: { label: "Blocked", color: "bg-red-500" },
};

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured: boolean;
  status: ProjectStatus;
  challenges: string;
  lessons: string;
  architecture: string;
  content: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}



export const experiences: Experience[] = [
  {
    company: "Metave",
    role: "Full Stack Developer",
    duration: "May 2024 — Oct 2024",
    description: [
      "Built SaaS application using Next.js, Node.js, and Express.js.",
      "Developed RESTful APIs and intergrating a serverless function with AWS for efficient data handling.",
      "Created responsive user interfaces with Tailwind CSS."
    ],
    technologies: ["NextJs", "Linux Systems", "Terraform", "Docker", "REST APIs", "AWS", "TypeScript"]
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Rust", "TypeScript", "JavaScript", "Python", "C", "Bash"]
  },
  {
    category: "Web & Frontend",
    skills: ["Next.js", "React", "HTML5", "Tailwind CSS", "Framer Motion", "Svelt", "SveltKit"]
  },
  {
    category: "Backend & Systems",
    skills: ["Axum", "Actix-web", "REST APIs", "WebSockets", "Tokio", "ExpressJs"]
  },
  {
    category: "Tooling & Infrastructure",
    skills: ["Cargo", "Git", "Docker", "CI/CD (GitHub Actions)", "Justfile", "Terraform"]
  },
  {
    category: "Operating Systems",
    skills: ["Linux", "Arch Linux", "CachyOS", "POSIX Systems", "Niri", "Hyprland"]
  },
  {
    category: "Editors & Workflow",
    skills: ["Helix", "VS Code", "Neovim", "Zed"]
  }
];

export const projects: Project[] = [
  {
    id: "ltx",
    slug: "ltx",
    title: "ltx",
    description: "An extremely fast LaTeX project manager written in Rust. It handles multi-pass compilation automatically.",
    longDescription: "ltx treats LaTeX documents like modern software codebases, featuring incremental builds, automatic bibtex/biber resolution, and a tight write-compile-preview watch mode loop.",
    image: "/images/projects/ltx-logo.png",
    technologies: ["Rust", "LaTeX", "Cargo", "POSIX", "CI/CD"],
    github: "https://github.com/Abdogouhmad/ltx",
    demo: "",
    featured: true,
    status: "in_progress",
    challenges: "Parsing LaTeX source code files for active inputs, package imports, and bibliography references to construct a reliable, cyclic-free dependency graph. Ensuring compilation terminates correctly even when LaTeX throws errors or warnings.",
    lessons: "Learned the details of LaTeX compiler engines (pdflatex, xelatex, lualatex) and auxiliary tool flows (biber, makeindex). Gained deeper experience in asynchronous process handling and file system monitoring in Rust.",
    architecture: `
+-------------------------------------------------+
|                   ltx CLI                       |
+-------------------------------------------------+
                        |
                        v
+-------------------------------------------------+
|             Dependency Graph Engine             |
|  - Scans src/main.tex                           |
|  - Resolves \\input / \\include transitive trees   |
+-------------------------------------------------+
                        |
                        v
+-------------------------------------------------+
|             Compiler Orchestrator               |
|  - Executes pdflatex / xelatex / lualatex       |
|  - Runs biber / bibtex / makeindex              |
|  - Drives multi-pass loop until stability       |
+-------------------------------------------------+
                        |
                        v
+-------------------------------------------------+
|              Isolated Build Dir                 |
|  - Keeps root clean                             |
|  - Copies final PDF to build/                   |
+-------------------------------------------------+
`,
    content: `
### Why ltx

Most LaTeX workflows are stitched together from shell scripts, \`latexmk\`, and muscle memory. \`ltx\` treats your document the way a modern build tool treats a codebase:

- **Correct by construction** — dependency-aware compilation means bibliographies, indices, and multi-pass cross-references resolve without manual re-runs.
- **Fast** — incremental builds, parallel auxiliary passes, and a Rust core mean large multi-file theses and papers compile in a fraction of the time.
- **Predictable** — one \`ltx.toml\` describes your project; builds behave the same on your machine, your co-author's machine, and in CI.

### Features

- 🚀 **Incremental builds** — only recompiles what changed, including transitive \`\\input\`/\`\\include\` graphs.
- 🔁 **Automatic multi-pass resolution** — handles \`biber\`/\`bibtex\`, \`makeindex\`, and repeated engine passes until the document is stable.
- 👀 **Watch mode** — rebuilds on save for a tight write–compile–preview loop.
- 🧹 **Clean workspace** — auxiliary files are isolated to a build directory, never scattered next to your \`.tex\` sources.
- 🔌 **Engine-agnostic** — works with \`pdflatex\`, \`xelatex\`, and \`lualatex\`.
`
  },
  {
    id: "Walt",
    slug: "Walt",
    title: "Walt",
    description: "A modern, offline-first personal finance tracker built with Flutter for Android.",
    longDescription: "A clean, offline-first personal finance tracker built with Flutter for Android. Track expenses & income, manage budgets, view beautiful charts, export reports, and automatically capture Google Pay transactions.",
    image: "/images/projects/walt-logo.png",
    technologies: ["Dart", "Flutter", "SQLite", "Hive", "Riverpod", "fl_chart", "Freezed"],
    github: "https://github.com/Abdogouhmad/walt",
    demo: "",
    featured: true,
    status: "done",
    challenges: "Designing an offline-first architecture that keeps data consistent across SQLite and Hive caches while supporting real-time chart updates and background notification scheduling for budget alerts.",
    lessons: "Gained deep experience with Flutter state management using Riverpod, learned to architect clean separation between data, domain, and UI layers, and understood the trade-offs between local databases for mobile apps.",
    architecture: `
+-------------------------------------------------+
|                   Walt App                      |
+-------------------------------------------------+
        |                   |                |
        v                   v                v
+----------------+ +----------------+ +----------------+
|  Presentation  | |   Providers    | |    Shared      |
|  (Features)    | |   (Riverpod)  | |   Widgets      |
+----------------+ +----------------+ +----------------+
        |                   |                |
        +---------+---------+----------------+
                  |
                  v
+-------------------------------------------------+
|               Data Layer                        |
|  - Freezed models (Transaction, Category,       |
|    Budget, Account)                             |
|  - SQLite via sqflite (primary storage)         |
|  - Hive (caching & settings)                    |
+-------------------------------------------------+
                  |
                  v
+-------------------------------------------------+
|             Services Layer                      |
|  - Export Service (CSV / PDF)                   |
|  - Notification Service (budget alerts)         |
|  - Google Pay auto-capture                      |
+-------------------------------------------------+
`,
    content: `
### Why Walt

Most finance apps require an internet connection or lock features behind subscriptions. \`Walt\` is fully offline-first — your financial data stays on your device, private and accessible anytime.

### Features

- **Offline-first** with SQLite + Hive for fast, reliable local storage.
- **Beautiful charts** — monthly bar charts, category pie charts, and spending trend lines powered by \`fl_chart\`.
- **Budget planning** with progress tracking and alert notifications.
- **CSV & PDF export** with Android share sheet integration.
- **Biometric app lock** for secure access.
- **Dark mode support** with a clean, modern UI.
- **Fully customizable categories** for organizing transactions.
- **Google Pay auto-capture** for seamless transaction recording.

### Tech Stack

- **Flutter** + **Dart** for cross-platform UI
- **sqflite** — local SQLite database
- **hive_flutter** — fast caching for categories, settings, and pending GPay transactions
- **flutter_riverpod** — declarative state management
- **go_router** — declarative navigation
- **fl_chart** — all charts (bar, pie, line)
- **freezed + json_serializable** — immutable, serializable data models
`
  }
];


