import { useRef } from 'react'
import gsap from 'gsap'

/**
 * Spreadable tilt-on-hover handlers for any element (cards, link-cards, etc).
 *
 * The bounding rect is captured once on mouseenter and reused for the whole
 * hover session — sampling it fresh on every mousemove (as a naive version
 * would) reads the element's *already-tilted* rendered box once GSAP starts
 * applying the rotation, so each new sample drifts further off, compounding
 * into visible jitter the longer the pointer moves.
 */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const rectRef = useRef<DOMRect | null>(null)

  const onMouseEnter = () => {
    const el = ref.current
    if (!el) return
    rectRef.current = el.getBoundingClientRect()
  }

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current
    if (!el) return
    const r = rectRef.current ?? el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    gsap.to(el, { rotateX: py * -4, rotateY: px * 4, duration: 0.4, ease: 'power2.out', transformPerspective: 800, overwrite: 'auto' })
  }
  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    rectRef.current = null
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out', overwrite: 'auto' })
  }

  return { ref, onMouseEnter, onMouseMove, onMouseLeave }
}
