"use client"

import * as React from "react"
import { Command } from "cmdk"
import { useRouter } from "next/navigation"
import { Terminal, FileText, Briefcase, Sparkles, Laptop, Search } from "lucide-react"
import { projects } from "@/data/portfolio"

interface CommandPaletteProps {
  blogPosts: Array<{
    slug: string
    title: string
  }>
}

export function CommandPalette({ blogPosts }: CommandPaletteProps) {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={() => setOpen(false)}
      />

      {/* Content Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-lg border border-border bg-card shadow-2xl transition-all font-sans">
        <Command className="flex flex-col h-full w-full">
          {/* Search Input */}
          <div className="flex items-center border-b border-border px-3 py-2.5">
            <Search className="h-4 w-4 mr-2.5 shrink-0 text-muted-foreground" />
            <Command.Input
              placeholder="Type a command or search..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none border-0 p-0 focus:ring-0"
              autoFocus
            />
            <kbd className="hidden sm:inline-flex select-none items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span>ESC</span>
            </kbd>
          </div>

          {/* List of matches */}
          <Command.List className="max-h-[300px] overflow-y-auto p-2 space-y-1">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="text-[10px] font-bold text-muted-foreground px-2 py-1.5 uppercase tracking-wider select-none">
              <Command.Item
                onSelect={() => runCommand(() => router.push("/"))}
                className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-foreground aria-selected:bg-muted aria-selected:text-foreground cursor-pointer transition-colors outline-none"
              >
                <Laptop className="h-4 w-4 text-muted-foreground" />
                <span>Home / Hero</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => { router.push("/"); setTimeout(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), 100) })}
                className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-foreground aria-selected:bg-muted aria-selected:text-foreground cursor-pointer transition-colors outline-none"
              >
                <Sparkles className="h-4 w-4 text-muted-foreground" />
                <span>About Me</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => { router.push("/"); setTimeout(() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }), 100) })}
                className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-foreground aria-selected:bg-muted aria-selected:text-foreground cursor-pointer transition-colors outline-none"
              >
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span>Experience Timeline</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Projects" className="text-[10px] font-bold text-muted-foreground px-2 py-1.5 uppercase tracking-wider select-none mt-2">
              {projects.map((project) => (
                <Command.Item
                  key={project.id}
                  onSelect={() => runCommand(() => router.push(`/projects/${project.slug}`))}
                  className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-foreground aria-selected:bg-muted aria-selected:text-foreground cursor-pointer transition-colors outline-none"
                >
                  <Terminal className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">
                    {project.title} <span className="text-xs text-muted-foreground font-normal">— {project.description.slice(0, 45)}...</span>
                  </span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Blog Posts" className="text-[10px] font-bold text-muted-foreground px-2 py-1.5 uppercase tracking-wider select-none mt-2">
              {blogPosts.map((post) => (
                <Command.Item
                  key={post.slug}
                  onSelect={() => runCommand(() => router.push(`/blog/${post.slug}`))}
                  className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-foreground aria-selected:bg-muted aria-selected:text-foreground cursor-pointer transition-colors outline-none"
                >
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{post.title}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
