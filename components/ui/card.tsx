import { ndot47, ntype82 } from "@/config/fonts";
import { Card, CardHeader, CardBody, CardFooter, Chip } from "@heroui/react";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { FaRust } from "react-icons/fa6";

/**
 * Props for TheCard component
 */
interface CardProps {

  /** Optional Tailwind classes applied to main card container */
  stylecard?: string;

  /** Image source URL or path (must be a string) */
  img: StaticImageData;

  /** Alternate text for the image */
  imgalt: string;

  /** Size object specifying width and height of the image */
  size?: {
    width: number;
    height: number;
  };

  /** Title text displayed in the card */
  title: string;

  /** Optional description text shown below the title and inside the chip */
  description?: string;

}

/**
 * TheCard is a reusable card UI component using HeroUI and TailwindCSS.
 * It displays an image, title, description, and an icon inside a chip.
 */
export default function TheCard({
  stylecard = "",
  img,
  imgalt,
  size = { width: 100, height: 100 },
  title,
  description = "",
}: CardProps) {
  return (
    <Card
      className={stylecard}
      shadow="md"
    >
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
      <CardFooter className="flex flex-wrap gap-2">
        <Chip
          startContent={<FaRust />}
          radius="sm"
          size="sm"
          className="bg-custgray-200 text-custgray-800 dark:text-custgray-200 border gap-1 text-sm p-2 border-custgray-800/60 dark:border-navycharcoal-800/30 dark:bg-navycharcoal-800"
        >
          Rust
        </Chip>
      </CardFooter>

    </Card>
  );
}
// {/* Card Footer - Chip with Icon and Description */}
// <CardFooter className="flex justify-center">
//   {icons.map((iconEl, idx) => (
//     <Chip
//       key={idx}
//       startContent={iconEl}
//       radius="sm"
//       size="sm"
//       className="bg-gray-100 text-gray-800"
//     >
//       {description}
//     </Chip>
//   ))}
// </CardFooter>
