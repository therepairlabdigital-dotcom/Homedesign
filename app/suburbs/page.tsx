import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import MobileCTA from "@/components/shared/MobileCTA";
import { suburbs } from "@/lib/suburbs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Brisbane Suburbs We Build In | Design Homes",
  description:
    "Character and renovation builders across Brisbane's inner and western suburbs — Paddington, Ashgrove, Bardon, Red Hill, Wilston, Camp Hill, Kenmore and The Gap.",
  keywords: [
    "Brisbane character suburb builders",
    "Queenslander renovation Brisbane suburbs",
    "builders inner Brisbane",
    "character home builders Brisbane",
  ],
  alternates: { canonical: `${siteUrl}/suburbs` },
  robots: { index: true, follow: true },
};

const considerations = [
  {
    heading: "The overlay position changes street by street",
    body: [
      "Brisbane's character provisions are applied at the level of individual streets and precincts, not whole suburbs. Two apparently similar houses a block apart can have entirely different options — one protected from demolition, the other freely replaceable.",
      "That is why the council property report is the first step on any Brisbane project, and why it is worth pulling before you make an offer rather than after.",
    ],
  },
  {
    heading: "Slope drives cost more than floor area does",
    body: [
      "The inner western suburbs sit across a series of ridges, and falls of three or four metres across a block are ordinary. Retaining, engineered footings, drainage and access planning follow from that, and on a steep site they can rival the cost of the house itself.",
      "Retaining in particular scales sharply with height. A wall retaining two metres costs several times per metre what one retaining half a metre does.",
    ],
  },
  {
    heading: "Flooding affects blocks nowhere near water",
    body: [
      "Overland flow paths — the routes water takes when the drainage system is overwhelmed — affect properties well away from any creek or river. Enoggera Creek in particular affects parts of Wilston, Ashgrove and Newmarket that look entirely dry.",
      "Where a flood overlay applies, a minimum habitable floor level is set, and on a raise-and-build-under project that interacts directly with the permitted height under the character overlay.",
    ],
  },
  {
    heading: "Reactive clay is the default assumption",
    body: [
      "Much of Brisbane sits on reactive clay, and the site classification under AS 2870 determines whether you need a conventional slab or an engineered footing system. The difference runs into tens of thousands.",
      "An old timber house on stumps tells you nothing about this, because a stumped house tolerates ground movement that a rigid slab cannot. The soil test happens before design, not after.",
    ],
  },
];

export default function SuburbsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Brisbane suburbs served by Design Homes",
    itemListElement: suburbs.map((suburb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: suburb.name,
      url: `${siteUrl}/suburbs/${suburb.slug}`,
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
        title="Brisbane Suburbs"
        highlight="We Build In"
        description="Character renovation, raising and extensions across Brisbane's inner and western suburbs — where the overlay, the slope and the soil decide the project before design begins."
        image="/assets/images/queenslander-classic-new.webp"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: "Brisbane Suburbs", href: "/suburbs" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="mx-auto max-w-[820px]">
            <h2 className="font-sora text-3xl font-bold leading-tight text-black md:text-4xl">
              Why we work suburb by suburb
            </h2>
            <p className="mt-6 text-base leading-8 text-black/68">
              Character renovation is the least standardised work in residential construction,
              and in Brisbane the rules genuinely change from one precinct to the next. What is
              permitted in Camp Hill is not permitted in Paddington. What a Bardon block demands
              structurally is different again to Kenmore.
            </p>
            <p className="mt-5 text-base leading-8 text-black/68">
              These pages set out what we actually encounter in each suburb — the housing stock,
              the overlays, the site conditions and the projects that make sense there.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {suburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/suburbs/${suburb.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-black/[0.08] bg-[#FAFAF9] px-6 py-6 transition-all hover:-translate-y-0.5 hover:border-[#B69560]/40 hover:shadow-lg"
              >
                <span className="flex items-center justify-between gap-3 font-sora text-lg font-semibold text-black">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-[#B69560]" />
                    {suburb.name}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#B69560] transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-sm leading-7 text-black/60">{suburb.housingStock}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <h2 className="font-sora text-2xl font-bold leading-tight text-black md:text-3xl">
            What we check on any Brisbane block
          </h2>
          <div className="mt-8 space-y-10">
            {considerations.map((item) => (
              <div key={item.heading}>
                <h3 className="font-sora text-lg font-semibold text-black md:text-xl">
                  {item.heading}
                </h3>
                <div className="mt-4 space-y-5">
                  {item.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-black/68">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm leading-7 text-black/55">
            Not listed? We build across Greater Brisbane and the wider South East Queensland
            region. Send us the address and we will tell you straight away whether we can help.
          </p>
        </div>
      </section>

      <CTABanner
        title="Got a Brisbane block in mind?"
        highlight="Send us the address."
        description="We will pull the property report, check the character, flood and vegetation overlays, and come back with a straight assessment before any fees are involved."
      />

      <SiteFooter />
    </main>
  );
}
