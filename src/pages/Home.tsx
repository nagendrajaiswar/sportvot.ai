import HomeHero from '../components/HomeHero'
import Marquee from '../components/Marquee'
import { Container, Section, SectionHead, Eyebrow } from '../components/ui'
import { RevealGroup, Reveal } from '../components/Reveal'
import { ForkCard, TestimonialCard } from '../components/cards'
import { StatsGrid } from '../components/StatCounter'
import EnquiryForm from '../components/EnquiryForm'
import { CLIENT_LOGOS } from '../data/clients'

const STATS = [
  { target: 650000, suffix: '+', label: 'Games Produced' },
  { target: 52, suffix: '+', label: 'Sports' },
  { target: 32, suffix: '+', label: 'Countries Covered' },
  { target: 80, suffix: '+', label: 'Federations & Associations' },
  { target: 100, suffix: 'Mn+', label: 'Digital Viewership' },
]

// Approved testimonials from SportVot's premium clients (supplied 31 Oct 2026). No client logos were
// supplied yet, so the cards fall back to initials — pass a `logo` once they arrive.
const TESTIMONIALS = [
  {
    quote:
      'We chose SportVot because we wanted to significantly scale up the broadcast production of Table Tennis Australia events without increasing our production budget or compromising on quality. This is a tough brief, however the SportVot team didn’t just meet our expectations, they exceeded them. From seamlessly capturing and producing large amounts of live content and post game highlights, to managing the complexity of having multiple matches on air simultaneously, they were flawless. And so well priced! What impressed us most was how SportVot took care of everything behind the scenes—both in Australia and India. They gave us exactly what we needed to make sure our event broadcasts were delivered smoothly and looked professional to our growing audience.',
    initials: 'WE',
    name: 'Wade Edwards',
    role: 'Head of Commercial and Strategy, Table Tennis Australia',
  },
  {
    quote:
      'Working with SportVot has been a real eye-opener for us at Badminton Australia. We hadn’t really heard about remote broadcast production, or know how it worked. But the way the SportVot team can take a live camera feed from Australia, produce content in India, then deliver a live broadcast globally in seconds is genuinely impressive. As is the price! What stood out the most was their ability to handle real-time challenges. Having their team available in both Australia and India at any time of the day to deal with any last-minute issues made a world of difference. Everything flowed like clockwork, and we didn’t have to worry about a thing!',
    initials: 'TW',
    name: 'Tjitte (TJ) Weistra',
    role: 'Chief Executive Officer, Badminton Australia',
  },
  {
    quote:
      'To be honest, we didn’t know something like this could happen. We needed a production team that could deliver from multi courts, in different venues, in different states, all at the same time. And SportVot nailed it! They handled the entire process, from receiving camera feeds in Mumbai from Melbourne, Sydney and Brisbane, simultaneously producing 10 streams via 13 cameras and then delivering the live broadcast to the world. All within a matter of seconds! It’s amazing how smoothly they made this all work together. It’s not just the speed, it’s the whole package—from start to finish, they were on top of everything. We couldn’t have asked for a better team behind the scenes.',
    initials: 'RS',
    name: 'Ron Shell',
    role: 'Chief Executive Officer, National Pickleball League',
  },
]

export default function Home() {
  return (
    <>
      <HomeHero />
      <Marquee logos={CLIENT_LOGOS} label="Trusted by" />

      <Section>
        <Container>
          <SectionHead eyebrow="Ecosystem" center className="mx-auto mb-12">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Explore the SportVot Ecosystem</h2>
            <p className="mx-auto mt-4 max-w-[720px] text-center text-[19px] text-sv-text-muted">From professional sports production to smart playing experiences.</p>
          </SectionHead>
          <RevealGroup className="grid grid-cols-2 items-stretch gap-6 max-[900px]:grid-cols-1">
            <ForkCard
              to="/live-production"
              variant="blue"
              tag="SportVot Live Production"
              title="Live Sports Production & Broadcasting"
              body="Scalable remote live production, cloud workflows and multi-platform distribution for leagues, federations and sporting events worldwide."
              cta="Explore Live Production →"
            />
            <ForkCard
              to="/play"
              variant="green"
              tag="SportVot Play"
              title="Sports Events & Corporate Tournaments, Reimagined."
              body="Host corporate tournaments, team events and sporting experiences at our smart sports facilities, with game recordings, highlights and more built into the experience."
              cta="Explore SportVot Play →"
            />
          </RevealGroup>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHead eyebrow="Scale & Trust" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Built to Deliver. Proven at Scale.</h2>
          </SectionHead>
          <StatsGrid stats={STATS} className="mt-14" />

          <div className="mt-[88px]">
            <Reveal as="h3" className="text-center font-display text-[22px] font-bold text-sv-text-muted">
              What our clients say.
            </Reveal>
            <RevealGroup className="mx-auto mt-8 grid max-w-[1200px] grid-cols-3 items-stretch gap-6 max-[1000px]:grid-cols-1">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </RevealGroup>
          </div>
        </Container>
      </Section>

      <Section id="proposal">
        <Container>
          <Reveal
            scale
            className="relative overflow-hidden rounded-sv-xl border border-sv-border p-[72px] max-[900px]:p-9"
            style={{
              background:
                'radial-gradient(120% 140% at 20% 0%, rgba(29,28,140,.30), transparent 55%), radial-gradient(90% 90% at 85% 100%, rgba(120,119,224,.18), transparent 55%), var(--color-sv-black-soft)',
            }}
          >
            <div className="text-center">
              <Eyebrow center>Get in Touch</Eyebrow>
              <h2 className="mt-3 font-display text-[clamp(28px,4vw,46px)] font-extrabold text-sv-white">Have Something in Mind? Let&rsquo;s Talk.</h2>
              <p className="mx-auto mt-3 max-w-[760px] text-center text-sv-text-muted">
                From live sports production to tournaments and events, tell us what you need and we&rsquo;ll take it from there.
              </p>
              <p className="mx-auto mt-2 text-center text-sm font-bold text-sv-primary-light">Production proposals within 24 hours.</p>
            </div>
            <div className="mx-auto mt-10 max-w-[760px]">
              <EnquiryForm />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
