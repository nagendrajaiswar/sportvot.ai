import { cn } from '../lib/utils'
import { Reveal } from './Reveal'

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto max-w-7xl px-6 max-[640px]:px-4', className)}>{children}</div>
}

export function Section({
  dark,
  id,
  className,
  children,
}: {
  dark?: boolean
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        'py-[104px] max-[900px]:py-12 relative',
        dark && 'bg-sv-black-soft border-t border-b border-sv-border',
        className,
      )}
    >
      {children}
    </section>
  )
}

export function Eyebrow({ center, className, children }: { center?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2.5 font-display text-xs font-bold tracking-[0.16em] uppercase text-sv-primary-light',
        center && 'justify-center',
        className,
      )}
    >
      <span className="h-0.5 w-[22px] shrink-0 bg-sv-primary-light" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHead({
  eyebrow,
  center,
  className,
  children,
}: {
  eyebrow: string
  center?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <Reveal className={cn('max-w-[760px]', center && 'mx-auto text-center', className)}>
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      {children}
    </Reveal>
  )
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  gradient,
  children,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  gradient?: string
  children?: React.ReactNode
}) {
  return (
    <section
      className="border-b border-sv-border pt-[180px] pb-20"
      style={{
        background: gradient ?? 'radial-gradient(90% 90% at 15% 0%, rgba(29,28,140,.28), transparent 50%)',
      }}
    >
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal as="h1" className="mt-5 max-w-[980px] text-balance font-display text-[clamp(36px,6.5vw,68px)] font-extrabold tracking-[-0.02em] text-sv-white">
          {title}
        </Reveal>
        {subtitle && (
          <Reveal as="p" className="mt-5 max-w-[640px] text-[19px] text-sv-text-muted">
            {subtitle}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  )
}

export function TwoCol({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('grid grid-cols-2 items-center gap-12 max-[900px]:grid-cols-1', className)}>{children}</div>
}

export function ColMedia({ reverse, children }: { reverse?: boolean; children: React.ReactNode }) {
  return (
    <Reveal
      scale
      className={cn(
        'flex aspect-4/3 items-center justify-center rounded-sv-xl border border-sv-border p-6 text-center font-display font-extrabold text-sv-text-faint',
        reverse && 'order-2',
      )}
      style={{ background: 'radial-gradient(80% 80% at 30% 20%, rgba(120,119,224,.16), transparent), var(--color-sv-surface)' }}
    >
      {children}
    </Reveal>
  )
}

export function CTAStrip({
  eyebrow,
  title,
  body,
  className,
  children,
}: {
  eyebrow?: string
  title: string
  body?: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <Reveal
      scale
      className={cn('relative overflow-hidden rounded-sv-xl border border-sv-border p-[72px] max-[900px]:p-9 text-center', className)}
      style={{
        background:
          'radial-gradient(120% 140% at 20% 0%, rgba(29,28,140,.30), transparent 55%), radial-gradient(90% 90% at 85% 100%, rgba(120,119,224,.18), transparent 55%), var(--color-sv-black-soft)',
      }}
    >
      {eyebrow && <Eyebrow center>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-balance font-display text-[clamp(28px,4vw,46px)] font-extrabold text-sv-white">{title}</h2>
      {body && <p className="mx-auto mt-3 max-w-[560px] text-center text-sv-text-muted">{body}</p>}
      {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{children}</div>}
    </Reveal>
  )
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-sv-border-strong px-3.5 py-1.5 text-xs font-bold text-sv-text-muted transition-colors hover:border-sv-primary-light hover:text-sv-primary-light">
      {children}
    </span>
  )
}

export function TrustList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[15px] text-sv-text-muted">
          <span className="font-extrabold text-sv-primary-light">✓</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function ListCheck({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sv-text-muted">
          <span className="font-extrabold text-sv-primary-light">✓</span>
          {item}
        </li>
      ))}
    </ul>
  )
}
