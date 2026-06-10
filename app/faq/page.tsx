"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";

const faqCategories = [
  {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "How long does a typical build take?",
        answer: "The duration of a build depends on the complexity and size of the project, but typically ranges from 4 months - 12 months. During our initial consultation, we'll provide you with a detailed timeline specific to your project, including all phases from design to final handover."
      },
      {
        question: "Do you offer fixed-price contracts?",
        answer: "Yes, we provide fixed-price contracts to ensure transparency and peace of mind for our clients. This means no hidden costs or surprise expenses during the construction process. Everything is clearly outlined before we begin, so you know exactly what to expect."
      },
      {
        question: "Can I see your previous work?",
        answer: "Absolutely! We have a gallery of past projects and can even arrange site visits for some of our ongoing builds. We also have many satisfied clients who are happy to share their experiences with you. Contact us to schedule a viewing of our portfolio."
      },
      {
        question: "What areas do you service?",
        answer: "We service the entire South East Queensland region, including Brisbane, Gold Coast, Sunshine Coast, and surrounding areas. Our team is familiar with local council requirements and building regulations across all these regions."
      },
      {
        question: "Do you help with design and approvals?",
        answer: "Yes, we offer comprehensive design services and can manage the entire approval process for you. Our in-house design team works closely with you to create your dream home, and we handle all the paperwork and council submissions on your behalf."
      }
    ]
  }
];

// FAQPage Schema for SEO
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a typical build take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The duration of a build depends on the complexity and size of the project, but typically ranges from 4 months - 12 months. During our initial consultation, we'll provide you with a detailed timeline specific to your project, including all phases from design to final handover."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer fixed-price contracts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide fixed-price contracts to ensure transparency and peace of mind for our clients. This means no hidden costs or surprise expenses during the construction process. Everything is clearly outlined before we begin, so you know exactly what to expect."
      }
    },
    {
      "@type": "Question",
      "name": "Can I see your previous work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We have a gallery of past projects and can even arrange site visits for some of our ongoing builds. We also have many satisfied clients who are happy to share their experiences with you. Contact us to schedule a viewing of our portfolio."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We service the entire South East Queensland region, including Brisbane, Gold Coast, Sunshine Coast, and surrounding areas. Our team is familiar with local council requirements and building regulations across all these regions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with design and approvals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer comprehensive design services and can manage the entire approval process for you. Our in-house design team works closely with you to create your dream home, and we handle all the paperwork and council submissions on your behalf."
      }
    }
  ]
};

export default function FAQPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <main className="min-h-screen">
      <SiteNavbar />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      />

      <PageHero
        title="Frequently Asked"
        highlight="Questions"
        description="Everything you need to know about building with Design Homes. Can't find what you're looking for? Reach out to our team."
        image="/assets/images/stock/home-luxury-twilight.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]}
      />

      {/* FAQ Section */}
      <section className="bg-white py-12 lg:py-20" ref={ref}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.15 }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-6 bg-[#D4AF37]" />
                <h2 className="font-sora text-2xl font-bold text-black">{category.title}</h2>
              </div>

              <Accordion className="w-full">
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`${catIndex}-${index}`} className="border-b border-black/[0.06] py-1">
                    <AccordionTrigger className="text-left font-sora text-lg font-semibold text-black hover:text-black transition-colors py-5 [&[data-state=open]]:text-black">
                      <div className="flex items-start gap-4">
                        <span className="text-black/25 font-bold text-sm mt-1 font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-black/55 leading-relaxed pb-5 text-base pl-10">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.12)] rounded-3xl p-10 text-center mt-16"
          >
            <h3 className="font-sora text-2xl font-bold text-black mb-3">Still Have Questions?</h3>
            <p className="text-black/60 text-sm mb-6 max-w-md mx-auto">Can&apos;t find the answer you&apos;re looking for? Our team is happy to help with any questions you have.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-black hover:bg-black text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/10 group">
              Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
