// components/projects.tsx
import TheCard from "../ui/card";

import { Projectsite, siteConfig } from "@/config/site";
import { iconMap } from "@/config/icon";
import { ndot47, ntype82Headline } from "@/config/fonts";

export default function Mprojects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className={`${ndot47.className} text-5xl font-bold tracking-wider`}>
          {siteConfig.project.title}
        </h1>
        <p
          className={`${ntype82Headline.className} mt-4 text-xl text-gray-400`}
        >
          {siteConfig.project.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {Projectsite.map((item, index) => (
          <TheCard
            key={index}
            description={item.description}
            iconame={item.iconNames.map((name) => iconMap[name])}
            img={item.img}
            imgalt={item.alt}
            langs={item.lang}
            size={{ width: 100, height: 100 }}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
