import { useEffect, useState } from "react";

import { navigationLinks } from "@/data/navigation";

import { cn } from "@/lib/utils";

import NavLogo from "./NavLogo";
import NavLink from "./NavLink";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navigationLinks.map((link) =>
        document.querySelector(link.href),
      );

      const scrollY = window.scrollY + 140;

      sections.forEach((section, index) => {
        if (!section) return;

        const top = (section as HTMLElement).offsetTop;

        if (scrollY >= top) {
          setActiveSection(navigationLinks[index].href);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full",
        "transition-all duration-300",

        scrolled && "border-b border-border bg-black/80 backdrop-blur-xl",
      )}
    >
      <div className="relative flex items-center justify-between px-6 py-5 md:px-10 xl:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-bg to-transparent" />

        <NavLogo />

        <nav className="hidden items-center gap-10 md:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={activeSection === link.href}
            />
          ))}
        </nav>

        <div
          className={cn(
            "hidden md:block",
            "font-mono text-[10px] uppercase tracking-[0.15em]",
            "border border-accent/50! px-4 py-2",
            "text-accent!",
          )}
        >
          Open to Work
        </div>
      </div>
    </header>
  );
}
