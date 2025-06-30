import { Card, CardHeader, CardBody, CardFooter, Chip } from "@heroui/react";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

/**
 * Props for TheCard component
 */
interface CardProps {
  /** The icon to display inside the chip */
  icons: ReactNode[];

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

  /** Optional hex color code to style the card border */
  colorcode?: string;
}

/**
 * TheCard is a reusable card UI component using HeroUI and TailwindCSS.
 * It displays an image, title, description, and an icon inside a chip.
 */
export default function TheCard({
  icons,
  stylecard = "",
  img,
  imgalt,
  size = { width: 100, height: 100 },
  title,
  description = "",
  colorcode,
}: CardProps) {
  return (
    <Card
      // Apply custom border color if provided and add optional className
      className={stylecard}
      style={{ borderColor: colorcode }}
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
      <CardBody className="text-center">
        <h1 className="text-lg font-semibold">{title}</h1>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </CardBody>

      {/* Card Footer - Chip with Icon and Description */}
      <CardFooter className="flex justify-center">
        {icons.map((iconEl, idx) => (
          <Chip
            key={idx}
            startContent={iconEl}
            radius="sm"
            size="sm"
            className="bg-gray-100 text-gray-800"
          >
            {description}
          </Chip>
        ))}
      </CardFooter>
    </Card>
  );
}
