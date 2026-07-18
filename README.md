# Abderrahman Gouhmad — Personal Portfolio

A modern, high-performance personal portfolio website for **Abderrahman Gouhmad**, a software developer specializing in Rust, Linux, systems programming, and developer tooling. Built using Next.js (latest stable, App Router), React, TypeScript, and Tailwind CSS v4.

---

## 🚀 Features

- **Clean, Professional Design**: Styled with a minimal, slate/zinc-themed aesthetic with generous whitespace and smooth transition states. Inspired by premium developer platforms.
- **Dual Themes (Light/Dark)**: Styled with `next-themes` with theme persistence.
- **Keyboard-driven Navigation (Command Palette)**: Pressing `Ctrl + K` (or `Cmd + K`) brings up a keyboard search modal to jump to specific pages, project case studies, and blog posts.
- **Dynamic Markdown Rendering**: Dynamic pages render raw markdown content natively in Server Components without third-party hydration delays.
- **Automatic Table of Contents**: Technical blog posts scan markdown headings dynamically to construct sidebar deep-links.
- **High-Quality SVGs**: Built custom inline and vector SVG illustrations (such as for `ltx`, `sysinfo-tui`, and `rsh`) ensuring pixel-perfect scaling and fast page speeds.
- **Validated Contact Interface**: Integrated a Contact form validated with Zod, and displaying interactive toast alerts using Sonner.
- **Full SEO Config**: Native dynamic XML sitemap generation (`/sitemap.xml`) and crawler files (`/robots.txt`) using the Next.js Metadata API.
- **Excellent Performance**: 100% static compilation for key routes ensuring sub-second page loads.

---

## 🛠️ Tech Stack

- **Core**: Next.js (App Router), React, TypeScript
- **Styling**: Tailwind CSS v4, clsx, tailwind-merge
- **Animations**: Framer Motion
- **Utilities**: cmdk, next-themes, sonner, zod

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── blog/              # Blog index listing page
│   │   ├── [slug]/        # Dynamic blog detail page (with dynamic TOC & pagination)
│   ├── projects/          # Projects router
│   │   ├── [slug]/        # Dynamic project detail page (case study, architecture schema)
│   ├── globals.css        # Tailwind directives and CSS theme variables
│   ├── layout.tsx         # Root Layout, wraps ThemeProvider, cmdk, & toast notifications
│   ├── page.tsx           # Home entry point combining sections
│   ├── robots.ts          # Native SEO crawler mapping
│   └── sitemap.ts         # Native dynamic XML sitemap compiler
│
├── components/
│   ├── layout/            # Sticky Header navigation and Footer
│   ├── sections/          # Landing sections: Hero, About, Experience, Skills, Projects, Contact
│   └── shared/            # ThemeProvider, custom Markdown renderer, CommandPalette, and custom SVGs
│
├── data/
│   └── portfolio.ts       # Shared data store for experience records, skill categories, projects, and blogs
│
└── lib/
    └── utils.ts           # Class merge utility (cn)
```

---

## ⚙️ Setup & Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Production Build & Type-Check

```bash
npm run build
```

The application compiles into optimized, static HTML/JSON routes for maximum client performance.

### 4. Code Standards

- Strict TypeScript implementation (no `any`).
- Server Components by default; Client Components used only where interactive hooks (`useState`, `useEffect`, `framer-motion`) are required.
- Tailwind theme values mapped cleanly to CSS variables for dark/light selectors.
