interface Props {
  children: React.ReactNode;
}

export default function ProjectTag({ children }: Props) {
  return (
    <span
      className="
        rounded-full
        bg-white/5
        px-3 py-1.5
        text-xs
        text-white/60
        transition-all duration-300

        group-hover:bg-accent/10
        group-hover:text-accent
      "
    >
      {children}
    </span>
  );
}
