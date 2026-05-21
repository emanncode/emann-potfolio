import { useRef } from "react";

import gsap from "gsap";

export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  const handleMouseMove = (e: React.MouseEvent<T>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(ref.current, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return {
    ref,
    handleMouseMove,
    handleMouseLeave,
  };
}
