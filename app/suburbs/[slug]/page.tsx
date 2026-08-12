import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Hammer, MapPin, Phone } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import MobileCTA from "@/components/shared/MobileCTA";
import { getSuburb, suburbs } from "@/lib/suburbs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

type SuburbPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return suburbs.map((suburb) => ({ slug: suburb.slug }));
}

export async function generateMetadata({ params }: SuburbPageProps): Promise<Metadata> {
  const { slug } = await params;
  const suburb = getSuburb(slug);

  if (!suburb) return {};

  const url = `${siteUrl}/suburbs/${suburb.slug}`;

  return {
    title: suburb.metaTitle,
    description: suburb.metaDescription,
    keywords: suburb.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: suburb.metaTitle,
      description: suburb.metaDescription,
      type: "website",
      url,
      images: [
        {
          url: suburb.heroImage,
          width: 1200,
          height: 630,
          alt: `Builders in ${suburb.name} — Design Homes`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: suburb.metaTitle,
      description: suburb.metaDescription,
      images: [suburb.heroImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function SuburbPage({ params }: SuburbPageProps) {
  const { slug } = await params;
  const suburb = getSuburb(slug);

  if (!suburb) notFound();

  const url = `${siteUrl}/suburbs/${suburb.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Design Homes Pty Ltd — ${suburb.name}`,
      description: suburb.metaDescription,
      url,
      image: `${siteUrl}${suburb.heroImage}`,
      telephone: "+61436376001",
      email: "info@thedesignhomes.com.au",
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Place",
        name: suburb.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: suburb.name,
          addressRegion: "QLD",
          addressCountry: "AU",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: suburb.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNavbar />
      <MobileCTA />

      <PageHero
        title={suburb.heroTitle}
        highlight={suburb.heroHighlight}
        description={suburb.heroDescription}
        image={suburb.heroImage}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: "Brisbane", href: "/locations/brisbane" },
          { label: suburb.name, href: `/suburbs/${suburb.slug}` },
        ]}
      />

      {/* Intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10">
          <h2 className="font-sora text-3xl font-bold leading-tight text-black md:text-4xl">
            Building in {suburb.name}
          </h2>
          <div className="mt-6 space-y-5">
            {suburb.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-black/68">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-8 rounded-2xl border border-black/[0.08] bg-[#FAFAF9] p-6 text-base leading-8 text-black/68">
            <span className="font-sora font-semibold text-black">Housing stock: </span>
            {suburb.housingStock}
          </p>
        </div>
      </section>

      {/* Detail sections */}
      <section className="bg-[#F7F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <div className="space-y-12">
            {suburb.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-black/68">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical projects + pockets */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
                What we build in {suburb.name}
              </h2>
              <ul className="mt-8 space-y-3">
                {suburb.typicalProjects.map((project) => (
                  <li
                    key={project}
                    className="flex items-center gap-3 rounded-xl border border-black/[0.08] bg-[#FAFAF9] px-4 py-3.5 text-sm font-medium text-black/75"
                  >
                    <Hammer className="h-4 w-4 shrink-0 text-[#B69560]" />
                    {project}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
                Pockets we work in
              </h2>
              <ul className="mt-8 space-y-3">
                {suburb.pockets.map((pocket) => (
                  <li
                    key={pocket}
                    className="flex items-center gap-3 rounded-xl border border-black/[0.08] bg-[#FAFAF9] px-4 py-3.5 text-sm font-medium text-black/75"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-[#B69560]" />
                    {pocket}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F7F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10">
          <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
            {suburb.name} building questions
          </h2>
          <div className="mt-8 space-y-6">
            {suburb.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-black/[0.08] bg-white p-6"
              >
                <h3 className="flex items-start gap-3 font-sora text-lg font-semibold text-black">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#B69560]" />
                  {faq.question}
                </h3>
                <p className="mt-3 pl-7 text-base leading-8 text-black/68">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              Talk to us about your {suburb.name} site
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:0436376001"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-7 py-3.5 text-sm font-semibold text-black transition-all hover:border-black/40"
            >
              <Phone className="h-4 w-4" />
              0436 376 001
            </a>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <h2 className="font-sora text-lg font-semibold text-black">
            Other Brisbane suburbs we build in
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {suburbs
              .filter((other) => other.slug !== suburb.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/suburbs/${other.slug}`}
                  className="rounded-full border border-black/12 bg-[#FAFAF9] px-5 py-2.5 text-sm font-medium text-black/75 transition-all hover:border-[#B69560]/50 hover:text-black"
                >
                  {other.name}
                </Link>
              ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-6 border-t border-black/[0.08] pt-8">
            <Link
              href="/locations/brisbane/queenslander-homes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#B69560]"
            >
              Queenslander renovation in Brisbane
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/locations/brisbane/renovations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#B69560]"
            >
              Home renovations in Brisbane
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/locations/brisbane"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#B69560]"
            >
              All Brisbane services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Building in ${suburb.name}?`}
        highlight="Send us the address."
        description="We will pull the property report, check the overlays and the site conditions, and come back with a straight assessment before any fees are involved."
      />

      <SiteFooter />
    </main>
  );
}
