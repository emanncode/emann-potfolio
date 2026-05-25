"use client";

import { motion } from "framer-motion";

export default function HeroAmbient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* TOP LIGHT */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[-10%]
          h-[35rem]
          w-[35rem]
          rounded-full
          bg-primary/20
          blur-[140px]
        "
      />

      {/* RIGHT LIGHT */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-10%]
          top-[20%]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-white/10
          blur-[120px]
        "
      />

      {/* CENTER GLOW */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[24rem]
          w-[24rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />
    </div>
  );
}
