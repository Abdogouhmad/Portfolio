"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, FileText } from "lucide-react";
import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
} from "@/components/shared/icons";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

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
  } as const;

  return (
    <section className="bg-dot-pattern relative flex min-h-[85vh] items-center justify-center py-20">
      {/* Subtle overlay gradient */}
      <div className="via-background/50 to-background pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent" />

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-8 text-center"
        >
          {/* Tech badge */}
          <motion.div
            variants={itemVariants}
            className="border-border bg-card text-muted-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span>Available for new projects</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Abderrahman Gouhmad
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg font-medium sm:text-xl">
              Software Engineer specializing in{" "}
              <span className="text-foreground font-semibold">Rust</span>,{" "}
              <span className="text-foreground font-semibold">
                Linux kernels
              </span>
              ,{" "}
              <span className="text-foreground font-semibold">
                developer tooling
              </span>
              , and performance-critical systems.
            </p>
          </motion.div>

          {/* Intro paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mx-auto max-w-xl leading-relaxed"
          >
            I design and build lightweight, Web, Mobile Applications, and
            low-level system integrations. I value software that is fast,
            deterministic, and built with craftsmanship.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group bg-primary text-primary-foreground inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:opacity-90"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-border bg-card text-foreground hover:bg-muted inline-flex cursor-pointer items-center justify-center rounded-md border px-5 py-2.5 text-sm font-medium transition-all"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Socials & Resume */}
          <motion.div
            variants={itemVariants}
            className="border-border/60 text-muted-foreground flex w-full max-w-xs items-center justify-center gap-5 border-t pt-4"
          >
            <a
              href="https://github.com/Abdogouhmad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdogouhmad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:gouhmad@hotmail.com"
              className="hover:text-foreground transition-colors"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <span className="bg-border h-4 w-px" />
            <a
              href="/resume.pdf"
              className="hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
              title="Download Resume"
            >
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
