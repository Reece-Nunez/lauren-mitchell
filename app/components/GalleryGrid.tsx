"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

interface GalleryGridProps {
  images: string[];
  title: string;
}

export default function GalleryGrid({ images, title }: GalleryGridProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i !== null && i > 0 ? i - 1 : images.length - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i !== null && i < images.length - 1 ? i + 1 : 0)),
    [images.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {images.map((src, i) => (
          <FadeIn key={src} delay={Math.min(i * 0.05, 0.4)}>
            <div
              className="mb-4 break-inside-avoid cursor-pointer group overflow-hidden"
              onClick={() => setLightbox(i)}
            >
              <Image
                src={src}
                alt={`${title} - photo ${i + 1}`}
                width={800}
                height={1000}
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 sm:left-8 text-cream/40 hover:text-cream transition-colors z-10"
              aria-label="Previous image"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 sm:right-8 text-cream/40 hover:text-cream transition-colors z-10"
              aria-label="Next image"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              className="relative max-w-[90vw] max-h-[85vh]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox]}
                alt={`${title} - photo ${lightbox + 1}`}
                width={1400}
                height={1800}
                className="max-h-[85vh] w-auto h-auto object-contain"
                priority
              />
            </motion.div>

            {/* Counter */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-[11px] tracking-[0.2em] text-cream/30">
              {lightbox + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
