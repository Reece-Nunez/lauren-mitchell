import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import PortfolioCard from "../components/PortfolioCard";
import { JsonLd, breadcrumbs } from "../components/JsonLd";

const portfolio = [
  { title: "Emma - Senior", folder: "Emma_-_Senior", cover: "IMG_8961.jpeg" },
  { title: "Luca - Portraits", folder: "Luca_-_portraits", cover: "0T8A0834.jpg" },
  { title: "Adrina - Pregnancy Announcement", folder: "adrina_-_pregnancy_announcement_session", cover: "0T8A0309-2.jpg" },
  { title: "Bonczyk Family", folder: "bonczyk_family", cover: "IMG_9536.jpeg" },
  { title: "Coats Family", folder: "coats_family", cover: "0T8A7502.jpg" },
  { title: "Lauren & Baby - In Home", folder: "in_home_session", cover: "0T8A9159.jpg" },
  { title: "Magruders - In Home Newborn", folder: "magruders_-_in_home_newborn_session", cover: "0T8A3973.jpg" },
  { title: "Schultheis Family", folder: "schultheis_family", cover: "0T8A0108.jpg" },
  { title: "Williams Family", folder: "williams_family", cover: "0T8A4861.jpeg" },
];

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse portrait, family, maternity, newborn & event session galleries by Lauren Mitchell Photography in Ponca City, Oklahoma.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Lauren Mitchell Photography",
    description: "Browse session galleries by Lauren Mitchell Photography.",
    url: "/portfolio",
    images: [{ url: "/portfolio-hero.jpg", width: 1200, height: 630 }],
  },
};

const BASE = "https://www.laurenmitchellstudio.com";

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Home", url: BASE }, { name: "Portfolio", url: `${BASE}/portfolio` }])} />
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative h-[90vh] min-h-[700px] bg-charcoal flex items-center justify-center overflow-hidden">
        <Image src="/portfolio-hero.jpg" alt="Portfolio" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative text-center px-6">
          <FadeIn>
            <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
              Browse Sessions
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-[0.08em]">
              Portfolio
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="bg-linen py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {portfolio.map((item, i) => (
              <FadeIn key={item.folder} delay={i * 0.08} y={30}>
                <PortfolioCard
                  title={item.title}
                  image={`/gallery/${item.folder}/${item.cover}`}
                  href={`/gallery/${item.folder}`}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal py-20 sm:py-28">
        <div className="mx-auto max-w-[800px] px-6 sm:px-10 lg:px-16 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl text-cream leading-tight mb-6">
              Ready to Create Something Beautiful?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="w-12 h-[1px] bg-blush mx-auto mb-8" />
            <p className="font-body text-base text-cream/50 leading-relaxed mb-10">
              I&apos;d love to hear your story and capture it with care.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="tel:9187589297"
              className="inline-block font-body text-[12px] tracking-[0.25em] uppercase bg-blush text-cream px-10 py-4 hover:bg-terracotta transition-colors duration-400"
            >
              Book a Session
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-charcoal border-t border-cream/5 py-8">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-cream/25">
            &copy; 2026 Lauren Mitchell Photography
          </p>
          <p className="font-body text-[11px] tracking-[0.2em] text-cream/25">
            Ponca City, Oklahoma
          </p>
        </div>
      </footer>
    </>
  );
}
