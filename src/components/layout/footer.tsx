import { Mail, Heart } from "lucide-react"
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/shared/icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-8 mt-auto">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <span>&copy; {currentYear} Abderrahman Gouhmad. All rights reserved.</span>
          </div>

          {/* Center: Tech stack indicator */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Built with</span>
            <span className="font-mono text-foreground font-medium">Next.js</span>
            <span>&amp;</span>
            <span className="font-mono text-foreground font-medium">Tailwind v4</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse ml-0.5" />
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abderrahmanbenani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/abderrahman-gouhmad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:abderrahman@gouhmad.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
