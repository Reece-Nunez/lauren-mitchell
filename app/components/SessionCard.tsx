"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface SessionCardProps {
  title: string;
  desc: string;
  image: string;
  href?: string;
}

export default function SessionCard({ title, desc, image, href }: SessionCardProps) {
  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { href } : {};
  return (
    <Wrapper {...wrapperProps as Record<string, string>}>
    <motion.div
      className="group relative bg-cream overflow-hidden cursor-pointer h-full flex flex-col"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Image that reveals on hover */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-charcoal/20"
          variants={{
            rest: { opacity: 0.2 },
            hover: { opacity: 0 },
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Text content */}
      <div className="p-8 sm:p-10 text-center flex-1 flex flex-col">
        <h3 className="font-heading text-2xl text-charcoal mb-3">{title}</h3>
        <div className="w-8 h-[1px] bg-blush mx-auto mb-4" />
        <p className="font-body text-sm text-charcoal/50 leading-relaxed">
          {desc}
        </p>
        {href && (
          <motion.span
            className="inline-block mt-5 font-body text-[11px] tracking-[0.2em] uppercase text-blush"
            variants={{
              rest: { opacity: 0, y: 8 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            View Gallery →
          </motion.span>
        )}
      </div>
    </motion.div>
    </Wrapper>
  );
}
