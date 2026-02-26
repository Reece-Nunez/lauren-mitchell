"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/*
 * Replace these paths with Lauren's actual photos.
 * Put images in /public/gallery/ and update this array.
 */
const galleryImages = [
  { src: "/gallery/baby-announcement.jpg", alt: "Baby announcement", focus: "center" },
  { src: "/gallery/birthday-boy.jpg", alt: "Birthday boy", focus: "center top" },
  { src: "/gallery/lauren.jpg", alt: "Lauren Mitchell", focus: "center" },
  { src: "/gallery/family-beach.jpg", alt: "Family beach session", focus: "center bottom" },
  { src: "/gallery/mom-baby-floor.jpg", alt: "Mother and baby", focus: "center" },
  { src: "/gallery/wedding-features.jpg", alt: "Wedding photography", focus: "center" },
];

const AUTOPLAY_MS = 5000;

export default function HeroGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const total = galleryImages.length;

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent(index);
      setProgress(0);
      startTimeRef.current = Date.now();
    },
    []
  );

  const prev = useCallback(() => {
    goTo(current === 0 ? total - 1 : current - 1, -1);
  }, [current, total, goTo]);

  const next = useCallback(() => {
    goTo(current === total - 1 ? 0 : current + 1, 1);
  }, [current, total, goTo]);

  // Auto-advance + progress bar
  useEffect(() => {
    const tick = () => {
      if (!isPaused) {
        const elapsed = Date.now() - startTimeRef.current;
        const pct = Math.min(elapsed / AUTOPLAY_MS, 1);
        setProgress(pct);

        if (pct >= 1) {
          setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
          setDirection(1);
          setProgress(0);
          startTimeRef.current = Date.now();
        }
      }
      progressRef.current = requestAnimationFrame(tick);
    };

    progressRef.current = requestAnimationFrame(tick);
    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [isPaused, total]);

  // Reset timer on pause/unpause
  useEffect(() => {
    if (!isPaused) {
      startTimeRef.current = Date.now();
      setProgress(0);
    }
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Touch / swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.05,
      x: dir > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 1.02,
      x: dir > 0 ? -60 : 60,
    }),
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-charcoal"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Animated Images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 z-10"
        >
          <Image
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            fill
            className="object-cover"
            style={{ objectPosition: galleryImages[current].focus }}
            sizes="100vw"
            priority={current < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Title Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="text-center px-6">
          <p className="font-body text-[11px] sm:text-[13px] tracking-[0.5em] uppercase text-white/70 mb-3 sm:mb-4">
            Welcome To
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-[0.1em]">
            Lauren Mitchell Photography
          </h1>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-30 group p-3 cursor-pointer"
        aria-label="Previous image"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-white/60 group-hover:text-white transition-colors duration-300"
        >
          <path
            d="M25 8L13 20L25 32"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-4 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 group p-3 cursor-pointer"
        aria-label="Next image"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-white/60 group-hover:text-white transition-colors duration-300"
        >
          <path
            d="M15 8L27 20L15 32"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
        <span className="font-body text-white/70 text-sm tracking-[0.3em]">
          {current + 1} / {total}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-[2px] bg-white/10">
        <motion.div
          className="h-full bg-white/50"
          style={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.05, ease: "linear" }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-8 sm:right-12 z-30 flex flex-col items-center gap-2 opacity-50">
        <span className="font-body text-white text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-white/40 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-white"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
