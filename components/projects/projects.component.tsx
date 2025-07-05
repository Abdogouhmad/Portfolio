// components/projects.tsx
import { Projectsite, siteConfig } from "@/config/site";
import TheCard from "../ui/card";
import { iconMap } from "@/config/icon";
import { ndot47, ntype82Headline } from "@/config/fonts";

export default function Mprojects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className={`${ndot47.className} text-5xl font-bold tracking-wider`}>
          {siteConfig.project.title}
        </h1>
        <p className={`${ntype82Headline.className} text-xl text-gray-400 mt-4`}>
          {siteConfig.project.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {Projectsite.map((item, index) => (
          <TheCard
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
            imgalt={item.alt}
            langs={item.lang}
            iconame={item.iconNames.map(name => iconMap[name])}
            size={{ width: 100, height: 100 }}
          />
        ))}
      </div>
    </div>
  );
}
