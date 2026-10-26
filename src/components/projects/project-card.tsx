import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/shared/icons";
import type { Project } from "@/data/portfolio";
import { TechChips } from "@/components/projects/tech-chips";

interface ProjectCardProps {
  project: Project;
}

/** Existing wide card for Rust and tooling projects. */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group border-border bg-card hover:border-foreground/20 relative flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg">
      <div className="bg-muted border-border relative flex h-48 w-full items-center justify-center border-b p-6 select-none">
        <Image
          src={project.image}
          alt={`${project.title} logo`}
          width={96}
          height={96}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {project.featured && (
          <span className="border-primary/20 bg-primary/5 text-primary absolute top-4 right-4 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-foreground group-hover:text-primary text-lg font-semibold transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <TechChips items={project.technologies} limit={4} className="pt-2" />

        <div className="border-border/40 mt-auto flex items-center justify-between border-t pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="text-foreground inline-flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-80"
          >
            <span>Read Case Study</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="View GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="View Live Demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
