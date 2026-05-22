interface ProjectTagProps {
  label: string;
}

export default function ProjectTag({
  label,
}: ProjectTagProps) {
  return (
    <div
      className="
        rounded-full
        border
        border-white/5
        bg-white/3
        px-4
        py-2

        text-xs
        font-medium
        tracking-wide
        text-zinc-400

        transition-all
        duration-300

        hover:border-lime-400/20
        hover:bg-lime-400/10
        hover:text-lime-300
      "
    >
      {label}
    </div>
  );
}