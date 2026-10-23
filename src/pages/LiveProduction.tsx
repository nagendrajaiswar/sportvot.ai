import { useState } from 'react'
import { Aperture, ChartBar, Sparkle, Microphone, Lightning, Handshake, Gauge, ArrowsClockwise } from '@phosphor-icons/react'
import { Container, Section, SectionHead, Eyebrow, TwoCol } from '../components/ui'
import { Reveal, RevealGroup } from '../components/Reveal'
import { FeatureCard, CaseCard, MediaCard, SpecCard } from '../components/cards'
import Btn from '../components/Btn'
import { cn } from '../lib/utils'
import { DemoForm, Field, FormGrid, TextInput, SelectInput, TextareaInput, PhoneInput } from '../components/forms'
import { CASE_STUDIES } from '../data/caseStudies'

const STEPS = [
  {
    title: 'Capture',
    body: 'Flexible capture solutions for every production scale. Mobile cameras, automated cameras, professional multi-camera setups and up to 15 simultaneous angles.',
    image: '/play/step-capture.png',
  },
  {
    title: 'Produce',
    body: 'Turn live feeds into professional broadcasts through SportVot Cloud Studio, with remote production, live graphics, scoring, commentary and automated workflows.',
    image: '/play/step-produce.png',
  },
  {
    title: 'Distribute',
    body: 'Deliver live and on-demand coverage across OTT platforms, connected TV apps, satellite television, broadcasters, social channels and owned digital destinations.',
    image: '/play/step-distribute.png',
  },
  {
    title: 'Analyze',
    body: 'Turn every game into actionable insights with detailed player and team performance analytics, video-supported analysis and sponsor advertising reports.',
    image: '/play/step-analyze.png',
  },
]

const CLOUD_STUDIO_FEATURES = [
  { icon: <Aperture size={26} weight="bold" />, image: '/play/cloud-multi-angle.gif', title: 'Multi-Camera Production', body: 'Combine automated and professional camera feeds, with live switching between multiple angles.' },
  { icon: <ChartBar size={26} weight="bold" />, image: '/play/cloud-live-scoring.gif', title: 'Live Scoring & Stats', body: 'Integrate real-time scores, match statistics and player data directly into the broadcast.' },
  { icon: <Sparkle size={26} weight="bold" />, image: '/play/cloud-animated-graphics.gif', title: 'Animated Graphics', body: 'Customise scoreboards, overlays and on-screen graphics to match your competition’s identity.' },
  { icon: <Microphone size={26} weight="bold" />, image: '/play/cloud-remote-commentary.gif', title: 'Remote Commentary', body: 'Add live commentary in multiple languages, with commentators operating from different locations.' },
  { icon: <Lightning size={26} weight="bold" />, image: '/play/cloud-auto-highlights.gif', title: 'AI Auto Highlights', body: 'Automatically generate clips of key match moments for faster sharing and distribution.' },
  { icon: <Handshake size={26} weight="bold" />, image: '/play/cloud-ad-sponsor.gif', title: 'Ad & Sponsor Integration', body: 'Integrate sponsor branding, advertising cues and commercial inventory into the live feed.' },
  { icon: <Gauge size={26} weight="bold" />, image: '/play/cloud-ultra-low-latency.gif', title: 'Ultra-Low Latency', body: 'Deliver live coverage with minimal delay through optimised streaming workflows.' },
  { icon: <ArrowsClockwise size={26} weight="bold" />, image: '/play/cloud-multi-angle-replay.gif', title: 'Instant Multi-Angle Replay', body: 'Review and replay key moments from available camera angles during live production.' },
]

const CAMERAS = [
  { image: '/play/camera-automated.jpg', title: 'Automated Cameras', body: 'Hands-free coverage that tracks the action across the field — no cameraperson required.' },
  { image: '/play/camera-mobile.jpg', title: 'Mobile Cameras', body: 'Quick setup and streaming from a phone — live in minutes, anywhere there’s a connection.' },
  { image: '/play/camera-video.jpg', title: 'Video Cameras', body: 'Professional-grade broadcasting for federations and leagues that need the highest production value.' },
]

// Images are placeholder line-art graphics until real SportVot footage/GIFs are supplied.
// DRS, Virtual Advertising and Ball Tracking descriptions are carried over from the previous build
// and still need sign-off against actual deliverables.
const ADVANCED_FEATURES = [
  { image: '/play/advanced-drs.gif', title: 'DRS & Ball Review', body: 'Multi-angle review tooling for grassroots and semi-pro tournaments previously priced out of DRS.' },
  { image: '/play/advanced-virtual-ads.gif', title: 'Virtual Advertising', body: 'Insert sponsor boards and pitch-side branding digitally — visible only on the stream.' },
  { image: '/play/advanced-ball-tracking.gif', title: 'Multi-Sport Ball Tracking', body: 'Ball tracking tuned per sport — cricket, football, padel and more — feeding stats and replay in real time.' },
  { image: '/play/advanced-player-tracking.gif', title: 'Player Tracking', body: 'Track player movement, distance covered and positioning to generate detailed performance insights.' },
  { image: '/play/advanced-analytics.gif', title: 'Performance Analytics', body: 'Access detailed player, team and match-level insights, supported by performance data and corresponding video.' },
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

/** Horizontal four-stage workflow: stage tabs on top, one shared visual/text panel below. */
function Workflow() {
  const [active, setActive] = useState(0)
  const step = STEPS[active]
  return (
    <div>
      <div role="tablist" aria-label="Production workflow" className="grid grid-cols-4 gap-3 max-[700px]:grid-cols-2">
        {STEPS.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            id={`step-tab-${i}`}
            aria-selected={i === active}
            aria-controls="step-panel"
            onClick={() => setActive(i)}
            className={cn(
              'cursor-pointer rounded-sv-lg border p-5 text-left transition-colors duration-200',
              i === active ? 'border-sv-primary-border bg-sv-primary-dim' : 'border-sv-border bg-sv-surface hover:border-sv-border-strong',
            )}
          >
            <span className="font-display text-xs font-extrabold tracking-[0.14em] text-sv-primary-light">STEP {String(i + 1).padStart(2, '0')}</span>
            <span className="mt-1 block font-display text-xl font-extrabold text-sv-white">{s.title}</span>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="step-panel"
        aria-labelledby={`step-tab-${active}`}
        className="mt-6 grid grid-cols-[1.15fr_1fr] items-center gap-10 rounded-sv-xl border border-sv-border bg-sv-surface p-6 max-[900px]:grid-cols-1 max-[900px]:gap-6"
      >
        <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-sv-lg bg-sv-black-soft p-3">
          <img key={step.image} src={step.image} alt={step.title} className="h-full w-full object-contain" />
        </div>
        <div className="pr-4 max-[900px]:pr-0">
          <h3 className="font-display text-[clamp(28px,3.4vw,40px)] font-black text-sv-white">{step.title}</h3>
          <p className="mt-4 text-[17px] text-sv-text-muted">{step.body}</p>
        </div>
      </div>
    </div>
  )
}

export default function LiveProduction() {
  return (
    <>
      <section
        className="relative overflow-hidden border-b border-sv-border pt-[140px] pb-20 max-[900px]:pt-[110px] max-[900px]:pb-14"
        style={{ background: 'radial-gradient(90% 90% at 15% 0%, rgba(29,28,140,.28), transparent 50%)' }}
      >
        <Container>
          <div className="grid grid-cols-[1.05fr_1fr] items-center gap-14 max-[1000px]:grid-cols-1">
            <div>
              <Reveal>
                <Eyebrow>SportVot Live Production</Eyebrow>
              </Reveal>
              <Reveal as="p" className="mt-5 max-w-[560px] text-[19px] text-sv-text-muted">
                For too long, professional sports broadcasting has been limited by the cost and complexity of traditional production.
              </Reveal>
              <Reveal as="h1" className="mt-5 text-balance font-display text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-sv-white">
                SportVot Changes That.
              </Reveal>
              <Reveal as="p" className="mt-5 max-w-[560px] text-[19px] text-sv-white/85">
                Scalable live production, powered by cloud technology and built for competitions of every size.
              </Reveal>
              <Reveal className="mt-8 flex flex-wrap gap-4">
                <Btn to="#proposal" variant="primary">
                  Get a Proposal
                </Btn>
                <Btn to="#how-it-works" variant="outline">
                  See How It Works
                </Btn>
              </Reveal>
            </div>

            <Reveal scale className="relative aspect-[1/0.72] w-full">
              {[
                { src: '/play/step-produce.png', label: 'Cloud Production', cls: 'left-[8%] right-0 top-0', ratio: 'aspect-[1597/891]' },
                { src: '/play/step-capture.png', label: 'Capture', cls: 'bottom-0 left-0 w-[46%]', ratio: 'aspect-[400/215]' },
                { src: '/play/step-distribute.png', label: 'Broadcast Output', cls: 'bottom-[2%] right-0 w-[44%]', ratio: 'aspect-[400/215]' },
              ].map((c) => (
                <img key={c.label} src={c.src} alt={c.label} className={cn('absolute block object-contain', c.cls, c.ratio)} />
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <Section dark id="how-it-works">
        <Container>
          <SectionHead eyebrow="How It Works" center className="mx-auto mb-12">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Four Steps. One Platform.</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">From capture to insights, one connected production workflow.</p>
          </SectionHead>
          <Workflow />
        </Container>
      </Section>

      <Section id="cloud-studio">
        <Container>
          <SectionHead center className="mx-auto">
            <h2 className="text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">SportVot Cloud Studio</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">Professional live production, managed remotely through one integrated cloud studio.</p>
          </SectionHead>
          <RevealGroup className="mt-14 grid grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1">
            {CLOUD_STUDIO_FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHead eyebrow="Camera Explorer" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Capture with whatever's on hand.</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">More camera options are added regularly — this is where we'll keep listing them.</p>
          </SectionHead>
          <RevealGroup className="mt-12 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {CAMERAS.map((c) => (
              <MediaCard key={c.title} {...c} cta="Get a Quote" ctaTo="#proposal" />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead center className="mx-auto">
            <h2 className="text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Advanced Production Features</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">Advanced technology for more immersive, intelligent sports coverage.</p>
          </SectionHead>
          <RevealGroup className="mt-14 grid grid-cols-6 gap-6 max-[900px]:grid-cols-1">
            {ADVANCED_FEATURES.map((f, i) => (
              <div key={f.title} className={cn(i < 3 ? 'col-span-2' : 'col-span-3', 'max-[900px]:col-span-1')}>
                <SpecCard {...f} />
              </div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section dark className="bg-[radial-gradient(80%_60%_at_50%_0%,rgba(29,28,140,.25),transparent)]">
        <Container>
          <SectionHead eyebrow="Trusted Globally" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Who&rsquo;s already using SportVot.</h2>
          </SectionHead>
          <RevealGroup className="mt-14 grid grid-cols-2 items-stretch gap-6 max-[800px]:grid-cols-1">
            {CASE_STUDIES.slice(0, 4).map((c) => (
              <CaseCard key={c.thumb} {...c} large meta="Client Case Study" readLabel="Read case study →" href="/case-studies" />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section id="proposal">
        <Container>
          <TwoCol>
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-sv-primary-light">Get a Proposal</p>
              <h2 className="mt-4 text-balance font-display text-[clamp(28px,4.5vw,42px)] font-extrabold text-sv-white">Let&rsquo;s Build Your Next Sports Broadcast.</h2>
              <p className="mt-4 text-[17px] text-sv-text-muted">
                Every event is different. Tell us what you&rsquo;re planning, and we&rsquo;ll build a production proposal around your requirements within 24 hours.
              </p>
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
                  <Field label="Phone Number (optional)">
                    <PhoneInput placeholder="Phone number" />
                  </Field>
                </FormGrid>
                <Field label="Email Address *">
                  <TextInput type="email" required placeholder="you@organisation.com" />
                </Field>
                <Field label="Services">
                  <SelectInput defaultValue="">
                    <option value="">Select a service</option>
                    {SERVICES.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </SelectInput>
                </Field>
                <Field label="Message">
                  <TextareaInput placeholder="Sport, number of matches, location, dates — anything that helps us understand your event." />
                </Field>
                <p className="mb-4 text-xs text-sv-text-faint">By submitting you agree to SportVot&rsquo;s Privacy Policy.</p>
              </DemoForm>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>
    </>
  )
}
