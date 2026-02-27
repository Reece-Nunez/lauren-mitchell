import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import SessionCard from "../components/SessionCard";
import { JsonLd, services, breadcrumbs } from "../components/JsonLd";

const sessions = [
  {
    title: "Maternity",
    desc: "Celebrate the beauty of this season with images that reflect the anticipation and love of your growing family. I recommend scheduling this session between 28-32 weeks of your pregnancy!",
    image: "/gallery/pregnancy.webp",
    href: "/gallery/adrina_-_pregnancy_announcement_session",
  },
  {
    title: "Family",
    desc: "Whether it's laughter, chaos, or quiet moments in between, family sessions are about documenting your unique story just as it is.",
    image: "/gallery/family.webp",
    href: "/gallery/coats_family",
  },
  {
    title: "NB+Baby",
    desc: "Those first weeks and months go by so quickly. These sessions focus on the tiny details and little moments you'll want to remember forever!",
    image: "/gallery/newborn.webp",
    href: "/gallery/magruders_-_in_home_newborn_session",
  },
  {
    title: "Events",
    desc: "From weddings to birthdays and everything in-between, event photography allows you to stay present while your memories are preserved. I'll capture the big highlights and the little details that make the day unforgettable.",
    image: "/gallery/wedding-features.webp",
    href: "/portfolio",
  },
];

export const metadata: Metadata = {
  title: "Sessions & Services",
  description:
    "Explore maternity, family, newborn & event photography sessions by Lauren Mitchell Photography in Ponca City, Oklahoma. Book your session today.",
  alternates: { canonical: "/sessions" },
  openGraph: {
    title: "Sessions & Services | Lauren Mitchell Photography",
    description:
      "Maternity, family, newborn & event photography sessions in Ponca City, Oklahoma.",
    url: "/sessions",
    images: [{ url: "/sessions-hero.webp", width: 1200, height: 630 }],
  },
};

const BASE = "https://www.laurenmitchellstudio.com";

export default function SessionsPage() {
  return (
    <>
      <JsonLd data={services} />
      <JsonLd data={breadcrumbs([{ name: "Home", url: BASE }, { name: "Sessions", url: `${BASE}/sessions` }])} />
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative h-[90vh] min-h-[700px] bg-charcoal flex items-center justify-center overflow-hidden">
        <Image src="/sessions-hero.webp" alt="Sessions" fill priority placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTYgOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iI0M0QjI5QSIvPjwvc3ZnPg==" className="object-cover object-center" />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative text-center px-6">
          <FadeIn>
            <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
              What I Offer
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-[0.08em]">
              Sessions
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Session Cards ── */}
      <section className="bg-linen py-28 sm:py-36">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {sessions.map((session, i) => (
              <FadeIn key={session.title} delay={i * 0.1} y={40}>
                <SessionCard
                  title={session.title}
                  desc={session.desc}
                  image={session.image}
                  href={session.href}
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
              Not Sure Which Session Is Right for You?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="w-12 h-[1px] bg-blush mx-auto mb-8" />
            <p className="font-body text-base text-cream/50 leading-relaxed mb-10">
              Let&apos;s chat! I&apos;d love to help you figure out the perfect session for your family.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="tel:9187589297"
              className="inline-block font-body text-[12px] tracking-[0.25em] uppercase bg-blush text-cream px-10 py-4 hover:bg-terracotta transition-colors duration-400"
            >
              Call to Book — (918) 758-9297
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
