// components/ui/card.tsx
import { ndot47 } from "@/config/fonts";
import { Card, CardHeader, CardBody, CardFooter, Chip } from "@heroui/react";
import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";

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
    <div className={`relative group transition-all duration-300 ease-in-out hover:-translate-y-2 ${stylecard}`}>
      {/* Glow effect using ::before emulation */}
      <div className="absolute inset-0 -z-10 rounded-xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50"
        style={{
          background: "conic-gradient(from 90deg at 50% 50%, #10B981, #3B82F6, #8B5CF6, #EC4899, #F59E0B, #10B981)"
        }}>
      </div>

      <Card className="bg-custgray-200 dark:bg-navycharcoal-900 p-2 rounded-xl border border-custgray-800/50 dark:border-navycharcoal-800/50 dark:hover:border-dusty-600/50 hover:border-dusty-600 overflow-hidden flex flex-col h-full shadow-lg transition-transform">
        {/* Card Header - Image */}
        <CardHeader className="flex justify-center p-0">
          <Image
            src={img}
            alt={imgalt}
            width={size.width}
            height={size.height}
            className="w-full h-48 object-cover rounded-xl"
          />
        </CardHeader>

        {/* Card Body */}
        <CardBody className="flex flex-col flex-grow gap-4 p-6">
          <h2 className={`${ndot47.className} text-2xl font-bold text-center`}>{title}</h2>
          {description && <p className="text-gray-400 text-left flex-grow">{description}</p>}
        </CardBody>

        {/* Card Footer */}
        <CardFooter className="flex flex-wrap gap-2 px-6 pb-6">
          {iconame.map((Icon, index) => (
            <Chip
              key={index}
              startContent={<Icon className="text-sm" />}
              radius="sm"
              size="sm"
              className="bg-navycharcoal-700 text-white text-sm font-medium px-3 py-1 rounded-full"
            >
              {langs[index]}
            </Chip>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
