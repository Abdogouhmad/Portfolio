"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiSvelte,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiDocker,
  SiRust,
  SiDart,
  SiGnubash,
  SiPrisma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { ntype82Headline, ndot47, ntype82Mono } from "@/config/fonts";
import { siteConfig } from "@/config/site";

const techStack = [
  {
    name: "Rust",
    icon: SiRust,
    color: "text-orange-600",
    level: "Intermediate",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    level: "Advanced",
  },
  { name: "Dart", icon: SiDart, color: "text-cyan-500", level: "Intermediate" },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    level: "Advanced",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
    level: "Advanced",
  },
  { name: "Python", icon: SiPython, color: "text-blue-500", level: "Advanced" },
  {
    name: "Bash",
    icon: SiGnubash,
    color: "text-neutral-500",
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    level: "Advanced",
  },
  { name: "React", icon: SiReact, color: "text-blue-500", level: "Advanced" },
  {
    name: "Svelte",
    icon: SiSvelte,
    color: "text-orange-600",
    level: "Advanced",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
    level: "Advanced",
  },
  { name: "Git", icon: SiGit, color: "text-red-500", level: "Advanced" },
  {
    name: "AWS",
    icon: FaAws,
    color: "text-black dark:text-white",
    level: "Intermediate",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-600",
    level: "Intermediate",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "text-neutral-500",
    level: "Advanced",
  },
];

export default function TechSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-10 flex flex-col items-center justify-center gap-6 text-neutral-700 dark:text-neutral-200">
        <h1
          className={`${ndot47.className} text-center text-4xl font-bold md:text-6xl`}
        >
          {siteConfig.techs.title}
        </h1>
        <p
          className={`${ntype82Headline.className} text-center text-lg font-medium tracking-wide md:text-xl`}
        >
          {siteConfig.techs.subtitle}
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group border-custgray-800/50 dark:border-navycharcoal-800/50 dark:hover:border-dusty-600/50 hover:border-dusty-600 text-custgray-800 dark:text-custgray-200 flex transform flex-col items-center rounded-xl border bg-transparent p-5 text-center transition hover:-translate-y-1"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <motion.div
              animate={{ scale: hoveredTech === tech.name ? 1.15 : 1 }}
              className={`mb-3 text-5xl ${tech.color}`}
              initial={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <tech.icon />
            </motion.div>

            <span className="text-base font-medium">{tech.name}</span>

            {hoveredTech === tech.name && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mt-1"
                initial={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
              >
                <p className={`${ntype82Mono.className} text-[0.75rem]`}>
                  {tech.level}
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
