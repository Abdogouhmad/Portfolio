import { MdOutlineDesignServices, MdOutlineHttp } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";

import { ntype82Mono, ndot47 } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export default function ServicesProvided() {
  const icons = [GrVmMaintenance, MdOutlineHttp, MdOutlineDesignServices];

  return (
    <section
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className={`${ndot47.className} text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-4xl md:text-5xl`}
          >
            {siteConfig.services.title1}
          </h2>
          <p
            className={`${ntype82Mono.className} mx-auto mt-4 max-w-2xl text-lg font-light text-gray-500 dark:text-gray-400 md:text-xl`}
          >
            {siteConfig.services.title2}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.feat.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={index}
                className="flex flex-col border border-navycharcoal-700 rounded-xl p-8 shadow-lg transition-transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full dark:bg-navycharcoal-800 bg-navycharcoal-300/50">
                  <Icon className="text-3xl text-navycharcoal-400" />
                </div>

                {/* Title */}
                <h3
                  className={`${ndot47.className} mb-3 text-2xl font-bold text-neutral-800 dark:text-neutral-200`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className={`${ntype82Mono.className} mb-4 text-base leading-relaxed text-gray-600 dark:text-gray-300`}
                >
                  {item.sub}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="rounded-full bg-navycharcoal-300/50 px-3 py-1 text-xs font-medium text-navycharcoal-800 dark:bg-navycharcoal-700 dark:text-navycharcoal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
