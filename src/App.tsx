import { ArrowRight } from "lucide-react";

import Navbar from "@/components/layout/navbar/Navbar";

import Hero from "@/components/sections/hero/Hero";

import Section from "@/components/layout/Section";

import Cursor from "@/components/providers/Cursor";
import Grain from "@/components/providers/Grain";

import Divider from "@/components/ui/divider/Divider";
import Reveal from "@/components/ui/reveal/Reveal";
import Button from "@/components/ui/button/Button";
import Badge from "@/components/ui/badge/Badge";
import SectionLabel from "@/components/ui/section-label/SectionLabel";
import SectionTitle from "@/components/ui/section-title/SectionTitle";

export default function App() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Cursor />

      <Grain />

      <Navbar />

      <Hero />

      <Divider />

      <Section id="about" className="pt-28">
        <Reveal>
          <SectionLabel number="01" title="About" />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionTitle title={["BUILDING", "DIGITAL EXPERIENCES"]} />
        </Reveal>

        <Reveal delay={0.2} className="mb-8 flex gap-3">
          <Badge variant="accent">React</Badge>

          <Badge>TypeScript</Badge>

          <Badge>React Native</Badge>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            I build cinematic digital experiences for web and mobile using
            React, React Native, TypeScript, and animation-driven interfaces.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <Button rightIcon={<ArrowRight size={18} />}>Contact Me</Button>
        </Reveal>
      </Section>
    </main>
  );
}
