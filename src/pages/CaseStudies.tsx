import { Container, Section, PageHero } from '../components/ui'
import { RevealGroup } from '../components/Reveal'
import { CaseCard } from '../components/cards'

const CASES = [
  { thumb: 'Football · India', metric: '2.4Mn', metricLabel: 'views across a single tournament weekend' },
  { thumb: 'Cricket · UAE', metric: '18', metricLabel: 'matches live streamed in 48 hours' },
  { thumb: 'Kabaddi · India', metric: '800+', metricLabel: 'player profiles created in one season' },
  { thumb: 'Football · Nigeria', metric: '3', metricLabel: 'seasons produced end-to-end' },
  { thumb: 'Badminton · Indonesia', metric: '40+', metricLabel: 'events streamed nationwide' },
  { thumb: 'Basketball · Kenya', metric: '1', metricLabel: 'national league, fully digitised' },
]

export default function CaseStudies() {
  return (
    <>
      <PageHero eyebrow="Case Studies" title="Real organisations. Real broadcast results." />
      <Section>
        <Container>
          <RevealGroup className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {CASES.map((c) => (
              <CaseCard key={c.thumb} {...c} meta="Case Study" readLabel="Read case study →" />
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  )
}
