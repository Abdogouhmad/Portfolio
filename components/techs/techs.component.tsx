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
import { Card, CardBody } from "@nextui-org/card";

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
    name: "Svelt",
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
      <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
        {techStack.map((tech) => (
          <Card
            key={tech.name}
            radius="sm"
            className="group border-dusty-600 relative overflow-hidden border-1 bg-transparent transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <CardBody className="flex flex-col items-center justify-center px-2 py-10">
              <motion.div
                animate={{ scale: hoveredTech === tech.name ? 1.2 : 1 }}
                className={`mb-2 text-4xl ${tech.color}`}
                initial={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <tech.icon />
              </motion.div>
              <p
                className={`${ndot47.className} text-base text-neutral-600 dark:text-neutral-300`}
              >
                {tech.name}
              </p>
              {hoveredTech === tech.name && (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 bottom-2 left-0 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className={`${ntype82Mono.className} text-neutural-700 dark:text-neutural-100 text-sm font-semibold`}
                  >
                    {tech.level}
                  </p>
                </motion.div>
              )}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
