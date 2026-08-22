import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { CaretDown, ArrowLeft } from '@phosphor-icons/react'
import { Container, Section, Eyebrow } from '../components/ui'
import { Reveal } from '../components/Reveal'
import Btn from '../components/Btn'
import { BLOG_POSTS } from '../data/blog'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-sv-md border border-sv-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-bold text-sv-white transition-colors hover:bg-sv-surface-2"
      >
        {q}
        <CaretDown size={16} weight="bold" className={`shrink-0 text-sv-text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="px-4 pb-4 text-sm text-sv-text-muted">{a}</p>}
    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/play" replace />

  return (
    <>
      <section
        className="border-b border-sv-border pt-[180px] pb-16"
        style={{ background: 'radial-gradient(90% 90% at 15% 0%, rgba(29,28,140,.28), transparent 50%)' }}
      >
        <Container>
          <Reveal>
            <Link to="/play#blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-sv-primary-light">
              <ArrowLeft size={16} weight="bold" /> Back to Blog
            </Link>
          </Reveal>
          <Reveal>
            <Eyebrow className="mt-6">Insights</Eyebrow>
          </Reveal>
          <Reveal as="h1" className="mt-4 max-w-[900px] text-balance font-display text-[clamp(30px,4.4vw,48px)] font-extrabold tracking-[-0.02em] text-sv-white">
            {post.title}
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-[820px]">
            <Reveal scale className="aspect-16/9 overflow-hidden rounded-sv-xl border border-sv-border">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            </Reveal>

            <div className="mt-10 flex flex-col gap-5 text-[17px] leading-relaxed text-sv-text-muted">
              {post.body.map((para, i) => (
                <Reveal key={i} as="p">
                  {para}
                </Reveal>
              ))}
              {post.bullets && (
                <Reveal>
                  <ul className="flex flex-col gap-3">
                    {post.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sv-primary-light" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>

            <div className="mt-16">
              <Reveal as="h2" className="font-display text-2xl font-extrabold text-sv-white">
                Frequently Asked Questions
              </Reveal>
              <div className="mt-6 flex flex-col gap-3">
                {post.faqs.map((f) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </div>

            <Reveal
              scale
              className="mt-16 rounded-sv-xl border border-sv-border p-10 text-center max-[640px]:p-6"
              style={{
                background:
                  'radial-gradient(120% 140% at 20% 0%, rgba(29,28,140,.30), transparent 55%), radial-gradient(90% 90% at 85% 100%, rgba(120,119,224,.18), transparent 55%), var(--color-sv-black-soft)',
              }}
            >
              <h3 className="font-display text-xl font-extrabold text-sv-white">Ready to plan your next event?</h3>
              <p className="mx-auto mt-2 max-w-[440px] text-sm text-sv-text-muted">
                Tell us what you're planning and we'll put together a proposal within 24 hours.
              </p>
              <div className="mt-6">
                <Btn to="/play#proposal" variant="primary">
                  Book a Consultation
                </Btn>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
