import { motion } from "framer-motion";

import { heroData } from "@/data/hero";

import HeroTitle from "./HeroTitle";

export default function HeroContent() {
  return (
    <div
      className="
        flex flex-col justify-end
        pt-32 pb-14
      "
    >
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
          duration: 0.7,
        }}
        className="
          mb-5
          font-mono
          text-[12px]
          uppercase
          tracking-[0.3em]
          text-primary
        "
      >
        {heroData.eyebrow}
      </motion.p>

      <HeroTitle title={heroData.title} />

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.7,
          duration: 0.8,
        }}
        className="
          mt-7
          max-w-140
          text-[clamp(15px,1.6vw,20px)]
          leading-relaxed
          text-white/60
        "
      >
        {heroData.description}
      </motion.p>
    </div>
  );
}
