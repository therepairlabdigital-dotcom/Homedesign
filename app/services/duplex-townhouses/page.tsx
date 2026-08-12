import type { Metadata } from "next";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";
import { serviceContent } from "@/lib/service-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Duplex & Townhouse Builders SEQ | Design Homes",
  description: "Expert duplex & townhouse builders across SEQ. Maximise your investment with dual occupancy properties in Brisbane, Gold Coast & Sunshine Coast. Council approvals handled.",
  keywords: [
    "duplex builders Brisbane",
    "townhouse construction Gold Coast",
    "dual occupancy Sunshine Coast",
    "duplex designs SEQ",
    "investment property builders",
    "multi dwelling construction",
    "strata title setup",
    "dual occupancy specialists",
  ],
  openGraph: {
    title: "Duplex & Townhouse Builders | Dual Occupancy Specialists",
    description: "Expert duplex & townhouse builders across Brisbane, Gold Coast & Sunshine Coast. Maximise your investment with dual occupancy properties.",
    type: "article",
    url: `${siteUrl}/services/duplex-townhouses`,
    images: [
      {
        url: "/assets/images/stock/duplex-modern-dual.webp",
        width: 1200,
        height: 630,
        alt: "Duplex & Townhouse Builders - Design Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duplex & Townhouses | Design Homes",
    description: "Expert duplex & townhouse builders across SEQ. Maximise your investment with dual occupancy properties.",
    images: ["/assets/images/stock/duplex-modern-dual.webp"],
  },
  alternates: {
    canonical: `${siteUrl}/services/duplex-townhouses`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DuplexTownhousesPage() {
  return (
    <ServicePageTemplate
      heroTitle="Duplex &"
      heroHighlight="Townhouses"
      heroDescription="Maximise your property's potential with expertly designed and built duplexes and townhouses. Smart investments, beautifully built."
      heroImage="/assets/images/stock/duplex-modern-dual.webp"
      breadcrumbLabel="Duplex & Townhouses"
      overview={{
        title: "Smart Investments,",
        highlight: "Beautifully Built",
        description: [
          "Dual occupancy and multi-dwelling builds are one of the smartest property investment strategies available. Our experienced team specialises in designing and building duplexes and townhouses that maximise return while maintaining exceptional living standards.",
          "We navigate the complex planning and approval processes, optimise designs for your specific block, and deliver builds that attract quality tenants or buyers. Whether you're building to live in one and rent the other, or as a pure investment, we have the expertise to make it work.",
        ],
        image: "/assets/images/stock/townhouse-construction-new.webp",
      }}
      features={[
        { iconName: "Building2", title: "Dual Occupancy Design", description: "Optimised designs that maximise the use of your block while meeting all council requirements and setback rules." },
        { iconName: "TrendingUp", title: "Investment Maximization", description: "Strategic design choices that maximise rental yields and capital growth for your property investment." },
        { iconName: "Shield", title: "Council Compliance", description: "Expert navigation of council requirements, including town planning, building approvals, and compliance certificates." },
        { iconName: "Ruler", title: "Smart Layouts", description: "Clever floor plans that provide privacy, natural light, and functional living spaces for each dwelling." },
        { iconName: "Users", title: "Tenant Appeal", description: "Modern finishes and thoughtful design elements that attract and retain quality tenants." },
        { iconName: "FileCheck", title: "Turnkey Solutions", description: "Complete packages from feasibility assessment to final handover, including all approvals and certifications." },
      ]}
      benefits={[
        "Feasibility assessment",
        "Council approval handling",
        "Investment-focused design",
        "Fixed-price contracts",
        "Quality construction",
        "Strata title setup",
        "Landscaping included",
        "Rental-ready finish",
      ]}
      galleryImages={[
        { src: "/assets/images/stock/duplex-modern-dual.webp", alt: "Modern duplex render" },
        { src: "/assets/images/stock/townhouse-construction-new.webp", alt: "Townhouse development under construction" },
        { src: "/assets/images/townhouse-facade.webp", alt: "Two-storey townhouse façade" },
      ]}
      relatedServices={[
        { title: "New Home Builds", href: "/services/new-home-builds", description: "Looking for a single dwelling? Check out our new home builds." },
        { title: "Queenslander Homes", href: "/services/queenslander-homes", description: "Authentic Queenslander homes with traditional character and modern comfort." },
        { title: "Custom Builds", href: "/services/custom-builds", description: "Unique homes for unique visions and challenging sites." },
      ]}
      sections={serviceContent["duplex-townhouses"].sections}
      faqs={serviceContent["duplex-townhouses"].faqs}
    />
  );
}
