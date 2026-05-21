import {cn} from "@/lib/utils";

interface SectionTitleProps {
  title: string[];
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "font-display",
        "leading-[0.88]",
        "tracking-[-1px]",
        "text-[clamp(52px,7vw,100px)]",
        "mb-14",
        className,
      )}
    >
      {title.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </h2>
  );
}
