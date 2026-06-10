import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Contact Us | Design Homes | Design Homes Pty Ltd",
  description: "Get in touch with Design Homes. We are ready to answer your questions and start planning your new home build or custom project.",
  keywords: [
    "contact home builders Brisbane",
    "home builders Gold Coast contact",
    "builders Sunshine Coast",
    "free quote home construction",
    "home building consultation SEQ",
    "Design Homes contact",
    "custom builder enquiry",
    "new home quote Queensland",
  ],
  openGraph: {
    title: "Contact Us | Design Homes | Design Homes Pty Ltd",
    description: "Get in touch with Design Homes. We are ready to answer your questions and start planning your new home build or custom project.",
    type: "website",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: "/assets/images/blueprint-key.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Design Homes - Free Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Design Homes",
    description: "Get in touch with Design Homes. We are ready to answer your questions and start planning your new home build or custom project.",
    images: ["/assets/images/blueprint-key.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
};
