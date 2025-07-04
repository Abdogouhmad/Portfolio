// components/projects.tsx
import { Projectsite, siteConfig } from "@/config/site";
import TheCard from "../ui/card";
import { iconMap } from "@/config/icon";
import { ndot47, ntype82Headline } from "@/config/fonts";

export default function Mprojects() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-10 flex flex-col items-center justify-center gap-6 text-neutral-700 dark:text-neutral-200">
        <h1 className={`${ndot47.className} text-center text-4xl font-bold md:text-6xl`}>
          {siteConfig.project.title}
        </h1>
        <p className={`${ntype82Headline.className} text-center text-lg font-medium tracking-wide md:text-xl`}>
          {siteConfig.project.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {Projectsite.map((item, index) => (
          <TheCard
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
            imgalt={item.alt}
            langs={item.lang}
            iconame={item.iconNames.map(name => iconMap[name])} // map strings to icon components
            size={{ width: 150, height: 100 }}
            stylecard="gap-5 border dark:border-navycharcoal-700/60 rounded-sm bg-transparent p-2 border-custgray-800/60 dark:hover:bg-navycharcoal-800/50 hover:bg-custgray-300/60"
          />
        ))}
      </div>
    </div>
  );
}
