"use client";

import { siteConfig } from "@/config/site";
// langs
import { RustOriginal } from "devicons-react";
import { PythonOriginal } from "devicons-react";
import { TypescriptOriginal } from "devicons-react";
import { JavascriptOriginal } from "devicons-react";
import { DartOriginal } from "devicons-react";
import { BashOriginal } from "devicons-react";
// frameworks
import { TauriOriginal } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { NextjsOriginal } from "devicons-react";
import { SvelteOriginal } from "devicons-react";
import { ExpressOriginalWordmark } from "devicons-react";
import { TailwindcssOriginal } from "devicons-react";
// devops
import { AmazonwebservicesOriginalWordmark } from "devicons-react";
import { DockerOriginalWordmark } from "devicons-react";
import { GithubOriginal } from "devicons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const langs = [
  { name: "Rust", icon: RustOriginal, id: "rust" },
  { name: "Python", icon: PythonOriginal, id: "python" },
  { name: "TypeScript", icon: TypescriptOriginal, id: "typescript" },
  { name: "JavaScript", icon: JavascriptOriginal, id: "javascript" },
  { name: "Dart", icon: DartOriginal, id: "dart" },
  { name: "Bash", icon: BashOriginal, id: "bash" },
];

const frameworks = [
  { name: "Tauri", icon: TauriOriginal, id: "tauri" },
  { name: "React", icon: ReactOriginal, id: "react" },
  { name: "Svelte", icon: SvelteOriginal, id: "svelte" },
  { name: "Next.js", icon: NextjsOriginal, id: "nextjs" },
  { name: "Express", icon: ExpressOriginalWordmark, id: "express" },
  { name: "TailwindCSS", icon: TailwindcssOriginal, id: "tailwindcss" },
];

const devops = [
  { name: "GitHub", icon: GithubOriginal, id: "github" },
  { name: "AWS", icon: AmazonwebservicesOriginalWordmark, id: "aws" },
  { name: "Docker", icon: DockerOriginalWordmark, id: "docker" },
];

export default function Techs() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure this component is only rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering dynamic theme-dependent code on the server
  }

  return (
    <>
      {/* titles */}
      <div className="flex flex-col items-center justify-center gap-10 text-neutral-700 dark:text-neutral-200">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          {siteConfig.techs.title}
        </h1>
        <p className="text-center text-lg font-medium tracking-wide md:text-xl">
          {siteConfig.techs.subtitle}
        </p>
      </div>

      {/* langs */}
      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-neutral-700 dark:text-neutral-200 md:text-3xl">
          {siteConfig.techs.lang}
        </h2>
        <div className="grid grid-cols-3 items-center justify-center gap-5">
          {langs.map((lang) => {
            const Icon = lang.icon;
            return (
              <div
                key={lang.id}
                className="flex flex-col items-center justify-center gap-2"
              >
                <Icon
                  size={80}
                  className={` ${lang.id === "rust" && theme === "dark" ? "fill-[#f74c00]" : ""} `}
                />
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200 md:text-base">
                  {lang.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* frameworks */}
      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-neutral-700 dark:text-neutral-200 md:text-3xl">
          {siteConfig.techs.frmw}
        </h2>
        <div className="grid grid-cols-3 items-center justify-center gap-5">
          {frameworks.map((framework) => {
            const Icon = framework.icon;
            return (
              <div
                key={framework.id}
                className="flex flex-col items-center justify-center gap-2"
              >
                <Icon
                  size={80}
                  className={` ${framework.id === "express" && theme === "dark" ? "fill-neutral-200" : ""} `}
                />
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200 md:text-base">
                  {framework.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* devops */}
      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-neutral-700 dark:text-neutral-200 md:text-3xl">
          {siteConfig.techs.dvops}
        </h2>
        <div className="grid grid-cols-3 items-center justify-center gap-5">
          {devops.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                className="flex flex-col items-center justify-center gap-2"
              >
                <Icon
                  size={80}
                  className={` ${tool.id === "aws" && theme === "dark" ? "fill-white" : ""} `}
                />
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200 md:text-base">
                  {tool.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
