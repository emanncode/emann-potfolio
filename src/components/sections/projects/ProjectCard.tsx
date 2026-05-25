"use client";

import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/ui/reveal/Reveal";

import ProjectGlow from "./ProjectGlow";
import ProjectTag from "./ProjectTag";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  index: number;
  number: string;
  link?: string;
  featured?: boolean;
  comingSoon?: boolean;
  delay?: number;
};

export default function ProjectCard({
  title,
  description,
  tags,
  index,
  number,
  link,
  featured,
  comingSoon,
  delay,
}: ProjectCardProps) {
  const content = (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-4xl
        border
        border-white/10
        bg-white/3
        p-8
        transition-all
        duration-500
        hover:border-primary/30
        hover:bg-white/5
      "
    >
      {/* GLOW */}
      <ProjectGlow />

      {/* TOP */}
      <div className="relative z-10 mb-10 flex items-start justify-between gap-6">
        <div>
          <div className="mb-3 flex items-center gap-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary">
              {featured ? "Featured Project" : `Project ${number}`}
            </p>
            {comingSoon && (
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase text-white/50">
                Coming Soon
              </span>
            )}
          </div>

          <h3
            className="
              font-display
              text-3xl
              tracking-[-0.04em]
              transition-transform
              duration-500
              group-hover:-translate-y-1
            "
          >
            {title}
          </h3>
        </div>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/3
            transition-all
            duration-500
            group-hover:border-primary/30
            group-hover:bg-primary/10
            group-hover:rotate-45
          "
        >
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          relative
          z-10
          max-w-xl
          text-sm
          leading-relaxed
          text-white/60
        "
      >
        {description}
      </p>

      {/* TAGS */}
      <div className="relative z-10 mt-10 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <ProjectTag key={tag} label={tag} />
        ))}
      </div>

      {/* BOTTOM LINE */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-primary
          transition-all
          duration-700
          group-hover:w-full
        "
      />
    </article>
  );

  return (
    <Reveal delay={(delay ?? index) * 0.08}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </Reveal>
  );
}
