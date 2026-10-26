"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/portfolio";
import { ProjectCard } from "@/components/projects/project-card";
import { AppCard } from "@/components/projects/app-card";
import { cn } from "@/lib/utils";

type ProjectFilter = "all" | ProjectCategory;

const filters: Array<{ id: ProjectFilter; label: string }> = [
  { id: "all", label: "All" },
  { id: "tooling", label: "Rust & Tooling" },
  { id: "mobile", label: "Mobile" },
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const shouldReduceMotion = useReducedMotion();

  const tooling = projects.filter((project) => project.category === "tooling");
  const mobile = projects.filter((project) => project.category === "mobile");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section
      id="projects"
      className="bg-background border-border/40 border-t py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Projects
            </h2>
            <div className="bg-primary h-1 w-12 rounded" />
            <p className="text-muted-foreground max-w-xl pt-1 text-sm leading-relaxed">
              Mobile apps and developer tooling — all built and shipped from
              source.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 sm:items-end">
            <div
              role="group"
              aria-label="Filter projects by category"
              className="border-border bg-muted/50 inline-flex rounded-lg border p-1"
            >
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  aria-pressed={filter === item.id}
                  className={cn(
                    "cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                    filter === item.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <span className="text-muted-foreground hidden font-mono text-[10px] sm:block">
              Ctrl + K to search all projects
            </span>
          </div>
        </div>

        <motion.div
          key={filter}
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {(filter === "all" || filter === "tooling") && (
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <h3 className="text-foreground font-mono text-xs font-bold tracking-wider uppercase">
                  Rust &amp; Tooling
                </h3>
                <span className="bg-border/60 h-px flex-1" />
                <span className="text-muted-foreground font-mono text-[10px]">
                  {tooling.length}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {tooling.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={shouldReduceMotion ? undefined : cardVariants}
                    className="h-full"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {(filter === "all" || filter === "mobile") && (
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <h3 className="text-foreground font-mono text-xs font-bold tracking-wider uppercase">
                  Mobile Apps
                </h3>
                <span className="bg-border/60 h-px flex-1" />
                <span className="text-muted-foreground font-mono text-[10px]">
                  {mobile.length}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {mobile.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={shouldReduceMotion ? undefined : cardVariants}
                    className="h-full"
                  >
                    <AppCard project={project} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
