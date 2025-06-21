import { letteraMono } from "@/config/fonts";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";

interface SxButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external: boolean;
}

export default function SxButton({
  children,
  className,
  href,
  external,
  ...props
}: SxButtonProps) {
  return (
    <Button
      {...props}
      as={Link}
      className={` ${letteraMono.className} border-dusty-500/45 text-custgray-700 hover:border-dusty-500 hover:from-dusty-400 hover:to-dusty-600 dark:text-custgray-200 rounded-sm border-2 px-6 py-2 text-base tracking-wider uppercase transition-all duration-500 ease-in-out hover:bg-linear-to-r ${className}`}
      href={href}
      isExternal={external}
      variant="bordered"
    >
      {children}
    </Button>
  );
}
