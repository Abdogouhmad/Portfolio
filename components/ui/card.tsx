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
    <Card className={stylecard} shadow="md">
      {/* Card Header - Image Section */}
      <CardHeader className="flex justify-center">
        <Image
          src={img}
          alt={imgalt}
          width={size.width}
          height={size.height}
          className="rounded"
        />
      </CardHeader>

      {/* Card Body - Title & Description */}
      <CardBody className="gap-3">
        <h1 className={`${ndot47.className} text-xl text-center`}>{title}</h1>
        {description && <p className="text-base text-custgray-600 text-left">{description}</p>}
      </CardBody>

      {/* Card Footer - Chips with Icon + Lang */}
      <CardFooter className="flex flex-wrap gap-2">
        {iconame.map((Icon, index) => (
          <Chip
            key={index}
            startContent={<Icon />}
            radius="sm"
            size="sm"
            className="bg-custgray-200 text-custgray-800 dark:text-custgray-200 border gap-1 text-sm p-2 border-custgray-800/60 dark:border-navycharcoal-800/30 dark:bg-navycharcoal-800"
          >
            {langs[index]}
          </Chip>
        ))}
      </CardFooter>
    </Card>
  );
}
