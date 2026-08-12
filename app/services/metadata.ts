import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Building Services | Design Homes SEQ",
  description: "From new home builds to duplexes, custom builds and Queenslander homes, we deliver exceptional quality across every project we undertake.",
  keywords: [
    "home building services Brisbane",
    "duplex builders SEQ",
    "custom home construction",
    "Queenslander homes Queensland",
    "townhouse construction",
    "new home builds Gold Coast",
    "custom builds Sunshine Coast",
  ],
  openGraph: {
    title: "Building Services | Design Homes SEQ",
    description: "New home builds, duplexes, townhouses, custom builds & Queenslander homes across Brisbane, Gold Coast & Sunshine Coast.",
    type: "website",
    url: `${siteUrl}/services`,
    images: [
      {
        url: "/assets/images/stock/blueprint-keys.jpg",
        width: 1200,
        height: 630,
        alt: "Design Homes Building Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Design Homes",
    description: "New home builds, duplexes, custom builds & Queenslander homes across SEQ.",
    images: ["/assets/images/stock/blueprint-keys.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  robots: {
    index: true,
    follow: true,
  },
};
