"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/data/portfolio"

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  } as const

  return (
    <section id="skills" className="py-20 bg-background border-t border-border/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Technical Skills</h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              className="rounded-xl border border-border bg-card p-6 hover:border-foreground/20 hover:shadow-sm transition-all"
            >
              {/* Category Header */}
              <h3 className="font-mono text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                {cat.category}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-muted/65 border border-border/30 px-2.5 py-1 text-xs font-mono text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
