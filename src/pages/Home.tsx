import { useState } from 'react'
import HomeHero from '../components/HomeHero'
import Marquee from '../components/Marquee'
import { Container, Section, SectionHead, Eyebrow } from '../components/ui'
import { RevealGroup, Reveal } from '../components/Reveal'
import { ForkCard, TestimonialCard } from '../components/cards'
import { StatsGrid } from '../components/StatCounter'
import { DemoForm, Field, FormGrid, TextInput, SelectInput, TextareaInput, PhoneInput } from '../components/forms'
import { CLIENT_LOGOS } from '../data/clients'

const STATS = [
  { target: 650000, suffix: '+', label: 'Games Produced' },
  { target: 52, suffix: '+', label: 'Sports' },
  { target: 32, suffix: '+', label: 'Countries Covered' },
  { target: 80, suffix: '+', label: 'Federations & Associations' },
  { target: 100, suffix: 'Mn+', label: 'Digital Viewership' },
]

// Real client quotes, sourced from playevents.sportvot.com. The brief calls for 3 approved
// premium-client testimonials — add the third here once the quote and logo are supplied.
const TESTIMONIALS = [
  {
    quote: 'We thank SportVot for their support in partnering with us for our Cricket event. Our team enjoyed the spirit of the game. The event was well planned.',
    initials: 'SM',
    logo: '/play/nuvama.jpeg',
    name: 'Shruti Mody',
    role: 'Nuvama Asset Management',
  },
  {
    quote: "Thank you @Teamsportvot. It was a wonderful execution. The food was also good. Overall an enriching experience for everyone who participated in today's event.",
    initials: 'VD',
    logo: '/play/BSE.png',
    name: 'Vaibhav Dave',
    role: 'Bombay Stock Exchange',
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

const EVENT_TYPES = [
  'Corporate Events',
  'Product Launch',
  'Sports Tournament',
  'Team Offsite',
  'Thematic Team Dinner',
  'Themed Birthday Party',
]

const TOPICS = [
  { value: 'production', label: 'Live Sports Production & Broadcasting' },
  { value: 'events', label: 'Corporate Events & Sports Tournaments' },
  { value: 'general', label: 'General Enquiry / Partnership' },
]

export default function Home() {
  const [topic, setTopic] = useState('')

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
            <RevealGroup className="mx-auto mt-8 grid max-w-[1000px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
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
              <DemoForm submitLabel="Send Enquiry →">
                <Field label="What can we help you with? *">
                  <SelectInput required value={topic} onChange={(e) => setTopic(e.target.value)}>
                    <option value="" disabled>
                      Select an option
                    </option>
                    {TOPICS.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </SelectInput>
                </Field>
                <FormGrid>
                  <Field label="Name *">
                    <TextInput type="text" required placeholder="Your full name" />
                  </Field>
                  <Field label="Email ID *">
                    <TextInput type="email" required placeholder="you@organisation.com" />
                  </Field>
                  <Field label="Phone Number">
                    <PhoneInput placeholder="Phone number" />
                  </Field>
                  <Field label="Location *">
                    <TextInput type="text" required placeholder="City, Country" />
                  </Field>

                  {topic === 'production' && (
                    <>
                      <Field label="Sport *">
                        <SelectInput required defaultValue="">
                          <option value="" disabled>
                            Select a sport
                          </option>
                          {SPORTS.map((x) => (
                            <option key={x}>{x}</option>
                          ))}
                        </SelectInput>
                      </Field>
                      <Field label="Production / Solution Interest *">
                        <SelectInput required defaultValue="">
                          <option value="" disabled>
                            Select an option
                          </option>
                          {SOLUTIONS.map((x) => (
                            <option key={x}>{x}</option>
                          ))}
                        </SelectInput>
                      </Field>
                    </>
                  )}
                  {topic === 'events' && (
                    <>
                      <Field label="Event Type *">
                        <SelectInput required defaultValue="">
                          <option value="" disabled>
                            Select an event type
                          </option>
                          {EVENT_TYPES.map((x) => (
                            <option key={x}>{x}</option>
                          ))}
                        </SelectInput>
                      </Field>
                      <Field label="Company Name">
                        <TextInput type="text" placeholder="Your company" />
                      </Field>
                    </>
                  )}
                  {topic === 'general' && (
                    <Field label="Organisation" full>
                      <TextInput type="text" placeholder="Your organisation" />
                    </Field>
                  )}

                  <Field label="Message" full>
                    <TextareaInput placeholder="Tell us a little about what you have in mind..." />
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
