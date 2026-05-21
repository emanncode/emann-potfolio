import Reveal from "@/components/ui/reveal/Reveal";

export default function AboutText() {
  return (
    <div className="space-y-6 text-white/60 leading-relaxed text-base">
      <Reveal delay={0.1}>
        <p>
          I’m a <span className="text-white">Frontend & Mobile Engineer</span>{" "}
          focused on building fast, clean and scalable interfaces.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p>
          I work with React, TypeScript, React Native and animation tools to
          create experiences that feel smooth and intentional.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <p>
          Outside code, I play saxophone and build side projects just to push
          creativity further.
        </p>
      </Reveal>
    </div>
  );
}