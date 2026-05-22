import Reveal from "@/components/ui/reveal/Reveal";

import ExperienceTimeline from "./ExperienceTimeline";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-28 md:px-10 xl:px-14">
      <p className="mb-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
        04 / Experience
        <span className="h-px w-12 bg-primary" />
      </p>

      <Reveal>
        <h2 className="mb-16 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] tracking-[-0.04em]">
          WHERE
          <br />
          I'VE WORKED
        </h2>
      </Reveal>

      <ExperienceTimeline />
    </section>
  );
}
