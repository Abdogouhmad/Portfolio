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
  { name: "Python", icon: PythonOriginal },
  { name: "TypeScript", icon: TypescriptOriginal },
  { name: "JavaScript", icon: JavascriptOriginal },
  { name: "Dart", icon: DartOriginal },
  { name: "Bash", icon: BashOriginal },
];

const frameworks = [
  { name: "Tauri", icon: TauriOriginal },
  { name: "React", icon: ReactOriginal },
  { name: "Next.js", icon: NextjsOriginal },
  { name: "Svelte", icon: SvelteOriginal },
  { name: "Express", icon: ExpressOriginalWordmark, id: "express" },
  { name: "TailwindCSS", icon: TailwindcssOriginal },
];

const devops = [
  { name: "AWS", icon: AmazonwebservicesOriginalWordmark },
  { name: "Docker", icon: DockerOriginalWordmark },
  { name: "GitHub", icon: GithubOriginal },
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
      <div className="flex flex-col gap-10 text-neutral-700 dark:text-neutral-200 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          {siteConfig.techs.title}
        </h1>
        <p className="text-lg md:text-xl font-light text-center tracking-wide">
          {siteConfig.techs.subtitle}
        </p>
      </div>

      {/* langs */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-200 font-semibold text-center mb-8">
          {siteConfig.techs.lang}
        </h2>
        <div className="grid grid-cols-3 gap-5 items-center justify-center">
          {langs.map((lang) => {
            const Icon = lang.icon;
            return (
              <div
                key={lang.name}
                className="flex flex-col items-center justify-center gap-2"
              >
                <Icon
                  size={80}
                  className={`
    ${lang.id === "rust" && theme === "dark" ? "fill-[#f74c00]" : ""}
  `}
                />

                <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 font-medium">
                  {lang.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* frameworks */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-200 font-semibold text-center mb-8">
          {siteConfig.techs.frmw}
        </h2>
        <div className="grid grid-cols-3 gap-5 items-center justify-center">
          {frameworks.map((framework) => {
            const Icon = framework.icon;
            return (
              <div
                key={framework.name}
                className="flex flex-col items-center justify-center gap-2"
              >
                <Icon
                  size={80}
                  className={`
    ${framework.id === "express" && theme === "dark" ? "fill-neutral-200" : ""}
  `}
                />

                <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 font-medium">
                  {framework.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* devops */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-200 font-semibold text-center mb-8">
          {siteConfig.techs.dvops}
        </h2>
        <div className="grid grid-cols-3 gap-5 items-center justify-center">
          {devops.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center gap-2"
              >
                <Icon size={80} />
                <p className="text-sm text-neutral-700 dark:text-neutral-200 md:text-base font-medium">
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
