import Navbar from "@/components/layout/navbar/Navbar";

import Hero from "@/components/sections/hero/Hero";
import AboutSection from "@/components/sections/about/AboutSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import SkillsSection from "@/components/sections/skills/SkillsSection";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";
import ContactSection from "@/components/sections/contact/ContactSection";

import Cursor from "@/components/providers/Cursor";
import Grain from "@/components/providers/Grain";
import PageTransition from "@/components/providers/PageTransition";

import Divider from "@/components/ui/divider/Divider";

import IntroLoader from "@/components/loaders/IntroLoader";
export default function App() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <IntroLoader />

      {/* GLOBAL EFFECTS */}
      <Cursor />

      <Grain />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE */}
      <PageTransition>
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

        {/* CONTACT */}
        <ContactSection />

        <Divider />
      </PageTransition>
    </main>
  );
}
