import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/** Subtle custom cursor dot that grows over interactive elements. Desktop pointer only. */
export default function CursorDot() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const dot = ref.current
    if (!dot) return

    const onMove = (e: MouseEvent) => {
      gsap.to(dot, { left: e.clientX, top: e.clientY, duration: 0.15, ease: 'power2.out' })
    }
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest('a, button, .btn')) dot.classList.add('grow')
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest('a, button, .btn')) dot.classList.remove('grow')
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return <div ref={ref} className="cursor-dot" />
}
