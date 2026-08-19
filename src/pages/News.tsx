import { Container, Section, PageHero } from '../components/ui'
import { RevealGroup } from '../components/Reveal'
import { CaseCard } from '../components/cards'

const NEWS_ITEMS = [
  { tag: 'Partnerships', date: 'Aug 2026', title: 'SportVot signs 12 new federation partnerships across Africa' },
  { tag: 'Product', date: 'Jul 2026', title: 'Automated highlights now generate in under 5 seconds' },
  { tag: 'Community', date: 'Jun 2026', title: 'Breaking Sports with Vivek Sethia hits Episode 35' },
  { tag: 'Product', date: 'May 2026', title: 'SportVot Play expands to Delhi NCR with 8 new turfs' },
  { tag: 'Events', date: 'Apr 2026', title: 'Premier League Kabaddi 2026 goes live exclusively on SportVot OTT' },
  { tag: 'Company', date: 'Mar 2026', title: 'SportVot crosses 600,000 games produced worldwide' },
]

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="News & Stories"
        title="What's happening at SportVot."
        subtitle="Product updates, partnership announcements, and stories from the grassroots tournaments we produce every week."
      />
      <Section>
        <Container>
          <RevealGroup className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {NEWS_ITEMS.map((n) => (
              <CaseCard key={n.title} thumb={n.tag} meta={n.date} title={n.title} readLabel="Read more →" />
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  )
}
