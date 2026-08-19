import { cloneElement, isValidElement, useEffect, useRef } from 'react'
import type { ReactElement } from 'react'
import gsap from 'gsap'

/** Wraps a single interactive child (link/button) with the magnetic-pull-toward-cursor effect. Desktop pointer only. */
export default function Magnetic({ children }: { children: ReactElement }) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left - r.width / 2
      const y = e.clientY - r.top - r.height / 2
      gsap.to(el, { x: x * 0.3, y: y * 0.4, duration: 0.4, ease: 'power3.out' })
    }
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' })

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  if (!isValidElement(children)) return children
  return cloneElement(children as ReactElement<{ ref?: React.Ref<HTMLElement> }>, { ref })
}
