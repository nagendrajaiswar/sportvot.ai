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
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLAnchorElement>()
  return (
    <Link
      ref={ref}
      to={to}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        'stroke-run group flex h-full min-h-[460px] flex-col overflow-hidden rounded-sv-xl border border-sv-border p-[72px] max-[640px]:p-9 transition-[transform,border-color,box-shadow] duration-400 hover:-translate-y-2 hover:border-sv-primary-border hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,.5)]',
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

/* ---------- Case study / news card ---------- */

export function CaseCard({
  thumb,
  meta,
  metric,
  metricLabel,
  title,
  readLabel,
  href = '#',
}: {
  thumb: string
  meta: string
  metric?: string
  metricLabel?: string
  title?: string
  readLabel: string
  href?: string
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>()
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="stroke-run overflow-hidden rounded-sv-lg border border-sv-border bg-sv-surface transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-sv-primary-border hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]"
    >
      <div className="flex h-[170px] items-center justify-center bg-[linear-gradient(160deg,rgba(120,119,224,.16),rgba(29,28,140,.20))] text-center font-display font-extrabold text-sv-text-faint">
        {thumb}
      </div>
      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.06em] text-sv-text-muted">{meta}</div>
        {metric && <div className="mt-2 font-display text-[38px] font-black text-sv-primary-light">{metric}</div>}
        {metricLabel && <div className="text-[13px] text-sv-text-muted">{metricLabel}</div>}
        {title && <h4 className="mt-2 text-[17px] text-sv-white">{title}</h4>}
        <Link to={href} className="mt-4 inline-block text-sm font-bold text-sv-primary-light">
          {readLabel}
        </Link>
      </div>
    </div>
  )
}

export function CardGrid3({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">{children}</div>
}

/* ---------- Play / feature card ---------- */

export function PlayCard({ icon, title, body, cta }: { icon: React.ReactNode; title: string; body: string; cta?: React.ReactNode }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>()
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="stroke-run rounded-sv-lg border border-sv-border bg-sv-surface p-8 text-center transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-sv-primary-border hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]"
    >
      <div className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border border-sv-primary-border bg-sv-primary-dim text-sv-primary-light">
        {icon}
      </div>
      <h3 className="mt-4 text-[19px] text-sv-white">{title}</h3>
      <p className="mt-2 text-sm text-sv-text-muted">{body}</p>
      {cta && <div className="mt-5">{cta}</div>}
    </div>
  )
}

/* ---------- Team card ---------- */

export function TeamCard({ initials, name, role, body }: { initials: string; name: string; role: string; body: string }) {
  return (
    <div className="rounded-sv-lg border border-sv-border bg-sv-surface p-8 text-center">
      <span className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full border border-sv-primary-border bg-sv-primary-dim font-display text-[28px] font-extrabold text-sv-primary-light">
        {initials}
      </span>
      <h3 className="mt-4 text-[19px] text-sv-white">{name}</h3>
      <p className="mt-1 text-[13px] font-bold text-sv-primary-light">{role}</p>
      <p className="mt-3 text-sm text-sv-text-muted">{body}</p>
    </div>
  )
}

/* ---------- Testimonial card ---------- */

export function TestimonialCard({ quote, initials, name, role }: { quote: string; initials: string; name: string; role: string }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>()
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="stroke-run rounded-sv-lg border border-sv-border bg-sv-surface p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-sv-primary-border hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]"
    >
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
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>()
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="stroke-run group overflow-hidden rounded-sv-md border border-sv-border bg-sv-surface transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-sv-primary-border hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]"
    >
      <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-[linear-gradient(160deg,rgba(120,119,224,.18),rgba(29,28,140,.18))] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,.5))]">
        {live && (
          <span className="absolute left-2 top-2 z-10 inline-flex items-center gap-[7px] rounded-full border border-[rgba(255,0,67,0.4)] bg-sv-live-dim px-3.5 py-1.5 text-xs font-extrabold tracking-[0.06em] text-white before:h-[7px] before:w-[7px] before:animate-[sv-pulse_1.6s_infinite] before:rounded-full before:bg-sv-live">
            LIVE
          </span>
        )}
        <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/12 transition-[transform,background-color,color] duration-300 group-hover:scale-110 group-hover:bg-sv-primary-light group-hover:text-white">
          ▶
        </span>
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
