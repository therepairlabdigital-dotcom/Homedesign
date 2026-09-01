import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import MobileCTA from "@/components/shared/MobileCTA";
import { getLocation } from "@/lib/locations";
import {
  getLocationService,
  getServicesForLocation,
  locationServices,
} from "@/lib/location-services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

type LocationServicePageProps = {
  params: Promise<{ slug: string; service: string }>;
};

export function generateStaticParams() {
  return locationServices.map((entry) => ({
    slug: entry.locationSlug,
    service: entry.serviceSlug,
  }));
}

export async function generateMetadata({
  params,
}: LocationServicePageProps): Promise<Metadata> {
  const { slug, service } = await params;
  const entry = getLocationService(slug, service);

  if (!entry) return {};

  const url = `${siteUrl}/locations/${entry.locationSlug}/${entry.serviceSlug}/`;

  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    keywords: entry.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      type: "website",
      url,
      images: [
        {
          url: entry.heroImage,
          width: 1200,
          height: 630,
          alt: `${entry.serviceName} in ${entry.locationName} — Design Homes`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.metaTitle,
      description: entry.metaDescription,
      images: [entry.heroImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocationServicePage({ params }: LocationServicePageProps) {
  const { slug, service } = await params;
  const entry = getLocationService(slug, service);

  if (!entry) notFound();

  const location = getLocation(entry.locationSlug);
  const siblings = getServicesForLocation(entry.locationSlug).filter(
    (other) => other.serviceSlug !== entry.serviceSlug,
  );
  const otherCities = locationServices.filter(
    (other) =>
      other.serviceSlug === entry.serviceSlug && other.locationSlug !== entry.locationSlug,
  );
  const url = `${siteUrl}/locations/${entry.locationSlug}/${entry.serviceSlug}/`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${entry.serviceName} in ${entry.locationName}`,
      description: entry.metaDescription,
      url,
      serviceType: entry.serviceName,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${siteUrl}/#organization`,
        name: "Design Homes Pty Ltd",
        telephone: "+61436376001",
        email: "info@thedesignhomes.com.au",
        url: siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: entry.locationName,
        address: {
          "@type": "PostalAddress",
          addressRegion: "QLD",
          addressCountry: "AU",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: entry.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
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
        title={entry.heroTitle}
        highlight={entry.heroHighlight}
        description={entry.heroDescription}
        image={entry.heroImage}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: entry.locationName, href: `/locations/${entry.locationSlug}` },
          { label: entry.serviceName, href: `/locations/${entry.locationSlug}/${entry.serviceSlug}` },
        ]}
      />

      {/* Intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10">
          <h2 className="font-sora text-3xl font-bold leading-tight text-black md:text-4xl">
            {entry.serviceName} in {entry.locationName}
          </h2>
          <div className="mt-6 space-y-5">
            {entry.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-black/68">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#F7F6F4] py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {entry.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/[0.08] bg-white p-6"
              >
                <h3 className="font-sora text-base font-semibold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail sections */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <div className="space-y-12">
            {entry.sections.map((section) => (
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

      {/* Suburbs */}
      <section className="bg-[#F7F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
            {entry.serviceName.replace(/ Builds$/, "")} across {entry.region}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {entry.suburbs.map((suburb) => (
              <li
                key={suburb}
                className="flex items-center gap-3 rounded-xl border border-black/[0.08] bg-white px-4 py-3.5 text-sm font-medium text-black/75"
              >
                <MapPin className="h-4 w-4 shrink-0 text-[#B69560]" />
                {suburb}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-black/55">
            Not on the list? Send through the address and we will tell you straight away
            whether the site works and whether we can help.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10">
          <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
            {entry.locationName} {entry.serviceName.toLowerCase()} questions
          </h2>
          <div className="mt-8 space-y-6">
            {entry.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-black/[0.08] bg-[#FAFAF9] p-6"
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
              Talk to us about your site
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
      <section className="bg-[#F7F6F4] py-16">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {siblings.length > 0 && (
              <div>
                <h2 className="font-sora text-lg font-semibold text-black">
                  What else we build in {entry.locationName}
                </h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {siblings.map((other) => (
                    <Link
                      key={other.serviceSlug}
                      href={`/locations/${other.locationSlug}/${other.serviceSlug}`}
                      className="rounded-full border border-black/12 bg-white px-5 py-2.5 text-sm font-medium text-black/75 transition-all hover:border-[#B69560]/50 hover:text-black"
                    >
                      {other.serviceName}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {otherCities.length > 0 && (
              <div>
                <h2 className="font-sora text-lg font-semibold text-black">
                  {entry.serviceName} elsewhere in South East Queensland
                </h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {otherCities.map((other) => (
                    <Link
                      key={`${other.locationSlug}-${other.serviceSlug}`}
                      href={`/locations/${other.locationSlug}/${other.serviceSlug}`}
                      className="rounded-full border border-black/12 bg-white px-5 py-2.5 text-sm font-medium text-black/75 transition-all hover:border-[#B69560]/50 hover:text-black"
                    >
                      {other.locationName}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-black/[0.08] pt-8">
            <Link
              href={entry.parentServiceHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#B69560]"
            >
              {entry.parentServiceName} — service overview
              <ArrowRight className="h-4 w-4" />
            </Link>
            {location && (
              <Link
                href={`/locations/${location.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#B69560] lg:ml-8"
              >
                All building services in {location.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <CTABanner
        title={`${entry.serviceName} in ${entry.locationName}?`}
        highlight="Let's look at the site."
        description="Send through the address and what you have in mind. We will check the zoning, the overlays and the site conditions, and come back with a straight assessment before any fees are involved."
      />

      <SiteFooter />
    </main>
  );
}
