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
    company: "Systemic Labs",
    role: "Senior Systems Engineer",
    duration: "2024 — Present",
    description: [
      "Designed and implemented high-throughput network daemons in Rust, optimizing CPU cache layouts and reducing p99 latency by 35%.",
      "Created internal developer tooling and CLI utilities to streamline build-and-deploy pipelines for CachyOS and Arch Linux target environments.",
      "Developed kernel-space interfaces and custom eBPF probes for real-time observability of memory allocations and network traffic."
    ],
    technologies: ["Rust", "Linux Systems", "eBPF", "Docker", "REST APIs", "Cargo"]
  },
  {
    company: "CoreTech Solutions",
    role: "Software Developer",
    duration: "2022 — 2024",
    description: [
      "Built performant REST and WebSocket APIs using Actix-web and Axum, supporting 10k+ concurrent connections.",
      "Maintained and optimized legacy backend systems, migrating performance-critical routes from Python to Rust.",
      "Set up robust CI/CD pipelines using GitHub Actions, reducing build times by caching Cargo workspaces efficiently."
    ],
    technologies: ["Rust", "TypeScript", "Actix", "Axum", "PostgreSQL", "Docker", "Git"]
  },
  {
    company: "Open Source Maintainer",
    role: "Developer & Contributor",
    duration: "2021 — Present",
    description: [
      "Created and maintained 'ltx', an extremely fast LaTeX project manager in Rust that resolves document compile graphs.",
      "Contributed optimizations and bug fixes to core Rust libraries and developer tools in the crates.io ecosystem."
    ],
    technologies: ["Rust", "Cargo", "LaTeX", "Git", "Linux"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Rust", "TypeScript", "JavaScript", "Python", "C", "Bash"]
  },
  {
    category: "Web & Frontend",
    skills: ["Next.js", "React", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend & Systems",
    skills: ["Axum", "Actix-web", "REST APIs", "WebSockets", "Tokio", "eBPF"]
  },
  {
    category: "Tooling & Infrastructure",
    skills: ["Cargo", "Git", "Docker", "CI/CD (GitHub Actions)", "Justfile"]
  },
  {
    category: "Operating Systems",
    skills: ["Linux", "Arch Linux", "CachyOS", "POSIX Systems"]
  },
  {
    category: "Editors & Workflow",
    skills: ["Helix", "VS Code", "Neovim"]
  }
];

export const projects: Project[] = [
  {
    id: "ltx",
    slug: "ltx",
    title: "ltx",
    description: "An extremely fast LaTeX project manager written in Rust. It resolves document dependency graphs and handles multi-pass compilation automatically.",
    longDescription: "ltx treats LaTeX documents like modern software codebases, featuring incremental builds, automatic bibtex/biber resolution, and a tight write-compile-preview watch mode loop.",
    image: "/images/projects/ltx-logo.svg",
    technologies: ["Rust", "LaTeX", "Cargo", "POSIX", "CI/CD"],
    github: "https://github.com/abderrahmanbenani/ltx",
    demo: "",
    featured: true,
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
    id: "sysinfo-tui",
    slug: "sysinfo-tui",
    title: "sysinfo-tui",
    description: "A lightweight terminal user interface for real-time system monitoring, written in Rust using Ratatui.",
    longDescription: "A highly customizable system monitor displaying CPU usage per core, memory usage, disk I/O, network traffic, running processes, and temperature sensors with negligible resource overhead.",
    image: "/images/projects/sysinfo-tui.svg",
    technologies: ["Rust", "Ratatui", "Crossterm", "Sysinfo"],
    github: "https://github.com/abderrahmanbenani/sysinfo-tui",
    demo: "",
    featured: true,
    challenges: "Updating terminal cells at high frequency (60fps) without hogging CPU cores or introducing visual flickering. Handling terminal resize events gracefully while maintaining correct grid layouts.",
    lessons: "Mastered double-buffering layouts in Ratatui and optimized system information polling using background threads to prevent blocking the UI render loop.",
    architecture: `
+------------------+     +-------------------+
| System Collector | --> | Polling Thread    |
| (sysinfo crate)  |     | (1s interval)     |
+------------------+     +-------------------+
                                   |
                                   v
+------------------+     +-------------------+
| Ratatui UI Loop  | <-- | IPC Event Channel |
| (60fps redraw)   |     |                   |
+------------------+     +-------------------+
`,
    content: `
### Overview

\`sysinfo-tui\` is a fast, terminal-based dashboard that provides real-time stats of your system resources. It is designed to be lightweight, running as a background utility or a standalone monitor.

### Key Features

- **Multi-core CPU Chart**: Shows live utilization graphs for each core.
- **Process Manager**: Sort processes by CPU, memory, pid, or name, with support for killing processes from the TUI.
- **Network Interface Monitor**: Tracks RX/TX rates in real time.
- **Temperature & Fan Speed**: Integrated sensor logging (helpful for CachyOS / performance tweaking).
- **Minimal Footprint**: Uses less than 15MB of RAM and < 1% CPU.
`
  },
  {
    id: "rsh",
    slug: "rsh",
    title: "rsh",
    description: "A minimal, POSIX-compliant command-line shell written in Rust for UNIX systems programming research.",
    longDescription: "A pedagogical shell implemented in Rust to study system calls, signal handling, job control, pipeline redirection, and terminal interfaces.",
    image: "/images/projects/rsh.svg",
    technologies: ["Rust", "Nix", "POSIX", "Systems Programming"],
    github: "https://github.com/abderrahmanbenani/rsh",
    demo: "",
    featured: false,
    challenges: "Properly managing process groups, controlling terminals, and handling signals like SIGINT and SIGTSTP to prevent the parent shell from crashing when background tasks are suspended or killed.",
    lessons: "Deepened knowledge of UNIX system calls (\`fork\`, \`execve\`, \`dup2\`, \`pipe\`, \`setpgid\`). Gained appreciation for how shells manage subprocess lifecycles safely.",
    architecture: `
+-------------------------------------------------+
|               Read-Eval-Print Loop              |
+-------------------------------------------------+
                        |
                        v
+-------------------------------------------------+
|             Parser & AST Generator              |
|  - Handles redirections (>, <, 2>)              |
|  - Resolves pipelines (cmd1 | cmd2)             |
+-------------------------------------------------+
                        |
                        v
+-------------------------------------------------+
|               Process Spawner                   |
|  - Calls fork() and execvp() equivalent         |
|  - Sets up pipe file descriptors                |
+-------------------------------------------------+
                        |
                        v
+-------------------------------------------------+
|                Job Controller                   |
|  - Tracks background and foreground jobs        |
|  - Manages terminal ownership                   |
+-------------------------------------------------+
`,
    content: `
### Educational Purpose

\`rsh\` was written to understand the under-the-hood complexities of modern shells like Bash or Zsh. It avoids high-level abstractions where possible, calling directly into system libraries.

### Supported Features

- **Command Execution**: Runs any binary found in system \`PATH\`.
- **Pipelines**: Supports arbitrary pipe lengths (\`cat file | grep text | wc -l\`).
- **File Redirection**: Supports stdin (\`<\`), stdout (\`>\`), and stderr (\`2>\`) redirecting.
- **Job Control**: Run jobs in background (\`&\`), view active jobs with \`jobs\`, and bring them to foreground (\`fg\`).
`
  }
];


