import { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts();
  const baseUrl = "https://agouhmad.vercel.app";

  const projectUrls = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p.category === "mobile" ? 0.85 : 0.8,
  }));

  const blogUrls = blogPosts.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...projectUrls,
    ...blogUrls,
  ];
}
