import Section from "@/components/layout/Section";

import Reveal from "@/components/ui/reveal/Reveal";
import SectionLabel from "@/components/ui/section-label/SectionLabel";
import SectionTitle from "@/components/ui/section-title/SectionTitle";

import ProjectGrid from "./ProjectGrid";

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionLabel number="02" title="Work" />
      </Reveal>

      <Reveal delay={0.1}>
        <SectionTitle title={["SELECTED", "PROJECTS"]} />
      </Reveal>

      <div className="mt-14">
        <ProjectGrid />
      </div>
    </Section>
  );
}
