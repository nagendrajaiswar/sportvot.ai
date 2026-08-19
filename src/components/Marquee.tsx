export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="group overflow-hidden border-t border-b border-sv-border [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-[sv-marquee_34s_linear_infinite] items-center gap-[104px] py-6 group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-display text-xl font-extrabold text-sv-text-faint transition-colors hover:text-sv-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
