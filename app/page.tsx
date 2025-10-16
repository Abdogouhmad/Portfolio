"use client";
import { Card } from "@nextui-org/card";
import { ntype82Mono, ndot47 } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import me from "@/public/me_blue.png";
import ServicesProvided from "@/components/features/features.component";
import TechSection from "@/components/techs/techs.component";
import Mprojects from "@/components/projects/projects.component";
import SxButton from "@/components/ui/sxbt";

export default function Home() {
  return (
    <section>
      <article className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-24">
        {/* text of the hero */}
        <div className="flex flex-col gap-10">
          {/* Marketed text */}
          <h1
            className={`${ndot47.className} text-4xl leading-[1.2] font-extrabold text-wrap text-neutral-900 md:text-6xl dark:text-neutral-100`}
          >
            {siteConfig.hero.big_one}
            <span>
              <FlipWords
                className="text-dusty-600 dark:text-dusty-400"
                words={siteConfig.hero.fliped}
              />
            </span>
            {siteConfig.hero.big_two}
          </h1>

          {/* short of me */}
          <h2
            className={`${ntype82Mono.className} text-neutral-700 dark:text-neutral-300 text-justify text-base`}
          >
            {siteConfig.hero.about_me}
          </h2>

          {/* button */}
          <div className="flex flex-row gap-4">
            {siteConfig.bt_hero.map((item) => (
              <SxButton
                key={item.id}
                external={item.external}
                href={item.link}
                variant={item.variant as "primary" | "secondary"}
                icon={item.icon}
              >
                {item.title}
              </SxButton>
            ))}
          </div>
        </div>

        {/* Card and Image */}
        <Card className="relative max-h-fit max-w-fit border-none bg-transparent" radius="sm">
          <Image
            alt="me"
            className="min-h-fit object-contain md:min-w-fit md:object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            placeholder="blur"
            priority={true}
            quality={100}
            src={me}
            width={400}
          />
        </Card>
      </article>

      {/* spacing */}
      <div className="h-40" />

      {/* features */}
      <article className="items-center justify-center space-y-10">
        <ServicesProvided />
      </article>

      <div className="h-32" />
      <hr className="border-neutral-300 dark:border-neutral-800 absolute right-0 left-0 w-screen border-0 border-t" />
      <div className="h-32" />

      {/* techs */}
      <article>
        <TechSection />
      </article>

      <div className="h-32" />
      <article>
        <Mprojects />
      </article>
    </section>
  );
}
