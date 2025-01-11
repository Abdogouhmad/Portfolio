"use client";
// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { motion } from "framer-motion"; // For animations
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { FlipWords } from "@/components/ui/flip-words";
import me from "@/public/abdo.jpg";
import Sxbtn from "@/components/ui/sxbt";

export default function Home() {
  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-24">
      {/* text of the hero */}
      <div className="flex flex-col gap-10">
        {/*Marketed text*/}
        <h1 className="text-left text-3xl font-extrabold text-neutral-700 dark:text-neutral-200 md:text-6xl">
          {siteConfig.hero.big_one}
          <span>
            <FlipWords
              className="text-orange-500 dark:text-orange-400"
              words={siteConfig.hero.fliped}
            />
          </span>
          {siteConfig.hero.big_two}
        </h1>

        {/*short of me*/}
        <h2 className="text-left text-base font-medium text-neutral-700 dark:text-neutral-200">
          {siteConfig.hero.about_me}
        </h2>

        {/*button*/}
        <div className="flex flex-row gap-8">
          {siteConfig.bt_hero.map((item) => (
            <Sxbtn key={item.id} href={item.link} external={item.external}>
              {item.title}
            </Sxbtn>
          ))}
        </div>
      </div>
      {/* Card and Image */}
      <Card className="relative max-h-fit max-w-fit border-none" radius="sm">
        {/* Image Insert */}
        <Image
          alt="me"
          className="rounded-sm object-cover"
          height={400}
          placeholder="blur"
          priority={true}
          quality={100}
          src={me}
          width={400}
        />
        {/* Footer */}
        <CardFooter className="absolute bottom-2 left-2 right-2 flex flex-col items-start rounded-sm bg-gradient-to-t from-[#FF705B]/90 to-[#FFB457]/70 px-4 py-3 shadow-xl">
          <p className="text-sm font-semibold italic text-neutral-700">
            "Many ideas grow better when transplanted into another mind than the
            one where they sprang up."
          </p>
          <span className="mt-1 text-xs font-medium text-neutral-600">
            – Oliver Wendell Holmes
          </span>
        </CardFooter>
      </Card>
    </section>
  );
}
