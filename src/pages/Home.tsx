import HomeHero from '../components/HomeHero'
import Marquee from '../components/Marquee'
import { Container, Section, SectionHead, CTAStrip } from '../components/ui'
import { RevealGroup, Reveal } from '../components/Reveal'
import { ForkCard, TestimonialCard } from '../components/cards'
import { StatsGrid } from '../components/StatCounter'
import { DemoForm, Field, FormGrid, TextInput, SelectInput, TextareaInput } from '../components/forms'

const MARQUEE_ITEMS = ['600,000+ Games Produced', '52+ Sports', '32+ Countries', '75+ Federations', '100Mn+ Digital Viewers']

const STATS = [
  { target: 600000, suffix: '+', label: 'Games Produced' },
  { target: 52, suffix: '+', label: 'Sports' },
  { target: 32, suffix: '+', label: 'Countries Covered' },
  { target: 75, suffix: '+', label: 'Federations & Associations' },
  { target: 100, suffix: 'Mn+', label: 'Digital Viewership' },
]

const TESTIMONIALS = [
  {
    quote: 'SportVot turned our weekend league into a broadcast product our sponsors actually wanted to pay for.',
    initials: 'AR',
    name: 'Anita Rao',
    role: 'Tournament Director, District Football League',
  },
  {
    quote: 'Live in under five minutes with a single mobile camera — our federation had never streamed a match before this.',
    initials: 'JM',
    name: 'James Mwangi',
    role: 'Secretary General, National Kabaddi Association',
  },
  {
    quote: 'The automated highlights alone changed how our academy recruits — every player now has a reel within minutes of full time.',
    initials: 'SP',
    name: 'Sana Pillai',
    role: 'Head Coach, Elite Cricket Academy',
  },
]

const SPORTS = [
  'Multi-sport', 'Football / Soccer', 'Cricket', 'Padel', 'Pickleball', 'Badminton', 'Tennis',
  'Table Tennis', 'Hockey', 'Rugby', 'Kabaddi', 'AFL', 'Baseball', 'Basketball', 'Netball',
]

const SOLUTIONS = [
  'SportVot End-to-End Live Sports Production Solution',
  'SportVot Automated Cameras',
  'SportVot Analytics',
  'SportVot Highlights',
  'SportVot OTT',
  "I don't know / Looking for something else",
]

export default function Home() {
  return (
    <>
      <HomeHero />
      <Marquee items={MARQUEE_ITEMS} />

      <Section>
        <Container>
          <SectionHead eyebrow="What Brings You Here?" center className="mx-auto mb-14">
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">
              Whether you run tournaments or want to play in one — SportVot has a world built for you.
            </h2>
          </SectionHead>
          <RevealGroup className="grid grid-cols-[1.1fr_.9fr] gap-6 max-[900px]:grid-cols-1">
            <ForkCard
              to="/for-organisations"
              variant="blue"
              tag="For Organisations"
              title="I want to stream and produce my sport."
              audience="Clubs · Academies · Leagues · Federations · Associations"
              body="Take your tournaments, matches, and leagues live, with multi-camera capture, broadcast-quality graphics, live scoring, advertisement cues, multi-lingual commentary, and automated highlights. No broadcast crew. No expensive hardware."
              cta="See how it works →"
            />
            <ForkCard
              to="/play"
              variant="green"
              tag="SportVot Play"
              title="I want to play, host an event — and get it live streamed."
              audience="Players · Teams · Corporate Events"
              body="Book a streaming-enabled turf in Mumbai or Delhi NCR. Every game is live-streamed. Every player walks away with a highlight reel."
              cta="Explore SportVot Play →"
            />
          </RevealGroup>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHead eyebrow="Scale & Trust" center className="mx-auto">
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">The numbers speak for themselves.</h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[19px] text-sv-text-muted">
              Trusted by clubs, federations, and leagues across 32+ countries, from grassroots tournaments to national championships.
            </p>
          </SectionHead>
          <StatsGrid stats={STATS} className="mt-14" />

          <div className="mt-[88px]">
            <Reveal as="h3" className="text-center font-display text-[22px] font-bold text-sv-text-muted">
              What our clients say.
            </Reveal>
            <RevealGroup className="mt-8 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </RevealGroup>
          </div>
        </Container>
      </Section>

      <Section id="proposal">
        <Container>
          <CTAStrip
            eyebrow="Get a Proposal"
            title="Ready to take your sport to the world?"
            body="Tell us about your tournament, league, or event and we'll put together a production proposal within 24 hours."
          />
          <Reveal className="relative z-2 mx-auto -mt-10 max-w-[840px]">
            <div className="rounded-sv-xl border border-sv-border bg-sv-surface p-12 max-[900px]:p-6">
              <DemoForm submitLabel="Get a Proposal">
                <FormGrid>
                  <Field label="Name *">
                    <TextInput type="text" required placeholder="Your full name" />
                  </Field>
                  <Field label="Phone Number *">
                    <TextInput type="tel" required placeholder="+1 555 000 0000" />
                  </Field>
                  <Field label="Email ID *">
                    <TextInput type="email" required placeholder="you@organisation.com" />
                  </Field>
                  <Field label="Location *">
                    <TextInput type="text" required placeholder="City, Country" />
                  </Field>
                  <Field label="Sport *">
                    <SelectInput required defaultValue="">
                      <option value="" disabled>
                        Select a sport
                      </option>
                      {SPORTS.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </SelectInput>
                  </Field>
                  <Field label="Production / Solution Interest *">
                    <SelectInput required defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      {SOLUTIONS.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </SelectInput>
                  </Field>
                  <Field label="Description" full>
                    <TextareaInput placeholder="Tell us about your event..." />
                  </Field>
                </FormGrid>
              </DemoForm>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
