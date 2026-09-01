import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import { blogPosts, formatBlogDate, getCategories } from "@/lib/blog-posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Building Blog | Design Homes Pty Ltd",
  description:
    "Practical building advice from Design Homes for new homes, duplexes, renovations, and custom builds across South East Queensland.",
  alternates: {
    canonical: `${siteUrl}/blog/`,
  },
  openGraph: {
    title: "Building Blog | Design Homes Pty Ltd",
    description:
      "Practical building advice for new homes, duplexes, renovations, and custom builds across South East Queensland.",
    type: "website",
    url: `${siteUrl}/blog/`,
    images: [
      {
        url: "/assets/images/stock/home-luxury-twilight.webp",
        width: 1200,
        height: 630,
        alt: "Design Homes building blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Blog | Design Homes",
    description: "Practical building advice for South East Queensland homes.",
    images: ["/assets/images/stock/home-luxury-twilight.webp"],
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/blog/#blog`,
    name: "Design Homes Building Blog",
    url: `${siteUrl}/blog/`,
    inLanguage: "en-AU",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}/`,
      datePublished: post.date,
      image: `${siteUrl}${post.image}`,
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <PageHero
        title="Building"
        highlight="Insights"
        description="Clear advice for planning, pricing, designing and building quality homes across South East Queensland."
        image="/assets/images/stock/home-luxury-twilight.webp"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group overflow-hidden rounded-[8px] border border-black/10 bg-white">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-black/45">
                      <span>{post.category}</span>
                      <span className="h-1 w-1 rounded-full bg-black/25" />
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {formatBlogDate(post.date, {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="font-sora text-xl font-bold leading-tight text-black">{post.title}</h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/60">{post.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F4] py-14">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <h2 className="font-sora text-lg font-semibold text-black">Browse by topic</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {getCategories().map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="rounded-full border border-black/12 bg-white px-5 py-2.5 text-sm font-medium text-black/75 transition-all hover:border-[#B69560]/50 hover:text-black"
              >
                {category.name} ({category.count})
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
