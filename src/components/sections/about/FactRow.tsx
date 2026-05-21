interface Props {
  label: string;
  value: string;
}

export default function FactRow({ label, value }: Props) {
  return (
    <div className="flex justify-between py-4 border-b border-white/10">
      <span className="text-xs tracking-[0.2em] uppercase text-white/40">
        {label}
      </span>

      <span className="text-sm text-white/80">{value}</span>
    </div>
  );
}