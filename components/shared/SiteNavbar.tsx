"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "New Home Builds", href: "/services/new-home-builds" },
      { name: "Duplex & Townhouses", href: "/services/duplex-townhouses" },
      { name: "Custom Builds", href: "/services/custom-builds" },
      { name: "Queenslander Homes", href: "/services/queenslander-homes" },
    ],
  },
  { name: "Areas", href: "/locations" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock the page behind the mobile menu so the overlay doesn't scroll away on touch
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  // Close the menu on route change so a tapped link never leaves the overlay open.
  // Implemented as a render-time state reset (React's documented pattern for
  // "adjusting state when a prop changes") rather than a setState-in-effect.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-[#000000]/85 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : ""
        }`}
      >
        <nav
          className={`mx-auto flex max-w-[1240px] items-center justify-between px-6 transition-[height] duration-300 lg:px-10 ${
            isScrolled ? "h-20 lg:h-24" : "h-28 lg:h-[144px]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="relative block w-auto shrink-0">
            <Image
              src="/assets/images/logo-design-homes-mark.png"
              alt="Design Homes"
              width={720}
              height={487}
              className={`w-auto object-contain transition-[height] duration-300 ${
                isScrolled ? "h-14 lg:h-[76px]" : "h-20 lg:h-28"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-2 lg:flex">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.name} className="group relative">
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors duration-300 ${
                        active ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {link.children && (
                        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                      {/* animated gold underline */}
                      <span
                        className={`pointer-events-none absolute inset-x-4 bottom-1 h-px origin-left bg-[#B69560] transition-transform duration-300 ${
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>

                    {link.children && (
                      <div className="invisible absolute left-0 top-full translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="min-w-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#000000]/95 py-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`block px-5 py-2.5 text-sm transition-colors duration-200 ${
                                pathname === child.href
                                  ? "bg-[#B69560]/10 text-[#B69560]"
                                  : "text-white/70 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <a
              href="tel:0436376001"
              className="ml-4 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg hover:shadow-[#B69560]/30"
            >
              <Phone className="h-4 w-4" />
              0436 376 001
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 text-white lg:hidden"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-[#000000] pt-32 lg:hidden"
          >
            <div className="flex min-h-full flex-col items-center gap-7 px-6 pb-16 pt-10">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name} className="flex flex-col items-center">
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className={`flex items-center gap-2 text-2xl font-medium transition-colors ${
                        isActive(link.href) ? "text-[#B69560]" : "text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 flex flex-col items-center gap-3"
                      >
                        <Link href="/services" onClick={closeMobileMenu} className="text-lg text-white/60 hover:text-[#B69560]">
                          All Services
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className="text-lg text-white/60 hover:text-[#B69560]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`text-2xl font-medium transition-colors ${
                      isActive(link.href) ? "text-[#B69560]" : "text-white hover:text-[#B69560]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <a
                href="tel:0436376001"
                onClick={closeMobileMenu}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-semibold text-white"
              >
                <Phone className="h-5 w-5" />
                0436 376 001
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
