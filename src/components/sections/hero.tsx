"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Mail, FileText } from "lucide-react"
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/shared/icons"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="relative flex min-h-[85vh] items-center justify-center bg-dot-pattern py-20">
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Tech badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground font-mono">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for new projects</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Abderrahman Gouhmad
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground font-medium">
              Systems Engineer specializing in{" "}
              <span className="text-foreground font-semibold">Rust</span>,{" "}
              <span className="text-foreground font-semibold">Linux kernels</span>,{" "}
              <span className="text-foreground font-semibold">developer tooling</span>, and performance-critical systems.
            </p>
          </motion.div>

          {/* Intro paragraph */}
          <motion.p variants={itemVariants} className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
            I design and build lightweight, correct-by-construction CLI tools and low-level system integrations. I value software that is fast, deterministic, and built with craftsmanship.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-all shadow-sm cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-all cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Socials & Resume */}
          <motion.div variants={itemVariants} className="flex items-center gap-5 pt-4 border-t border-border/60 w-full max-w-xs justify-center text-muted-foreground">
            <a
              href="https://github.com/abderrahmanbenani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/abderrahman-gouhmad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:abderrahman@gouhmad.com"
              className="hover:text-foreground transition-colors"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <span className="h-4 w-px bg-border" />
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors text-sm font-medium"
              title="Download Resume"
            >
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
