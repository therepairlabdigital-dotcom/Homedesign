import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Design Homes",
  title: "Design Homes Pty Ltd | Custom Home Builders Brisbane, Gold Coast & Sunshine Coast",
  description: "Award-winning custom home builders in South East Queensland. We specialise in new home builds, duplexes, townhouses, custom builds & Queenslander homes across Brisbane, Gold Coast & Sunshine Coast.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "custom home builders",
    "Brisbane",
    "Gold Coast",
    "Sunshine Coast",
    "SEQ",
    "new homes",
    "duplexes",
    "townhouses",
    "custom builds",
    "Queenslander homes",
    "Queensland builders",
    "home construction",
    "residential builders",
    "Design Homes",
  ],
  authors: [{ name: "Design Homes Pty Ltd" }],
  creator: "Design Homes Pty Ltd",
  publisher: "Design Homes Pty Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Design Homes Pty Ltd",
    title: "Design Homes Pty Ltd | Custom Home Builders Brisbane, Gold Coast & Sunshine Coast",
    description: "Award-winning custom home builders in South East Queensland. New homes, duplexes, custom builds & Queenslander homes.",
    images: [
      {
        url: "/images/modern-villa-with-pool-and-deck-H27FA57-1.webp",
        width: 1200,
        height: 630,
        alt: "Design Homes - Custom Home Builders in Brisbane, Gold Coast & Sunshine Coast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Homes Pty Ltd | Custom Home Builders SEQ",
    description: "Award-winning custom home builders in South East Queensland. New homes, duplexes, custom builds & Queenslander homes.",
    images: ["/images/modern-villa-with-pool-and-deck-H27FA57-1.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "construction",
  classification: "Business",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  other: {
    "theme-color": "#B69560",
    "msapplication-TileColor": "#B69560",
    "msapplication-config": "/browserconfig.xml",
  },
};

// Viewport configuration for theme color and responsive design
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#B69560" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Design Homes Pty Ltd",
  description: "Award-winning custom home builders in South East Queensland specialising in new home builds, duplexes, townhouses, custom builds, and Queenslander homes.",
  slogan: "Quality homes built with care and pride",
  url: siteUrl,
  telephone: "0436376001",
  email: "info@thedesignhomes.com.au",
  image: `${siteUrl}/images/modern-villa-with-pool-and-deck-H27FA57-1.webp`,
  logo: `${siteUrl}/assets/images/logo-design-homes-mark.png`,
  inLanguage: "en-AU",
  priceRange: "$$$",
  currenciesAccepted: "AUD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "Brisbane",
      address: {
        "@type": "PostalAddress",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
    },
    {
      "@type": "City",
      name: "Gold Coast",
      address: {
        "@type": "PostalAddress",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
    },
    {
      "@type": "City",
      name: "Sunshine Coast",
      address: {
        "@type": "PostalAddress",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
    },
    {
      "@type": "City",
      name: "Ipswich",
      address: {
        "@type": "PostalAddress",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
    },
    {
      "@type": "City",
      name: "Logan",
      address: {
        "@type": "PostalAddress",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-27.4698",
    longitude: "153.0251",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/tiwanabuilders.co.nz",
    "https://www.instagram.com/designhomes69",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Building Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "New Home Builds",
          description: "Custom-designed homes tailored to your lifestyle and budget.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Duplex & Townhouses",
          description: "Expertly designed and built dual occupancy properties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Builds",
          description: "Unique homes for unique visions and challenging sites.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Queenslander Homes",
          description: "Authentic Queenslander homes built with traditional character and modern comfort.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renovations",
          description: "Home renovation, extension, kitchen, bathroom, and whole-home upgrade services.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Design",
          description: "Interior design, finish selection, space planning, and styling support for homes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Construction",
          description: "Office fit-outs, retail construction, and mixed-use commercial building services.",
        },
      },
    ],
  },
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Design Homes Pty Ltd",
  url: siteUrl,
  inLanguage: "en-AU",
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/assets/images/logo-design-homes-mark.png`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "0436376001",
    contactType: "sales",
    email: "info@thedesignhomes.com.au",
    availableLanguage: ["English"],
    areaServed: "AU",
  },
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Design Homes Pty Ltd",
  description: "Award-winning custom home builders in South East Queensland",
  inLanguage: "en-AU",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              localBusinessSchema,
              organizationSchema,
              websiteSchema,
            ]),
          }}
        />
      </head>
      <body
        className={`${sora.variable} antialiased bg-white`}
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
