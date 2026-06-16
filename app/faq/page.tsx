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

const faqs = [
  {
    question: "How long does a typical build take?",
    answer: "The duration of a build depends on the complexity and size of the project, but typically ranges from 4 months - 12 months. During our initial consultation, we'll provide you with a detailed timeline specific to your project, including all phases from design to final handover.",
  },
  {
    question: "Do you offer fixed-price contracts?",
    answer: "Yes, we provide fixed-price contracts to ensure transparency and peace of mind for our clients. This means no hidden costs or surprise expenses during the construction process. Everything is clearly outlined before we begin, so you know exactly what to expect.",
  },
  {
    question: "Can I see your previous work?",
    answer: "Absolutely! We have a gallery of past projects and can even arrange site visits for some of our ongoing builds. We also have many satisfied clients who are happy to share their experiences with you. Contact us to schedule a viewing of our portfolio.",
  },
  {
    question: "What areas do you service?",
    answer: "We service the entire South East Queensland region, including Brisbane, Gold Coast, Sunshine Coast, and surrounding areas. Our team is familiar with local council requirements and building regulations across all these regions.",
  },
  {
    question: "Do you help with design and approvals?",
    answer: "Yes, we offer design services and assist clients with the approval process, including coordinating required documentation and applications. Approval outcomes are subject to council and certifier requirements.",
  },
  {
    question: "Do you build on sloping or challenging blocks?",
    answer: "Yes. We have experience building on sloping sites, narrow lots and challenging blocks across South East Queensland, with tailored site, engineering and design solutions to suit your land and maximise its potential.",
  },
  {
    question: "What warranty and insurance do you provide?",
    answer: "Every home is covered by the mandatory QBCC structural warranty and we are fully licensed and insured. We also stand behind our workmanship, so you can build with complete peace of mind.",
  },
  {
    question: "How do I get started?",
    answer: "Simply get in touch for a no-obligation consultation. We'll discuss your vision, budget and timeline, then guide you through every step — from initial design and approvals right through to the handover of your keys.",
  },
];

// FAQPage Schema for SEO
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const columns = [faqs.slice(0, 4), faqs.slice(4, 8)];

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
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid gap-x-12 lg:grid-cols-2"
          >
            {columns.map((col, colIndex) => (
              <Accordion key={colIndex} className="w-full">
                {col.map((faq, i) => {
                  const number = colIndex * 4 + i + 1;
                  return (
                    <AccordionItem key={number} value={`item-${number}`} className="border-b border-black/[0.06] py-1">
                      <AccordionTrigger className="text-left font-sora text-lg font-semibold text-black hover:text-black transition-colors py-5 [&[data-state=open]]:text-black">
                        <div className="flex items-start gap-4">
                          <span className="text-black/25 font-bold text-sm mt-1 font-mono">
                            {String(number).padStart(2, "0")}
                          </span>
                          {faq.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-black/60 leading-relaxed pb-5 text-base pl-10">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            ))}
          </motion.div>

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
