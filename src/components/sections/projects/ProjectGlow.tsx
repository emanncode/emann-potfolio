type ProjectGlowProps = {
  active?: boolean;
};

export default function ProjectGlow({ active }: ProjectGlowProps) {
  return (
    <div
      className={`
        pointer-events-none
        absolute
        inset-0
        transition-opacity
        duration-500
        ${active ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className="
          absolute
          -left-10
          top-0
          h-40
          w-40
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-32
          w-32
          rounded-full
          bg-white/5
          blur-3xl
        "
      />
    </div>
  );
}
