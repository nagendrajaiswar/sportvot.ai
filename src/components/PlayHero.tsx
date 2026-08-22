import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Container, Eyebrow } from './ui'
import Btn from './Btn'
import { Phone } from '@phosphor-icons/react'

const SLIDES = ['/play/hero-1.jpg', '/play/hero-2.jpg', '/play/hero-3.jpg', '/play/hero-4.jpg']
const SLIDE_INTERVAL = 5000

export default function PlayHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subRef = useRef<HTMLParagraphElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), SLIDE_INTERVAL)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.2 })
        .from(titleRef.current, { opacity: 0, y: 28, duration: 0.9, ease: 'power4.out' })
        .from(subRef.current, { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out' }, '-=.6')
        .from(ctaRef.current ? Array.from(ctaRef.current.children) : [], { opacity: 0, y: 16, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=.4')
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative flex min-h-[100svh] items-center overflow-hidden bg-sv-black">
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === slide ? 1 : 0 }}
        />
      ))}

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(6,6,10,.75) 0%, rgba(6,6,10,.55) 40%, rgba(6,6,10,.88) 100%)' }}
      />

      <div className="relative z-2 w-full py-[140px] pb-24">
        <Container>
          <Eyebrow>SportVot Play — Corporate & Sports Events</Eyebrow>
          <h1 ref={titleRef} className="mt-5 max-w-[1180px] text-balance font-display text-[clamp(36px,5.2vw,58px)] font-extrabold tracking-[-0.02em] text-sv-white">
            India's Leading <span className="text-sv-primary-light">Event Experts.</span>
          </h1>
          <p ref={subRef} className="mt-5 max-w-[880px] text-[19px] text-sv-text-muted">
            From concept to curtain call — strategic planning, flawless production, live streaming, and end-to-end event management.
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-wrap gap-4">
            <Btn to="#proposal" variant="primary">
              Book a Consultation
            </Btn>
            <Btn href="tel:+917738698820" variant="outline">
              <Phone size={16} weight="bold" /> Call Now
            </Btn>
          </div>
        </Container>
      </div>
    </section>
  )
}
