"use client"

import { motion } from "framer-motion"
import { experiences } from "@/data/portfolio"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background border-t border-border/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Work Experience</h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-border ml-3 sm:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[13px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background shadow-sm select-none">
                <Briefcase className="h-3 w-3 text-muted-foreground" />
              </div>

              {/* Card Container */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  {/* Title & Company */}
                  <div>
                    <h3 className="font-semibold text-lg text-foreground leading-snug">{exp.role}</h3>
                    <span className="text-sm font-medium text-muted-foreground">{exp.company}</span>
                  </div>
                  {/* Duration */}
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono bg-muted/60 px-2.5 py-1 rounded-md border border-border/30 self-start sm:self-center">
                    <Calendar className="h-3 w-3" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="list-disc ml-5 space-y-2 text-sm text-muted-foreground mb-5 [&>li]:leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-muted px-2.5 py-0.5 text-xs font-mono text-foreground border border-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
