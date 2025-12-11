import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface SxButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  variant?: "primary" | "secondary";
  icon?: boolean;
  download?: boolean; // NEW
}
export default function SxButton({
  children,
  className = "",
  href,
  external,
  variant = "primary",
  icon = false,
  download = false,
  ...props
}: SxButtonProps) {
  const baseStyles = `px-6 py-3 text-base flex items-center transition-all duration-300 rounded-lg`;

  const primaryStyles = `bg-dusty-500 text-gray-700  hover:bg-dusty-600`;
  const secondaryStyles = `font-semibold border border-dusty-500 dark:text-dusty-300 hover:bg-dusty-800/50 text-custgray-900`;

  const finalClass =
    variant === "primary"
      ? `${baseStyles} ${primaryStyles}`
      : `${baseStyles} ${secondaryStyles}`;

  return (
    <Button
      {...props}
      as={Link}
      className={`${finalClass} ${className}`}
      href={href}
      isExternal={external}
      variant="flat"
      {...(download ? { download: true } : {})}
    >
      {children}
      {icon && <FaArrowRight className="mt-0.5 ml-2" size={20} />}
    </Button>
  );
}
