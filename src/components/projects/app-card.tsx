import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Smartphone } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { TechChips } from "@/components/projects/tech-chips";

interface AppCardProps {
  project: Project;
}

/** Compact icon-first card for mobile apps. */
export function AppCard({ project }: AppCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group border-border bg-card hover:border-foreground/20 flex h-full flex-col rounded-xl border p-5 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="border-border bg-muted relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border">
          <Image
            src={project.image}
            alt={`${project.title} app icon`}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1 space-y-1.5">
          <h3 className="text-foreground group-hover:text-primary text-lg leading-tight font-semibold transition-colors">
            {project.title}
          </h3>
          <span className="text-muted-foreground border-border/50 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px]">
            <Smartphone className="h-3 w-3" aria-hidden="true" />
            {project.platform ?? "Mobile"}
          </span>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
            {project.tagline ?? project.description}
          </p>
        </div>
      </div>

      <TechChips items={project.technologies} limit={3} className="mt-4" />

      <div className="border-border/40 mt-auto flex items-center justify-between border-t pt-4">
        <span className="text-foreground text-sm font-medium">
          Read case study
        </span>
        <ArrowUpRight
          className="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
