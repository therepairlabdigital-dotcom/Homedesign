import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Design Homes | Design Homes Pty Ltd",
  description: "Find answers to common questions about building your new home, our processes, and services across South East Queensland.",
  keywords: [
    "home building FAQ",
    "new home build questions Brisbane",
    "building process explained",
    "home construction costs SEQ",
    "custom builder questions",
    "building timeline",
    "building warranty Queensland",
    "council approval process",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Design Homes | Design Homes Pty Ltd",
    description: "Find answers to common questions about building your new home, our processes, and services across South East Queensland.",
    type: "website",
    url: `${siteUrl}/faq`,
  },
  twitter: {
    card: "summary",
    title: "Frequently Asked Questions | Design Homes",
    description: "Find answers to common questions about building your new home, our processes, and services across South East Queensland.",
  },
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
  robots: {
    index: true,
    follow: true,
  },
};
