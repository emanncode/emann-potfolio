import { ArrowUpRight, Plus } from "lucide-react";

import Reveal from "@/components/ui/reveal/Reveal";
import Badge from "@/components/ui/badge/Badge";

import ProjectTag from "./ProjectTag";

interface Props {
  number: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
  comingSoon?: boolean;
  delay?: number;
}

export default function ProjectCard({
  number,
  title,
  description,
  tags,
  link,
  featured,
  comingSoon,
  delay = 0,
}: Props) {
  const content = (
    <div
      className="
        group relative overflow-hidden

        grid md:grid-cols-[90px_1fr_40px]
        gap-6 md:gap-10

        border-t border-white/10

        px-0 py-10

        transition-all duration-500
      "
    >
      {/* HOVER BG */}
      <div
        className="
          absolute inset-0
          scale-x-0
          bg-white/3
          origin-left
          transition-transform duration-500

          group-hover:scale-x-100
        "
      />

      {/* NUMBER */}
      <div className="relative z-10 text-xs tracking-[0.2em] text-white/30">
        {number}
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="mb-4 flex items-center flex-wrap gap-3">
          <h3
            className="
              font-display
              text-4xl md:text-5xl
              leading-none

              transition-colors duration-300

              group-hover:text-accent
            "
          >
            {title}
          </h3>

          {featured && <Badge variant="accent">Featured</Badge>}

          {comingSoon && <Badge>Coming Soon</Badge>}
        </div>

        <p
          className="
            max-w-2xl
            text-sm leading-relaxed
            text-white/50
          "
        >
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <ProjectTag key={tag}>{tag}</ProjectTag>
          ))}
        </div>
      </div>

      {/* ICON */}
      <div
        className="
          relative z-10
          flex items-start justify-end
        "
      >
        {comingSoon ? (
          <Plus
            size={20}
            className="
              text-white/30
              transition-all duration-300

              group-hover:text-accent
              group-hover:rotate-90
            "
          />
        ) : (
          <ArrowUpRight
            size={22}
            className="
              text-white/30
              transition-all duration-300

              group-hover:text-accent
              group-hover:rotate-45
            "
          />
        )}
      </div>
    </div>
  );

  return (
    <Reveal delay={delay}>
      {link && !comingSoon ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </a>
      ) : (
        <button className="w-full text-left">{content}</button>
      )}
    </Reveal>
  );
}
