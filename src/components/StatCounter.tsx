import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { cn } from '../lib/utils'
import { useTilt } from '../lib/useTilt'

export type Stat = { target: number; suffix: string; label: string }

/**
 * Stat cards. With `featureFirst` the first stat is a tall hero card on the left and the rest sit in a 2×2
 * grid beside it (editorial layout, used for five stats); otherwise they form a single row of equal cards.
 */
export function StatsGrid({ stats, featureFirst, className }: { stats: Stat[]; featureFirst?: boolean; className?: string }) {
  if (featureFirst && stats.length > 1) {
    const [first, ...rest] = stats
    return (
      <div className={cn('grid grid-cols-[1.15fr_1fr] gap-5 max-[900px]:grid-cols-1', className)}>
        <StatCard {...first} big />
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-5">
          {rest.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    )
  }
  const cols = ({ 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4', 5: 'grid-cols-5' } as Record<number, string>)[stats.length] ?? 'grid-cols-4'
  return (
    <div className={cn('grid gap-5 max-[480px]:gap-3', cols, 'max-[900px]:grid-cols-2', className)}>
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  )
}

function StatCard({ target, suffix, label, big }: Stat & { big?: boolean }) {
  const numRef = useRef<HTMLParagraphElement | null>(null)
  const { ref, onMouseEnter, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(5)

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
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        'stroke-run relative flex flex-col justify-between overflow-hidden rounded-sv-lg border border-sv-border bg-sv-surface transition-[border-color,box-shadow] duration-300 hover:border-sv-primary-border hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]',
        big ? 'min-h-[300px] p-10 max-[640px]:min-h-[220px] max-[640px]:p-7' : 'min-h-[150px] p-7 max-[480px]:min-h-[118px] max-[480px]:p-4',
      )}
      style={{
        background: big
          ? 'radial-gradient(120% 120% at 0% 0%, rgba(29,28,140,.38), transparent 60%), radial-gradient(80% 80% at 100% 100%, rgba(120,119,224,.18), transparent 60%), var(--color-sv-surface)'
          : 'radial-gradient(120% 120% at 0% 0%, rgba(29,28,140,.2), transparent 65%), var(--color-sv-surface)',
      }}
    >
      <span aria-hidden="true" className="h-[3px] w-9 rounded-full bg-sv-primary-light" />
      <div className={big ? 'mt-10' : 'mt-6'}>
        <p
          ref={numRef}
          className={cn(
            'font-display font-black leading-none tracking-[-0.02em] text-sv-white',
            big ? 'text-[clamp(52px,6.4vw,84px)]' : 'text-[clamp(26px,3.2vw,42px)]',
          )}
        >
          0
        </p>
        <span className={cn('mt-3 block text-sv-text-muted', big ? 'text-lg' : 'text-[15px] max-[480px]:text-[13px]')}>{label}</span>
      </div>
    </div>
  )
}
