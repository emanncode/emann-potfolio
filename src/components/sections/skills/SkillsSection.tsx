import Reveal from "@/components/ui/reveal/Reveal";

import SkillCategory from "./SkillCategory";

const skillGroups = [
  {
    title: "Web Frontend",
    skills: [
      { label: "React", highlighted: true },
      { label: "Next.js", highlighted: true },
      { label: "TypeScript", highlighted: true },
      { label: "Vue.js", highlighted: true },
      { label: "JavaScript" },
      { label: "Tailwind CSS" },
      { label: "HTML" },
      { label: "CSS" },
    ],
  },

  {
    title: "Backend & Database",
    skills: [
      { label: "PHP", highlighted: true },
      { label: "SQL", highlighted: true },
      { label: "MySQL", highlighted: true },
      { label: "REST APIs" },
      { label: "Backend Architecture" },
      { label: "Database Design" },
      { label: "Supabase" },
    ],
  },

  {
    title: "Mobile",
    skills: [
      { label: "React Native", highlighted: true },
      { label: "Expo", highlighted: true },
      { label: "Flutter", highlighted: true },
      { label: "Cross Platform" },
      { label: "Android" },
      { label: "iOS" },
    ],
  },

  {
    title: "Animation & 3D",
    skills: [
      { label: "Framer Motion", highlighted: true },
      { label: "GSAP", highlighted: true },
      { label: "Three.js" },
      { label: "Micro Interactions" },
      { label: "Scroll Animations" },
      { label: "CSS Animation" },
    ],
  },

  {
    title: "Architecture",
    skills: [
      { label: "Component Design" },
      { label: "Performance Optimization" },
      { label: "Reusable Systems" },
      { label: "State Management" },
      { label: "Real-time Features" },
    ],
  },

  {
    title: "Workflow",
    skills: [
      { label: "Git / GitHub" },
      { label: "Vercel" },
      { label: "Problem Solving" },
      { label: "Fast Learner" },
      { label: "Collaboration" },
      { label: "Always Shipping" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-28 md:px-10 xl:px-14">
      <p className="mb-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
        03 / Skills
        <span className="h-px w-12 bg-primary" />
      </p>

      <Reveal>
        <h2 className="mb-16 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] tracking-[-0.04em]">
          TECH
          <br />
          STACK
        </h2>
      </Reveal>

      <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <SkillCategory
            key={group.title}
            title={group.title}
            skills={group.skills}
            delay={index * 0.08}
          />
        ))}
      </div>
    </section>
  );
}
