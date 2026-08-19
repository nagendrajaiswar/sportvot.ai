import { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../lib/utils'

export type Step = { title: string; intro: string; items: string[] }

/** Scroll-pinned step walkthrough — the visual stays sticky while step-items activate as they cross the viewport. */
export default function PinSteps({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const triggers = steps.map((_, i) =>
      ScrollTrigger.create({
        trigger: itemRefs.current[i]!,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      }),
    )
    return () => triggers.forEach((t) => t.kill())
  }, [steps])

  return (
    <div className="grid grid-cols-[0.8fr_1.2fr] items-start gap-12 max-[900px]:grid-cols-1">
      <div className="sticky top-[110px] flex h-[420px] items-center justify-center overflow-hidden rounded-sv-xl border border-sv-border bg-sv-surface max-[900px]:static max-[900px]:top-0">
        <span className="font-display text-[120px] font-black text-sv-primary-dim">{String(active + 1).padStart(2, '0')}</span>
      </div>
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div
            key={step.title}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            className={cn('border-b border-sv-border py-12 transition-opacity duration-400 last:border-b-0', active === i ? 'opacity-100' : 'opacity-40')}
          >
            <span className="font-display text-[13px] font-extrabold tracking-[0.1em] text-sv-primary">STEP {String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 font-display text-[clamp(24px,3vw,34px)] font-extrabold text-sv-white">{step.title}</h3>
            <p className="mt-2 text-[15px] text-sv-text-muted">{step.intro}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {step.items.map((item) => (
                <li key={item} className="relative pl-5 text-[15px] text-sv-text-muted before:absolute before:left-0 before:content-['—'] before:text-sv-primary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
