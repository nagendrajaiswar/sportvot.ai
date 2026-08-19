import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { cn } from '../lib/utils'

export type Stat = { target: number; suffix: string; label: string }

export function StatsGrid({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <div
      className={cn(
        'grid grid-cols-5 gap-px overflow-hidden rounded-sv-lg border border-sv-border bg-sv-border max-[900px]:grid-cols-2',
        className,
      )}
    >
      {stats.map((s) => (
        <StatCell key={s.label} {...s} />
      ))}
    </div>
  )
}

function StatCell({ target, suffix, label }: Stat) {
  const numRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const el = numRef.current
    if (!el) return
    const obj = { val: 0 }
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toLocaleString() + suffix
          },
        })
      },
    })
    return () => st.kill()
  }, [target, suffix])

  return (
    <div className="bg-sv-surface px-3 py-12 text-center">
      <p ref={numRef} className="font-display text-[clamp(30px,3.4vw,44px)] font-black text-sv-primary">
        0
      </p>
      <span className="mt-2 block text-[13px] uppercase tracking-[0.06em] text-sv-text-muted">{label}</span>
    </div>
  )
}
