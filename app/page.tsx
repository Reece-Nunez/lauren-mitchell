import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroGallery from "./components/HeroGallery";
import FadeIn from "./components/FadeIn";
import SessionCard from "./components/SessionCard";
import Testimonials from "./components/Testimonials";
import PortfolioCard from "./components/PortfolioCard";
import { JsonLd, localBusiness, webSite } from "./components/JsonLd";

export const metadata: Metadata = {
  title: "Lauren Mitchell Photography | Ponca City, OK Photographer",
  description:
    "Professional maternity, family, newborn & event photographer in Ponca City, Oklahoma. Capturing life's most tender moments for your family.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Lauren Mitchell Photography | Ponca City, OK",
    description:
      "Professional maternity, family, newborn & event photographer in Ponca City, Oklahoma.",
    url: "/",
  },
};

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

const sessions = [
  {
    title: "Maternity",
    desc: "Celebrate the beauty of this season with images that reflect the anticipation and love of your growing family.",
    image: "/gallery/pregnancy.jpg",
  },
  {
    title: "Family",
    desc: "Whether it's laughter, chaos, or quiet moments in between, family sessions are about documenting your unique story just as it is.",
    image: "/gallery/family.jpg",
  },
  {
    title: "NB+Baby",
    desc: "Those first weeks and months go by so quickly. These sessions focus on the tiny details and little moments you'll want to remember forever!",
    image: "/gallery/newborn.jpg",
  },
  {
    title: "Events",
    desc: "From weddings to birthdays and everything in-between, event photography allows you to stay present while your memories are preserved.",
    image: "/gallery/wedding-features.jpg",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={localBusiness} />
      <JsonLd data={webSite} />
      <Navbar />
      <HeroGallery />

      {/* ── Portfolio ── */}
      <section id="portfolio" className="bg-linen py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
                Recent Work
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight">
                Portfolio
              </h2>
            </div>
          </FadeIn>

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

      {/* ── About Preview ── */}
      <section id="about" className="bg-cream py-28 sm:py-36">
        <div className="mx-auto max-w-[1000px] px-6 sm:px-10 lg:px-16 text-center">
          <FadeIn>
            <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
              Welcome
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal mb-8 leading-tight">
              Capturing Life&apos;s Tender Moments
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="w-12 h-[1px] bg-blush mx-auto mb-8" />
            <p className="font-body text-base sm:text-lg text-charcoal/60 leading-relaxed max-w-2xl mx-auto">
              I&apos;m so glad you&apos;re here! Growing up, I loved seeing how
              passionate my mom was about photography and capturing the candid,
              every day moments. Now as a mom to three littles, I&apos;ve seen
              how fleeting time is — and I can&apos;t wait to capture those
              moments for you and your family!
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <a
              href="#contact"
              className="inline-block mt-10 font-body text-[12px] tracking-[0.25em] uppercase border border-blush/40 text-blush px-8 py-3.5 hover:bg-blush hover:text-cream transition-all duration-400"
            >
              Get in Touch
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── Services / Sessions ── */}
      <section id="sessions" className="bg-linen py-28 sm:py-36">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
                What I Offer
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight">
                Sessions
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {sessions.map((session, i) => (
              <FadeIn key={session.title} delay={i * 0.15} y={40}>
                <SessionCard
                  title={session.title}
                  desc={session.desc}
                  image={session.image}
                />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center mt-14">
              <a
                href="/sessions"
                className="inline-block font-body text-[12px] tracking-[0.25em] uppercase border border-blush/40 text-blush px-8 py-3.5 hover:bg-blush hover:text-cream transition-all duration-400"
              >
                View All Sessions
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-cream py-28 sm:py-36">
        <div className="mx-auto max-w-[900px] px-6 sm:px-10 lg:px-16">
          <FadeIn>
            <Testimonials />
          </FadeIn>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-charcoal py-28 sm:py-36">
        <div className="mx-auto max-w-[800px] px-6 sm:px-10 lg:px-16 text-center">
          <FadeIn>
            <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
              Let&apos;s Connect
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl text-cream leading-tight mb-6">
              Book Your Session
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="w-12 h-[1px] bg-blush mx-auto mb-8" />
            <p className="font-body text-base text-cream/50 leading-relaxed mb-4">
              I&apos;d love to hear your story and capture it beautifully.
            </p>
            <p className="font-body text-base text-cream/50 leading-relaxed mb-10">
              Based in Ponca City, Oklahoma — available for travel.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="/contact"
                className="inline-block font-body text-[12px] tracking-[0.25em] uppercase bg-blush text-cream px-10 py-4 hover:bg-terracotta transition-colors duration-400"
              >
                Get in Touch
              </a>
              <a
                href="tel:9187589297"
                className="inline-block font-body text-[12px] tracking-[0.25em] uppercase border border-cream/20 text-cream/60 px-10 py-4 hover:border-cream/40 hover:text-cream transition-all duration-400"
              >
                Call — (918) 758-9297
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex items-center justify-center gap-8">
              <a
                href="https://www.instagram.com/laurenmitchellphoto/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[12px] tracking-[0.15em] uppercase text-cream/40 hover:text-blush transition-colors duration-300"
              >
                Instagram
              </a>
              <span className="text-cream/15">|</span>
              <a
                href="https://www.facebook.com/profile.php?id=61568352021526"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[12px] tracking-[0.15em] uppercase text-cream/40 hover:text-blush transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
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
