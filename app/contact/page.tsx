"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";
import PageHero from "@/components/shared/PageHero";

const contactInfo = [
  { icon: Phone, title: "Phone", content: "0436 376 001", href: "tel:0436376001" },
  { icon: Mail, title: "Email", content: "info@thedesignhomes.com.au", href: "mailto:info@thedesignhomes.com.au" },
  { icon: MapPin, title: "Location", content: "South East Queensland, Australia", href: "#" },
  { icon: Clock, title: "Business Hours", content: "Mon – Fri: 7am – 5pm", href: "#" },
];

const serviceAreas = ["Brisbane", "Gold Coast", "Sunshine Coast", "Ipswich", "Logan"];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("https://splitforms.com/api/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({} as { success?: boolean; message?: string }));
      if (res.ok && data.success !== false) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        setError(data.message || "Something went wrong. Please try again or call us on 0436 376 001.");
      }
    } catch {
      setError("Couldn't send your message. Please try again or call us on 0436 376 001.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <SiteNavbar />

      <PageHero
        title="Let's Talk About Your"
        highlight="Project"
        description="Ready to start building? Contact us today for a free consultation and quote. Our team is ready to bring your vision to life."
        image="/assets/images/custom-luxury-twilight.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
      />

      {/* Contact Form Section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black text-sm mb-0.5">{item.title}</h4>
                      <p className="text-black/55 text-sm">{item.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mb-10">
                <h4 className="font-sora font-bold text-black text-sm mb-3 uppercase tracking-wider">Service Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span key={area} className="bg-[#ffffff] text-black/70 px-4 py-2 rounded-full text-sm font-medium border border-black/[0.06]">{area}</span>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-3xl border border-black/[0.06]">
                <iframe
                  title="South East Queensland, Australia"
                  src="https://www.google.com/maps?q=South%20East%20Queensland%2C%20Australia&z=8&output=embed"
                  className="block h-64 w-full grayscale-[0.2]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#ffffff] rounded-3xl p-8 lg:p-12 border border-black/[0.06]">
                <h3 className="font-sora text-2xl font-bold text-black mb-2">Send Us a Message</h3>
                <p className="text-black/55 text-sm mb-8">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="w-20 h-20 bg-black/[0.04] rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-sora text-2xl font-bold text-black mb-2">Message Sent!</h3>
                    <p className="text-black/55">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Splitforms / form service */}
                    <input type="hidden" name="access_key" value="7bc020b306754409996c61f348804263" />
                    <input type="hidden" name="subject" value="New website enquiry — Design Homes (Contact page)" />
                    <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-black/70 font-medium text-sm">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="John" required className="h-13 rounded-xl border-black/10 focus:border-black/15 focus:ring-black/10 bg-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-black/70 font-medium text-sm">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Doe" required className="h-13 rounded-xl border-black/10 focus:border-black/15 focus:ring-black/10 bg-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-black/70 font-medium text-sm">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required className="h-13 rounded-xl border-black/10 focus:border-black/15 focus:ring-black/10 bg-white" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-black/70 font-medium text-sm">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+61 400 000 000" className="h-13 rounded-xl border-black/10 focus:border-black/15 focus:ring-black/10 bg-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-black/70 font-medium text-sm">Service Required</Label>
                        <select id="service" name="service" className="w-full h-13 px-4 rounded-xl border border-black/10 focus:border-black/15 focus:ring-2 focus:ring-black/10 focus:outline-none bg-white text-sm text-black/70">
                          <option value="">Select a service</option>
                          <option value="new-home">New Home Build</option>
                          <option value="duplex">Duplex / Townhouse</option>
                          <option value="custom">Custom Build</option>
                          <option value="queenslander">Queenslander Homes</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-black/70 font-medium text-sm">Message</Label>
                      <Textarea id="message" name="message" placeholder="Tell us about your project..." required rows={5} className="rounded-xl border-black/10 focus:border-black/15 focus:ring-black/10 resize-none bg-white" />
                    </div>
                    {error && (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-black hover:bg-black text-white rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-black/10 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                          Sending...
                        </>
                      ) : (
                        <>Send Message <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
