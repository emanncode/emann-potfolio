import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/section-label/SectionLabel";
import SectionTitle from "@/components/ui/section-title/SectionTitle";
import Reveal from "@/components/ui/reveal/Reveal";
import AboutText from "./AboutText";
import AboutFacts from "./AboutFacts";

export default function AboutSection() {
  return (
    <Section id="about">
      <Reveal>
        <SectionLabel number="01" title="About" />
      </Reveal>

      <Reveal delay={0.1}>
        <SectionTitle title={["I BUILD THINGS", "THAT LIVE ON SCREENS"]} />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-16 mt-12">
        <AboutText />
        <AboutFacts />
      </div>
    </Section>
  );
}
