import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight,
  Hash,
} from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { Markdown } from "@/components/shared/markdown";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Simple slugify helper matching the one in Markdown component
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .trim();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const posts = getAllPosts();
  const postIndex = posts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = posts[postIndex];
  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

  // Dynamically extract table of contents from markdown content
  const headings = post.content
    .split("\n")
    .filter(
      (line) => line.trim().startsWith("## ") || line.trim().startsWith("### "),
    )
    .map((line) => {
      const isSub = line.trim().startsWith("### ");
      const text = line.replace(/^#{2,3}\s+/, "").trim();
      return {
        text,
        id: slugify(text),
        level: isSub ? 3 : 2,
      };
    });

  return (
    <div className="bg-background min-h-screen py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Articles</span>
        </Link>

        {/* Layout Grid (Content + Sidebar) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Main Article Body */}
          <article className="space-y-8 lg:col-span-8">
            <header className="border-border space-y-4 border-b pb-8">
              {/* Meta */}
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

              {/* Title & Subtitle */}
              <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                {post.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground border-border/40 inline-flex items-center gap-1 rounded border px-2 py-0.5 font-mono text-xs"
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
              <div className="border-border/80 mt-12 grid grid-cols-1 gap-4 border-t pt-8 select-none sm:grid-cols-2">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group border-border bg-card hover:bg-muted/30 flex flex-col items-start gap-1 rounded-xl border p-4 text-left transition-all"
                  >
                    <span className="text-muted-foreground inline-flex items-center gap-1 font-mono text-[10px] font-bold tracking-wider uppercase">
                      <ChevronLeft className="h-3 w-3" />
                      <span>Previous Article</span>
                    </span>
                    <span className="text-foreground group-hover:text-primary line-clamp-1 text-sm font-semibold transition-colors">
                      {prevPost.title}
                    </span>
                  </Link>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group border-border bg-card hover:bg-muted/30 flex flex-col items-end gap-1 rounded-xl border p-4 text-right transition-all"
                  >
                    <span className="text-muted-foreground inline-flex items-center gap-1 font-mono text-[10px] font-bold tracking-wider uppercase">
                      <span>Next Article</span>
                      <ChevronRight className="h-3 w-3" />
                    </span>
                    <span className="text-foreground group-hover:text-primary line-clamp-1 text-sm font-semibold transition-colors">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            )}
          </article>

          {/* Sidebar - Table of Contents */}
          <aside className="hidden select-none lg:col-span-4 lg:block">
            <div className="border-border bg-card/60 sticky top-24 max-h-[calc(100vh-8rem)] space-y-4 overflow-y-auto rounded-xl border p-6">
              <h3 className="text-foreground border-border flex items-center gap-1.5 border-b pb-2.5 font-mono text-xs font-bold tracking-wider uppercase">
                <Hash className="text-muted-foreground h-3.5 w-3.5" />
                <span>Table of Contents</span>
              </h3>

              {headings.length > 0 ? (
                <nav className="space-y-2.5">
                  {headings.map((h, hIdx) => (
                    <a
                      key={`${h.id}-${hIdx}`}
                      href={`#${h.id}`}
                      className={`hover:text-foreground block text-xs font-medium transition-colors ${
                        h.level === 3
                          ? "text-muted-foreground/80 hover:text-foreground pl-4"
                          : "text-muted-foreground"
                      }`}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              ) : (
                <p className="text-muted-foreground text-xs">
                  No headings found in this article.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
