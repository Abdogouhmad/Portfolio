import { MdOutlineDesignServices } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import { MdOutlineHttp } from "react-icons/md";

import {
  ntype82Mono,
  ndot47,
} from "@/config/fonts";
import { siteConfig } from "@/config/site";

export default function ServicesProvided() {
  // Map icon names to their respective components
  const icons = [GrVmMaintenance, MdOutlineHttp, MdOutlineDesignServices];

  return (
    <>
      <div className="grid-col-1 grid items-center justify-center">
        {/* titles */}
        <div className="flex flex-col gap-10 text-neutral-700 dark:text-neutral-200">
          <h1
            className={`${ndot47.className} text-center text-4xl font-bold md:text-6xl`}
          >
            {siteConfig.services.title1}
          </h1>
          <p
            className={`${ntype82Mono.className} text-center text-lg font-light tracking-wide md:text-xl`}
          >
            {siteConfig.services.title2}
          </p>
        </div>
      </div>
      {/* services provided */}
      <div className="grid-row-3 grid items-center justify-center gap-10 md:grid-cols-3">
        {siteConfig.services.feat.map((item, index) => {
          // Dynamically get the icon component
          const IconComponent = icons[index];

          return (
            <div
              key={index}
              className="flex flex-col gap-8 text-neutral-700 dark:text-neutral-200"
            >
              {/* Render icon */}
              {IconComponent && (
                <div className="flex justify-center">
                  <IconComponent className="size-16 rounded-full bg-linear-to-r from-dusty-400/80 to-dusty-600/80 p-3 text-white" />
                </div>
              )}
              <h2
                className={`${ndot47.className} text-center text-2xl font-semibold`}
              >
                {item.title}
              </h2>
              <p
                className={`${ntype82Mono.className} text-left text-base leading-relaxed`}
              >
                {item.sub}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
