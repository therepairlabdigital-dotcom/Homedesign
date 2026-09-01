/**
 * Shape of a data-driven service page rendered by app/services/[slug]/page.tsx
 * through components/shared/ServicePageTemplate.tsx.
 *
 * Content rules (owner brief): Australian English; QBCC licensed, owner-run
 * builder (Harj Tiwana runs every site); fixed-price contracts; South East
 * Queensland only; no "free quote" / "free consultation" wording; no dollar
 * figures, project counts or success-rate statistics; nothing commercial;
 * never invent projects, clients, reviews or awards.
 */
export type ExtraService = {
  slug: string;
  /** Short display name, e.g. "Knockdown Rebuild" */
  name: string;
  /** <= 60 characters, ends with " | Design Homes" */
  metaTitle: string;
  /** 130–155 characters, includes a location cue and a reason to click */
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroImage: string;
  overview: {
    title: string;
    highlight: string;
    description: string[];
    image: string;
  };
  /** Exactly 6. iconName must be one of the ServicePageTemplate icons. */
  features: { iconName: string; title: string; description: string }[];
  /** 8 short phrases (2–4 words) */
  benefits: string[];
  /** Exactly 3 */
  galleryImages: { src: string; alt: string }[];
  /** Exactly 3 links to existing /services/* pages */
  relatedServices: { title: string; href: string; description: string }[];
  /** 4–5 sections, 3–4 paragraphs each; the long-form body of the page */
  sections: { heading: string; body: string[] }[];
  /** 5–6 questions, answers 40–80 words */
  faqs: { question: string; answer: string }[];
};
