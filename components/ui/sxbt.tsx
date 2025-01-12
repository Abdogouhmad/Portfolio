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
      className={`rounded-sm border-2 border-orange-500/45 px-6 py-2 text-sm font-medium uppercase tracking-wider text-neutral-700 transition-all duration-500 ease-in-out hover:border-orange-500 hover:bg-gradient-to-r hover:from-[#FF705B] hover:to-[#FFB457] hover:font-semibold dark:text-neutral-200 ${className}`}
      href={href}
      isExternal={external}
      variant="bordered"
    >
      {children}
    </Button>
  );
}
