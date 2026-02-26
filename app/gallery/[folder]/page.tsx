import fs from "fs";
import path from "path";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import GalleryGrid from "../../components/GalleryGrid";

const sessionNames: Record<string, string> = {
  "Emma_-_Senior": "Emma - Senior",
  "Luca_-_portraits": "Luca - Portraits",
  "adrina_-_pregnancy_announcement_session": "Adrina - Pregnancy Announcement",
  "bonczyk_family": "Bonczyk Family",
  "coats_family": "Coats Family",
  "in_home_session": "Lauren & Baby - In Home",
  "magruders_-_in_home_newborn_session": "Magruders - In Home Newborn",
  "schultheis_family": "Schultheis Family",
  "williams_family": "Williams Family",
};

export function generateStaticParams() {
  return Object.keys(sessionNames).map((folder) => ({ folder }));
}

export function generateMetadata({ params }: { params: Promise<{ folder: string }> }) {
  // For static generation we can use a sync approach via the mapping
  return {
    title: `Gallery | Lauren Mitchell Photography`,
    description: "View the full gallery from this session by Lauren Mitchell Photography.",
  };
}

function getImages(folder: string) {
  const dir = path.join(process.cwd(), "public", "gallery", folder);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f) && f !== "hero.jpg" && f !== "hero.jpeg")
    .sort()
    .map((f) => `/gallery/${folder}/${f}`);
}

export default async function GalleryPage({ params }: { params: Promise<{ folder: string }> }) {
  const { folder } = await params;
  const title = sessionNames[folder] || folder;
  const images = getImages(folder);

  // Find the hero image extension
  const heroExt = fs.existsSync(path.join(process.cwd(), "public", "gallery", folder, "hero.jpeg"))
    ? "jpeg"
    : "jpg";

  return (
    <>
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative h-[75vh] min-h-[550px] overflow-hidden">
        <Image
          src={`/gallery/${folder}/hero.${heroExt}`}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeIn>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-[0.08em] text-center px-6">
              {title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
          <div className="mb-10">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 font-body text-[12px] tracking-[0.15em] uppercase text-charcoal/50 hover:text-blush transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to Portfolio
            </a>
          </div>
          <GalleryGrid images={images} title={title} />
        </div>
      </section>

      {/* ── Back + CTA ── */}
      <section className="bg-charcoal py-20 sm:py-28">
        <div className="mx-auto max-w-[800px] px-6 sm:px-10 lg:px-16 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl text-cream leading-tight mb-6">
              Love What You See?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="w-12 h-[1px] bg-blush mx-auto mb-8" />
            <p className="font-body text-base text-cream/50 leading-relaxed mb-10">
              I&apos;d love to create something just as beautiful for your family.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:9187589297"
                className="inline-block font-body text-[12px] tracking-[0.25em] uppercase bg-blush text-cream px-10 py-4 hover:bg-terracotta transition-colors duration-400"
              >
                Book a Session
              </a>
              <a
                href="/portfolio"
                className="inline-block font-body text-[12px] tracking-[0.25em] uppercase border border-cream/20 text-cream/60 px-10 py-4 hover:border-cream/40 hover:text-cream transition-all duration-400"
              >
                Back to Portfolio
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
