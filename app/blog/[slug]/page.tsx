import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import { ArrowRight } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";
import {
  blogPosts,
  formatBlogDate,
  getBlogPost,
  getRelatedPosts,
  slugifyCategory,
} from "@/lib/blog-posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/about/our-builder#harj-tiwana`,
      name: "Harj Tiwana",
      url: `${siteUrl}/about/our-builder`,
    },
    articleSection: post.category,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    inLanguage: "en-AU",
  };

  const related = getRelatedPosts(post.slug);
  const categorySlug = slugifyCategory(post.category);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: `${siteUrl}/blog/category/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema]),
        }}
      />

      <article>
        <header className="relative min-h-[70vh] overflow-hidden pt-28">
          <Image src={post.image} alt={post.title} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
          <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[980px] flex-col justify-end px-6 pb-16 lg:px-10">
            <Link href="/blog" className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/70 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/65">
              <Link href={`/blog/category/${categorySlug}`} className="hover:text-white">
                {post.category}
              </Link>
              <span className="h-1 w-1 rounded-full bg-white/35" />
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" />
                {formatBlogDate(post.date, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/35" />
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
            <h1 className="font-sora text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{post.description}</p>
          </div>
        </header>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[820px] px-6 lg:px-10">
            <div className="space-y-12">
              {post.content.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">{section.heading}</h2>
                  <div className="mt-5 space-y-5">
                    {section.body.map((paragraph) => (
                      // Body copy is trusted static content from lib/blog-posts.ts and may
                      // contain inline <a> links to service and location pages.
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-black/68 [&_a]:font-semibold [&_a]:text-black [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[#B69560]"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-14 border-t border-black/10 pt-8">
              <Link
                href="/about/our-builder"
                className="group flex flex-col gap-2 rounded-2xl border border-black/[0.08] bg-[#FAFAF9] px-6 py-6 transition-all hover:border-[#B69560]/40"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                  Written by
                </span>
                <span className="font-sora text-lg font-semibold text-black">
                  Harj Tiwana — QBCC licensed builder
                </span>
                <span className="text-sm leading-7 text-black/60">
                  A carpenter by trade with award-winning New Zealand new build experience, Harj
                  runs every Design Homes site personally across South East Queensland.
                </span>
              </Link>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
              >
                Talk to a builder
              </Link>
            </div>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="bg-[#F7F6F4] py-14 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
            <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
              Related reading
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-black/[0.08] bg-white px-6 py-6 transition-all hover:-translate-y-0.5 hover:border-[#B69560]/40 hover:shadow-lg"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-black/45">
                    {other.category}
                  </span>
                  <span className="font-sora text-base font-semibold leading-snug text-black">
                    {other.title}
                  </span>
                  <span className="flex-1 text-sm leading-7 text-black/60">
                    {other.description}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-black">
                    Read
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Building in South East Queensland?"
        highlight="Send us the address."
        description="We will review the zoning, the overlays and the site conditions and come back with a straight assessment before any fees are involved."
      />

      <SiteFooter />
    </main>
  );
}
