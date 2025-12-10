import { Card, CardHeader, CardBody, CardFooter, Chip } from "@heroui/react";
import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";

import { ndot47 } from "@/config/fonts";

interface CardProps {
  langs: string[];
  iconame: IconType[];
  stylecard?: string;
  img: StaticImageData | string; // Updated to allow string URLs too
  imgalt: string;
  // Size is less relevant for responsive images using 'fill', but kept for compatibility
  size?: {
    width: number;
    height: number;
  };
  title: string;
  description?: string;
}

export default function TheCard({
  langs,
  iconame,
  stylecard = "",
  img,
  imgalt,
  title,
  description = "",
}: CardProps) {
  return (
    <div
      className={`group relative h-full transition-all duration-300 ease-in-out hover:-translate-y-2 ${stylecard}`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 rounded-xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50" />

      <Card className="bg-custgray-200 dark:bg-navycharcoal-900 border-custgray-800/50 dark:border-navycharcoal-800/50 dark:hover:border-dusty-600/50 hover:border-dusty-600 flex h-full w-full flex-col overflow-hidden rounded-xl border p-2 shadow-lg transition-transform">

        {/* Card Header - Image Container */}
        {/* Added 'relative' and 'overflow-hidden' for correct Next.js Image filling */}
        <CardHeader className="relative w-full p-0 overflow-hidden h-52 sm:h-60">
          <Image
            alt={imgalt}
            src={img}
            fill // This makes the image fill the container absolutely
            priority={false} // Set to true if these cards are "above the fold"
            quality={95} // High quality setting
            // 'sizes' ensures the browser downloads the high-res version on large screens
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={{
              // Optional: prevents blurriness during scaling animation
              backfaceVisibility: "hidden",
              WebkitFontSmoothing: "antialiased"
            }}
          />
        </CardHeader>

        {/* Card Body */}
        <CardBody className="flex flex-grow flex-col gap-4 p-6">
          <h2 className={`${ndot47.className} text-center text-2xl font-bold`}>
            {title}
          </h2>
          {description && (
            <p className="flex-grow text-left text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </CardBody>
        {/* Card Footer */}
        <CardFooter className="flex flex-wrap gap-2 px-6 pb-6 mt-auto">
          {iconame.map((Icon, index) => (
            <Chip
              key={index}
              className="dark:bg-navycharcoal-800 bg-dusty-300 rounded-full px-3 py-1 text-sm font-medium text-gray-800"
              radius="sm"
              size="sm"
              startContent={<Icon className="text-sm" />}
            >
              {langs[index]}
            </Chip>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
