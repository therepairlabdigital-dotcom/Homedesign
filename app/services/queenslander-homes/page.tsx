import type { Metadata } from "next";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Queenslander Home Builders SEQ | Design Homes",
  description: "Authentic Queenslander home builders. We design & build traditional character homes with modern comfort across Brisbane, Gold Coast & Sunshine Coast.",
  keywords: [
    "Queenslander home builders Brisbane",
    "Queenslander homes Gold Coast",
    "traditional Queenslander Sunshine Coast",
    "character home builders Queensland",
    "Queenslander renovation",
    "wraparound verandah homes",
    "elevated timber homes",
    "heritage style builders SEQ",
  ],
  openGraph: {
    title: "Queenslander Home Builders | Authentic Character Homes",
    description: "Authentic Queenslander home builders across Brisbane, Gold Coast & Sunshine Coast. Traditional character with modern comfort.",
    type: "article",
    url: `${siteUrl}/services/queenslander-homes`,
    images: [
      {
        url: "/assets/images/queenslander-classic-new.webp",
        width: 1200,
        height: 630,
        alt: "Queenslander Homes - Design Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queenslander Homes | Design Homes",
    description: "Authentic Queenslander home builders across SEQ. Traditional character with modern comfort.",
    images: ["/assets/images/queenslander-classic-new.webp"],
  },
  alternates: {
    canonical: `${siteUrl}/services/queenslander-homes`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QueenslanderHomesPage() {
  return (
    <ServicePageTemplate
      heroTitle="Authentic"
      heroHighlight="Queenslander Homes"
      heroDescription="Timeless Queenslander homes that honour traditional character while delivering the comfort, efficiency and quality of a modern build."
      heroImage="/assets/images/queenslander-classic-new.webp"
      breadcrumbLabel="Queenslander Homes"
      overview={{
        title: "Classic Character, Built for",
        highlight: "Modern Living",
        description: [
          "The Queenslander is an icon of South East Queensland — elevated, breezy, and full of character. We build new Queenslander-style homes that capture that timeless charm, from wraparound verandahs and VJ walls to high ceilings and classic timber detailing.",
          "Beneath the traditional character sits a thoroughly modern home: energy-efficient design, contemporary kitchens and bathrooms, and open-plan living that suits the way families live today. The result is a home with genuine soul and lasting value.",
        ],
        image: "/assets/images/queenslander-classic-new.webp",
      }}
      features={[
        { iconName: "Award", title: "Authentic Character", description: "Traditional Queenslander proportions, rooflines and street presence, faithfully recreated in a brand-new home." },
        { iconName: "TreePine", title: "Wraparound Verandahs", description: "Generous verandahs that capture the breeze, extend your living space, and define the classic Queenslander look." },
        { iconName: "Ruler", title: "Elevated Design", description: "Raised construction that suits sloping blocks, improves airflow, and creates valuable space underneath." },
        { iconName: "Paintbrush", title: "VJ Walls & Detailing", description: "Period-correct VJ panelling, fretwork, breezeways and timber detailing for an authentic finish." },
        { iconName: "Home", title: "Modern Comfort", description: "Open-plan living, contemporary kitchens and bathrooms, and energy-efficient design throughout." },
        { iconName: "Shield", title: "Quality Construction", description: "Durable materials and meticulous workmanship, backed by our QBCC licence and structural warranty." },
      ]}
      benefits={[
        "Authentic Queenslander character",
        "Wraparound verandahs",
        "High ceilings & VJ walls",
        "Elevated, breezy design",
        "Modern energy efficiency",
        "Open-plan living",
        "Fixed-price contracts",
        "Comprehensive warranty",
      ]}
      galleryImages={[
        { src: "/assets/images/queenslander-classic-new.webp", alt: "Queenslander Build 1" },
        { src: "/assets/images/new-home-render-single.jpg", alt: "Queenslander Build 2" },
        { src: "/assets/images/home-portico-detail.jpg", alt: "Queenslander Build 3" },
      ]}
      relatedServices={[
        { title: "New Home Builds", href: "/services/new-home-builds", description: "Custom-designed new homes tailored to your lifestyle and budget." },
        { title: "Custom Builds", href: "/services/custom-builds", description: "Bespoke homes for unique sites and specific requirements." },
        { title: "Renovations & Extensions", href: "/services/renovations", description: "Restore or extend an existing Queenslander with expert care." },
      ]}
    />
  );
}
