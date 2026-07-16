import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Cpu, Terminal, Compass } from "lucide-react"
import { GithubIcon as Github } from "@/components/shared/icons"
import { projects } from "@/data/portfolio"
import { Markdown } from "@/components/shared/markdown"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-background py-12 sm:py-20 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Featured Projects</span>
        </Link>

        {/* Project Header Banner */}
        <div className="border border-border rounded-xl bg-card p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h1>
            
            {/* Links */}
            <div className="flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-all"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Repository</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border/60">
            <div>
              <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-muted px-2.5 py-0.5 text-xs font-mono text-foreground border border-border/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Focus
              </span>
              <span className="text-sm text-foreground font-medium">
                Systems, Performance, Developer DX
              </span>
            </div>
            <div>
              <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Status
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-foreground font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Production-Ready
              </span>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="mt-12 space-y-12">
          {/* Architecture Diagram */}
          {project.architecture && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border pb-2">
                <Cpu className="h-5 w-5 text-muted-foreground" />
                <span>Architecture Layout</span>
              </h2>
              <div className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 font-mono text-xs text-foreground select-none leading-relaxed">
                <pre>{project.architecture.trim()}</pre>
              </div>
            </div>
          )}

          {/* Case Study markdown */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border pb-2">
              <Terminal className="h-5 w-5 text-muted-foreground" />
              <span>Project Case Study &amp; Features</span>
            </h2>
            <Markdown content={project.content} />
          </div>

          {/* Challenges & Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="space-y-4 rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                <Compass className="h-5 w-5 text-red-500/80" />
                <span>Challenges &amp; Obstacles</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="space-y-4 rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                <Terminal className="h-5 w-5 text-green-500/80" />
                <span>Key Lessons Learned</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.lessons}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
