"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-background border-border/40 border-t py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-2">
          <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
            Work Experience
          </h2>
          <div className="bg-primary h-1 w-12 rounded" />
        </div>

        {/* Timeline Layout */}
        <div className="border-border relative ml-3 space-y-12 border-l sm:ml-6">
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
              <div className="border-border bg-background absolute top-1.5 -left-[13px] flex h-6 w-6 items-center justify-center rounded-full border shadow-sm select-none">
                <Briefcase className="text-muted-foreground h-3 w-3" />
              </div>

              {/* Card Container */}
              <div className="border-border bg-card rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  {/* Title & Company */}
                  <div>
                    <h3 className="text-foreground text-lg leading-snug font-semibold">
                      {exp.role}
                    </h3>
                    <span className="text-muted-foreground text-sm font-medium">
                      {exp.company}
                    </span>
                  </div>
                  {/* Duration */}
                  <div className="text-muted-foreground bg-muted/60 border-border/30 flex items-center gap-1.5 self-start rounded-md border px-2.5 py-1 font-mono text-xs sm:self-center">
                    <Calendar className="h-3 w-3" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="text-muted-foreground mb-5 ml-5 list-disc space-y-2 text-sm [&>li]:leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="border-border/40 flex flex-wrap gap-1.5 border-t pt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-foreground border-border/40 rounded border px-2.5 py-0.5 font-mono text-xs"
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
  );
}
