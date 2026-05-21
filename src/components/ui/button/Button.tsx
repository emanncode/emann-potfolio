import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { useMagnetic } from "@/hooks/useMagnetic";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className,
  leftIcon,
  rightIcon,
  variant = "primary",
  ...props
}: ButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave } =
    useMagnetic<HTMLButtonElement>();

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden",

        "transition-all duration-300",

        "font-display uppercase tracking-[0.2em]",

        "text-lg",

        "px-8 py-4",

        variant === "primary" && "bg-accent text-black hover:bg-white",

        variant === "secondary" &&
          "border border-border bg-transparent text-text hover:border-accent hover:text-accent",

        className,
      )}
      {...props}
    >
      {leftIcon && (
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          {leftIcon}
        </span>
      )}

      <span>{children}</span>

      {rightIcon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
