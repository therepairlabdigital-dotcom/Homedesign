import { MetadataRoute } from "next";
import { blogPosts, getCategories } from "@/lib/blog-posts";
import { locations } from "@/lib/locations";
import { locationServices } from "@/lib/location-services";
import { suburbs } from "@/lib/suburbs";
import { extraServices } from "@/lib/extra-services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

/**
 * next.config.ts sets trailingSlash: true, so the canonical form of every page is
 * "/path/". Sitemap URLs must match exactly — a sitemap of slash-less URLs makes
 * Google fetch a 308 for every entry before reaching the page.
 */
const url = (path: string) => (path === "" || path === "/" ? `${siteUrl}/` : `${siteUrl}${path}/`);

/**
 * Stable "last modified" for evergreen pages. Bump this when the templates or the
 * content of the static pages genuinely change. Using new Date() at build time
 * teaches Google that lastmod is meaningless, and it then ignores it site-wide.
 */
const SITE_UPDATED = new Date("2026-09-01");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Main pages
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about/our-builder", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/suburbs", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/locations", priority: 0.9, changeFrequency: "monthly" as const },

    // Service pages (hand-built)
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
      url: url(route.path),
      lastModified: SITE_UPDATED,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    // Data-driven service pages — high commercial intent
    ...extraServices.map((service) => ({
      url: url(`/services/${service.slug}`),
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...locations.map((location) => ({
      url: url(`/locations/${location.slug}`),
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    // Brisbane character suburbs
    ...suburbs.map((suburb) => ({
      url: url(`/suburbs/${suburb.slug}`),
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Location × service pages — highest commercial intent on the site
    ...locationServices.map((entry) => ({
      url: url(`/locations/${entry.locationSlug}/${entry.serviceSlug}`),
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.95,
    })),
    ...getCategories().map((category) => ({
      url: url(`/blog/category/${category.slug}`),
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
