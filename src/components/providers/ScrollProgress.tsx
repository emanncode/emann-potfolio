import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.15,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        left-0
        top-0
        z-9999
        h-0.5
        w-full
        origin-left
        bg-primary
      "
    />
  );
}
