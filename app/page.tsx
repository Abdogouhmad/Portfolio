"use client";
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { FlipWords } from "@/components/ui/flip-words";
import me from "@/public/me.png";
import Sxbtn from "@/components/ui/sxbt";
import ServicesProvided from "@/components/features/features.component";
import TechSection from "@/components/techs/techs.component";
import { ntype82Mono, ndot47 } from "@/config/fonts";
export default function Home() {
  return (
    <section>
      <article className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-24">
        {/* text of the hero */}
        <div className="flex flex-col gap-10">
          {/*Marketed text*/}
          <h1
            className={`${ndot47.className} text-4xl leading-[1.2] font-extrabold text-wrap text-neutral-700 md:text-6xl dark:text-neutral-200`}
          >
            {siteConfig.hero.big_one}
            <span>
              <FlipWords
                className="text-dusty-500 dark:text-dusty-400"
                words={siteConfig.hero.fliped}
              />
            </span>
            {siteConfig.hero.big_two}
          </h1>

          {/*short of me*/}
          <h2
            className={`${ntype82Mono.className} text-left text-base text-neutral-700 dark:text-neutral-200`}
          >
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
          {/* Image Insert */}{" "}
          {/* NOTE: change the pic image to match the colors */}
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
          {/*
          <CardFooter className="absolute right-2 bottom-2 left-2 flex flex-col items-start rounded-sm bg-linear-to-t from-dusty-400/90 to-dusty-700/70 px-4 py-3 shadow-xl">
            <p className="text-sm font-semibold text-custgray-800 italic">
              "Many ideas grow better when transplanted into another mind than
              the one where they sprang up."
            </p>
            <span className="mt-1 text-xs font-medium text-custgray-600">
              – Oliver Wendell Holmes
            </span>
          </CardFooter>
          */}
        </Card>
      </article>
      {/* Add a gap between hero and features */}
      <div className="h-40" />
      {/* feat provided */}
      <article className="items-center justify-center space-y-10">
        <ServicesProvided />
      </article>
      <div className="h-32" />
      <hr className="absolute right-0 left-0 w-screen border-0 border-t border-neutral-700 dark:border-stone-700" />
      <div className="h-32" />
      {/* Techs I know :) */}
      <article>
        <TechSection />
      </article>
    </section>
  );
}
