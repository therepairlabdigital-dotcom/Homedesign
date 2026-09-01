import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";
import { extraServices, getExtraService } from "@/lib/extra-services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedesignhomes.com.au";

type ExtraServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return extraServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ExtraServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getExtraService(slug);
  if (!service) return {};

  const url = `${siteUrl}/services/${service.slug}/`;
  const image = service.heroImage.startsWith("http") ? service.heroImage : `${siteUrl}${service.heroImage}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
      url,
      images: [{ url: image, width: 1200, height: 630, alt: `${service.name} - Design Homes` }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ExtraServicePage({ params }: ExtraServicePageProps) {
  const { slug } = await params;
  const service = getExtraService(slug);
  if (!service) notFound();

  return (
    <ServicePageTemplate
      heroTitle={service.heroTitle}
      heroHighlight={service.heroHighlight}
      heroDescription={service.heroDescription}
      heroImage={service.heroImage}
      breadcrumbLabel={service.name}
      overview={service.overview}
      features={service.features}
      benefits={service.benefits}
      galleryImages={service.galleryImages}
      relatedServices={service.relatedServices}
      sections={service.sections}
      faqs={service.faqs}
    />
  );
}
