import { useRef } from 'react'
import gsap from 'gsap'

/**
 * Spreadable tilt-on-hover handlers for any element (cards, link-cards, etc).
 * Also owns the hover lift (translateY) — it has to run through the same GSAP
 * tween as the tilt, not a separate CSS `transition: transform`, otherwise the
 * CSS transition and GSAP's per-frame inline `transform` writes fight over the
 * same property and produce a multi-second garbled catch-up instead of a clean
 * animation (and the CSS-only lift never actually shows, since GSAP's inline
 * style overrides it anyway).
 *
 * The bounding rect is captured once on mouseenter and reused for the whole
 * hover session — sampling it fresh on every mousemove (as a naive version
 * would) reads the element's *already-tilted* rendered box once GSAP starts
 * applying the rotation, so each new sample drifts further off, compounding
 * into visible jitter the longer the pointer moves.
 */
export function useTilt<T extends HTMLElement>(liftPx = 6) {
  const ref = useRef<T | null>(null)
  const rectRef = useRef<DOMRect | null>(null)

  const onMouseEnter = () => {
    const el = ref.current
    if (!el) return
    rectRef.current = el.getBoundingClientRect()
    gsap.to(el, { y: -liftPx, duration: 0.3, ease: 'power2.out', overwrite: 'auto' })
  }

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current
    if (!el) return
    const r = rectRef.current ?? el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    // Short duration so the tilt tracks the cursor in near-real-time instead of
    // visibly catching up — mousemove refires every few ms, and with a longer
    // duration each new tween overwrites the last before it finishes, so the
    // tilt permanently lags behind the actual pointer position.
    gsap.to(el, { rotateX: py * -4, rotateY: px * 4, y: -liftPx, duration: 0.15, ease: 'power1.out', transformPerspective: 800, overwrite: 'auto' })
  }
  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    rectRef.current = null
    gsap.to(el, { rotateX: 0, rotateY: 0, y: 0, duration: 0.6, ease: 'power3.out', overwrite: 'auto' })
  }

  return { ref, onMouseEnter, onMouseMove, onMouseLeave }
}
