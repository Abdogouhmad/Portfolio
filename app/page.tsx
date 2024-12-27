"use client"
// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from 'framer-motion'; // For animations

export default function Home() {
  const occupation = [
    "Linguistics",
    "Web Developping",
    "Rust lang"
  ];

  return (
    <section className="flex flex-col justify-center items-center px-4 gap-8 py-16 md:py-20">
      {/* Name Section */}
      <motion.div
        className="text-5xl md:text-6xl font-extrabold text-neutral-800 dark:text-neutral-200 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi there, I'm{' '}
        <span className={title({ color: 'yellow' })}>Abderrahman Gouhmad</span>
      </motion.div>


      {/* Occupation Section */}
      <motion.div
        className="text-2xl md:text-3xl font-medium text-neutral-700 dark:text-neutral-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Passionate about{' '}
        <span className="font-bold text-yellow-600 dark:text-yellow-400">
          <FlipWords words={occupation} />
        </span>
      </motion.div>
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
