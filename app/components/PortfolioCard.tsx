"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
  title: string;
  image: string;
  href: string;
}

export default function PortfolioCard({ title, image, href }: PortfolioCardProps) {
  return (
    <Link href={href}>
    <motion.div
      className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-charcoal/30"
        variants={{
          rest: { opacity: 0.3 },
          hover: { opacity: 0.5 },
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Title overlay */}
      <div className="absolute inset-0 flex items-end p-6 sm:p-8">
        <motion.h3
          className="font-heading text-xl sm:text-2xl text-white leading-snug"
          variants={{
            rest: { y: 0, opacity: 1 },
            hover: { y: -4, opacity: 1 },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
    </Link>
  );
}
