import Reveal from "@/components/ui/reveal/Reveal";

const links = [
  {
    label: "GitHub",
    value: "emanncode",
    href: "https://github.com/emanncode",
  },

  {
    label: "X / TW",
    value: "@emanncodedev",
    href: "https://x.com/emanncodedev",
  },

  {
    label: "WhatsApp",
    value: "+234 904 880 1668",
    href: "https://wa.me/2349048801668",
  },

  {
    label: "Links",
    value: "linktr.ee/emanncode",
    href: "https://linktr.ee/emanncode",
  },
];

export default function ContactLinks() {
  return (
    <Reveal delay={0.1}>
      <div className="flex flex-col">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-5 border-b border-border py-5 transition-colors duration-300 hover:text-text"
          >
            <span className="w-19.5 shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-primary">
              {link.label}
            </span>

            <span className="text-sm text-text/75 transition-all duration-300 group-hover:translate-x-1 group-hover:text-text">
              {link.value}
            </span>
          </a>
        ))}
      </div>
    </Reveal>
  );
}
