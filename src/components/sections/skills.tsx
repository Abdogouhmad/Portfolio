"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

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
  } as const;

  return (
    <section
      id="skills"
      className="bg-background border-border/40 border-t py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-2">
          <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
            Technical Skills
          </h2>
          <div className="bg-primary h-1 w-12 rounded" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              className="border-border bg-card hover:border-foreground/20 rounded-xl border p-6 transition-all hover:shadow-sm"
            >
              {/* Category Header */}
              <h3 className="text-foreground mb-4 font-mono text-sm font-bold tracking-wider uppercase">
                {cat.category}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-muted/65 border-border/30 text-foreground hover:bg-foreground hover:text-background hover:border-foreground inline-flex cursor-default items-center rounded-md border px-2.5 py-1 font-mono text-xs transition-all select-none"
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
  );
}
