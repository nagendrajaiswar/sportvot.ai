import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements
  scale?: boolean
  className?: string
  style?: React.CSSProperties
  id?: string
  children: React.ReactNode
}

/** Fades/scales an element in once when it scrolls into view — mirrors [data-reveal] / [data-reveal-scale] from the original prototype. */
export function Reveal({ as = 'div', scale = false, className, style, id, children }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => el.classList.add('is-visible'),
    })
    return () => st.kill()
  }, [])

  const Comp = as as React.ElementType
  return (
    <Comp
      ref={ref}
      id={id}
      data-reveal={!scale ? '' : undefined}
      data-reveal-scale={scale ? '' : undefined}
      className={className}
      style={style}
    >
      {children}
    </Comp>
  )
}

/** Staggers its direct children in once when it scrolls into view — mirrors [data-reveal-group]. */
export function RevealGroup({ className, style, children }: { className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = Array.from(el.children)
    gsap.set(items, { opacity: 0, y: 30 })
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 82%',
      once: true,
      onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' }),
    })
    return () => st.kill()
  }, [])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
