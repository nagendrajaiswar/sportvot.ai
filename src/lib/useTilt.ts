import { useRef } from 'react'
import gsap from 'gsap'

/** Spreadable tilt-on-hover handlers for any element (cards, link-cards, etc). */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    gsap.to(el, { rotateX: py * -4, rotateY: px * 4, duration: 0.4, ease: 'power2.out', transformPerspective: 800 })
  }
  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' })
  }

  return { ref, onMouseMove, onMouseLeave }
}
