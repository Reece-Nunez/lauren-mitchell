import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import { JsonLd, photographerPerson, breadcrumbs } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "About Lauren Mitchell",
  description:
    "Meet Lauren Mitchell — a lifestyle and portrait photographer based in Ponca City, Oklahoma. Mom of three, passionate about capturing candid, everyday moments.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Lauren Mitchell | Ponca City Photographer",
    description:
      "Meet Lauren Mitchell — lifestyle and portrait photographer in Ponca City, Oklahoma.",
    url: "/about",
    images: [{ url: "/branding/hero.webp", width: 1200, height: 630 }],
  },
};

const BASE = "https://www.laurenmitchellstudio.com";

export default function AboutPage() {
  return (
    <>
      <JsonLd data={photographerPerson} />
      <JsonLd data={breadcrumbs([{ name: "Home", url: BASE }, { name: "About", url: `${BASE}/about` }])} />
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden">
        <Image
          src="/branding/hero.webp"
          alt="Floral arrangement"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTYgOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iI0M0QjI5QSIvPjwvc3ZnPg=="
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeIn>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white tracking-[0.08em]">
              About Lauren
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Portrait */}
            <FadeIn>
              <div className="relative aspect-[3/4] w-full max-w-[480px] mx-auto lg:mx-0">
                <Image
                  src="/branding/0T8A9088.webp"
                  alt="Lauren Mitchell smiling with her camera"
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTYgOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iI0M0QjI5QSIvPjwvc3ZnPg=="
                  className="object-cover"
                />
              </div>
            </FadeIn>

            {/* Text */}
            <div>
              <FadeIn delay={0.1}>
                <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
                  Nice to Meet You
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <h2 className="font-heading text-3xl sm:text-4xl text-charcoal mb-6 leading-tight">
                  Hey There, I&apos;m Lauren
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="w-12 h-[1px] bg-blush mb-6" />
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="font-body text-base text-charcoal/60 leading-relaxed mb-5">
                  I&apos;m so glad you&apos;re here! Growing up, I loved seeing
                  how passionate my mom was about photography and capturing the
                  candid, every day moments. Now as a mom to three littles,
                  I&apos;ve seen how fleeting time is.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="font-body text-base text-charcoal/60 leading-relaxed">
                  This has caused me to fall in love with photography as well to
                  document each moment watching my babies grow. I can&apos;t wait
                  to capture the same moments for you and your family!
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo Strip ── */}
      <section className="bg-linen py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
                Behind the Lens
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight">
                A Few More of Me
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FadeIn delay={0}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/branding/0T8A9036.webp"
                  alt="Lauren sitting on couch with camera"
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTYgOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iI0M0QjI5QSIvPjwvc3ZnPg=="
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/branding/0T8A9046.webp"
                  alt="Lauren standing with camera at her side"
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTYgOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iI0M0QjI5QSIvPjwvc3ZnPg=="
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/branding/0T8A9077.webp"
                  alt="Lauren seated with camera, looking down"
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTYgOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iI0M0QjI5QSIvPjwvc3ZnPg=="
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/branding/0T8A9079.webp"
                  alt="Lauren smiling, chin resting on hand"
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTYgOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iI0M0QjI5QSIvPjwvc3ZnPg=="
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── My Approach ── */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-[900px] px-6 sm:px-10 lg:px-16">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
                What to Expect
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight mb-6">
                My Approach
              </h2>
              <div className="w-12 h-[1px] bg-blush mx-auto" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <FadeIn delay={0} y={40}>
              <div>
                <p className="font-heading text-5xl text-blush/30 mb-3">01</p>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  Connection First
                </h3>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                  Before we ever pick up the camera, we chat. I want to know
                  your story, your family, and what matters most to you so every
                  image feels authentically yours.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} y={40}>
              <div>
                <p className="font-heading text-5xl text-blush/30 mb-3">02</p>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  Relaxed &amp; Natural
                </h3>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                  I guide you through gentle prompts and natural movement — no
                  awkward posing. The best shots happen when you forget the
                  camera is even there.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} y={40}>
              <div>
                <p className="font-heading text-5xl text-blush/30 mb-3">03</p>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  Timeless Delivery
                </h3>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                  Your gallery is hand-edited with a warm, timeless aesthetic
                  that will look just as beautiful in twenty years as it does
                  today.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal py-24 sm:py-32">
        <div className="mx-auto max-w-[800px] px-6 sm:px-10 lg:px-16 text-center">
          <FadeIn>
            <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
              Let&apos;s Create Together
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl text-cream leading-tight mb-6">
              Ready to Book?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="w-12 h-[1px] bg-blush mx-auto mb-8" />
            <p className="font-body text-base text-cream/50 leading-relaxed mb-10">
              I&apos;d love to hear about the moments you want to capture.
              Let&apos;s connect and start planning your session.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <a
              href="tel:9187589297"
              className="inline-block font-body text-[12px] tracking-[0.25em] uppercase bg-blush text-cream px-10 py-4 hover:bg-terracotta transition-colors duration-400"
            >
              Call — (918) 758-9297
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
