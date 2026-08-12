import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import MobileCTA from "@/components/shared/MobileCTA";
import { getLocation, locations } from "@/lib/locations";
import { getServicesForLocation } from "@/lib/location-services";
import { suburbs } from "@/lib/suburbs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

const services = [
  { name: "New Home Builds", href: "/services/new-home-builds" },
  { name: "Duplex & Townhouses", href: "/services/duplex-townhouses" },
  { name: "Custom Builds", href: "/services/custom-builds" },
  { name: "Queenslander Homes", href: "/services/queenslander-homes" },
  { name: "Renovations", href: "/services/renovations" },
  { name: "Interior Design", href: "/services/interior-design" },
];

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: `${siteUrl}/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: "website",
      url: `${siteUrl}/locations/${location.slug}`,
      images: [
        {
          url: location.heroImage,
          width: 1200,
          height: 630,
          alt: `${location.title} — Design Homes`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: [location.heroImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) notFound();

  const localServices = getServicesForLocation(location.slug);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Design Homes Pty Ltd — ${location.name}`,
      description: location.metaDescription,
      url: `${siteUrl}/locations/${location.slug}`,
      image: `${siteUrl}${location.heroImage}`,
      telephone: "+61436376001",
      email: "info@thedesignhomes.com.au",
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "City",
        name: location.name,
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
      mainEntity: location.faqs.map((faq) => ({
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
        title={location.heroTitle}
        highlight={location.heroHighlight}
        description={location.heroDescription}
        image={location.heroImage}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: location.name, href: `/locations/${location.slug}` },
        ]}
      />

      {/* Intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10">
          <h2 className="font-sora text-3xl font-bold leading-tight text-black md:text-4xl">
            Building in {location.region}
          </h2>
          <div className="mt-6 space-y-5">
            {location.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-black/68">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Local considerations */}
      <section className="bg-[#F7F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <div className="space-y-12">
            {location.sections.map((section) => (
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

      {/* Suburbs served */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
            Areas we build in around {location.name}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {location.suburbs.map((suburb) => (
              <li
                key={suburb}
                className="flex items-center gap-3 rounded-xl border border-black/[0.08] bg-[#FAFAF9] px-4 py-3.5 text-sm font-medium text-black/75"
              >
                <MapPin className="h-4 w-4 shrink-0 text-[#B69560]" />
                {suburb}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-black/55">
            Not on the list? We build across South East Queensland — get in touch with your
            address and we will tell you straight away whether we can help.
          </p>
        </div>
      </section>

      {/* Location-specific service pages */}
      {localServices.length > 0 && (
        <section className="bg-white pb-4 pt-16 lg:pb-6 lg:pt-24">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
            <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
              Our {location.name} specialities
            </h2>
            <p className="mt-4 max-w-[640px] text-base leading-8 text-black/68">
              These are the projects we build most often in {location.name}, with the local
              planning rules, site conditions and costs set out in detail.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {localServices.map((entry) => (
                <Link
                  key={entry.serviceSlug}
                  href={`/locations/${entry.locationSlug}/${entry.serviceSlug}`}
                  className="group flex flex-col gap-2 rounded-2xl border border-black/[0.08] bg-[#FAFAF9] px-6 py-6 transition-all hover:-translate-y-0.5 hover:border-[#B69560]/40 hover:shadow-lg"
                >
                  <span className="flex items-center justify-between gap-3 font-sora text-base font-semibold text-black">
                    {entry.serviceName} in {entry.locationName}
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#B69560] transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-sm leading-7 text-black/60">
                    {entry.heroDescription}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brisbane suburb cluster */}
      {location.slug === "brisbane" && (
        <section className="bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
            <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
              Suburbs we work in most
            </h2>
            <p className="mt-4 max-w-[640px] text-base leading-8 text-black/68">
              Brisbane&apos;s character provisions, slope and flood mapping change street by
              street. These pages set out what we actually encounter in each suburb.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {suburbs.map((suburb) => (
                <Link
                  key={suburb.slug}
                  href={`/suburbs/${suburb.slug}`}
                  className="rounded-full border border-black/12 bg-[#FAFAF9] px-5 py-2.5 text-sm font-medium text-black/75 transition-all hover:border-[#B69560]/50 hover:text-black"
                >
                  {suburb.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services in this location */}
      <section className="bg-[#F7F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
            What we build in {location.name}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-black/[0.08] bg-white px-5 py-5 transition-all hover:-translate-y-0.5 hover:border-[#B69560]/40 hover:shadow-lg"
              >
                <span className="font-sora text-base font-semibold text-black">
                  {service.name}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#B69560] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10">
          <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
            {location.name} building questions
          </h2>
          <div className="mt-8 space-y-6">
            {location.faqs.map((faq) => (
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
              Request a quote
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

      {/* Other locations */}
      <section className="bg-[#F7F6F4] py-14">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <h2 className="font-sora text-lg font-semibold text-black">
            We also build in
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {locations
              .filter((other) => other.slug !== location.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/locations/${other.slug}`}
                  className="rounded-full border border-black/12 bg-white px-5 py-2.5 text-sm font-medium text-black/75 transition-all hover:border-[#B69560]/50 hover:text-black"
                >
                  {other.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Building in ${location.name}?`}
        highlight="Let's talk."
        description="Send through your address and what you have in mind. We will review the site, the zoning and the overlays, and come back with a straight assessment."
      />

      <SiteFooter />
    </main>
  );
}
