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

// Layout option. true: a dedicated showreel player sits on the right of the headline and is the only thing that
// opens the video (the background loop is ambient and dimmed behind it). false: the original layout, where the
// whole full-bleed hero is the click target.
const SIDE_PLAYER = true
const SHOWREEL_POSTER = '/showreel-poster.webp'
const SHOWREEL_LENGTH = '1:48'

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const line1 = useRef<HTMLSpanElement | null>(null)
  const line2 = useRef<HTMLSpanElement | null>(null)
  const line3 = useRef<HTMLSpanElement | null>(null)
  const subRef = useRef<HTMLParagraphElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<HTMLDivElement | null>(null)
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
        .from(ctaRef.current ? Array.from(ctaRef.current.children) : [], { opacity: 0, y: 16, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=.4')
        .from(playerRef.current, { opacity: 0, y: 30, scale: 0.96, duration: 0.9, ease: 'power3.out' }, '-=1.1')

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

      {/* Dark scrim (same veil as the Play hero) */}
      <div className="hero-video-scrim pointer-events-none absolute inset-0 h-full w-full" />

      {/* Full-hero click target (original layout only), kept separate from the scrim above so the whole area is clickable */}
      {!SIDE_PLAYER && (
        <button
          type="button"
          aria-label="Watch the full video"
          onClick={() => setLightboxOpen(true)}
          className="absolute inset-0 h-full w-full cursor-pointer border-0 bg-transparent p-0"
        />
      )}

      <div className="pointer-events-none absolute inset-0 opacity-[.03]" style={{ backgroundImage: `url("${NOISE_BG}")` }} />

      <div className={`pointer-events-none relative z-2 w-full py-[140px] pb-24 ${SIDE_PLAYER ? 'max-[1000px]:pt-[104px] max-[1000px]:pb-14' : ''}`}>
        <Container>
          <div className={SIDE_PLAYER ? 'grid grid-cols-[1.05fr_1fr] items-center gap-14 max-[1000px]:grid-cols-1 max-[1000px]:gap-10' : undefined}>
            <div>
              <Eyebrow>The Global Sports Production Platform</Eyebrow>
              <h1 className={`mt-5 font-display font-extrabold leading-[1.02] tracking-[-0.02em] text-sv-white ${SIDE_PLAYER ? 'text-[clamp(44px,6.2vw,72px)]' : 'text-[clamp(44px,8.4vw,72px)]'}`}>
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
              <p ref={subRef} className={`mt-6 text-[clamp(16px,2vw,21px)] text-sv-text-muted ${SIDE_PLAYER ? 'max-w-[560px]' : 'max-w-[640px]'}`}>
                Professional live sports production, powered by flexible capture, cloud-based workflows and intelligent broadcasting technology — from grassroots competitions to international events.
              </p>
              <div ref={ctaRef} className={`pointer-events-auto mt-12 flex flex-wrap gap-4 ${SIDE_PLAYER ? 'max-[1000px]:mt-8' : ''}`}>
                <Btn to="#proposal" variant="primary">
                  Get a Proposal
                </Btn>
                <Btn href="https://sportvot.com" target="_blank" rel="noopener" variant="outline">
                  ▶ Watch Live Sports
                </Btn>
              </div>
            </div>

            {SIDE_PLAYER && (
              <div ref={playerRef} className="pointer-events-auto relative">
                {/* soft glow so the card reads as its own object against the moving background */}
                <div aria-hidden="true" className="absolute -inset-6 rounded-[44px] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(120,119,224,.32),transparent_72%)] blur-2xl" />
                <button
                  type="button"
                  aria-label="Play the SportVot showreel with sound"
                  onClick={() => setLightboxOpen(true)}
                  className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-sv-xl border border-white/20 bg-sv-black-soft p-0 shadow-[0_30px_80px_-20px_rgba(0,0,0,.85)] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-sv-primary-border"
                >
                  <img src={SHOWREEL_POSTER} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,.05)_30%,rgba(5,6,7,.7)_100%)]" />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-xl text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 max-[640px]:h-14 max-[640px]:w-14">
                    ▶
                  </span>
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5 text-left max-[640px]:p-4">
                    <span className="font-display text-sm font-bold text-white">Watch the SportVot showreel</span>
                    <span className="shrink-0 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">{SHOWREEL_LENGTH}</span>
                  </span>
                </button>
              </div>
            )}
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
