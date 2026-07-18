"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import {
  Terminal,
  FileText,
  Briefcase,
  Sparkles,
  Laptop,
  Search,
} from "lucide-react";
import { projects } from "@/data/portfolio";

interface CommandPaletteProps {
  blogPosts: Array<{
    slug: string;
    title: string;
  }>;
}

export function CommandPalette({ blogPosts }: CommandPaletteProps) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="bg-background/80 fixed inset-0 backdrop-blur-sm transition-opacity"
        onClick={() => setOpen(false)}
      />

      {/* Content Container */}
      <div className="border-border bg-card relative w-full max-w-lg overflow-hidden rounded-lg border font-sans shadow-2xl transition-all">
        <Command className="flex h-full w-full flex-col">
          {/* Search Input */}
          <div className="border-border flex items-center border-b px-3 py-2.5">
            <Search className="text-muted-foreground mr-2.5 h-4 w-4 shrink-0" />
            <Command.Input
              placeholder="Type a command or search..."
              className="text-foreground placeholder:text-muted-foreground flex-1 border-0 bg-transparent p-0 text-sm outline-none focus:ring-0"
              autoFocus
            />
            <kbd className="border-border bg-muted text-muted-foreground hidden items-center gap-0.5 rounded border px-1.5 font-mono text-[10px] font-medium select-none sm:inline-flex">
              <span>ESC</span>
            </kbd>
          </div>

          {/* List of matches */}
          <Command.List className="max-h-[300px] space-y-1 overflow-y-auto p-2">
            <Command.Empty className="text-muted-foreground py-6 text-center text-sm">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigation"
              className="text-muted-foreground px-2 py-1.5 text-[10px] font-bold tracking-wider uppercase select-none"
            >
              <Command.Item
                onSelect={() => runCommand(() => router.push("/"))}
                className="text-foreground aria-selected:bg-muted aria-selected:text-foreground flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm transition-colors outline-none"
              >
                <Laptop className="text-muted-foreground h-4 w-4" />
                <span>Home / Hero</span>
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  runCommand(() => {
                    router.push("/");
                    setTimeout(
                      () =>
                        document
                          .getElementById("about")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100,
                    );
                  })
                }
                className="text-foreground aria-selected:bg-muted aria-selected:text-foreground flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm transition-colors outline-none"
              >
                <Sparkles className="text-muted-foreground h-4 w-4" />
                <span>About Me</span>
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  runCommand(() => {
                    router.push("/");
                    setTimeout(
                      () =>
                        document
                          .getElementById("experience")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100,
                    );
                  })
                }
                className="text-foreground aria-selected:bg-muted aria-selected:text-foreground flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm transition-colors outline-none"
              >
                <Briefcase className="text-muted-foreground h-4 w-4" />
                <span>Experience Timeline</span>
              </Command.Item>
            </Command.Group>

            <Command.Group
              heading="Projects"
              className="text-muted-foreground mt-2 px-2 py-1.5 text-[10px] font-bold tracking-wider uppercase select-none"
            >
              {projects.map((project) => (
                <Command.Item
                  key={project.id}
                  onSelect={() =>
                    runCommand(() => router.push(`/projects/${project.slug}`))
                  }
                  className="text-foreground aria-selected:bg-muted aria-selected:text-foreground flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm transition-colors outline-none"
                >
                  <Terminal className="text-muted-foreground h-4 w-4" />
                  <span className="truncate">
                    {project.title}{" "}
                    <span className="text-muted-foreground text-xs font-normal">
                      — {project.description.slice(0, 45)}...
                    </span>
                  </span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group
              heading="Blog Posts"
              className="text-muted-foreground mt-2 px-2 py-1.5 text-[10px] font-bold tracking-wider uppercase select-none"
            >
              {blogPosts.map((post) => (
                <Command.Item
                  key={post.slug}
                  onSelect={() =>
                    runCommand(() => router.push(`/blog/${post.slug}`))
                  }
                  className="text-foreground aria-selected:bg-muted aria-selected:text-foreground flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm transition-colors outline-none"
                >
                  <FileText className="text-muted-foreground h-4 w-4" />
                  <span className="truncate">{post.title}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
