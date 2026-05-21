import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "default";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1",
        "text-[11px] font-medium",

        variant === "accent" && "bg-accent/10 text-accent",

        variant === "default" && "bg-white/5 text-white/50",

        className,
      )}
    >
      {children}
    </span>
  );
}
