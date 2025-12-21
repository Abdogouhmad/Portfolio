"use client";
import { iconsStack } from "@/config/icon";
import { useState } from "react";
import { motion } from "framer-motion";
import { ntype82Headline, ndot47 } from "@/config/fonts";
import { techStack, siteConfig } from "@/config/site";

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
        {techStack.map((tech) => {
          const Icon = iconsStack[tech.icon];

          return (
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
                {Icon && <Icon />}
              </motion.div>

              <span className="text-base font-medium">{tech.name}</span>

              {hoveredTech === tech.name && (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1"
                  initial={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[0.75rem]">{tech.level}</p>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

