import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Cpu,
  Download,
  ExternalLink,
  Globe,
  Layers,
  Smartphone,
  Terminal,
} from "lucide-react";
import { GithubIcon as Github } from "@/components/shared/icons";
import { projects, projectStatusConfig } from "@/data/portfolio";
import { Markdown } from "@/components/shared/markdown";
import { FeatureGrid } from "@/components/projects/feature-grid";
import { ScreenshotGallery } from "@/components/projects/screenshot-gallery";
import { TechChips } from "@/components/projects/tech-chips";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const socialImage = project.screenshots?.[0]?.src ?? project.image;
  const socialAlt =
    project.screenshots?.[0]?.alt ?? `${project.title} project icon`;
  const title = `${project.title} — Case Study`;
  const description = project.longDescription;

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: socialImage, alt: socialAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previousProject =
    projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];
  const isMobile = project.category === "mobile";
  const emptyGalleryMessage = isMobile
    ? "On-device screenshots are not published in the app repository yet. The gallery will be filled in when they are added."
    : undefined;

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

        {/* Project Hero */}
        <header className="border-border bg-card space-y-6 rounded-xl border p-6 shadow-sm sm:p-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="border-border bg-muted relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border">
                <Image
                  src={project.image}
                  alt={`${project.title} ${isMobile ? "app icon" : "logo"}`}
                  width={80}
                  height={80}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                    {project.title}
                  </h1>
                  {project.platform && (
                    <span className="border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold">
                      <Smartphone className="h-3 w-3" aria-hidden="true" />
                      {project.platform}
                    </span>
                  )}
                </div>

                {project.tagline && (
                  <p className="text-foreground max-w-xl text-base font-medium sm:text-lg">
                    {project.tagline}
                  </p>
                )}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-sm font-medium transition-all"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-all hover:opacity-90"
                >
                  <Globe className="h-4 w-4" />
                  <span>Website</span>
                </a>
              )}
              {project.release && (
                <a
                  href={project.release}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-background text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-sm font-medium transition-all"
                >
                  <Download className="h-4 w-4" />
                  <span>Releases</span>
                </a>
              )}
              {project.demo && !project.website && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-all hover:opacity-90"
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
                Platform
              </span>
              <span className="text-foreground inline-flex items-center gap-1.5 text-sm font-medium">
                {isMobile ? (
                  <Smartphone className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Terminal className="h-4 w-4" aria-hidden="true" />
                )}
                {project.platform ?? "Developer tool"}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground mb-2 block font-mono text-xs font-bold tracking-wider uppercase">
                Category
              </span>
              <span className="text-foreground text-sm font-medium">
                {isMobile ? "Mobile app" : "Rust & tooling"}
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

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted text-muted-foreground border-border/40 rounded-full border px-2.5 py-0.5 font-mono text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="mt-12 space-y-12">
          {isMobile && (
            <section
              className="space-y-4"
              aria-labelledby="screenshots-heading"
            >
              <h2
                id="screenshots-heading"
                className="text-foreground border-border flex items-center gap-2 border-b pb-2 text-xl font-bold tracking-tight"
              >
                <Smartphone className="text-muted-foreground h-5 w-5" />
                <span>Screenshots</span>
              </h2>
              <ScreenshotGallery
                screenshots={project.screenshots ?? []}
                emptyMessage={emptyGalleryMessage}
              />
              {project.screenshots &&
                project.screenshots.length > 0 &&
                project.screenshotNote && (
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {project.screenshotNote}
                  </p>
                )}
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section className="space-y-4" aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="text-foreground border-border flex items-center gap-2 border-b pb-2 text-xl font-bold tracking-tight"
              >
                <Layers className="text-muted-foreground h-5 w-5" />
                <span>Key Features</span>
              </h2>
              <FeatureGrid features={project.features} />
            </section>
          )}

          <section className="space-y-4" aria-labelledby="stack-heading">
            <h2
              id="stack-heading"
              className="text-foreground border-border flex items-center gap-2 border-b pb-2 text-xl font-bold tracking-tight"
            >
              <Terminal className="text-muted-foreground h-5 w-5" />
              <span>Tech Stack</span>
            </h2>
            <TechChips items={project.technologies} size="md" />
          </section>

          {/* Architecture Diagram */}
          {project.architecture && (
            <section
              className="space-y-4"
              aria-labelledby="architecture-heading"
            >
              <h2
                id="architecture-heading"
                className="text-foreground border-border flex items-center gap-2 border-b pb-2 text-xl font-bold tracking-tight"
              >
                <Cpu className="text-muted-foreground h-5 w-5" />
                <span>Architecture Layout</span>
              </h2>
              <div className="border-border bg-muted/30 text-foreground overflow-x-auto rounded-lg border p-4 font-mono text-xs leading-relaxed select-none">
                <pre>{project.architecture.trim()}</pre>
              </div>
            </section>
          )}

          {/* Case Study markdown */}
          {project.content && (
            <section className="space-y-4" aria-labelledby="case-study-heading">
              <h2
                id="case-study-heading"
                className="text-foreground border-border flex items-center gap-2 border-b pb-2 text-xl font-bold tracking-tight"
              >
                <Compass className="text-muted-foreground h-5 w-5" />
                <span>Project Case Study</span>
              </h2>
              <Markdown content={project.content} />
            </section>
          )}

          {/* Challenges & decisions */}
          {project.decisions && project.decisions.length > 0 ? (
            <section className="space-y-5" aria-labelledby="decisions-heading">
              <h2
                id="decisions-heading"
                className="text-foreground border-border flex items-center gap-2 border-b pb-2 text-xl font-bold tracking-tight"
              >
                <Compass className="text-muted-foreground h-5 w-5" />
                <span>Challenges &amp; Decisions</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.challenges}
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {project.decisions.map((decision, decisionIndex) => (
                  <div
                    key={decision.title}
                    className="border-border bg-card space-y-2 rounded-xl border p-5"
                  >
                    <span className="text-muted-foreground font-mono text-[10px] font-semibold tracking-wider">
                      {String(decisionIndex + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-foreground text-sm font-semibold">
                      {decision.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {decision.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-border bg-card rounded-xl border p-5">
                <h3 className="text-foreground mb-2 text-sm font-semibold">
                  Key lessons learned
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.lessons}
                </p>
              </div>
            </section>
          ) : (
            <section className="grid grid-cols-1 gap-8 pt-6 md:grid-cols-2">
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
            </section>
          )}

          {/* Previous / Next */}
          <nav
            aria-label="Project navigation"
            className="border-border grid grid-cols-1 gap-4 border-t pt-8 sm:grid-cols-2"
          >
            <Link
              href={`/projects/${previousProject.slug}`}
              className="group border-border bg-card hover:border-foreground/20 rounded-xl border p-5 transition-all"
            >
              <span className="text-muted-foreground mb-1 flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-wider uppercase">
                <ArrowLeft className="h-3 w-3" aria-hidden="true" />
                Previous project
              </span>
              <span className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                {previousProject.title}
              </span>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group border-border bg-card hover:border-foreground/20 rounded-xl border p-5 text-left transition-all sm:text-right"
            >
              <span className="text-muted-foreground mb-1 flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-wider uppercase sm:justify-end">
                Next project
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </span>
              <span className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                {nextProject.title}
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
