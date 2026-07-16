import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag, ChevronLeft, ChevronRight, Hash } from "lucide-react"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { Markdown } from "@/components/shared/markdown"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Simple slugify helper matching the one in Markdown component
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .trim()
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const posts = getAllPosts()
  const postIndex = posts.findIndex((p) => p.slug === slug)

  if (postIndex === -1) {
    notFound()
  }

  const post = posts[postIndex]
  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null

  // Dynamically extract table of contents from markdown content
  const headings = post.content
    .split("\n")
    .filter((line) => line.trim().startsWith("## ") || line.trim().startsWith("### "))
    .map((line) => {
      const isSub = line.trim().startsWith("### ")
      const text = line.replace(/^#{2,3}\s+/, "").trim()
      return {
        text,
        id: slugify(text),
        level: isSub ? 3 : 2,
      }
    })

  return (
    <div className="bg-background py-12 sm:py-20 min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Articles</span>
        </Link>

        {/* Layout Grid (Content + Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Body */}
          <article className="lg:col-span-8 space-y-8">
            <header className="space-y-4 border-b border-border pb-8">
              {/* Meta */}
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

              {/* Title & Subtitle */}
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground border border-border/40"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </header>

            {/* Markdown Body */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <Markdown content={post.content} />
            </div>

            {/* Pagination Navigation */}
            {(prevPost || nextPost) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/80 pt-8 mt-12 select-none">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group flex flex-col items-start gap-1 p-4 rounded-xl border border-border bg-card hover:bg-muted/30 transition-all text-left"
                  >
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                      <ChevronLeft className="h-3 w-3" />
                      <span>Previous Article</span>
                    </span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {prevPost.title}
                    </span>
                  </Link>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group flex flex-col items-end gap-1 p-4 rounded-xl border border-border bg-card hover:bg-muted/30 transition-all text-right"
                  >
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                      <span>Next Article</span>
                      <ChevronRight className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            )}
          </article>

          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 select-none">
            <div className="sticky top-24 border border-border rounded-xl bg-card/60 p-6 space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h3 className="font-mono text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5 border-b border-border pb-2.5">
                <Hash className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Table of Contents</span>
              </h3>
              
              {headings.length > 0 ? (
                <nav className="space-y-2.5">
                  {headings.map((h, hIdx) => (
                    <a
                      key={`${h.id}-${hIdx}`}
                      href={`#${h.id}`}
                      className={`block text-xs font-medium transition-colors hover:text-foreground ${
                        h.level === 3
                          ? "pl-4 text-muted-foreground/80 hover:text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              ) : (
                <p className="text-xs text-muted-foreground">
                  No headings found in this article.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
