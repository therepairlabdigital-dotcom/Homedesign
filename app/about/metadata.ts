import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "About Us | Design Homes | Design Homes Pty Ltd",
  description: "Learn more about Design Homes, our history, and our commitment to building quality homes in South East Queensland.",
  keywords: [
    "about Design Homes",
    "home builders Brisbane",
    "custom builders Gold Coast",
    "home construction company Sunshine Coast",
    "SEQ builders",
    "family owned builders",
    "Queensland construction company",
  ],
  openGraph: {
    title: "About Us | Design Homes | Design Homes Pty Ltd",
    description: "Learn more about Design Homes, our history, and our commitment to building quality homes in South East Queensland.",
    type: "website",
    url: `${siteUrl}/about`,
    images: [
      {
        url: "/assets/images/stock/villa-luxury-modern.jpg",
        width: 1200,
        height: 630,
        alt: "About Design Homes | Design Homes Pty Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Design Homes | Design Homes Pty Ltd",
    description: "Learn more about Design Homes, our history, and our commitment to building quality homes in South East Queensland.",
    images: ["/assets/images/stock/villa-luxury-modern.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  robots: {
    index: true,
    follow: true,
  },
};
