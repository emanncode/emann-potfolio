import Reveal from "@/components/ui/reveal/Reveal";

type ExperienceCardProps = {
  year: string;
  role: string;
  company: string;
  description: string;
  delay?: number;
};

export default function ExperienceCard({
  year,
  role,
  company,
  description,
  delay,
}: ExperienceCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="group relative grid gap-6 border-t border-white/8 py-12 transition-colors duration-300 md:grid-cols-[220px_1fr]">
        {/* LEFT */}
        <div className="relative">
          <div className="sticky top-28">
            <p className="font-mono text-xs tracking-[0.18em] text-white/35">
              {year}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* glow */}
          <div className="absolute inset-0 rounded-3xl bg-primary/3 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10">
            <h3 className="mb-2 font-display text-4xl leading-none tracking-[-0.03em] transition-colors duration-300 group-hover:text-primary">
              {role}
            </h3>

            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              {company}
            </p>

            <p className="max-w-2xl text-[15px] leading-8 text-white/55">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
