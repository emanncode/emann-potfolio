import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleEnter = () => {
      setHovering(true);
    };

    const handleLeave = () => {
      setHovering(false);
    };

    window.addEventListener("mousemove", move);

    const hoverables = document.querySelectorAll("a, button");

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);

      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);

        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: hovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        className="
          pointer-events-none fixed z-[10000]
          h-[10px] w-[10px]
          rounded-full
          bg-accent
          mix-blend-difference
        "
      />

      <motion.div
        animate={{
          x: position.x - 21,
          y: position.y - 21,
          width: hovering ? 64 : 42,
          height: hovering ? 64 : 42,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 22,
        }}
        className="
          pointer-events-none fixed z-[9998]
          rounded-full
          border border-accent/40
        "
      />
    </>
  );
}
