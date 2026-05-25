export default function LogoIcon() {
  return (
    <div
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/3
        backdrop-blur-xl
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(190,242,100,0.18),transparent_70%)]
        "
      />

      {/* EC */}
      <span
        className="
          relative
          font-display
          text-sm
          font-semibold
          tracking-[-0.08em]
          text-white
        "
      >
        EC
      </span>

      {/* ACCENT LINE */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-0.5
          w-full
          bg-primary
        "
      />
    </div>
  );
}
