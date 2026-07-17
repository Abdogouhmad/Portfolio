"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"
import { GithubIcon as Github } from "@/components/shared/icons"
import { projects } from "@/data/portfolio"

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const

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
  } as const

  return (
    <section id="projects" className="py-20 bg-background border-t border-border/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Featured Projects</h2>
            <div className="h-1 w-12 bg-primary rounded" />
          </div>
          <span className="text-xs font-mono text-muted-foreground hidden sm:block">
            Ctrl + K to search all projects
          </span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full bg-muted flex items-center justify-center p-6 border-b border-border select-none">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={96}
                  height={96}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority={project.featured}
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] font-mono text-primary font-semibold">
                    Featured
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-muted px-2 py-0.5 text-[10px] font-mono text-foreground border border-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono text-muted-foreground self-center">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-border/40">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:opacity-80 transition-opacity"
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
  )
}
