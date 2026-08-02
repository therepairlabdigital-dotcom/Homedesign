import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { locations } from "@/lib/locations";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Main pages
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/locations", priority: 0.9, changeFrequency: "monthly" as const },

    // Service pages
    { path: "/services/new-home-builds", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/services/duplex-townhouses", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/services/custom-builds", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/services/queenslander-homes", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/services/commercial", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/services/interior-design", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/services/renovations", priority: 0.8, changeFrequency: "weekly" as const },
    
    // Legal pages
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/terms-of-service", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...locations.map((location) => ({
      url: `${siteUrl}/locations/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
