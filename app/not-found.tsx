import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";

export const metadata: Metadata = {
  title: "Page Not Found | Design Homes",
  description: "That page does not exist on the Design Homes site. Browse our services, the areas we build in, or get in touch.",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/services/", label: "Our services", blurb: "New homes, duplexes, custom builds, Queenslanders and more." },
  { href: "/locations/", label: "Areas we build", blurb: "Brisbane, Gold Coast, Sunshine Coast, Ipswich, Logan, Moreton Bay and Redland." },
  { href: "/blog/", label: "Building insights", blurb: "Straight answers on cost, approvals, site conditions and contracts in Queensland." },
  { href: "/contact/", label: "Contact us", blurb: "Send through the address and what you have in mind." },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <section className="bg-black pt-40 pb-20">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B69560]">404</p>
          <h1 className="mt-4 font-sora text-4xl font-bold leading-tight text-white md:text-5xl">
            That page isn&apos;t here.
          </h1>
          <p className="mt-6 max-w-[640px] text-base leading-8 text-white/70">
            The address may have changed or been typed incorrectly. Everything on the site is
            reachable from the links below.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-[900px] gap-5 px-6 sm:grid-cols-2 lg:px-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group rounded-2xl border border-black/[0.08] bg-[#FAFAF9] px-6 py-6 transition-all hover:border-[#B69560]/40 hover:shadow-lg"
            >
              <span className="font-sora text-lg font-semibold text-black">{l.label}</span>
              <span className="mt-2 block text-sm leading-7 text-black/60">{l.blurb}</span>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
