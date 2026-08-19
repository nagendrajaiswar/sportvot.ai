import { useRef } from 'react'
import gsap from 'gsap'
import { cn } from '../lib/utils'

type TiltCardProps = {
  as?: 'div' | 'a'
  href?: string
  to?: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

/** Subtle 3D pointer-tilt used on fork/cap/testimonial/match cards. */
export default function TiltCard({ className, style, children }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    gsap.to(el, { rotateX: py * -4, rotateY: px * 4, duration: 0.4, ease: 'power2.out', transformPerspective: 800 })
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' })
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={cn(className)} style={style}>
      {children}
    </div>
  )
}
