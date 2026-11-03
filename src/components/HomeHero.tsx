import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { Play, X } from '@phosphor-icons/react'
import { Container, Eyebrow } from './ui'
import Btn from './Btn'

// Still background behind the headline (a frame from the showreel; swap for a dedicated hero photo any time).
const HERO_BG = '/hero-bg.webp'

// The reel plays muted inside the card and, in the lightbox, with sound. The final text + voiceover showreel
// is still in production — swap this src when it lands.
const SHOWREEL_SRC = '/herovideo.m4v'
const SHOWREEL_POSTER = '/showreel-poster.webp'

// Card geometry, as on veo.com: it starts inset with 32px corners and grows to edge-to-edge, square-cornered.
const CARD_RADIUS = 32
const insetPx = () => (window.innerWidth < 900 ? 32 : 192) // total horizontal inset at the start

/**
 * Hero: calm full-bleed still, centred headline and CTAs, and a rounded video card below the text that grows to
 * full width as the page scrolls (modelled on veo.com). Clicking the card opens the reel in a lightbox with sound.
 */
export default function HomeHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardWrapRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLButtonElement | null>(null)
  const cardVideoRef = useRef<HTMLVideoElement | null>(null)
  const line1 = useRef<HTMLSpanElement | null>(null)
  const line2 = useRef<HTMLSpanElement | null>(null)
  const line3 = useRef<HTMLSpanElement | null>(null)
  const subRef = useRef<HTMLParagraphElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Headline entrance + scroll-driven growth of the video card
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

      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const full = () => cardWrapRef.current?.clientWidth ?? window.innerWidth
        // From the moment the card's top edge enters the bottom of the screen until it sits ~20% from the top.
        gsap.fromTo(
          cardRef.current,
          { width: () => full() - insetPx(), borderRadius: CARD_RADIUS },
          {
            width: () => full(),
            borderRadius: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardWrapRef.current,
              start: 'top bottom',
              end: 'top 20%',
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Pause the card's teaser while the lightbox is open; lock page scroll
  useEffect(() => {
    if (lightboxOpen) {
      cardVideoRef.current?.pause()
      document.body.style.overflow = 'hidden'
    } else {
      cardVideoRef.current?.play().catch(() => {})
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
    <section ref={sectionRef} className="relative overflow-hidden bg-sv-black">
      {/* Background still + overlay, covering the text and the card area */}
      <img src={HERO_BG} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,.55)_0%,rgba(5,6,7,.42)_45%,rgba(5,6,7,.75)_100%)]" />

      <div className="relative z-2">
        <div className="flex min-h-[calc(100svh-96px)] items-center justify-center pt-[130px] pb-16 max-[900px]:pt-[110px]">
          <Container>
            <div className="mx-auto max-w-[900px] text-center">
              <Eyebrow center>The Global Sports Production Platform</Eyebrow>
              <h1 className="mt-5 font-display text-[clamp(44px,7.4vw,76px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-sv-white">
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
              <p ref={subRef} className="mx-auto mt-6 max-w-[680px] text-[clamp(16px,2vw,21px)] text-white/80">
                Professional live sports production, powered by flexible capture, cloud-based workflows and intelligent broadcasting technology — from grassroots competitions to international events.
              </p>
              <div ref={ctaRef} className="mt-10 flex flex-wrap justify-center gap-4">
                <Btn to="#proposal" variant="primary">
                  Get a Proposal
                </Btn>
                <Btn href="https://sportvot.com" target="_blank" rel="noopener" variant="outline">
                  ▶ Watch Live Sports
                </Btn>
              </div>
            </div>
          </Container>
        </div>

        {/* The video card — starts inset with rounded corners, grows to edge-to-edge on scroll */}
        <div ref={cardWrapRef} className="flex justify-center pb-24 max-[900px]:pb-14">
          <button
            ref={cardRef}
            type="button"
            aria-label="Play the SportVot showreel"
            onClick={() => setLightboxOpen(true)}
            className="group relative block aspect-video w-[calc(100%-192px)] cursor-pointer overflow-hidden border-0 bg-sv-black-soft p-0 max-[900px]:w-[calc(100%-32px)]"
            style={{ borderRadius: CARD_RADIUS }}
          >
            <video
              ref={cardVideoRef}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              autoPlay
              muted
              loop
              playsInline
              poster={SHOWREEL_POSTER}
              onError={(e) => {
                ;(e.currentTarget as HTMLVideoElement).style.display = 'none'
              }}
            >
              <source src={SHOWREEL_SRC} type="video/mp4" />
            </video>
            <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,.1),rgba(5,6,7,.45))]" />
            <span className="absolute inset-0 flex items-center justify-center gap-6 px-6 max-[640px]:gap-4">
              <span className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 max-[640px]:h-14 max-[640px]:w-14">
                <Play size={30} weight="fill" className="translate-x-0.5" />
              </span>
              <span className="max-w-[300px] text-left font-display text-[clamp(15px,1.6vw,21px)] font-medium leading-snug text-white">
                See how SportVot powers live sports production, from grassroots to global.
              </span>
            </span>
          </button>
        </div>
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
            <video src={SHOWREEL_SRC} controls autoPlay playsInline className="max-h-[85vh] w-full max-w-5xl rounded-sv-lg" onClick={(e) => e.stopPropagation()} />
          </div>,
          document.body,
        )}
    </section>
  )
}
