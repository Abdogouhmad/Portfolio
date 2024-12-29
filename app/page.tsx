"use client";
// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";

// import { motion } from "framer-motion"; // For animations
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { FlipWords } from "@/components/ui/flip-words";
import me from "@/public/abdo.jpg";

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
      {/* text of the hero */}
      <div className="grid grid-cols-1">
        {/*Marketed text*/}
        <h1 className="text-4xl md:text-6xl text-neutral-700 dark:text-neutral-200 font-extrabold">
          {siteConfig.hero.big_one}
          <span>
            <FlipWords
              className="bg-gradient-to-r from-[#FF705B] to-[#FFB457]  inline-block text-transparent bg-clip-text"
              words={siteConfig.hero.fliped}
            />
          </span>
          {siteConfig.hero.big_two}
        </h1>

        {/*short of me*/}
        <h2 className="text-lg text-neutral-700 dark:text-neutral-200 font-medium text-justify">
          {siteConfig.hero.about_me}
        </h2>
      </div>
      {/* Card and Image */}
      <Card className="border-none max-w-fit max-h-fit relative" radius="sm">
        {/* Image Insert */}
        <Image
          alt="me"
          className="object-cover rounded-sm"
          height={400}
          placeholder="blur"
          priority={true}
          quality={100}
          src={me}
          width={400}
        />
        {/* Footer */}
        <CardFooter className="absolute bottom-2 left-2 right-2 flex flex-col items-start bg-gradient-to-t from-[#FF705B]/90 to-[#FFB457]/70 rounded-sm px-4 py-3 shadow-xl">
          <p className="text-sm font-semibold text-neutral-700 italic">
            "Many ideas grow better when transplanted into another mind than the
            one where they sprang up."
          </p>
          <span className="text-xs font-medium text-neutral-600 mt-1">
            – Oliver Wendell Holmes
          </span>
        </CardFooter>
      </Card>
    </section>
  );
}
// text-4xl md:text-6xl font-extrabold text-neutral-800 dark:text-neutral-200// py-16 md:py-20 md:px-4// {/* Occupation Section */}
// <div
//   className="text-2xl md:text-3xl font-medium text-neutral-700 dark:text-neutral-400 "
// >
//   <span className="font-bold text-neutral-700 dark:text-neutral-200 "> A {" "}
//     <FlipWords words={siteConfig.my_info.occupation} />
//   </span>
// </div>
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
