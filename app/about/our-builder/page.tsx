import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Hammer, Phone, ShieldCheck } from "lucide-react";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import MobileCTA from "@/components/shared/MobileCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Harj Tiwana | Design Homes Builder",
  description:
    "Meet Harj Tiwana, the QBCC licensed builder behind Design Homes. Carpentry trade background, award-winning New Zealand new build experience, and hands-on site management.",
  keywords: [
    "Harj Tiwana builder",
    "Design Homes builder Brisbane",
    "QBCC licensed builder Queensland",
    "owner builder Brisbane",
    "custom home builder South East Queensland",
  ],
  alternates: { canonical: `${siteUrl}/about/our-builder` },
  openGraph: {
    title: "Harj Tiwana | Design Homes Builder",
    description:
      "The QBCC licensed builder behind Design Homes — trade background, award-winning New Zealand new build experience, and hands-on site management on every project.",
    type: "profile",
    url: `${siteUrl}/about/our-builder`,
    images: [
      {
        url: "/assets/images/about-construction-new.jpg",
        width: 1200,
        height: 630,
        alt: "Harj Tiwana — Design Homes",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const credentials = [
  {
    icon: ShieldCheck,
    title: "QBCC licensed",
    body: "Licensed by the Queensland Building and Construction Commission. We provide our licence details so you can check the register, the class and the history yourself before signing anything.",
  },
  {
    icon: Hammer,
    title: "Trade background",
    body: "More than a decade of residential construction experience as a carpenter before running projects. Knowing the work first-hand is what makes on-site decisions fast and correct.",
  },
  {
    icon: Award,
    title: "New Zealand award recognition",
    body: "Delivery of new build homes in New Zealand, including award-winning recognition for excellence in construction. That standard now shapes every Queensland project.",
  },
];

const sections = [
  {
    heading: "Why the sites are owner-run",
    body: [
      "Every Design Homes project is run by Harj personally. That is the operating model rather than a marketing position, and it sets a deliberate limit on how many jobs we take on at once.",
      "In a volume operation, a supervisor typically runs many sites simultaneously. That works when everything is standard and it is tested the moment something is not. On a sloping block, a character renovation, or a hundred-year-old house where nothing is square, the decisions have to be made by someone who was there that morning and who has done the work himself.",
      "It also means problems reach you when they appear rather than when they have become expensive. That is the single most common complaint owners have about building, and it is a structural problem rather than a personality one.",
    ],
  },
  {
    heading: "A carpenter's view of a building contract",
    body: [
      "Coming from the tools changes how a job gets priced. Someone who has framed a house knows which details genuinely matter and which ones are being sold to you, and knows what a difficult site actually costs to build on rather than guessing at it.",
      "It is also why we complete the site investigation before quoting. A soil test, a contour survey and the council property report establish the footing system, the overlays and the access constraints before a number is issued.",
      "That makes our first estimate slower to produce and occasionally higher than a competitor's opening figure. It also makes it far more likely to be the number you actually pay.",
    ],
  },
  {
    heading: "What carried over from New Zealand",
    body: [
      "Harj's experience includes the successful delivery of new build homes in New Zealand, and award-winning recognition for excellence in construction.",
      "New Zealand residential construction operates under its own regulatory framework and, in much of the country, a harder climate than South East Queensland's. Building to that standard produces habits — around weathertightness, detailing at junctions, and finishing properly rather than adequately — that transfer directly.",
      "Those habits are visible in the parts of a house nobody photographs: how the flashings are detailed, how the frame is braced, how the junction between new and old is resolved on an extension.",
    ],
  },
  {
    heading: "What you can expect",
    body: [
      "Straight answers, including the ones that cost us work. If a volume builder suits your block and brief better, we will say so. If renovating is a better project than rebuilding, we will say that too. If a duplex site does not stack up, you will hear it before you buy rather than after.",
      "Fixed-price contracts built on complete working drawings, engineering and a documented selections schedule, so provisional sums stay few and specific.",
      "One point of contact from the first site visit to handover, and availability afterwards. Most of our work comes from referral, which only happens if the last client would take the call.",
    ],
  },
];

export default function OurBuilderPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/about/our-builder#harj-tiwana`,
      name: "Harj Tiwana",
      jobTitle: "Builder",
      description:
        "QBCC licensed builder and founder of Design Homes Pty Ltd, with a carpentry trade background and award-winning new build experience from New Zealand.",
      url: `${siteUrl}/about/our-builder`,
      image: `${siteUrl}/assets/images/about-construction-new.jpg`,
      worksFor: { "@id": `${siteUrl}/#organization` },
      knowsAbout: [
        "Custom home building",
        "Queenslander renovation",
        "Raise and build under",
        "Duplex and dual occupancy construction",
        "Character overlay compliance",
        "Residential carpentry",
      ],
      areaServed: {
        "@type": "AdministrativeArea",
        name: "South East Queensland",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      mainEntity: { "@id": `${siteUrl}/about/our-builder#harj-tiwana` },
      url: `${siteUrl}/about/our-builder`,
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
        title="Meet"
        highlight="Harj Tiwana"
        description="The QBCC licensed builder behind Design Homes — a carpenter by trade, award-winning New Zealand new build experience, and on every one of our sites personally."
        image="/assets/images/about-construction-new.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Builder", href: "/about/our-builder" },
        ]}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/[0.08] bg-[#FAFAF9] p-6"
                >
                  <Icon className="h-6 w-6 text-[#B69560]" />
                  <h2 className="mt-4 font-sora text-lg font-semibold text-black">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-black/60">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <div className="space-y-12">
            {sections.map((section) => (
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

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              Talk to Harj about your project
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

      <CTABanner
        title="Want a straight assessment?"
        highlight="Send the address."
        description="We will review the zoning, the overlays and the site conditions, and come back with an honest read on what your block will take to build on."
      />

      <SiteFooter />
    </main>
  );
}
