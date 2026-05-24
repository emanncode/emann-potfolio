import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

export default function NavLink({ href, label, active }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative text-[13px] font-medium tracking-[0.03em]",
        "transition-colors duration-300",
        "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0",
        "after:bg-primary! after:transition-all after:duration-300",
        "hover:text-text hover:after:w-full",

        active ? "text-text after:w-full" : "text-white/50",
      )}
    >
      {label}
    </a>
  );
}
