import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X } from '@phosphor-icons/react'
import { Container, Eyebrow } from './ui'
import Btn from './Btn'

const NOISE_BG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"

const HERO_VIDEO_SRC = '/herovideo.m4v'

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const scrimRef = useRef<HTMLDivElement | null>(null)
  const line1 = useRef<HTMLSpanElement | null>(null)
  const line2 = useRef<HTMLSpanElement | null>(null)
  const line3 = useRef<HTMLSpanElement | null>(null)
  const subRef = useRef<HTMLParagraphElement | null>(null)
  const pipelineRef = useRef<HTMLDivElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Entrance timeline + scroll parallax on the background video
  useEffect(() => {
    // gsap.context + revert() (rather than a plain tl.kill()) so React 18 StrictMode's
    // dev-mode double-invoke (mount -> cleanup -> mount) can't leave elements stuck at
    // a tween's "from" state — kill() alone doesn't undo inline styles already applied.
    const ctx = gsap.context(() => {
      const lines = [line1.current, line2.current, line3.current].filter(Boolean)
      gsap.set(lines, { yPercent: 110 })
      gsap
        .timeline({ delay: 0.2 })
        .to(lines, { yPercent: 0, duration: 1.1, stagger: 0.12, ease: 'power4.out' })
        .from(subRef.current, { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out' }, '-=.6')
        .from(pipelineRef.current, { opacity: 0, y: 16, duration: 0.7, ease: 'power3.out' }, '-=.5')
        .from(ctaRef.current ? Array.from(ctaRef.current.children) : [], { opacity: 0, y: 16, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=.4')

      if (sectionRef.current && videoRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => gsap.set(videoRef.current, { yPercent: self.progress * 18 }),
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Cursor-follow spotlight — punches a soft hole in the dark scrim so the
  // full-brightness video shows through wherever the pointer is, across the whole hero.
  useEffect(() => {
    const section = sectionRef.current
    const scrim = scrimRef.current
    if (!section || !scrim) return

    const target = { x: -9999, y: -9999 }
    const current = { x: -9999, y: -9999 }
    let raf = 0

    const loop = () => {
      current.x += (target.x - current.x) * 0.08
      current.y += (target.y - current.y) * 0.08
      scrim.style.setProperty('--x', `${current.x}px`)
      scrim.style.setProperty('--y', `${current.y}px`)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onEnter = (e: PointerEvent) => {
      const r = section.getBoundingClientRect()
      // Snap immediately (no easing) to wherever the pointer entered — otherwise the
      // spotlight eases in from its last position (or the -9999 off-screen park spot),
      // which reads as the torch flying in from a fixed corner instead of just appearing.
      target.x = current.x = e.clientX - r.left
      target.y = current.y = e.clientY - r.top
    }
    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect()
      target.x = e.clientX - r.left
      target.y = e.clientY - r.top
    }
    const onLeave = () => {
      target.x = -9999
      target.y = -9999
    }

    section.addEventListener('pointerenter', onEnter)
    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      section.removeEventListener('pointerenter', onEnter)
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  // Pause the background loop while the lightbox is open; lock page scroll
  useEffect(() => {
    if (lightboxOpen) {
      videoRef.current?.pause()
      document.body.style.overflow = 'hidden'
    } else {
      videoRef.current?.play().catch(() => {})
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxOpen])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[length:160%_160%] bg-sv-black [animation:sv-hero-drift_18s_ease-in-out_infinite_alternate]"
      style={{
        backgroundImage:
          'radial-gradient(60% 60% at 20% 20%, rgba(29,28,140,.45), transparent 60%), radial-gradient(50% 50% at 85% 15%, rgba(120,119,224,.28), transparent 60%)',
        // Belt-and-suspenders clip: GPU-composited <video> layers can visually escape a
        // plain overflow:hidden under transform in some browsers — clip-path doesn't have
        // that gap, and it's what actually stopped the parallax video from spilling into
        // the marquee below.
        clipPath: 'inset(0)',
      }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onError={(e) => {
          ;(e.currentTarget as HTMLVideoElement).style.display = 'none'
        }}
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Dark scrim with a cursor-follow spotlight hole — purely visual, so the mask
          cutout never eats clicks (masked-out areas stop receiving pointer events). */}
      <div ref={scrimRef} className="hero-video-scrim pointer-events-none absolute inset-0 h-full w-full" />

      {/* Full-hero click target, kept separate from the scrim above so the whole area is clickable */}
      <button
        type="button"
        aria-label="Watch the full video"
        onClick={() => setLightboxOpen(true)}
        className="absolute inset-0 h-full w-full cursor-pointer border-0 bg-transparent p-0"
      />

      <div className="pointer-events-none absolute inset-0 opacity-[.03]" style={{ backgroundImage: `url("${NOISE_BG}")` }} />

      <div className="pointer-events-none relative z-2 w-full py-[140px] pb-24">
        <Container>
          <Eyebrow>The Global Sports Production Platform</Eyebrow>
          <h1 className="mt-5 font-display text-[clamp(44px,8.4vw,72px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-sv-white">
            <span className="block overflow-hidden">
              <span ref={line1} className="block">
                Every Game.
              </span>
            </span>
            <span className="block overflow-hidden">
              <span ref={line2} className="block">
                Every Moment.
              </span>
            </span>
            <span className="block overflow-hidden">
              <span ref={line3} className="block text-sv-primary-light">
                LIVE.
              </span>
            </span>
          </h1>
          <p ref={subRef} className="mt-6 max-w-[600px] text-[clamp(16px,2vw,21px)] text-sv-text-muted">
            Professional sports broadcasting for clubs, academies, leagues, and federations — in 5 minutes, from any camera, anywhere in the world.
          </p>
          <div ref={pipelineRef} className="mt-8 flex flex-wrap gap-2.5 font-display text-sm font-bold">
            {['Capture', 'Produce', 'Stream', 'Distribute'].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2.5">
                <b className="text-sv-primary-light">{step}</b>
                {i < arr.length - 1 && <span className="text-sv-text-faint">／</span>}
              </span>
            ))}
          </div>
          <div ref={ctaRef} className="pointer-events-auto mt-[72px] flex flex-wrap gap-4">
            <Btn to="/for-organisations#proposal" variant="primary">
              Get a Proposal
            </Btn>
            <Btn to="/live-tv" variant="outline">
              ▶ Watch Live Sports
            </Btn>
          </div>
        </Container>
      </div>

      {lightboxOpen &&
        createPortal(
          <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/92 p-6" onClick={() => setLightboxOpen(false)}>
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-sv-primary-light hover:text-sv-primary-light"
            >
              <X size={22} weight="bold" />
            </button>
            <video
              src={HERO_VIDEO_SRC}
              controls
              autoPlay
              playsInline
              className="max-h-[85vh] w-full max-w-5xl rounded-sv-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </section>
  )
}
