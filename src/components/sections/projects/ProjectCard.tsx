import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/ui/reveal/Reveal";

import ProjectTag from "./ProjectTag";

interface ProjectCardProps {
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
  delay,
}: ProjectCardProps) {
  const Wrapper = link ? "a" : "div";

  return (
    <Reveal delay={delay}>
      <Wrapper
        href={link}
        target="_blank"
        rel="noreferrer"
        className="
          group
          relative
          grid
          cursor-none
          gap-8
          overflow-hidden
          border-t
          border-white/5
          py-14

          transition-all
          duration-500

          lg:grid-cols-[80px_1fr_40px]
        "
      >
        {/* HOVER BG */}
        <div
          className="
            absolute
            inset-0
            scale-x-0
            bg-white/2
            origin-left
            transition-transform
            duration-500
            ease-out

            group-hover:scale-x-100
          "
        />

        {/* INDEX */}
        <div className="relative z-10">
          <span
            className="
              text-xs
              tracking-[0.3em]
              text-zinc-600
            "
          >
            {number}
          </span>
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3">
            <h3
              className="
                font-display
                text-5xl
                leading-none
                tracking-[-0.04em]
                text-white

                transition-colors
                duration-300

                group-hover:text-lime-400
              "
            >
              {title}
            </h3>

            {featured && (
              <div
                className="
                  rounded-full
                  bg-lime-400/10
                  px-4
                  py-1

                  text-xs
                  font-medium
                  text-lime-300
                "
              >
                Featured
              </div>
            )}

            {comingSoon && (
              <div
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/3
                  px-4
                  py-1

                  text-xs
                  font-medium
                  text-zinc-400
                "
              >
                Coming Soon
              </div>
            )}
          </div>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-zinc-500
            "
          >
            {description}
          </p>

          {/* TAGS */}
          <div className="mt-7 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <ProjectTag key={tag} label={tag} />
            ))}
          </div>
        </div>

        {/* ICON */}
        <div
          className="
            relative
            z-10
            flex
            items-start
            justify-end
          "
        >
          <ArrowUpRight
            className="
              h-6
              w-6
              text-zinc-600

              transition-all
              duration-300

              group-hover:rotate-45
              group-hover:text-lime-400
            "
          />
        </div>
      </Wrapper>
    </Reveal>
  );
}
