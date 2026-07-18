"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/shared/icons";
import { projects } from "@/data/portfolio";

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
        <div className="mb-12 flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Projects
            </h2>
            <div className="bg-primary h-1 w-12 rounded" />
          </div>
          <span className="text-muted-foreground hidden font-mono text-xs sm:block">
            Ctrl + K to search all projects
          </span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group border-border bg-card hover:border-foreground/20 relative flex flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Banner */}
              <div className="bg-muted border-border relative flex h-48 w-full items-center justify-center border-b p-6 select-none">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={96}
                  height={96}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority={project.featured}
                />
                {project.featured && (
                  <span className="border-primary/20 bg-primary/5 text-primary absolute top-4 right-4 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold">
                    Featured
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col space-y-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-foreground group-hover:text-primary text-lg font-semibold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-foreground border-border/40 rounded border px-2 py-0.5 font-mono text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-muted-foreground self-center font-mono text-[10px]">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Bottom Actions */}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
