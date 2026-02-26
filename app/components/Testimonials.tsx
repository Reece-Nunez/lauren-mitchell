"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "My daughter and I had a wonderful experience working with Lauren on our Mother\u2019s Day photoshoot. Lauren made me feel so special and captured such a special memory for me. The pictures turned out so good and I couldn\u2019t believe the turn out of them. I loved the posed pictures as much as I did the candid photos. She truly has a gift behind the lens and I can\u2019t wait to do another family session with her.",
    name: "Katrina Wicker",
    type: "Family Session",
  },
  {
    quote:
      "I highly recommend Lauren! She was wonderful to work with our family. We had not had an extended family session in years due to my health and family conflicts. When my family decided to make it happen, she did too! She was flexible and her skills were professional. She knew how to handle the little kids with patience and kindness.",
    name: "Leslie Waite",
    type: "Family Session",
  },
  {
    quote:
      "Lauren was the SWEETEST person ever, not only did she make my fianc\u00e9 and I extremely comfortable through the whole process but she was super gentle and caring towards our 3 month old as well. Our next session of family photos and every one after that will 100% be booked with her!",
    name: "Kenzie Lara",
    type: "Family Session",
  },
  {
    quote:
      "When I first met Lauren, I was in a pinch looking for someone to take engagement photos last minute so I could get my invitations out. We only spent an hour with her, but we immediately knew she was the perfect person to capture our big day! She not only made us feel comfortable in front of the camera, but also went above and beyond \u2014 asking me to list out must-have shots, offering creative ideas, and even helping curl my flower girl\u2019s hair. Lauren has such a genuine, thoughtful touch \u2014 she\u2019s your person!",
    name: "Brianna Lang",
    type: "Engagement & Wedding",
  },
];

const INTERVAL_MS = 6000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative min-h-[400px] sm:min-h-[350px] flex flex-col items-center justify-center">
      {/* Quote icon */}
      <svg
        className="mb-8 text-blush/25"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
      </svg>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="font-body text-base sm:text-lg text-charcoal/70 leading-relaxed mb-8 max-w-3xl mx-auto italic">
            {testimonials[current].quote}
          </p>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-taupe">
            — {testimonials[current].name}
          </p>
          <p className="font-body text-[11px] tracking-[0.15em] text-charcoal/30 mt-1">
            {testimonials[current].type}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex gap-2.5 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? "bg-blush w-6"
                : "bg-charcoal/15 hover:bg-charcoal/30"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
