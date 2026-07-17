"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Sun, Moon, Menu, X, Terminal, Command } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
]

export function Header() {
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false)
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-foreground font-mono font-semibold tracking-tight hover:opacity-80 transition-opacity">
            <Terminal className="h-5 w-5 text-primary" />
            <span>abderrahman.sh</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative py-1.5",
                  pathname === item.href && "text-foreground font-semibold"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Command Palette Indicator */}
            <button
              onClick={() => {
                const event = new KeyboardEvent("keydown", { key: "k", ctrlKey: true })
                window.dispatchEvent(event)
              }}
              className="flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2 py-1 text-xs text-muted-foreground hover:bg-muted transition-colors cursor-pointer select-none"
              title="Search menu (Ctrl + K)"
            >
              <Command className="h-3 w-3" />
              <span>K</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-md p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
              {!mounted && <span className="block h-4 w-4 rounded bg-muted/40 animate-pulse" />}
            </button>
          </div>

          {/* Mobile menu trigger & Theme toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-md p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
              {!mounted && <span className="block h-4 w-4 rounded bg-muted/40" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all",
                pathname === item.href && "text-foreground font-semibold bg-muted/50"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-border mt-2">
            <button
              onClick={() => {
                setIsOpen(false)
                setTimeout(() => {
                  const event = new KeyboardEvent("keydown", { key: "k", ctrlKey: true })
                  window.dispatchEvent(event)
                }, 100)
              }}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
            >
              <Command className="h-4 w-4" />
              <span>Search Command Palette (Ctrl + K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
