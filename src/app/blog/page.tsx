import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Abderrahman Gouhmad",
  description:
    "Technical writings and guides on Rust, systems programming, developer tooling, and Linux optimization.",
};

export default function BlogIndex() {
  const blogPosts = getAllPosts();
  return (
    <div className="bg-background min-h-screen py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-border mb-16 space-y-4 border-b pb-8">
          <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Blog
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Writings on compiling systems, building CLI tools, optimizing build
            pipelines, and tuning operating system configurations.
          </p>
        </div>

        {/* Blog Post Entries */}
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col items-start gap-4"
            >
              {/* Meta information */}
              <div className="text-muted-foreground flex items-center gap-4 font-mono text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{post.publishedAt}</span>
                </span>
                <span className="bg-border h-1.5 w-1.5 rounded-full" />
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readingTime}</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="text-foreground group-hover:text-primary text-xl font-semibold tracking-tight transition-colors">
                <Link
                  href={`/blog/${post.slug}`}
                  className="focus:outline-none"
                >
                  {/* Click overlay for article */}
                  <span className="absolute inset-0 z-0 rounded-lg" />
                  {post.title}
                </Link>
              </h2>

              {/* Description */}
              <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                {post.description}
              </p>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-1.5 pt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground border-border/40 inline-flex items-center gap-1 rounded border px-2 py-0.5 font-mono text-[10px]"
                  >
                    <Tag className="h-2 w-2" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* CTA link */}
              <div className="text-primary/80 group-hover:text-primary flex items-center gap-1 pt-2 text-xs font-semibold transition-colors">
                <span>Read Full Article</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
