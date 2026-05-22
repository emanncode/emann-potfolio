interface SectionHeadingProps {
  label: string;
  title: string;
}

export function SectionHeading({
  label,
  title,
}: SectionHeadingProps) {
  return (
    <div className="space-y-8">
      {/* LABEL */}
      <div className="flex items-center gap-4">
        <span
          className="
            text-[11px]
            uppercase
            tracking-[0.3em]
            text-lime-400
          "
        >
          {label}
        </span>

        <div className="h-px w-16 bg-lime-400/60" />
      </div>

      {/* TITLE */}
      <h2
        className="
          whitespace-pre-line
          font-display
          text-[clamp(3.5rem,8vw,7rem)]
          leading-[0.9]
          tracking-[-0.04em]
          text-white
        "
      >
        {title}
      </h2>
    </div>
  );
}