import { Mail, Heart } from "lucide-react";
import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
} from "@/components/shared/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-background mt-auto border-t py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Left: Copyright */}
          <div className="text-muted-foreground text-center text-sm md:text-left">
            <span>
              &copy; {currentYear} Abderrahman Gouhmad. All rights reserved.
            </span>
          </div>

          {/* Center: Tech stack indicator */}
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            <span>Built with</span>
            <span className="text-foreground font-mono font-medium">
              Next.js
            </span>
            <span>&amp;</span>
            <span className="text-foreground font-mono font-medium">
              Tailwind v4
            </span>
            <Heart className="ml-0.5 h-3 w-3 animate-pulse fill-red-500 text-red-500" />
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Abdogouhmad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdogouhmad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:gouhmad@hotmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
