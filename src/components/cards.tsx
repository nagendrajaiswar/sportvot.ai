import { Link } from 'react-router-dom'
import { useTilt } from '../lib/useTilt'
import { cn } from '../lib/utils'

/* ---------- Audience fork card (Home) ---------- */

export function ForkCard({
  to,
  variant,
  tag,
  title,
  audience,
  body,
  cta,
}: {
  to: string
  variant: 'blue' | 'green'
  tag: string
  title: string
  audience: string
  body: string
  cta: string
}) {
  const { ref, onMouseEnter, onMouseMove, onMouseLeave } = useTilt<HTMLAnchorElement>(8)
  return (
    <Link
      ref={ref}
      to={to}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        'stroke-run group flex h-full min-h-[460px] flex-col overflow-hidden rounded-sv-xl border border-sv-border p-[72px] max-[640px]:p-9 transition-[border-color,box-shadow] duration-400 hover:border-sv-primary-border hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,.5)]',
        variant === 'blue' && 'bg-[linear-gradient(165deg,rgba(29,28,140,.45),var(--color-sv-surface)_55%)]',
        variant === 'green' && 'bg-[linear-gradient(165deg,rgba(0,186,87,.20),var(--color-sv-surface)_55%)]',
      )}
    >
      <span className="font-display text-xs font-bold uppercase tracking-[0.1em] text-sv-primary-light">{tag}</span>
      <h3 className="mt-4 font-display text-[clamp(26px,3.4vw,38px)] font-extrabold text-sv-white">{title}</h3>
      <p className="mt-3 text-sm text-sv-text-muted">{audience}</p>
      <p className="mt-5 max-w-[440px] flex-1 text-[17px] text-sv-text-muted">{body}</p>
      <span className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-sv-border-strong px-8 py-4 font-display text-[15px] font-bold text-sv-white transition-colors duration-300 group-hover:border-sv-primary group-hover:bg-sv-primary">
        {cta}
      </span>
    </Link>
  )
}

/* ---------- Capability card ---------- */

export function CapCard({ statLine, title, body }: { statLine?: string; title: string; body: string }) {
  return (
    <div className="bg-sv-surface p-8 transition-colors duration-300 hover:bg-sv-surface-2">
      {statLine && <div className="font-display text-sm font-extrabold text-sv-primary-light">{statLine}</div>}
      <h4 className={cn('text-lg text-sv-white', statLine ? 'mt-2.5' : '')}>{title}</h4>
      <p className="mt-2.5 text-sm text-sv-text-muted">{body}</p>
    </div>
  )
}

export function CapGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-12 grid grid-cols-4 gap-px overflow-hidden rounded-sv-lg border border-sv-border bg-sv-border max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1">
      {children}
    </div>
  )
}

/* ---------- Feature card (icon-led, room for real media later) ---------- */

export function FeatureCard({
  icon,
  image,
  statLine,
  title,
  body,
}: {
  icon: React.ReactNode
  image?: string
  statLine?: string
  title: string
  body: string
}) {
  return (
    <div className="overflow-hidden rounded-sv-lg border border-sv-border bg-sv-surface">
      {image && (
        <div className="flex aspect-4/3 items-center justify-center overflow-hidden bg-sv-black-soft p-6">
          <img src={image} alt={title} className="h-full w-full object-contain" loading="lazy" />
        </div>
      )}
      <div className="p-8">
        {!image && (
          <div className="flex h-14 w-14 items-center justify-center rounded-sv-md border border-sv-primary-border bg-sv-primary-dim text-sv-primary-light">
            {icon}
          </div>
        )}
        {statLine && (
          <div className={cn('font-display text-xs font-bold uppercase tracking-[0.08em] text-sv-primary-light', !image && 'mt-5')}>{statLine}</div>
        )}
        <h4 className="mt-2 font-display text-xl font-extrabold text-sv-white">{title}</h4>
        <p className="mt-2.5 text-sm text-sv-text-muted">{body}</p>
      </div>
    </div>
  )
}

/* ---------- Media card (image-led, title + body + optional CTA) ---------- */

export function MediaCard({
  image,
  title,
  body,
  cta,
  ctaTo,
}: {
  image: string
  title: string
  body: string
  cta?: string
  ctaTo?: string
}) {
  const { ref, onMouseEnter, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>()
  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="stroke-run group overflow-hidden rounded-sv-lg border border-sv-border bg-sv-surface transition-[border-color,box-shadow] duration-300 hover:border-sv-primary-border hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]"
    >
      <div className="aspect-3/4 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-display text-xl font-extrabold text-sv-white">{title}</h3>
        <p className="mt-2 text-sm text-sv-text-muted">{body}</p>
        {cta && ctaTo && (
          <Link
            to={ctaTo}
            className="mt-5 inline-flex w-fit items-center justify-center rounded-full border border-sv-border-strong px-6 py-3 font-display text-sm font-bold text-sv-white transition-colors duration-300 group-hover:border-sv-primary group-hover:bg-sv-primary"
          >
            {cta}
          </Link>
        )}
      </div>
    </div>
  )
}

/* ---------- Case study / news card ---------- */

export function CaseCard({
  thumb,
  image,
  meta,
  metric,
  metricLabel,
  title,
  readLabel,
  href = '#',
}: {
  thumb?: string
  image?: string
  meta: string
  metric?: string
  metricLabel?: string
  title?: string
  readLabel: string
  href?: string
}) {
  const { ref, onMouseEnter, onMouseMove, onMouseLeave } = useTilt<HTMLAnchorElement>()
  const external = /^https?:\/\//.test(href)
  const className =
    'stroke-run group flex h-full flex-col overflow-hidden rounded-sv-lg border border-sv-border bg-sv-surface transition-[border-color,box-shadow] duration-300 hover:border-sv-primary-border hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]'
  const inner = (
    <>
      {image ? (
        <div className="h-[170px] shrink-0 overflow-hidden">
          <img src={image} alt={title ?? ''} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        </div>
      ) : (
        <div className="flex h-[170px] shrink-0 items-center justify-center bg-[linear-gradient(160deg,rgba(120,119,224,.16),rgba(29,28,140,.20))] text-center font-display font-extrabold text-sv-text-faint">
          {thumb}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="text-xs uppercase tracking-[0.06em] text-sv-text-muted">{meta}</div>
        {metric && <div className="mt-2 font-display text-[38px] font-black text-sv-primary-light">{metric}</div>}
        {metricLabel && <div className="text-[13px] text-sv-text-muted">{metricLabel}</div>}
        {title && <h4 className="mt-2 text-[17px] text-sv-white">{title}</h4>}
        <span className="mt-auto inline-block pt-4 text-sm font-bold text-sv-primary-light">{readLabel}</span>
      </div>
    </>
  )

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener"
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={className}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link ref={ref} to={href} onMouseEnter={onMouseEnter} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className}>
      {inner}
    </Link>
  )
}

export function CardGrid3({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">{children}</div>
}

/* ---------- Play / feature card ---------- */

export function PlayCard({
  to,
  icon,
  title,
  body,
  cta,
}: {
  to: string
  icon: React.ReactNode
  title: string
  body: string
  cta?: string
}) {
  const { ref, onMouseEnter, onMouseMove, onMouseLeave } = useTilt<HTMLAnchorElement>()
  return (
    <Link
      ref={ref}
      to={to}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="stroke-run group block rounded-sv-lg border border-sv-border bg-sv-surface p-8 text-center transition-[border-color,box-shadow] duration-300 hover:border-sv-primary-border hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]"
    >
      <div className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border border-sv-primary-border bg-sv-primary-dim text-sv-primary-light">
        {icon}
      </div>
      <h3 className="mt-4 text-[19px] text-sv-white">{title}</h3>
      <p className="mt-2 text-sm text-sv-text-muted">{body}</p>
      {cta && (
        <span className="mt-5 inline-flex w-fit items-center justify-center rounded-full border border-sv-border-strong px-6 py-3 font-display text-sm font-bold text-sv-white transition-colors duration-300 group-hover:border-sv-primary group-hover:bg-sv-primary">
          {cta}
        </span>
      )}
    </Link>
  )
}

/* ---------- Service card (image-led + description + tag chips) ---------- */

export function ServiceCard({ image, title, body, tags }: { image: string; title: string; body: string; tags: string[] }) {
  return (
    <div className="overflow-hidden rounded-sv-lg border border-sv-border bg-sv-surface">
      <div className="aspect-3/2 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-8">
        <h3 className="font-display text-xl font-extrabold text-sv-white">{title}</h3>
        <p className="mt-2.5 text-sm text-sv-text-muted">{body}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-sv-border-strong px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-sv-text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Blog card (image + title + excerpt + read more) ---------- */

export function BlogCard({ image, title, body, to }: { image: string; title: string; body: string; to: string }) {
  const { ref, onMouseEnter, onMouseMove, onMouseLeave } = useTilt<HTMLAnchorElement>()
  return (
    <Link
      ref={ref}
      to={to}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="stroke-run group block overflow-hidden rounded-sv-lg border border-sv-border bg-sv-surface transition-[border-color,box-shadow] duration-300 hover:border-sv-primary-border hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]"
    >
      <div className="aspect-3/2 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-extrabold leading-snug text-sv-white">{title}</h3>
        <p className="mt-3 line-clamp-3 text-sm text-sv-text-muted">{body}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sv-primary-light">Read More →</span>
      </div>
    </Link>
  )
}

/* ---------- Venue card ---------- */

export function VenueCard({
  icon,
  name,
  city,
  type,
  capacity,
}: {
  icon: React.ReactNode
  name: string
  city: string
  type: string
  capacity: string
}) {
  const { ref, onMouseEnter, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>()
  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="stroke-run overflow-hidden rounded-sv-lg border border-sv-border bg-sv-surface transition-[border-color,box-shadow] duration-300 hover:border-sv-primary-border hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]"
    >
      <div className="flex h-[140px] items-center justify-center bg-[linear-gradient(160deg,rgba(120,119,224,.16),rgba(29,28,140,.20))] text-sv-text-faint">
        {icon}
      </div>
      <div className="p-6">
        <h4 className="font-display text-lg font-extrabold text-sv-white">{name}</h4>
        <div className="mt-1.5 text-sm text-sv-text-muted">{city}</div>
        <div className="mt-4 flex items-center justify-between border-t border-sv-border pt-4">
          <span className="rounded-full border border-sv-border-strong px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-sv-text-muted">
            {type}
          </span>
          <span className="text-xs font-bold text-sv-primary-light">{capacity}</span>
        </div>
      </div>
    </div>
  )
}

/* ---------- Team card ---------- */

export function TeamCard({ initials, image, name, role, body }: { initials: string; image?: string; name: string; role: string; body: string }) {
  return (
    <div className="overflow-hidden rounded-sv-lg border border-sv-border bg-sv-surface">
      <div className="aspect-square overflow-hidden bg-sv-primary-dim">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-[40px] font-extrabold text-sv-primary-light">{initials}</div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-extrabold text-sv-white">{name}</h3>
        <p className="mt-1 text-[13px] font-bold text-sv-primary-light">{role}</p>
        <p className="mt-3 text-sm text-sv-text-muted">{body}</p>
      </div>
    </div>
  )
}

/* ---------- Testimonial card ---------- */

export function TestimonialCard({ quote, initials, name, role }: { quote: string; initials: string; name: string; role: string }) {
  return (
    <div className="rounded-sv-lg border border-sv-border bg-sv-surface p-8">
      <p className="text-[17px] text-sv-text before:mr-1 before:text-[34px] before:leading-[0] before:text-sv-primary-light before:content-['“']">{quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sv-primary-border bg-sv-primary-dim font-display font-extrabold text-sv-primary-light">
          {initials}
        </span>
        <span>
          <b className="block text-sm text-sv-white">{name}</b>
          <span className="block text-[13px] text-sv-text-muted">{role}</span>
        </span>
      </div>
    </div>
  )
}

/* ---------- Match / live card ---------- */

export function MatchCard({ sport, title, dur, live }: { sport: string; title: string; dur?: string; live?: boolean }) {
  return (
    <div className="overflow-hidden rounded-sv-md border border-sv-border bg-sv-surface">
      <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-[linear-gradient(160deg,rgba(120,119,224,.18),rgba(29,28,140,.18))] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,.5))]">
        {live && (
          <span className="absolute left-2 top-2 z-10 inline-flex items-center gap-[7px] rounded-full border border-[rgba(255,0,67,0.4)] bg-sv-live-dim px-3.5 py-1.5 text-xs font-extrabold tracking-[0.06em] text-white before:h-[7px] before:w-[7px] before:animate-[sv-pulse_1.6s_infinite] before:rounded-full before:bg-sv-live">
            LIVE
          </span>
        )}
        <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/12">▶</span>
        {dur && (
          <span className="absolute bottom-2 right-2 z-10 rounded font-display text-[11px] font-bold bg-black/70 px-[7px] py-[3px] text-white">
            {dur}
          </span>
        )}
      </div>
      <div className="px-4 py-3">
        <div className="text-[11px] font-bold uppercase tracking-[0.05em] text-sv-primary-light">{sport}</div>
        <div className="mt-1 text-sm font-bold leading-[1.35] text-sv-white">{title}</div>
      </div>
    </div>
  )
}
