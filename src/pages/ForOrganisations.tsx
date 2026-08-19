import { Container, Section, SectionHead, PageHero, TwoCol, ColMedia, CTAStrip, TrustList } from '../components/ui'
import { Reveal, RevealGroup } from '../components/Reveal'
import { CapCard, CapGrid, CaseCard } from '../components/cards'
import PinSteps, { type Step } from '../components/PinSteps'
import Btn from '../components/Btn'
import { DemoForm, Field, FormGrid, TextInput, SelectInput, TextareaInput } from '../components/forms'

const STEPS: Step[] = [
  {
    title: 'Capture',
    intro: 'Compatible with all types of video capturing devices:',
    items: ['Mobile phone', 'Professional video camera', 'Automated smart camera', 'Up to 15 angles simultaneously'],
  },
  {
    title: 'Produce',
    intro: 'Your feed enters SportVot Cloud Studio. The broadcast builds itself:',
    items: [
      'Live graphics & animated overlays',
      'Real-time scoring — 52+ sports',
      'Remote multi-lingual commentary',
      'Automated highlights — within seconds',
      'Sponsor cue integration',
    ],
  },
  {
    title: 'Distribute',
    intro: 'One stream. Every platform. Your audience, wherever they are:',
    items: ['SportVot OTT', 'YouTube & Facebook', 'Your own website or app', 'All simultaneously'],
  },
]

const CAPABILITIES = [
  { statLine: 'Up to 15 camera angles', title: 'Multi-Angle Streaming', body: 'Mix automated and video cameras in a single production. Switch between angles live.' },
  { statLine: '52+ sports supported', title: 'Live Scoring & Stats', body: 'Real-time detailed scoreboards and player data, on screen.' },
  { statLine: '100+ customisable overlays', title: 'Animated Graphics', body: 'Your brand. Your colours. Broadcast-quality visuals.' },
  { statLine: 'Any language. Any location.', title: 'Remote Commentary', body: 'Commentators join from anywhere, mixed live into your feed.' },
  { statLine: 'Ready within 5 seconds', title: 'AI Auto Highlights', body: 'Every key moment — clipped and shareable before the crowd settles.' },
  { statLine: 'Built into every broadcast', title: 'Ad & Sponsor Integration', body: 'Pre-roll, mid-roll and post-roll ads, overlays, and virtual on-field advertising.' },
  { statLine: 'Less than 5 seconds latency', title: 'Ultra-Low Latency', body: 'Your audience watches as it happens — not 30 seconds behind.' },
  { statLine: 'Any angle. Any moment.', title: 'Instant Multi-Angle Replay', body: 'Replay key moments from every active camera — live.' },
]

const CASES = [
  { thumb: 'Football · India', metric: '2.4Mn', metricLabel: 'views across a single tournament weekend' },
  { thumb: 'Cricket · UAE', metric: '18', metricLabel: 'matches live streamed in 48 hours' },
  { thumb: 'Kabaddi · India', metric: '800+', metricLabel: 'player profiles created in one season' },
]

const MORE_ORGS = [
  { sport: 'Football', desc: 'Nigeria · 3 seasons' },
  { sport: 'Badminton', desc: 'Indonesia · 40+ events' },
  { sport: 'Basketball', desc: 'Kenya · National league' },
  { sport: 'Cricket', desc: 'India · 5 seasons' },
  { sport: 'Hockey', desc: 'UK · Club level' },
  { sport: 'Volleyball', desc: 'Philippines · 2 leagues' },
]

const SERVICES = [
  'Live streaming & production',
  'Post-production & highlights',
  'Player profiling & analytics',
  'Multi-platform distribution',
  'Sponsor & ad integration',
  'Commentary services',
  'Full-season production partnership',
  'Not sure — I need a consultation',
]

export default function ForOrganisations() {
  return (
    <>
      <PageHero eyebrow="For Organisations" title="Professional Sports Broadcasting — for games at every level." />

      <Section>
        <Container>
          <TwoCol>
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-sv-primary-light">The Problem</p>
              <h2 className="mt-4 font-display text-[clamp(28px,4.5vw,42px)] font-extrabold text-sv-white">99% of sports have no form of broadcast coverage.</h2>
              <p className="mt-5 text-[17px] text-sv-text-muted">Not because the games aren't good enough. Because broadcast was never built for them.</p>
              <p className="mt-4 font-display text-[22px] font-extrabold text-sv-primary-light">SportVot changes that.</p>
            </Reveal>
            <ColMedia>
              Real productions.
              <br />
              Real matches.
            </ColMedia>
          </TwoCol>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHead eyebrow="How It Works" center className="mx-auto mb-16">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Live in 5 minutes. From any camera.</h2>
            <p className="mx-auto mt-4 max-w-[600px] text-center text-[19px] text-sv-text-muted">Three steps. One platform. A professional broadcast, every time.</p>
          </SectionHead>
          <PinSteps steps={STEPS} />
          <CTAStrip
            className="mt-16"
            title="Want the full technical detail?"
            body="DRS, virtual advertising, custom graphics, API integrations and more."
          >
            <Btn to="/solutions" variant="primary">
              Full Capabilities &amp; Tech Detail →
            </Btn>
          </CTAStrip>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead eyebrow="SportVot Cloud Studio" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Everything your broadcast needs.</h2>
            <p className="mx-auto mt-4 max-w-[600px] text-center text-[19px] text-sv-text-muted">No add-ons. No extra hires. No compromise.</p>
          </SectionHead>
          <CapGrid>
            {CAPABILITIES.map((c) => (
              <CapCard key={c.title} {...c} />
            ))}
          </CapGrid>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHead eyebrow="Trusted Globally" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Who's already using SportVot.</h2>
            <p className="mx-auto mt-4 max-w-[600px] text-center text-[19px] text-sv-text-muted">From district leagues to international federations — across 30+ countries.</p>
          </SectionHead>
          <RevealGroup className="mt-12 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {CASES.map((c) => (
              <CaseCard key={c.thumb} {...c} meta="Client Case Study" readLabel="Read case study →" href="/case-studies" />
            ))}
          </RevealGroup>

          <div className="mt-[72px]">
            <Reveal as="h3" className="text-center font-display text-[22px] font-bold text-sv-text-muted">
              And many more organisations across the world —
            </Reveal>
            <div className="mt-6 grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
              {MORE_ORGS.map((o) => (
                <div key={o.sport} className="flex items-center gap-3 rounded-sv-md border border-sv-border px-4 py-3 text-[13px] text-sv-text-muted">
                  <b className="text-sv-white">{o.sport}</b>&nbsp;· {o.desc}
                </div>
              ))}
            </div>
            <p className="mt-8 text-center">
              <Btn to="/case-studies" variant="outline">
                View All Case Studies →
              </Btn>
            </p>
          </div>
        </Container>
      </Section>

      <Section id="proposal">
        <Container>
          <TwoCol>
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-sv-primary-light">Get a Proposal</p>
              <h2 className="mt-4 font-display text-[clamp(28px,4.5vw,42px)] font-extrabold text-sv-white">Ready to take your sport to the world?</h2>
              <p className="mt-4 text-[17px] text-sv-text-muted">No fixed packages. No pricing pressure. Just a plan built around your event — within 24 hours.</p>
              <TrustList
                items={[
                  'We respond to every enquiry within 24 hours',
                  'Every proposal is custom — built for your sport & scale',
                  'Trusted by organisations across 30+ countries',
                  'Your details are never shared with third parties',
                ]}
              />
            </Reveal>
            <Reveal className="rounded-sv-xl border border-sv-border bg-sv-surface p-12 max-[900px]:p-6">
              <DemoForm submitLabel="Send Enquiry →">
                <Field label="Your Name *">
                  <TextInput type="text" required placeholder="Full name" />
                </Field>
                <Field label="Organisation *">
                  <TextInput type="text" required placeholder="Club, federation or academy" />
                </Field>
                <FormGrid>
                  <Field label="City & Country *">
                    <TextInput type="text" required placeholder="Dubai, UAE" />
                  </Field>
                  <Field label="Phone Number *">
                    <TextInput type="tel" required placeholder="Include country code" />
                  </Field>
                </FormGrid>
                <Field label="Email Address *">
                  <TextInput type="email" required placeholder="you@organisation.com" />
                </Field>
                <Field label="Services">
                  <SelectInput defaultValue="">
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </SelectInput>
                </Field>
                <Field label="Message">
                  <TextareaInput placeholder="Sport, number of matches, location, dates — anything that helps us understand your event." />
                </Field>
                <p className="mb-4 text-xs text-sv-text-faint">By submitting you agree to SportVot's Privacy Policy.</p>
              </DemoForm>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>
    </>
  )
}
