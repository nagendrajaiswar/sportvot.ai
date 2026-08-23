import { Container, Section, SectionHead, PageHero } from '../components/ui'
import { RevealGroup } from '../components/Reveal'
import { CaseCard } from '../components/cards'

const PRESS = [
  {
    image: '/news/press-economic-times.jpg',
    meta: 'Economic Times · Fundraise',
    title: 'Sports tech startup SportVot raises Rs 9 crore in funding from Omidyar Network India, others',
    href: 'https://m.economictimes.com/tech/funding/sports-tech-startup-sportvot-raises-rs-9-crore-in-funding-from-omidyar-network-others/articleshow/107417596.cms',
  },
  {
    image: '/news/press-inc42.jpg',
    meta: 'Inc42 · Fundraise',
    title: 'Sportstech Startup SportVot Bags INR 9.4 Cr To Digitise Grassroot Level Games',
    href: 'https://inc42.com/buzz/sportstech-startup-sportvot-bags-11-3-mn-to-digitise-grassroot-level-games/',
  },
  {
    image: '/news/press-the-established.jpg',
    meta: 'The Established · Profile',
    title: "Rising Star: Sidhhant Agarwal's start-up SportVot uses tech to spotlight local sports talent",
    href: 'https://www.theestablished.com/community/business/rising-star-sidhhant-agarwals-start-up-sportvot-uses-tech-to-spotlight-local-sports-talent',
  },
  {
    image: '/news/press-yourstory.jpg',
    meta: 'YourStory · Technology',
    title: 'AI-driven technology leading the sports broadcast industry',
    href: 'https://yourstory.com/2024/05/ai-driven-technology-leading-the-sports-broadcast-industry',
  },
  {
    image: '/news/press-techround.jpg',
    meta: 'TechRound · Recognition',
    title: 'Top 10 Sports Tech Startups in India',
    href: 'https://techround.co.uk/startups/top-10-sport-tech-startups-in-india/',
  },
  {
    image: '/news/press-free-press-journal.jpg',
    meta: 'Free Press Journal · Brands',
    title: 'How Amateur Sports Leagues Can Turn Profit-Making',
    href: 'https://www.freepressjournal.in/brandsutra/how-amateur-sports-leagues-can-turn-profit-making',
  },
]

const TOURNAMENTS = [
  {
    image: '/news/event-assam-u13.png',
    meta: 'Football · May 2026',
    title: 'Assam Youth League U13 Opens With Exciting Matches And Promising Young Football Talent',
    href: 'https://www.freepressjournal.in/sports/sportvot/sportvot-x-fpj-assam-youth-league-u13-opens-with-exciting-matches-and-promising-young-football-talent',
  },
  {
    image: '/news/event-pptl-udaipur.jpeg',
    meta: 'Tennis · April 2026',
    title: 'PPTL 0.3 Udaipur Tennis Tournament Concludes With Virendra Ojas Clinching Dominant Final Victory',
    href: 'https://www.freepressjournal.in/sports/sportvot/sportvot-x-fpj-pptl-03-udaipur-tennis-tournament-concludes-with-virendra-ojas-clinching-dominant-final-victory',
  },
  {
    image: '/news/event-padel-team-cup.jpg',
    meta: 'Padel · March 2026',
    title: 'Padel Premier League Team Cup 3.0 Thrills Fans In Navi Mumbai',
    href: 'https://www.freepressjournal.in/sports/sportvot/sportvot-x-fpj-padel-premier-league-team-cup-30-thrills-fans-in-navi-mumbai',
  },
  {
    image: '/news/event-kabaddi-maharashtra.jpeg',
    meta: 'Kabaddi · February 2026',
    title: 'Maharashtra Storm Into Final As Railways Edge Thriller At 72nd Senior National Kabaddi Championship',
    href: 'https://www.freepressjournal.in/sports/sportvot/sportvot-x-fpj-maharashtra-storm-into-final-as-railways-edge-thriller-at-72nd-senior-national-kabaddi-championship',
  },
  {
    image: '/news/event-handball-pro-league.jpg',
    meta: 'Handball · February 2026',
    title: 'Handball Pro League 2025-26 Concludes In Nagpur; Bhopal Blasters And Lucknow Lioness Claim Titles',
    href: 'https://www.freepressjournal.in/sports/sportvot-x-fpj-handball-pro-league-2025-26-concludes-in-nagpur-bhopal-blasters-and-lucknow-lioness-claim-titles',
  },
  {
    image: '/news/event-table-tennis-australia.jpg',
    meta: 'Table Tennis · Partnership',
    title: 'Table Tennis Australia Partners With SportVot To Transform Streaming Experience',
    href: 'https://www.freepressjournal.in/sports/sportvot/table-tennis-australia-partners-with-sportvot-to-transform-streaming-experience',
  },
]

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="News & Stories"
        title="What's happening at SportVot."
        subtitle="Press coverage, partnership announcements, and tournaments we've powered — as covered by the outlets that were there."
      />

      <Section>
        <Container>
          <SectionHead eyebrow="In The Press" center className="mx-auto mb-14">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Coverage from the outlets that matter.</h2>
          </SectionHead>
          <RevealGroup className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {PRESS.map((p) => (
              <CaseCard key={p.title} {...p} readLabel="Read article →" />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHead eyebrow="From The Field" center className="mx-auto mb-14">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Tournaments we've powered.</h2>
            <p className="mx-auto mt-4 max-w-[820px] text-center text-[19px] text-sv-text-muted">In partnership with The Free Press Journal.</p>
          </SectionHead>
          <RevealGroup className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {TOURNAMENTS.map((t) => (
              <CaseCard key={t.title} {...t} readLabel="Read coverage →" />
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  )
}
