import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "UNIFLOW",
    link: "https://uniflow-ebon.vercel.app",
    description: "A full cross-platform solution with a Next.js admin dashboard and React Native mobile application.",
    tags: ["Next.js", "React Native", "Expo", "TypeScript", "Supabase"],
  },
  {
    title: "MIFI MANAGER",
    featured: true,
    comingSoon: true,
    delay: 0.1,
    description: "A mobile app designed for managing MiFi devices with a clean and intuitive interface.",
    tags: ["React Native", "Expo", "TypeScript", "Mobile"],
  },
  {
    title: "FILMRITZ",
    link: "https://filmritz.vercel.app",
    delay: 0.2,
    description: "A cinematic film discovery platform with rich browsing experiences and smooth UI interactions.",
    tags: ["React", "TypeScript", "Tailwind", "API Integration"],
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          index={index}
          number={`0${index + 1}`}
          title={project.title}
          description={project.description}
          tags={project.tags}
          link={project.link}
          featured={project.featured}
          comingSoon={project.comingSoon}
          delay={project.delay}
        />
      ))}
    </div>
  );
}
