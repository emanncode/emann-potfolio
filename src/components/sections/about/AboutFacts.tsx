import Reveal from "@/components/ui/reveal/Reveal";
import FactRow from "./FactRow";

export default function AboutFacts() {
  return (
    <Reveal delay={0.2}>
      <div className="space-y-1">
        <FactRow label="Availability" value="Open to Work" />
        <FactRow label="Location" value="Lagos, Nigeria" />
        <FactRow label="Web Stack" value="React · Next.js · TS" />
        <FactRow label="Mobile" value="React Native · Flutter" />
        <FactRow label="Animation" value="GSAP · Framer Motion" />
      </div>
    </Reveal>
  );
}