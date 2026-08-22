import { useMemo, useState } from 'react'
import { Buildings } from '@phosphor-icons/react'
import { Container, Section, SectionHead, Eyebrow } from '../components/ui'
import { Reveal, RevealGroup } from '../components/Reveal'
import { ServiceCard, TestimonialCard, VenueCard, BlogCard } from '../components/cards'
import { StatsGrid } from '../components/StatCounter'
import { cn } from '../lib/utils'
import Marquee from '../components/Marquee'
import PlayHero from '../components/PlayHero'
import { DemoForm, Field, TextInput, SelectInput } from '../components/forms'
import { BLOG_POSTS } from '../data/blog'

const serviceCorporateEvents = '/play/service-corporate-events.png'
const serviceProductLaunch = '/play/service-product-launch.png'
const serviceSportsTournament = '/play/service-sports-tournament.png'
const serviceTeamOffsite = '/play/service-team-offsite.png'
const serviceThematicDinner = '/play/service-thematic-dinner.png'
const serviceBirthdayParty = '/play/service-birthday-party.jpg'

const STATS = [
  { target: 300, suffix: '+', label: 'Events Executed' },
  { target: 100, suffix: '+', label: 'Corporate Clients' },
  { target: 5, suffix: '+', label: 'Years Experience' },
  { target: 24, suffix: '/7', label: 'Dedicated Support' },
]

const HERO_MARQUEE = [
  'Corporate Events',
  '300+ Events Executed',
  'Live Streaming',
  'Sports Tournaments',
  '100+ Happy Clients',
  'Team Building',
  'Thematic Galas',
  '24/7 Dedicated Support',
  'Production & AV',
  'Celebrity Coordination',
]

const SERVICES = [
  {
    image: serviceCorporateEvents,
    title: 'Corporate Events',
    body: 'Rewards & Recognition ceremonies, leadership summits, annual galas, and award nights — executed with boardroom-level precision.',
    tags: ['Rewards', 'Recognition', 'Venue', 'Catering'],
  },
  {
    image: serviceProductLaunch,
    title: 'Product Launch',
    body: 'High-impact brand launches with dramatic staging, live demos, press coordination, and curated experiences.',
    tags: ['Staging', 'Media', 'Celebrity', 'Streaming'],
  },
  {
    image: serviceSportsTournament,
    title: 'Sports Tournament',
    body: 'Cricket, football, and multi-sport tournaments with live scoring, streaming, umpires, and branded production.',
    tags: ['Scorers', 'Streaming', 'Merchandise', 'Umpires'],
  },
  {
    image: serviceTeamOffsite,
    title: 'Team Offsite',
    body: 'Curated offsite experiences with team-building activities, adventure sports, and memorable group outings.',
    tags: ['Team Building', 'Adventure', 'Logistics', 'AV'],
  },
  {
    image: serviceThematicDinner,
    title: 'Thematic Team Dinner',
    body: 'Immersive Bollywood nights, enchanted dinners, and luxury galas with bespoke decor and live entertainment.',
    tags: ['Decor', 'DJ / Music', 'Anchor', 'Photography'],
  },
  {
    image: serviceBirthdayParty,
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

type Venue = { name: string; city: string; type: string; capacity: string }

const VENUES: Venue[] = [
  { name: 'SkyLine Banquets', city: 'Mumbai', type: 'Banquet Hall', capacity: '200–500 guests' },
  { name: 'GreenTurf Sports Arena', city: 'Mumbai', type: 'Sports Turf', capacity: 'Up to 22 players' },
  { name: 'The Grand Convention Centre', city: 'Delhi NCR', type: 'Convention Center', capacity: '500–1000 guests' },
  { name: 'Emerald Golf Resort', city: 'Delhi NCR', type: 'Resort', capacity: '100–300 guests' },
  { name: 'Horizon Rooftop Lounge', city: 'Bangalore', type: 'Rooftop Venue', capacity: '80–150 guests' },
  { name: 'Phoenix Sports Complex', city: 'Bangalore', type: 'Multi-Sport Stadium', capacity: 'Up to 5,000 spectators' },
  { name: 'Riverside Retreat', city: 'Pune', type: 'Resort', capacity: '150–400 guests' },
  { name: 'Novotel Convention Hall', city: 'Hyderabad', type: 'Banquet Hall', capacity: '300–600 guests' },
]

const CITIES = ['All Cities', ...Array.from(new Set(VENUES.map((v) => v.city)))]

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
  const [city, setCity] = useState('All Cities')
  const venues = useMemo(() => (city === 'All Cities' ? VENUES : VENUES.filter((v) => v.city === city)), [city])

  return (
    <>
      <PlayHero />
      <Marquee items={HERO_MARQUEE} dot />

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
          <Reveal className="mt-14">
            <StatsGrid stats={STATS} />
          </Reveal>
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
          <SectionHead eyebrow="Venues" center className="mx-auto mb-10">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Find the right venue for your event.</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">
              Sample listings shown below — our full venue directory is coming soon.
            </p>
          </SectionHead>
          <div className="flex flex-wrap justify-center gap-3">
            {CITIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCity(c)}
                className={cn(
                  'rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.04em] transition-colors duration-200',
                  city === c
                    ? 'border-sv-primary bg-sv-primary text-white'
                    : 'border-sv-border-strong text-sv-text-muted hover:border-sv-primary-light hover:text-sv-primary-light',
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <RevealGroup className="mt-10 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {venues.map((v) => (
              <VenueCard key={v.name} icon={<Buildings size={40} weight="duotone" />} name={v.name} city={v.city} type={v.type} capacity={v.capacity} />
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

      <Section dark id="blog">
        <Container>
          <SectionHead eyebrow="Insights" center className="mx-auto mb-14">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Our Blog</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">
              Expert perspectives on corporate events, team building, and employee engagement.
            </p>
          </SectionHead>
          <RevealGroup className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} image={post.image} title={post.title} body={post.excerpt} to={`/play/blog/${post.slug}`} />
            ))}
          </RevealGroup>
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
