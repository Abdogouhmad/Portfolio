import { Card, CardHeader, CardBody, CardFooter, Chip } from "@heroui/react";

export default function TheCard({
  children,
  className,
  img,
  title,
  description,
  colorcode,
}: Cardtype) {
  return (
    <Card>
      <CardHeader>
        {/* Here will be an image */}
      </CardHeader>
      <CardBody>
        {/* Title and descriptio */}
      </CardBody>
      <CardFooter>
        {/* chip */}
      </CardFooter>
    </Card>
  );
}

interface Cardtype {
  children: React.ReactNode;
  className?: string;
  img: HTMLImageElement;
  title: String;
  description?: String;
  colorcode?: string
}
