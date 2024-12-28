"use client";
// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";

// import { motion } from "framer-motion"; // For animations
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  return (
    <section className="flex flex-col justify-end items-end gap-3 py-16 md:py-20 md:px-4 md:gap-8 md:justify-start md:items-start">
      {/* Name Section */}
      <div
        className="text-4xl md:text-6xl font-extrabold text-neutral-800 dark:text-neutral-200 text-start "
      >
        Hi, I am {""}
        <span className={title({ color: "yellow", size: "lg" })}>{siteConfig.my_info.name}</span>
      </div>

      {/* Occupation Section */}
      <div
        className="text-2xl md:text-3xl font-medium text-neutral-700 dark:text-neutral-400 "
      >
        <span className="font-bold text-neutral-700 dark:text-neutral-200 "> A {" "}
          <FlipWords words={siteConfig.my_info.occupation} />
        </span>
      </div>
    </section>
  );
}
// <div className="mt-8">
//   <Snippet hideCopyButton hideSymbol variant="bordered">
//     <span>
//       Get started by editing <Code color="primary">app/page.tsx</Code>
//     </span>
//   </Snippet>
// </div>
// <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//   <div className="inline-block max-w-xl text-center justify-center">
//     <span className={title()}>Make&nbsp;</span>
//     <span className={title({ color: "yellow" })}>beautiful&nbsp;</span>
//     <br />
//     <span className={title()}>
//       websites regardless of your design experience.
//     </span>
//     <div className={subtitle({ class: "mt-5" })}>
//       Beautiful, fast and modern React UI library.
//     </div>
//   </div>
// </section>
