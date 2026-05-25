"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (x: number, y: number) => {
      setPosition({
        x,
        y,
      });

      setVisible(true);
    };

    /* DESKTOP */
    const handleMouseMove = (e: MouseEvent) => {
      moveCursor(e.clientX, e.clientY);
    };

    /* MOBILE */
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];

      if (!touch) return;

      moveCursor(touch.clientX, touch.clientY);
    };

    const handleEnter = () => {
      setHovering(true);
    };

    const handleLeave = () => {
      setHovering(false);
    };

    /* EVENTS */
    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove,
      {
        passive: true,
      }
    );

    const hoverables =
      document.querySelectorAll("a, button");

    hoverables.forEach((el) => {
      el.addEventListener(
        "mouseenter",
        handleEnter
      );

      el.addEventListener(
        "mouseleave",
        handleLeave
      );
    });

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      hoverables.forEach((el) => {
        el.removeEventListener(
          "mouseenter",
          handleEnter
        );

        el.removeEventListener(
          "mouseleave",
          handleLeave
        );
      });
    };
  }, []);

  return (
    <>
      {/* INNER DOT */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: hovering ? 0.6 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10000]
          h-2
          w-2
          rounded-full
          bg-primary
          mix-blend-difference
          md:h-[10px]
          md:w-[10px]
        "
      />

      {/* OUTER RING */}
      <motion.div
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          width: hovering ? 64 : 38,
          height: hovering ? 64 : 38,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 22,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          rounded-full
          border
          border-primary/40
          backdrop-blur-sm
        "
      />
    </>
  );
}