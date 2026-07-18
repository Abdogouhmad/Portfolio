"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Terminal, Command } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-foreground flex items-center gap-2 font-mono font-semibold tracking-tight transition-opacity hover:opacity-80"
          >
            <Terminal className="text-primary h-5 w-5" />
            <span>abderrahman.sh</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-muted-foreground hover:text-foreground relative py-1.5 text-sm font-medium transition-colors",
                  pathname === item.href && "text-foreground font-semibold",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Command Palette Indicator */}
            <button
              onClick={() => {
                const event = new KeyboardEvent("keydown", {
                  key: "k",
                  ctrlKey: true,
                });
                window.dispatchEvent(event);
              }}
              className="border-border bg-muted/50 text-muted-foreground hover:bg-muted flex cursor-pointer items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors select-none"
              title="Search menu (Ctrl + K)"
            >
              <Command className="h-3 w-3" />
              <span>K</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer rounded-md p-2 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted &&
                (resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                ))}
              {!mounted && (
                <span className="bg-muted/40 block h-4 w-4 animate-pulse rounded" />
              )}
            </button>
          </div>

          {/* Mobile menu trigger & Theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer rounded-md p-2 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted &&
                (resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                ))}
              {!mounted && (
                <span className="bg-muted/40 block h-4 w-4 rounded" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer rounded-md p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-border bg-background space-y-1 border-b px-4 pt-2 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-muted-foreground hover:bg-muted hover:text-foreground block rounded-md px-3 py-2 text-base font-medium transition-all",
                pathname === item.href &&
                  "text-foreground bg-muted/50 font-semibold",
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-border mt-2 border-t pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => {
                  const event = new KeyboardEvent("keydown", {
                    key: "k",
                    ctrlKey: true,
                  });
                  window.dispatchEvent(event);
                }, 100);
              }}
              className="text-muted-foreground hover:bg-muted hover:text-foreground flex w-full items-center gap-2 rounded-md px-3 py-2 text-base font-medium transition-all"
            >
              <Command className="h-4 w-4" />
              <span>Search Command Palette (Ctrl + K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
