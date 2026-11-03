import { useEffect, useRef, useState } from 'react'
import { CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react'
import { cn } from '../lib/utils'

type Testimonial = { quote: string; initials: string; logo?: string; name: string; role: string }

const INTERVAL_MS = 10_000

/** "Head of Commercial and Strategy, Table Tennis Australia" -> title + organisation */
function splitRole(role: string) {
  const i = role.lastIndexOf(', ')
  return i === -1 ? { title: '', org: role } : { title: role.slice(0, i), org: role.slice(i + 2) }
}

/**
 * One testimonial at a time: the client's identity on the left, the quote on the right. Auto-advances every 10s
 * (paused on hover/focus), with arrows and dots to move manually.
 */
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const n = items.length
  // `pos` is the track position; slot n is a clone of slide 0, so the loop always moves forward:
  // after the last testimonial the first one slides in from the right, then the track snaps back to 0 unseen.
  const [pos, setPos] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const active = pos % n
  const snap = useRef<number | null>(null)

  const next = () => setPos((p) => (p >= n ? p : p + 1))
  const prev = () => {
    if (pos > 0) return setPos(pos - 1)
    // from the first slide, jump (unseen) to the clone of it and slide back to the last one
    setAnimate(false)
    setPos(n)
    snap.current = requestAnimationFrame(() => {
      snap.current = requestAnimationFrame(() => {
        setAnimate(true)
        setPos(n - 1)
      })
    })
  }

  useEffect(() => () => {
    if (snap.current) cancelAnimationFrame(snap.current)
  }, [])

  useEffect(() => {
    if (paused || n < 2 || !animate) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setTimeout(next, INTERVAL_MS)
    return () => window.clearTimeout(id)
  }, [pos, paused, animate, n])

  // Once the slide-in of the clone finishes, reset to the real first slide without animating
  const onTrackEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || pos !== n) return
    setAnimate(false)
    setPos(0)
    snap.current = requestAnimationFrame(() => {
      snap.current = requestAnimationFrame(() => setAnimate(true))
    })
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-sv-xl">
        <div
          className={cn('flex ease-sv-soft', animate && 'transition-transform duration-700')}
          style={{ transform: `translateX(-${pos * 100}%)` }}
          onTransitionEnd={onTrackEnd}
        >
          {[...items, items[0]].map((t, i) => {
            const isClone = i === n
            const { title, org } = splitRole(t.role)
            return (
              <figure
                key={isClone ? `${t.name}-clone` : t.name}
                role="group"
                aria-roledescription="slide"
                aria-label={`${isClone ? 1 : i + 1} of ${n}`}
                aria-hidden={isClone || i !== active}
                className="m-0 w-full shrink-0 px-px"
              >
                <div
                  className="grid h-full grid-cols-[280px_1fr] items-center gap-12 rounded-sv-xl border border-sv-border p-12 max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:p-5"
                  style={{
                    background:
                      'radial-gradient(120% 140% at 0% 0%, rgba(29,28,140,.30), transparent 55%), radial-gradient(90% 90% at 100% 100%, rgba(120,119,224,.14), transparent 55%), var(--color-sv-black-soft)',
                  }}
                >
                  <figcaption className="flex flex-col items-start gap-5 border-r border-sv-border pr-10 max-[900px]:gap-3 max-[900px]:border-r-0 max-[900px]:border-b max-[900px]:pr-0 max-[900px]:pb-4">
                    <Quotes size={44} weight="fill" className="text-sv-primary-light/60 max-[900px]:h-7 max-[900px]:w-7" aria-hidden="true" />
                    <div className="flex items-center gap-4">
                      {t.logo ? (
                        <span className="flex h-14 w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-sv-sm bg-[#C2C0B9] p-1.5">
                          <img src={t.logo} alt="" className="max-h-full max-w-full object-contain mix-blend-multiply" loading="lazy" />
                        </span>
                      ) : (
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sv-primary-border bg-sv-primary-dim font-display text-lg font-extrabold text-sv-primary-light">
                          {t.initials}
                        </span>
                      )}
                      <b className="font-display text-lg leading-tight text-sv-white">{t.name}</b>
                    </div>
                    <div>
                      <div className="font-display text-[15px] font-bold text-sv-primary-light">{org}</div>
                      {title && <div className="mt-0.5 text-sm text-sv-text-muted">{title}</div>}
                    </div>
                  </figcaption>
                  <blockquote className="m-0 text-[clamp(16px,1.5vw,20px)] leading-[1.75] text-sv-text max-[900px]:leading-[1.65]">{t.quote}</blockquote>
                </div>
              </figure>
            )
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-5 max-[900px]:mt-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={prev}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-sv-border-strong text-sv-white transition-colors duration-300 hover:border-white/70 hover:bg-white/10"
        >
          <CaretLeft size={16} weight="bold" />
        </button>
        <div className="flex gap-2.5" role="tablist" aria-label="Choose testimonial">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setPos(i)}
              className={cn(
                'h-2.5 cursor-pointer rounded-full transition-all duration-300',
                i === active ? 'w-8 bg-sv-primary-light' : 'w-2.5 bg-white/25 hover:bg-white/45',
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={next}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-sv-border-strong text-sv-white transition-colors duration-300 hover:border-white/70 hover:bg-white/10"
        >
          <CaretRight size={16} weight="bold" />
        </button>
      </div>
    </div>
  )
}
