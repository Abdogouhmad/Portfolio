import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, Terminal, Compass } from "lucide-react";
import { GithubIcon as Github } from "@/components/shared/icons";
import { projects, projectStatusConfig } from "@/data/portfolio";
import { Markdown } from "@/components/shared/markdown";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Featured Projects</span>
        </Link>

        {/* Project Header Banner */}
        <div className="border-border bg-card space-y-6 rounded-xl border p-6 shadow-sm sm:p-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h1>

            {/* Links */}
            <div className="flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-all"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Repository</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all hover:opacity-90"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed">
            {project.longDescription}
          </p>

          {/* Metadata Grid */}
          <div className="border-border/60 grid grid-cols-1 gap-6 border-t pt-6 sm:grid-cols-3">
            <div>
              <span className="text-muted-foreground mb-2 block font-mono text-xs font-bold tracking-wider uppercase">
                Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-muted text-foreground border-border/40 rounded border px-2.5 py-0.5 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-muted-foreground mb-2 block font-mono text-xs font-bold tracking-wider uppercase">
                Focus
              </span>
              <span className="text-foreground text-sm font-medium">
                Systems, Performance, Developer DX
              </span>
            </div>
            <div>
              <span className="text-muted-foreground mb-2 block font-mono text-xs font-bold tracking-wider uppercase">
                Status
              </span>
              <span className="text-foreground inline-flex items-center gap-1.5 text-sm font-medium">
                <span
                  className={`h-2 w-2 rounded-full ${projectStatusConfig[project.status].color}`}
                />
                {projectStatusConfig[project.status].label}
              </span>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="mt-12 space-y-12">
          {/* Architecture Diagram */}
          {project.architecture && (
            <div className="space-y-4">
              <h2 className="text-foreground border-border flex items-center gap-2 border-b pb-2 text-xl font-bold tracking-tight">
                <Cpu className="text-muted-foreground h-5 w-5" />
                <span>Architecture Layout</span>
              </h2>
              <div className="border-border bg-muted/30 text-foreground overflow-x-auto rounded-lg border p-4 font-mono text-xs leading-relaxed select-none">
                <pre>{project.architecture.trim()}</pre>
              </div>
            </div>
          )}

          {/* Case Study markdown */}
          <div className="space-y-4">
            <h2 className="text-foreground border-border flex items-center gap-2 border-b pb-2 text-xl font-bold tracking-tight">
              <Terminal className="text-muted-foreground h-5 w-5" />
              <span>Project Case Study &amp; Features</span>
            </h2>
            <Markdown content={project.content} />
          </div>

          {/* Challenges & Lessons */}
          <div className="grid grid-cols-1 gap-8 pt-6 md:grid-cols-2">
            <div className="border-border bg-card space-y-4 rounded-xl border p-6">
              <h3 className="text-foreground flex items-center gap-2 text-lg font-semibold">
                <Compass className="h-5 w-5 text-red-500/80" />
                <span>Challenges &amp; Obstacles</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="border-border bg-card space-y-4 rounded-xl border p-6">
              <h3 className="text-foreground flex items-center gap-2 text-lg font-semibold">
                <Terminal className="h-5 w-5 text-green-500/80" />
                <span>Key Lessons Learned</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.lessons}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
