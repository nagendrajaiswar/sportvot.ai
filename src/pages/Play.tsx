import { Trophy, RocketLaunch, SoccerBall, Mountains, ForkKnife, Confetti, Phone } from '@phosphor-icons/react'
import { Container, Section, SectionHead, Eyebrow } from '../components/ui'
import { Reveal, RevealGroup } from '../components/Reveal'
import { ServiceCard, TestimonialCard } from '../components/cards'
import { StatsGrid } from '../components/StatCounter'
import Marquee from '../components/Marquee'
import Btn from '../components/Btn'
import { DemoForm, Field, TextInput, SelectInput } from '../components/forms'

const STATS = [
  { target: 300, suffix: '+', label: 'Events Executed' },
  { target: 100, suffix: '+', label: 'Corporate Clients' },
  { target: 5, suffix: '+', label: 'Years Experience' },
  { target: 24, suffix: '/7', label: 'Dedicated Support' },
]

const SERVICES = [
  {
    icon: <Trophy size={26} weight="bold" />,
    title: 'Corporate Events',
    body: 'Rewards & Recognition ceremonies, leadership summits, annual galas, and award nights — executed with boardroom-level precision.',
    tags: ['Rewards', 'Recognition', 'Venue', 'Catering'],
  },
  {
    icon: <RocketLaunch size={26} weight="bold" />,
    title: 'Product Launch',
    body: 'High-impact brand launches with dramatic staging, live demos, press coordination, and curated experiences.',
    tags: ['Staging', 'Media', 'Celebrity', 'Streaming'],
  },
  {
    icon: <SoccerBall size={26} weight="bold" />,
    title: 'Sports Tournament',
    body: 'Cricket, football, and multi-sport tournaments with live scoring, streaming, umpires, and branded production.',
    tags: ['Scorers', 'Streaming', 'Merchandise', 'Umpires'],
  },
  {
    icon: <Mountains size={26} weight="bold" />,
    title: 'Team Offsite',
    body: 'Curated offsite experiences with team-building activities, adventure sports, and memorable group outings.',
    tags: ['Team Building', 'Adventure', 'Logistics', 'AV'],
  },
  {
    icon: <ForkKnife size={26} weight="bold" />,
    title: 'Thematic Team Dinner',
    body: 'Immersive Bollywood nights, enchanted dinners, and luxury galas with bespoke decor and live entertainment.',
    tags: ['Decor', 'DJ / Music', 'Anchor', 'Photography'],
  },
  {
    icon: <Confetti size={26} weight="bold" />,
    title: 'Themed Birthday Party',
    body: 'A themed birthday party turns a simple space into an immersive experience where every detail comes together to create a truly special celebration.',
    tags: ['Decor', 'Cake', 'Entertainment', 'Photography'],
  },
]

const TESTIMONIAL = {
  quote: 'We thank SportVot for their support in partnering with us for our Cricket event. Our team enjoyed the spirit of the game. The event was well planned.',
  initials: 'SM',
  name: 'Shruti Mody',
  role: 'Nuvama Asset Management',
}

const CLIENTS = [
  'J.P. Morgan', 'Morgan Stanley', 'EY', 'Nuvama Asset Management', 'BSE', 'SBFC', 'Niva Bupa Health Insurance', 'Kalpataru', 'Sleek by Asian Paints',
]

const CATEGORIES = [
  'Corporate Events',
  'Product Launch',
  'Sports Tournament',
  'Team Offsite',
  'Thematic Team Dinner',
  'Themed Birthday Party',
  'Not sure — let\'s talk',
]

export default function Play() {
  return (
    <>
      <section
        className="border-b border-sv-border pt-[180px] pb-20"
        style={{ background: 'radial-gradient(90% 90% at 85% 0%, rgba(120,119,224,.24), transparent 50%)' }}
      >
        <Container>
          <Reveal>
            <Eyebrow>SportVot Play — Corporate & Sports Events</Eyebrow>
          </Reveal>
          <Reveal as="h1" className="mt-5 max-w-[1180px] text-balance font-display text-[clamp(36px,5.2vw,58px)] font-extrabold tracking-[-0.02em] text-sv-white">
            India's Leading Event Experts.
          </Reveal>
          <Reveal as="p" className="mt-5 max-w-[880px] text-[19px] text-sv-text-muted">
            From concept to curtain call — strategic planning, flawless production, live streaming, and end-to-end event management.
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap gap-4">
            <Btn to="#proposal" variant="primary">
              Book a Consultation
            </Btn>
            <Btn href="tel:+917738698820" variant="outline">
              <Phone size={16} weight="bold" /> Call Now
            </Btn>
          </Reveal>
          <Reveal className="mt-16">
            <StatsGrid stats={STATS} />
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHead eyebrow="Why Choose Us" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">
              We don't just plan events. We engineer memories.
            </h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">
              From concept to curtain call, every detail is precision-engineered to exceed expectations.
            </p>
          </SectionHead>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHead eyebrow="Our Services" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Every event type, handled with excellence.</h2>
          </SectionHead>
          <RevealGroup className="mt-14 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead eyebrow="Customer Reviews" center className="mx-auto mb-14">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">What our clients say.</h2>
          </SectionHead>
          <Reveal className="mx-auto max-w-[640px]">
            <TestimonialCard {...TESTIMONIAL} />
          </Reveal>
        </Container>
      </Section>

      <Marquee items={CLIENTS} label="Brands that trust us" />

      <Section id="proposal">
        <Container>
          <Reveal
            scale
            className="relative mx-auto max-w-[640px] overflow-hidden rounded-sv-xl border border-sv-border bg-sv-surface p-12 max-[900px]:p-6"
          >
            <div className="text-center">
              <Eyebrow center>Get in Touch</Eyebrow>
              <h2 className="mt-3 font-display text-[clamp(28px,4vw,40px)] font-extrabold text-sv-white">Let's Create Something Extraordinary</h2>
              <p className="mx-auto mt-3 max-w-[460px] text-sv-text-muted">
                From concept to curtain call, we handle everything with precision and passion. Let's make your next event unforgettable.
              </p>
            </div>
            <div className="mt-8">
              <DemoForm submitLabel="Book a Consultation">
                <Field label="Name *">
                  <TextInput type="text" required placeholder="Your full name" />
                </Field>
                <Field label="Phone Number *">
                  <TextInput type="tel" required placeholder="10-digit number" />
                </Field>
                <Field label="Company Name">
                  <TextInput type="text" placeholder="Your company" />
                </Field>
                <Field label="Category">
                  <SelectInput defaultValue="">
                    <option value="" disabled>
                      Select a category
                    </option>
                    {CATEGORIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </SelectInput>
                </Field>
              </DemoForm>
            </div>
            <p className="mt-4 text-center text-xs text-sv-text-faint">
              +91 77386 98820 · play@sportvot.com
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
