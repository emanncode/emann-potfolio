import Reveal from "@/components/ui/reveal/Reveal";

import FactRow from "./FactRow";

export default function AboutFacts() {
  return (
    <Reveal delay={0.2}>
      <div className="space-y-1">
        <FactRow label="Availability" value="Open to Work" />

        <FactRow label="Location" value="Lagos, Nigeria" />

        <FactRow label="Frontend" value="React · Next.js · Vue.js" />

        <FactRow label="Backend" value="PHP · SQL · MySQL" />

        <FactRow label="Mobile" value="React Native · Flutter" />

        <FactRow label="Animation" value="GSAP · Framer Motion · Three.js" />

        <FactRow label="Focus" value="Premium UI Engineering" />

        <FactRow label="Interests" value="Gaming · Saxophone" />
      </div>
    </Reveal>
  );
}
