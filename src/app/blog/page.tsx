import Link from "next/link"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { getAllPosts } from "@/lib/blog"

export const metadata = {
  title: "Blog | Abderrahman Gouhmad",
  description: "Technical writings and guides on Rust, systems programming, developer tooling, and Linux optimization.",
}

export default function BlogIndex() {
  const blogPosts = getAllPosts()
  return (
    <div className="bg-background py-12 sm:py-20 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16 border-b border-border pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Technical Blog</h1>
          <p className="max-w-xl text-muted-foreground leading-relaxed">
            Writings on compiling systems, building CLI tools, optimizing build pipelines, and tuning operating system configurations.
          </p>
        </div>

        {/* Blog Post Entries */}
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group relative flex flex-col items-start gap-4">
              {/* Meta information */}
              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{post.publishedAt}</span>
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readingTime}</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                  {/* Click overlay for article */}
                  <span className="absolute inset-0 z-0 rounded-lg" />
                  {post.title}
                </Link>
              </h2>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 relative z-10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/40"
                  >
                    <Tag className="h-2 w-2" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* CTA link */}
              <div className="flex items-center gap-1 text-xs font-semibold text-primary/80 group-hover:text-primary transition-colors pt-2">
                <span>Read Full Article</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
