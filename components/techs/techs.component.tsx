import { siteConfig } from "@/config/site";

export default function Techs() {
  return (
    <>
      {/* titles */}
      <div className="flex flex-col gap-10 text-neutral-700 dark:text-neutral-200 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          {siteConfig.techs.title}
        </h1>
        <p className="text-lg md:text-xl font-light text-center tracking-wide">
          {siteConfig.techs.subtitle}
        </p>
      </div>
    </>
  )
}
