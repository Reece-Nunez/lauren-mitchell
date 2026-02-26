"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Sessions", href: "/sessions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_20px_rgba(61,50,41,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo / Name */}
          <Link href="/" className="group flex flex-col items-start leading-none">
            <span
              className={`font-heading text-2xl sm:text-3xl tracking-[0.15em] font-normal transition-colors duration-500 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              Lauren Mitchell
            </span>
            <span
              className={`font-body text-[10px] sm:text-xs tracking-[0.35em] uppercase mt-0.5 transition-colors duration-500 ${
                scrolled ? "text-taupe" : "text-white/70"
              }`}
            >
              Photography
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isRoute = link.href.startsWith("/");
              const Tag = isRoute ? Link : "a";
              return (
                <Tag
                  key={link.label}
                  href={link.href}
                  className={`relative font-body text-[13px] tracking-[0.2em] uppercase transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled
                      ? "text-charcoal/70 hover:text-charcoal after:bg-blush"
                      : "text-white/80 hover:text-white after:bg-white/60"
                  }`}
                >
                  {link.label}
                </Tag>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2 z-[60]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-6 transition-all duration-300 ${
                mobileOpen
                  ? "rotate-45 translate-y-[6.5px] bg-charcoal"
                  : scrolled
                  ? "bg-charcoal"
                  : "bg-white"
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-charcoal"
                  : "bg-white"
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 transition-all duration-300 ${
                mobileOpen
                  ? "-rotate-45 -translate-y-[6.5px] bg-charcoal"
                  : scrolled
                  ? "bg-charcoal"
                  : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-cream z-50 flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => {
          const isRoute = link.href.startsWith("/");
          const Tag = isRoute ? Link : "a";
          return (
            <Tag
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-3xl tracking-[0.15em] text-charcoal hover:text-blush transition-colors duration-300"
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms, color 0.3s`,
              }}
            >
              {link.label}
            </Tag>
          );
        })}
      </div>
    </nav>
  );
}
