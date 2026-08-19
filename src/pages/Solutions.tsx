import { Camera, DeviceMobileCamera, VideoCamera } from '@phosphor-icons/react'
import { Container, Section, SectionHead, PageHero, CTAStrip } from '../components/ui'
import { RevealGroup } from '../components/Reveal'
import { PlayCard, CapCard, CapGrid } from '../components/cards'
import Btn from '../components/Btn'

const CAPTURE_OPTIONS = [
  {
    icon: <Camera size={26} weight="bold" />,
    title: 'Automated Cameras',
    body: 'Hands-free coverage that tracks the action across the field — no cameraperson required.',
  },
  {
    icon: <DeviceMobileCamera size={26} weight="bold" />,
    title: 'Mobile Cameras',
    body: 'Quick setup and streaming from a phone — live in minutes, anywhere there’s a connection.',
  },
  {
    icon: <VideoCamera size={26} weight="bold" />,
    title: 'Video Cameras',
    body: 'Professional-grade broadcasting for federations and leagues that need the highest production value.',
  },
]

const ENHANCE = [
  { title: 'Custom Highlights', body: 'Player, team, or full-tournament level highlight reels — cut and branded to spec.' },
  { title: 'Player Tagging', body: 'Every key moment tagged to the athlete who made it, ready for individual reels.' },
  { title: 'Social Optimisation', body: 'Reels, Shorts, and Stories formats, cut and captioned for every platform.' },
  { title: 'Branded Content', body: 'Sponsor-aligned edits that keep your partners visible in every clip.' },
]

const TECH_DETAIL = [
  { statLine: 'DRS & Ball Tracking', title: 'Decision review, made accessible', body: 'Multi-angle review tooling for grassroots and semi-pro tournaments previously priced out of DRS.' },
  { statLine: 'Virtual Advertising', title: 'On-field ads, broadcast-only', body: 'Insert sponsor boards and pitch-side branding digitally — visible only on the stream.' },
  { statLine: 'Custom Graphics', title: 'Your scoreboard, your brand', body: 'Fully theme-able overlays matched to your team, league, or federation identity.' },
  { statLine: 'Open API', title: 'Integrate with what you already run', body: 'Push scores, stats and stream metadata into your own website, app, or scoreboard hardware.' },
]

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions & Technical Detail"
        title="Broadcast infrastructure, built for every sport and scale."
        subtitle="DRS & ball tracking, virtual advertising, custom graphics specs, and API integrations — the full SportVot Cloud Studio stack."
      />

      <Section>
        <Container>
          <SectionHead eyebrow="Versatile Production Solutions" center className="mx-auto">
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Capture with whatever's on hand.</h2>
          </SectionHead>
          <RevealGroup className="mt-12 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {CAPTURE_OPTIONS.map((c) => (
              <PlayCard
                key={c.title}
                icon={c.icon}
                title={c.title}
                body={c.body}
                cta={
                  <Btn href="/for-organisations#proposal" variant="outline" size="sm">
                    Get a Quote
                  </Btn>
                }
              />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHead eyebrow="Enhance Your Pre-Captured Content" center className="mx-auto">
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Already have footage? We'll make it work harder.</h2>
          </SectionHead>
          <CapGrid>
            {ENHANCE.map((c) => (
              <CapCard key={c.title} {...c} />
            ))}
          </CapGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead eyebrow="Technical Detail" center className="mx-auto">
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">For teams who want the specs.</h2>
          </SectionHead>
          <CapGrid>
            {TECH_DETAIL.map((c) => (
              <CapCard key={c.title} {...c} />
            ))}
          </CapGrid>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <CTAStrip eyebrow="Talk to the team" title="Have a spec sheet to compare us against?" body="Send it over — most technical questions get a direct answer within one business day.">
            <Btn to="/for-organisations#proposal" variant="primary">
              Get a Proposal
            </Btn>
          </CTAStrip>
        </Container>
      </Section>
    </>
  )
}
