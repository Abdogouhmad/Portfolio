"use client";
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { FlipWords } from "@/components/ui/flip-words";
import me from "@/public/abdo.jpg";
import Sxbtn from "@/components/ui/sxbt";
import ServicesProvided from "@/components/features/features.component";
import TechSection from "@/components/techs/techs.component";

export default function Home() {
  return (
    <section>
      <article className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-24">
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
              <Sxbtn key={item.id} external={item.external} href={item.link}>
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
            className="min-h-fit max-w-fit rounded-sm object-cover"
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
              "Many ideas grow better when transplanted into another mind than
              the one where they sprang up."
            </p>
            <span className="mt-1 text-xs font-medium text-neutral-600">
              – Oliver Wendell Holmes
            </span>
          </CardFooter>
        </Card>
      </article>
      {/* Add a gap between hero and features */}
      <div className="h-40" />
      {/* feat provided */}
      <article className="items-center justify-center space-y-10">
        <ServicesProvided />
      </article>
      <div className="h-32" />
      <hr className="absolute left-0 right-0 w-screen border-0 border-t-[1px] border-neutral-700 dark:border-stone-700" />
      <div className="h-32" />
      {/* Techs I know :) */}
      <article>
        <TechSection />
      </article>
    </section>
  );
}
