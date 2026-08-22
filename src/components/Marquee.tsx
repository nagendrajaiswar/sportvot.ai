type LogoItem = { src: string; alt: string }

type MarqueeProps = {
  items?: string[]
  logos?: LogoItem[]
  label?: string
  dot?: boolean
  bare?: boolean
}

export default function Marquee({ items, logos, label, dot, bare }: MarqueeProps) {
  const content = logos
    ? [...logos, ...logos].map((logo, i) => (
        <span
          key={i}
          className="flex h-[70px] w-[150px] shrink-0 items-center justify-center rounded-sv-md border border-sv-border-strong bg-white p-3 transition-transform duration-300 hover:scale-105"
        >
          <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" loading="lazy" />
        </span>
      ))
    : dot
      ? [...(items ?? []), ...(items ?? [])].map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-4 whitespace-nowrap px-4">
            <span className="font-display text-sm font-bold text-sv-white">{item}</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sv-primary-light" aria-hidden="true" />
          </span>
        ))
      : [...(items ?? []), ...(items ?? [])].map((item, i) => (
          <span key={i} className="shrink-0 whitespace-nowrap font-display text-xl font-extrabold text-sv-text-faint transition-colors hover:text-sv-primary-light">
            {item}
          </span>
        ))

  const gapClass = logos ? 'gap-6' : dot ? 'gap-0' : 'gap-[104px]'

  return (
    <div className={bare ? undefined : 'border-t border-b border-sv-border bg-sv-black-soft'}>
      {label && <p className="pt-5 text-center font-display text-xs font-bold uppercase tracking-[0.16em] text-sv-text-faint">{label}</p>}
      <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className={`flex w-max animate-[sv-marquee_34s_linear_infinite] items-center py-6 group-hover:[animation-play-state:paused] ${gapClass}`}>
          {content}
        </div>
      </div>
    </div>
  )
}
