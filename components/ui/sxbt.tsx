import { letteraMono } from "@/config/fonts";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface SxButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external: boolean;
  variant?: "primary" | "secondary";
  icon?: boolean;
}

export default function SxButton({
  children,
  className = "",
  href,
  external,
  variant = "primary",
  icon = false,
  ...props
}: SxButtonProps) {
  const baseStyles = `${letteraMono.className} px-6 py-3 text-base font-medium flex items-center transition-all duration-300 rounded-lg`;

  const primaryStyles = `bg-dusty-500 text-white hover:bg-dusty-600`;
  const secondaryStyles = `border border-dusty-500 dark:text-dusty-300 hover:bg-dusty-900 text-custgray-900`;

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
    >
      {children}
      {icon && <FaArrowRight className="ml-2 mt-[2px]" size={20} />}
    </Button>
  );
}
