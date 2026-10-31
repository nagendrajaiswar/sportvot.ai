import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'
import { Container, Section, Eyebrow } from '../components/ui'
import { Reveal } from '../components/Reveal'
import Btn from '../components/Btn'
import { CASE_STUDIES } from '../data/caseStudies'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = CASE_STUDIES.find((c) => c.slug === slug)

  if (!study) return <Navigate to="/case-studies" replace />

  const steps = study.flow.split('→').map((s) => s.trim())

  return (
    <>
      <section
        className="border-b border-sv-border pt-[180px] pb-16"
        style={{ background: 'radial-gradient(90% 90% at 15% 0%, rgba(29,28,140,.28), transparent 50%)' }}
      >
        <Container>
          <Reveal>
            <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-bold text-sv-primary-light">
              <ArrowLeft size={16} weight="bold" /> All case studies
            </Link>
          </Reveal>
          <Reveal>
            <Eyebrow className="mt-6">{study.client} × SportVot</Eyebrow>
          </Reveal>
          <Reveal as="h1" className="mt-4 max-w-[900px] text-balance font-display text-[clamp(30px,4.4vw,52px)] font-extrabold tracking-[-0.02em] text-sv-white">
            {study.title}
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-[900px]">
            <Reveal scale className="aspect-video overflow-hidden rounded-sv-xl border border-sv-border">
              <img src={study.image} alt={study.client} className="h-full w-full object-cover" />
            </Reveal>

            <div className="mt-10 flex flex-col gap-4 text-[19px] leading-relaxed text-sv-text">
              {study.intro.map((p, i) => (
                <Reveal key={i} as="p">
                  {p}
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
              {study.stats.map((s) => (
                <div key={s.label} className="rounded-sv-lg border border-sv-border bg-sv-surface p-6">
                  <div className="font-display text-[clamp(26px,3vw,36px)] font-black leading-tight text-sv-primary-light">{s.value}</div>
                  <div className="mt-1 text-[13px] text-sv-text-muted">{s.label}</div>
                </div>
              ))}
            </Reveal>

            <div className="mt-14 flex flex-col gap-10">
              {study.sections.map((sec) => (
                <Reveal key={sec.heading}>
                  <h2 className="font-display text-2xl font-extrabold text-sv-white">{sec.heading}</h2>
                  <div className="mt-3 flex flex-col gap-4 text-[17px] leading-relaxed text-sv-text-muted">
                    {sec.paragraphs?.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {sec.bullets && (
                      <ul className="flex flex-col gap-2.5">
                        {sec.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sv-primary-light" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 rounded-sv-xl border border-sv-border bg-sv-surface p-8 max-[640px]:p-5">
              <ol className="flex flex-wrap items-center gap-x-3 gap-y-3">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="rounded-full border border-sv-primary-border bg-sv-primary-dim px-4 py-2 font-display text-sm font-bold text-sv-white">{s}</span>
                    {i < steps.length - 1 && <span aria-hidden="true" className="text-sv-primary-light">→</span>}
                  </li>
                ))}
              </ol>
              {study.closing && <p className="mt-5 text-[17px] text-sv-text-muted">{study.closing}</p>}
            </Reveal>

            <Reveal
              scale
              className="mt-16 rounded-sv-xl border border-sv-border p-10 text-center max-[640px]:p-6"
              style={{
                background:
                  'radial-gradient(120% 140% at 20% 0%, rgba(29,28,140,.30), transparent 55%), radial-gradient(90% 90% at 85% 100%, rgba(120,119,224,.18), transparent 55%), var(--color-sv-black-soft)',
              }}
            >
              <h3 className="font-display text-xl font-extrabold text-sv-white">Planning something similar?</h3>
              <p className="mx-auto mt-2 max-w-[440px] text-sm text-sv-text-muted">
                Tell us about your event and we&rsquo;ll build a production proposal around it within 24 hours.
              </p>
              <div className="mt-6">
                <Btn to="/live-production#proposal" variant="primary">
                  Get a Proposal
                </Btn>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
