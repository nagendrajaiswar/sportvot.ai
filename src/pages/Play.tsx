import { Trophy, VideoCamera, Handshake, ChartBar, MapPin, Buildings } from '@phosphor-icons/react'
import { Container, Section, Eyebrow, TwoCol, ColMedia, CTAStrip, ListCheck } from '../components/ui'
import { Reveal, RevealGroup } from '../components/Reveal'
import { PlayCard } from '../components/cards'
import Btn from '../components/Btn'

const FEATURES = [
  { icon: <Trophy size={26} weight="bold" />, title: 'Play With Passion', body: 'Experience thrilling gameplay on premium turfs designed for maximum fun.' },
  { icon: <VideoCamera size={26} weight="bold" />, title: 'Stream Every Moment', body: 'Watch yourself in action — get your games live-streamed and recorded for future playback.' },
  { icon: <Handshake size={26} weight="bold" />, title: 'Play Together, Play Smart', body: 'Join a community of fellow players, connect, and enjoy the game in good company.' },
  { icon: <ChartBar size={26} weight="bold" />, title: 'More Than Just Play', body: 'Connect, track, and share every match in a fun, interactive way with personalised player cards.' },
  { icon: <MapPin size={26} weight="bold" />, title: 'Mumbai & Delhi NCR', body: 'Streaming-enabled turfs across both cities, with more markets opening soon.' },
  { icon: <Buildings size={26} weight="bold" />, title: 'Corporate Events', body: 'Fully managed corporate sports days — book the venue, we handle production and highlights.' },
]

export default function Play() {
  return (
    <>
      <section
        className="border-b border-sv-border pt-[180px] pb-12"
        style={{ background: 'radial-gradient(90% 90% at 85% 0%, rgba(120,119,224,.24), transparent 50%)' }}
      >
        <Container>
          <Reveal>
            <Eyebrow>SportVot Play — The Future of Casual Sports</Eyebrow>
          </Reveal>
          <Reveal as="h1" className="mt-4 max-w-[900px] font-display text-[clamp(36px,6.5vw,68px)] font-extrabold tracking-[-0.02em] text-sv-white">
            Play with passion. Get it live-streamed.
          </Reveal>
          <Reveal as="p" className="mt-4 max-w-[640px] text-[19px] text-sv-text-muted">
            Book a streaming-enabled turf in Mumbai or Delhi NCR. Join an open match, or host a fully managed corporate sports event. Every game is
            live-streamed. Every player walks away with a highlight reel.
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap gap-4">
            <Btn to="/contact" variant="primary">
              Book a Turf
            </Btn>
            <Btn to="/live-tv" variant="outline">
              ▶ Watch Play Highlights
            </Btn>
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <RevealGroup className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {FEATURES.map((f) => (
              <PlayCard key={f.title} {...f} />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <TwoCol>
            <ColMedia reverse>
              Your match.
              <br />
              Your highlight reel.
            </ColMedia>
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-sv-primary-light">How SportVot Play Works</p>
              <h2 className="mt-4 font-display text-[clamp(28px,4.5vw,40px)] font-extrabold text-sv-white">From kickoff to highlight reel, in one booking.</h2>
              <ListCheck
                items={[
                  'Book a streaming-enabled turf online in under two minutes',
                  "Every match is captured with SportVot's automated multi-camera rig",
                  'Walk away with a personalised player card and match highlight reel',
                  'Share instantly to social — no editing required',
                ]}
              />
              <div className="mt-8">
                <Btn to="/contact" variant="primary">
                  Book Your Slot →
                </Btn>
              </div>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTAStrip
            eyebrow="Corporate & Community Events"
            title="Hosting a tournament, office league, or fan day?"
            body="We manage the turf, the production, and the highlight delivery — you just show up and play."
          >
            <Btn to="/contact" variant="primary">
              Talk to Our Events Team
            </Btn>
          </CTAStrip>
        </Container>
      </Section>
    </>
  )
}
