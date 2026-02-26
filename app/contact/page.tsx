import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact | Lauren Mitchell Photography",
  description:
    "Get in touch with Lauren Mitchell Photography to book your session. Based in Ponca City, Oklahoma.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative h-[50vh] min-h-[400px] bg-charcoal flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="relative text-center px-6">
          <FadeIn>
            <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
              Let&apos;s Connect
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-[0.08em]">
              Get in Touch
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Left — Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="font-body text-[11px] tracking-[0.4em] uppercase text-blush mb-4">
                  Reach Out
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight mb-6">
                  I&apos;d Love to Hear From You
                </h2>
                <div className="w-12 h-[1px] bg-blush mb-8" />
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="font-body text-base text-charcoal/60 leading-relaxed mb-10">
                  Whether you&apos;re ready to book or just have a few questions,
                  I&apos;m here to help. Fill out the form and I&apos;ll get back
                  to you as soon as possible!
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blush/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blush">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-[11px] tracking-[0.2em] uppercase text-charcoal/40 mb-1">Phone</p>
                      <a href="tel:9187589297" className="font-body text-base text-charcoal hover:text-blush transition-colors">
                        (918) 758-9297
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blush/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blush">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-[11px] tracking-[0.2em] uppercase text-charcoal/40 mb-1">Location</p>
                      <p className="font-body text-base text-charcoal">Ponca City, Oklahoma</p>
                      <p className="font-body text-sm text-charcoal/50 mt-0.5">Available for travel</p>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blush/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blush">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-[11px] tracking-[0.2em] uppercase text-charcoal/40 mb-1">Social</p>
                      <div className="flex flex-col gap-1">
                        <a
                          href="https://www.instagram.com/laurenmitchellphoto/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-base text-charcoal hover:text-blush transition-colors"
                        >
                          Instagram
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61568352021526"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-base text-charcoal hover:text-blush transition-colors"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.15}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
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
