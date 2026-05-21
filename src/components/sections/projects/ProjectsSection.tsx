import Section from "@/components/layout/Section";

import Reveal from "@/components/ui/reveal/Reveal";
import SectionLabel from "@/components/ui/section-label/SectionLabel";
import SectionTitle from "@/components/ui/section-title/SectionTitle";

import ProjectCard from "./ProjectCard";

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
        <ProjectCard
          number="01"
          title="UNIFLOW"
          featured
          link="https://uniflow-ebon.vercel.app"
          description="
            A full cross-platform solution with a Next.js admin dashboard and React Native mobile application.
          "
          tags={["Next.js", "React Native", "Expo", "TypeScript", "Supabase"]}
        />

        <ProjectCard
          number="02"
          title="MIFI MANAGER"
          comingSoon
          delay={0.1}
          description="
            A mobile app designed for managing MiFi devices with a clean and intuitive interface.
          "
          tags={["React Native", "Expo", "TypeScript", "Mobile"]}
        />

        <ProjectCard
          number="03"
          title="FILMRITZ"
          delay={0.2}
          link="https://filmritz.vercel.app"
          description="
            A cinematic film discovery platform with rich browsing experiences and smooth UI interactions.
          "
          tags={["React", "TypeScript", "Tailwind", "API Integration"]}
        />
      </div>
    </Section>
  );
}
