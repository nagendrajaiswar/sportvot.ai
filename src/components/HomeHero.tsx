import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container, Eyebrow } from './ui'
import Btn from './Btn'

const NOISE_BG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const line1 = useRef<HTMLSpanElement | null>(null)
  const line2 = useRef<HTMLSpanElement | null>(null)
  const line3 = useRef<HTMLSpanElement | null>(null)
  const subRef = useRef<HTMLParagraphElement | null>(null)
  const pipelineRef = useRef<HTMLDivElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const cueRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const lines = [line1.current, line2.current, line3.current].filter(Boolean)
    gsap.set(lines, { yPercent: 110 })
    const tl = gsap.timeline({ delay: 0.2 })
    tl.to(lines, { yPercent: 0, duration: 1.1, stagger: 0.12, ease: 'power4.out' })
      .from(subRef.current, { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out' }, '-=.6')
      .from(pipelineRef.current, { opacity: 0, y: 16, duration: 0.7, ease: 'power3.out' }, '-=.5')
      .from(ctaRef.current ? Array.from(ctaRef.current.children) : [], { opacity: 0, y: 16, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=.4')
      .from(cueRef.current, { opacity: 0, duration: 0.6 }, '-=.3')

    let st: ScrollTrigger | undefined
    if (sectionRef.current && videoRef.current) {
      st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => gsap.set(videoRef.current, { yPercent: self.progress * 18 }),
      })
    }
    return () => {
      tl.kill()
      st?.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[length:160%_160%] bg-sv-black [animation:sv-hero-drift_18s_ease-in-out_infinite_alternate]"
      style={{
        backgroundImage:
          'radial-gradient(60% 60% at 20% 20%, rgba(29,28,140,.45), transparent 60%), radial-gradient(50% 50% at 85% 15%, rgba(120,119,224,.28), transparent 60%)',
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
        <source src="/video/hero-reel.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,.35)_0%,rgba(5,6,7,.55)_55%,var(--color-sv-black)_100%)]" />
      <div className="absolute inset-0 opacity-[.03]" style={{ backgroundImage: `url("${NOISE_BG}")` }} />

      <div className="relative z-2 w-full py-[140px] pb-24">
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
          <div ref={ctaRef} className="mt-[72px] flex flex-wrap gap-4">
            <Btn to="/for-organisations#proposal" variant="primary">
              Get a Proposal
            </Btn>
            <Btn to="/live-tv" variant="outline">
              ▶ Watch Live Sports
            </Btn>
          </div>
        </Container>
      </div>

      <div ref={cueRef} className="absolute bottom-9 left-1/2 z-2 flex -translate-x-1/2 flex-col items-center gap-2.5 font-display text-[11px] uppercase tracking-[.14em] text-sv-text-faint">
        <span>Scroll</span>
        <span className="h-9 w-px animate-[sv-cue_1.8s_infinite] bg-[linear-gradient(var(--color-sv-primary-light),transparent)]" />
      </div>
    </section>
  )
}
