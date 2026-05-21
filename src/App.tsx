import { ArrowRight } from "lucide-react";

import Section from "@/components/layout/Section";

import Divider from "@/components/ui/divider/Divider";
import Reveal from "@/components/ui/reveal/Reveal";
import Button from "@/components/ui/button/Button";
import SectionLabel from "@/components/ui/section-label/SectionLabel";
import SectionTitle from "@/components/ui/section-title/SectionTitle";

export default function App() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Section id="about">
        <Reveal>
          <SectionLabel number="01" title="About" />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionTitle title={["BUILDING", "DIGITAL EXPERIENCES"]} />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            I build cinematic digital experiences for web and mobile using
            React, React Native, TypeScript, and animation-driven interfaces.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Button className="text-white" rightIcon={<ArrowRight size={18} />}>Contact Me</Button>
        </Reveal>
      </Section>

      <Divider />
    </main>
  );
}
