import { Container, Section, SectionHead, Eyebrow } from '../components/ui'
import { Reveal, RevealGroup } from '../components/Reveal'
import { ServiceCard, TestimonialCard, VenueCard, BlogCard } from '../components/cards'
import { StatsGrid } from '../components/StatCounter'
import Marquee from '../components/Marquee'
import PlayHero from '../components/PlayHero'
import { DemoForm, Field, TextInput, SelectInput } from '../components/forms'
import { BLOG_POSTS } from '../data/blog'
import { CLIENT_LOGOS } from '../data/clients'

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

const TESTIMONIALS = [
  {
    quote: 'We thank SportVot for their support in partnering with us for our Cricket event. Our team enjoyed the spirit of the game. The event was well planned.',
    initials: 'SM',
    logo: '/play/nuvama.jpeg',
    name: 'Shruti Mody',
    role: 'Nuvama Asset Management',
  },
  {
    quote: 'Thank you @Teamsportvot. It was a wonderful execution. The food was also good. Overall an enriching experience for everyone who participated in today\'s event.',
    initials: 'VD',
    logo: '/play/BSE.png',
    name: 'Vaibhav Dave',
    role: 'Bombay Stock Exchange',
  },
]

// Venues as listed on the live sportvot.ai/play page (names, areas, categories and Google Maps links), with the
// photos supplied by SportVot in public/play/venues/.
const VENUES = [
  { image: '/play/venues/st-stanislaus-bandra.webp', name: 'SportVot x Astro Park - St Stanislaus', location: 'Bandra', tag: 'Multi-sports', mapUrl: 'https://maps.app.goo.gl/CH4Wq2TAppaRTzcV7' },
  { image: '/play/venues/raghuvanshi-mills.webp', name: 'SportVot x Astro Park - Raghuvanshi Mills', location: 'Lower Parel', tag: 'Multi-sports', mapUrl: 'https://maps.app.goo.gl/fr2LzSsayjCZ6KuZ7' },
  { image: '/play/venues/salvation-turf-dadar.webp', name: 'SportVot x Astro Park - Salvation Turf', location: 'Dadar', tag: 'Multi-sports', mapUrl: 'https://maps.app.goo.gl/kZKe165jpfgrWS6B7' },
  { image: '/play/venues/players-turf-marol.webp', name: 'SportVot x Players Turf Marol', location: 'Marol', tag: 'Multi-sports', mapUrl: 'https://maps.app.goo.gl/JV8LvKVbqPM8nMJD8?g_st=ac' },
  { image: '/play/venues/jb-metal-saki-naka.webp', name: 'SportVot x Jb metal Turf', location: 'Sakinaka', tag: 'Multi-sports', mapUrl: 'https://maps.app.goo.gl/8zE6UuwXADbp1XPg7?g_st=ac' },
  { image: '/play/venues/sagar-tech-turf-saki-naka.webp', name: 'SportVot x Sagar tech Turf', location: 'Sakinaka', tag: 'Cricket', mapUrl: 'https://maps.app.goo.gl/U54E4un1BEW9KL2q8?g_st=ac' },
  { image: '/play/venues/players-turf-goregaon.webp', name: 'SportVot x Players Turf Goregaon', location: 'Goregaon West', tag: 'Multi-sports', mapUrl: 'https://maps.app.goo.gl/fecV1tfgHhkZr7zEA?g_st=ac' },
  { image: '/play/venues/players-turf-kanchpada.webp', name: 'SportVot x Players Turf kanchpada', location: 'Malad west', tag: 'Multi-sports', mapUrl: 'https://maps.app.goo.gl/PTcGJW2TbivSXwUs9?g_st=ac' },
  { image: '/play/venues/st-francis-borivali.webp', name: 'SportVot x St Francis', location: 'Borivali', tag: 'Multi-sports', mapUrl: 'https://maps.app.goo.gl/n77D12AxZruDrkP57?g_st=ac' },
  { image: '/play/venues/nine-stars-dahisar.webp', name: 'SportVot x Ninestar', location: 'Dahisar', tag: 'Multi-sports', mapUrl: 'https://maps.app.goo.gl/LdiMJUJg4b8VEc3S6' },
  { image: '/play/venues/play-the-turf-malad.webp', name: 'SportVot x Play the turf', location: 'Malad west', tag: 'Multi-sports', mapUrl: 'https://maps.app.goo.gl/TARmsuCihLNXLFdQ8' },
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
          <SectionHead eyebrow="Venues" center className="mx-auto mb-14">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Find the right venue for your event.</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">
              Our growing network of turfs and sports venues across Mumbai and Delhi NCR.
            </p>
          </SectionHead>
          <RevealGroup className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
            {VENUES.map((v) => (
              <VenueCard key={v.mapUrl} {...v} />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead eyebrow="Customer Reviews" center className="mx-auto mb-14">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">What our clients say.</h2>
          </SectionHead>
          <RevealGroup className="mx-auto grid max-w-[900px] grid-cols-2 gap-6 max-[700px]:grid-cols-1">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </RevealGroup>
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

      <Marquee logos={CLIENT_LOGOS} label="Brands that trust us" />

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
