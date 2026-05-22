import Navbar from "@/components/layout/navbar/Navbar";

import Hero from "@/components/sections/hero/Hero";
import AboutSection from "@/components/sections/about/AboutSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import SkillsSection from "@/components/sections/skills/SkillsSection";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";

import Cursor from "@/components/providers/Cursor";
import ScrollProgress from "@/components/providers/ScrollProgress";
import Grain from "@/components/providers/Grain";

import Divider from "@/components/ui/divider/Divider";

export default function App() {
  return (
    <main className="min-h-screen bg-bg text-text">
      {/* GLOBAL EFFECTS */}
      <Cursor />

      <ScrollProgress />

      <Grain />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      <Divider />

      {/* ABOUT */}
      <AboutSection />

      <Divider />

      {/* PROJECTS */}
      <ProjectsSection />

      <Divider />

      {/* SKILLS */}
      <SkillsSection />

      <Divider />

      {/* EXPERIENCE */}
      <ExperienceSection />

      <Divider />
    </main>
  );
}
