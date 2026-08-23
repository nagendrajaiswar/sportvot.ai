import {
  Aperture,
  ChartBar,
  Sparkle,
  Microphone,
  Lightning,
  Handshake,
  Gauge,
  ArrowsClockwise,
  Eye,
  Megaphone,
  Target,
  PersonSimpleRun,
  ChartLineUp,
} from '@phosphor-icons/react'
import { Container, Section, SectionHead, PageHero, TwoCol, TrustList } from '../components/ui'
import { Reveal, RevealGroup } from '../components/Reveal'
import { FeatureCard, CaseCard, MediaCard } from '../components/cards'
import { cn } from '../lib/utils'
import { DemoForm, Field, FormGrid, TextInput, SelectInput, TextareaInput } from '../components/forms'
import { CASE_STUDIES } from '../data/caseStudies'

type Step = { title: string; intro: string; items: string[]; image: string }

const STEPS: Step[] = [
  {
    title: 'Capture',
    intro: 'Compatible with all types of video capturing devices:',
    items: ['Mobile phone', 'Professional video camera', 'Automated smart camera', 'Up to 15 angles simultaneously'],
    image: '/play/step-capture.png',
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
    image: '/play/step-produce.png',
  },
  {
    title: 'Distribute',
    intro: 'One stream. Every platform. Your audience, wherever they are:',
    items: ['SportVot OTT', 'YouTube & Facebook', 'Your own website or app', 'All simultaneously'],
    image: '/play/step-distribute.png',
  },
  {
    title: 'Analyze',
    intro: 'Every match becomes data. Understand performance, reach, and impact:',
    items: ['Player & team performance analytics', 'Viewership & engagement dashboards', 'Season-long historical data', 'Exportable reports for federations & sponsors'],
    image: '/play/step-analyze.png',
  },
]

const CLOUD_STUDIO_FEATURES = [
  { icon: <Aperture size={26} weight="bold" />, image: '/play/cloud-multi-angle.gif', statLine: 'Up to 15 camera angles', title: 'Multi-Angle Streaming', body: 'Mix automated and video cameras in a single production. Switch between angles live.' },
  { icon: <ChartBar size={26} weight="bold" />, image: '/play/cloud-live-scoring.gif', statLine: '52+ sports supported', title: 'Live Scoring & Stats', body: 'Real-time detailed scoreboards and player data, on screen.' },
  { icon: <Sparkle size={26} weight="bold" />, image: '/play/cloud-animated-graphics.gif', statLine: '100+ customisable overlays', title: 'Animated Graphics', body: 'Your brand. Your colours. Broadcast-quality visuals.' },
  { icon: <Microphone size={26} weight="bold" />, image: '/play/cloud-remote-commentary.gif', statLine: 'Any language. Any location.', title: 'Remote Commentary', body: 'Commentators join from anywhere, mixed live into your feed.' },
  { icon: <Lightning size={26} weight="bold" />, image: '/play/cloud-auto-highlights.gif', statLine: 'Ready within 5 seconds', title: 'AI Auto Highlights', body: 'Every key moment — clipped and shareable before the crowd settles.' },
  { icon: <Handshake size={26} weight="bold" />, image: '/play/cloud-ad-sponsor.gif', statLine: 'Built into every broadcast', title: 'Ad & Sponsor Integration', body: 'Pre-roll, mid-roll and post-roll ads, overlays, and virtual on-field advertising.' },
  { icon: <Gauge size={26} weight="bold" />, image: '/play/cloud-ultra-low-latency.svg', statLine: 'Less than 5 seconds latency', title: 'Ultra-Low Latency', body: 'Your audience watches as it happens — not 30 seconds behind.' },
  { icon: <ArrowsClockwise size={26} weight="bold" />, image: '/play/cloud-multi-angle-replay.svg', statLine: 'Any angle. Any moment.', title: 'Instant Multi-Angle Replay', body: 'Replay key moments from every active camera — live.' },
]

const CAMERAS = [
  { image: '/play/camera-automated.jpg', title: 'Automated Cameras', body: 'Hands-free coverage that tracks the action across the field — no cameraperson required.' },
  { image: '/play/camera-mobile.jpg', title: 'Mobile Cameras', body: 'Quick setup and streaming from a phone — live in minutes, anywhere there’s a connection.' },
  { image: '/play/camera-video.jpg', title: 'Video Cameras', body: 'Professional-grade broadcasting for federations and leagues that need the highest production value.' },
]

const ADVANCED_FEATURES = [
  { icon: <Eye size={26} weight="bold" />, statLine: 'DRS & Ball Review', title: 'Decision review, made accessible', body: 'Multi-angle review tooling for grassroots and semi-pro tournaments previously priced out of DRS.' },
  { icon: <Megaphone size={26} weight="bold" />, statLine: 'Virtual Advertising', title: 'On-field ads, broadcast-only', body: 'Insert sponsor boards and pitch-side branding digitally — visible only on the stream.' },
  { icon: <Target size={26} weight="bold" />, statLine: 'Multi-sport Ball Tracking', title: 'Follow the play, automatically', body: 'Ball-tracking tuned per sport — cricket, football, padel and more — feeding stats and replay in real time.' },
  { icon: <PersonSimpleRun size={26} weight="bold" />, statLine: 'Player Tracking', title: 'Every player, every movement', body: 'Individual player tracking for heatmaps, distance covered, and performance data.' },
  { icon: <ChartLineUp size={26} weight="bold" />, statLine: 'Analytics', title: 'Numbers that back the story', body: 'Match and season-level analytics for coaches, federations, and broadcasters alike.' },
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

export default function LiveProduction() {
  return (
    <>
      <PageHero
        eyebrow="SportVot Live Production"
        title="SportVot Changes That."
        subtitle="99% of sports have no form of broadcast coverage — not because the games aren't good enough, but because broadcast was never built for them."
      />

      <Section dark>
        <Container>
          <SectionHead eyebrow="How It Works" center className="mx-auto mb-20">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Live in 5 minutes. From any camera.</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">Four steps. One platform. A professional broadcast, every time.</p>
          </SectionHead>

          <div className="flex flex-col gap-20">
            {STEPS.map((step, i) => (
              <TwoCol key={step.title} className="gap-16">
                <Reveal
                  scale
                  className={cn(
                    'flex aspect-4/3 items-center justify-center overflow-hidden rounded-sv-xl border border-sv-border bg-sv-surface p-4',
                    i % 2 === 1 && 'order-2',
                  )}
                >
                  <img src={step.image} alt={step.title} className="h-full w-full object-contain" />
                </Reveal>
                <Reveal>
                  <span className="font-display text-[13px] font-extrabold tracking-[0.14em] text-sv-primary-light">STEP {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-display text-[clamp(30px,4vw,44px)] font-black text-sv-white">{step.title}</h3>
                  <p className="mt-3 text-[17px] text-sv-text-muted">{step.intro}</p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {step.items.map((item) => (
                      <li key={item} className="relative pl-5 text-[15px] text-sv-text-muted before:absolute before:left-0 before:text-sv-primary-light before:content-['—']">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </TwoCol>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="cloud-studio">
        <Container>
          <SectionHead eyebrow="SportVot Cloud Studio" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Everything your broadcast needs.</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">No add-ons. No extra hires. No compromise.</p>
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
          <SectionHead eyebrow="Advanced Production Features" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">For teams who want the specs.</h2>
          </SectionHead>
          <RevealGroup className="mt-14 grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
            {ADVANCED_FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHead eyebrow="Trusted Globally" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Who's already using SportVot.</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">From district leagues to international federations — across 30+ countries.</p>
          </SectionHead>
          <div className="-mx-6 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 pt-6 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CASE_STUDIES.map((c) => (
              <div key={c.thumb} className="w-[300px] shrink-0 snap-start">
                <CaseCard {...c} meta="Client Case Study" readLabel="Read case study →" href="/case-studies" />
              </div>
            ))}
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
