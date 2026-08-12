import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import MobileCTA from "@/components/shared/MobileCTA";
import { locations } from "@/lib/locations";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Areas We Build | Home Builders Across SEQ",
  description:
    "Design Homes builds new homes, duplexes, townhouses and custom projects across Brisbane, the Gold Coast, Sunshine Coast, Ipswich, Logan, Moreton Bay and the Redlands.",
  keywords: [
    "home builders South East Queensland",
    "home builders Brisbane",
    "home builders Gold Coast",
    "home builders Sunshine Coast",
    "builders Ipswich",
    "builders Logan",
    "builders Moreton Bay",
  ],
  alternates: {
    canonical: `${siteUrl}/locations`,
  },
  openGraph: {
    title: "Areas We Build | Design Homes Pty Ltd",
    description:
      "New homes, duplexes, townhouses and custom builds across South East Queensland — Brisbane, Gold Coast, Sunshine Coast, Ipswich, Logan, Moreton Bay and the Redlands.",
    type: "website",
    url: `${siteUrl}/locations`,
    images: [
      {
        url: "/assets/images/stock/home-luxury-landscape.jpg",
        width: 1200,
        height: 630,
        alt: "Design Homes — areas we build across South East Queensland",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function LocationsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Areas served by Design Homes Pty Ltd",
    itemListElement: locations.map((location, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: location.title,
      url: `${siteUrl}/locations/${location.slug}`,
    })),
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteNavbar />
      <MobileCTA />

      <PageHero
        title="Where We"
        highlight="Build"
        description="Design Homes builds across South East Queensland — from inner Brisbane character blocks to Gold Coast waterfronts, Sunshine Coast acreage, and the growth corridors in between."
        image="/assets/images/stock/home-luxury-landscape.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="font-sora text-3xl font-bold leading-tight text-black md:text-4xl">
              A builder who knows the ground you are building on
            </h2>
            <p className="mt-5 text-base leading-8 text-black/68">
              Site conditions across South East Queensland change quickly — reactive clay in the
              west, sand and salt on the coast, character overlays through inner Brisbane, flood
              levels along the rivers, and acreage servicing in the hinterland. Knowing what
              applies to your block before design starts is what keeps a fixed price fixed.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group overflow-hidden rounded-3xl border border-black/[0.08] bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={location.heroImage}
                    alt={`${location.title} — Design Homes`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-black">
                    <MapPin className="h-3.5 w-3.5 text-[#B69560]" />
                    {location.region}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-sora text-xl font-bold text-black">{location.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-black/62">
                    {location.metaDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black">
                    View {location.name} builds
                    <ArrowRight className="h-4 w-4 text-[#B69560] transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not sure if we cover"
        highlight="your area?"
        description="Send through the address. We will tell you straight away whether we can build there, and what the site is likely to involve."
      />

      <SiteFooter />
    </main>
  );
}
