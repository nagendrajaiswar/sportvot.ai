export default function Marquee({ items, label }: { items: string[]; label?: string }) {
  return (
    <div className="border-t border-b border-sv-border bg-sv-black-soft">
      {label && (
        <p className="pt-5 text-center font-display text-xs font-bold uppercase tracking-[0.16em] text-sv-text-faint">{label}</p>
      )}
      <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-[sv-marquee_34s_linear_infinite] items-center gap-[104px] py-6 group-hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-xl font-extrabold text-sv-text-faint transition-colors hover:text-sv-primary-light"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
