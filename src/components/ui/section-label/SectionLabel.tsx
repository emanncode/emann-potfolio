interface SectionLabelProps {
  number: string;
  title: string;
}

export default function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div className="mb-14 flex items-center gap-4">
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
        {number} / {title}
      </span>

      <div className="h-px w-12 bg-accent" />
    </div>
  );
}
