import { siteConfig } from "@/config/site";
import { MdOutlineDesignServices } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import { MdOutlineHttp } from "react-icons/md";

export default function ServicesProvided() {
  // Map icon names to their respective components
  const icons = [
    GrVmMaintenance,
    MdOutlineHttp,
    MdOutlineDesignServices,
  ];
  return (
    <>
      <div className="grid grid-col-1 items-center justify-center">
        {/* titles */}
        <div className="flex flex-col gap-10 text-neutral-700 dark:text-neutral-200">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            {siteConfig.services.title1}
          </h1>
          <p className="text-lg md:text-xl font-light text-center tracking-wide">
            {siteConfig.services.title2}
          </p>
        </div>
      </div>
      {/* services provided */}
      <div className="grid md:grid-cols-3 grid-row-3 gap-10 items-center justify-center">
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
                <div className="flex  justify-center">
                  <IconComponent className="size-16 bg-gradient-to-r from-[#FF705B]/80 to-[#FFB457]/80 rounded-full p-3 text-white" />
                </div>
              )}
              <h2 className="text-2xl font-semibold text-center">
                {item.title}
              </h2>
              <p className="text-lg font-normal text-center">
                {item.sub}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
