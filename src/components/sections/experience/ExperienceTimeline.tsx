import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    year: "04/2024 - 12/2024",
    role: "Frontend Developer",
    company: "Thegigs.co",
    description:
      "Building scalable frontend systems and premium user experiences using React, Next.js, TypeScript, and modern component architecture.",
  },

  {
    year: "11/2024 — Present",
    role: "Frontend & Backend Engineer",
    company: "Rouvoo",
    description:
      "Built frontend and backend products for and with the Rouvoo team. Worked across APIs, UI systems, databases, architecture, and production-ready application engineering.",
  },

  {
    year: "04/2024 — Present",
    role: "Frontend Engineer",
    company: "Browpay",
    description:
      "Developed responsive and accessible fintech interfaces while collaborating closely with backend systems and product-focused workflows.",
  },

  {
    year: "2022 — Present",
    role: "Freelance Developer",
    company: "Self Employed",
    description:
      "Building web applications, admin dashboards, landing pages, mobile apps, and scalable frontend systems for clients and personal products.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* timeline line */}
      <div className="absolute left-27 top-0 hidden h-full w-px bg-white/8 md:block" />

      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.role}
            {...experience}
            delay={index * 0.08}
          />
        ))}

        <div className="border-t border-white/8" />
      </div>
    </div>
  );
}
