// components/ui/card.tsx
import { Card, CardHeader, CardBody, CardFooter, Chip } from "@heroui/react";
import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";

import { ndot47 } from "@/config/fonts";

interface CardProps {
  langs: string[];
  iconame: IconType[];
  stylecard?: string;
  img: StaticImageData;
  imgalt: string;
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
  size = { width: 100, height: 100 },
  title,
  description = "",
}: CardProps) {
  return (
    <div
      className={`group relative transition-all duration-300 ease-in-out hover:-translate-y-2 ${stylecard}`}
    >
      {/* Glow effect using ::before emulation */}
      <div className="absolute inset-0 -z-10 rounded-xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50" />

      <Card className="bg-custgray-200 dark:bg-navycharcoal-900 border-custgray-800/50 dark:border-navycharcoal-800/50 dark:hover:border-dusty-600/50 hover:border-dusty-600 flex h-full flex-col overflow-hidden rounded-xl border p-2 shadow-lg transition-transform">
        {/* Card Header - Image */}
        <CardHeader className="flex justify-center p-0">
          <Image
            alt={imgalt}
            className="h-48 w-full rounded-xl object-cover"
            height={size.height}
            src={img}
            width={size.width}
          />
        </CardHeader>

        {/* Card Body */}
        <CardBody className="flex flex-grow flex-col gap-4 p-6">
          <h2 className={`${ndot47.className} text-center text-2xl font-bold`}>
            {title}
          </h2>
          {description && (
            <p className="flex-grow text-left text-gray-400">{description}</p>
          )}
        </CardBody>

        {/* Card Footer */}
        <CardFooter className="flex flex-wrap gap-2 px-6 pb-6">
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
