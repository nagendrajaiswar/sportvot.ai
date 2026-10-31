import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

type Testimonial = { quote: string; initials: string; logo?: string; name: string; role: string }

const INTERVAL_MS = 10_000

/** One testimonial at a time, full width. Auto-advances every 10s (paused on hover/focus), with dots to jump. */
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || items.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setTimeout(() => setActive((i) => (i + 1) % items.length), INTERVAL_MS)
    return () => window.clearTimeout(id)
  }, [active, paused, items.length])

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
      <div className="overflow-hidden rounded-sv-lg">
        <div className="flex transition-transform duration-700 ease-sv-soft" style={{ transform: `translateX(-${active * 100}%)` }}>
          {items.map((t, i) => (
            <figure
              key={t.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              aria-hidden={i !== active}
              className="m-0 w-full shrink-0 px-px"
            >
              <div className="flex h-full flex-col rounded-sv-lg border border-sv-border bg-sv-surface p-12 max-[700px]:p-6">
                <blockquote className="m-0 mx-auto w-full max-w-[920px] text-[clamp(16px,1.6vw,20px)] leading-relaxed text-sv-text before:mr-1.5 before:text-[40px] before:leading-[0] before:text-sv-primary-light before:content-['“']">
                  {t.quote}
                </blockquote>
                <figcaption className="mx-auto mt-auto flex w-full max-w-[920px] items-center gap-3 pt-8 text-left">
                  {t.logo ? (
                    <span className="flex h-11 w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-sv-sm bg-[#C2C0B9] p-1">
                      <img src={t.logo} alt="" className="max-h-full max-w-full object-contain mix-blend-multiply" loading="lazy" />
                    </span>
                  ) : (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sv-primary-border bg-sv-primary-dim font-display font-extrabold text-sv-primary-light">
                      {t.initials}
                    </span>
                  )}
                  <span>
                    <b className="block text-sm text-sv-white">{t.name}</b>
                    <span className="block text-[13px] text-sv-text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2.5" role="tablist" aria-label="Choose testimonial">
        {items.map((t, i) => (
          <button
            key={t.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show testimonial from ${t.name}`}
            onClick={() => setActive(i)}
            className={cn(
              'h-2.5 cursor-pointer rounded-full transition-all duration-300',
              i === active ? 'w-8 bg-sv-primary-light' : 'w-2.5 bg-white/25 hover:bg-white/45',
            )}
          />
        ))}
      </div>
    </div>
  )
}
