import { Container, Section, PageHero } from '../components/ui'
import { RevealGroup } from '../components/Reveal'
import { CaseCard } from '../components/cards'
import { CASE_STUDIES } from '../data/caseStudies'

export default function CaseStudies() {
  return (
    <>
      <PageHero eyebrow="Case Studies" title="Real organisations. Real broadcast results." />
      <Section>
        <Container>
          <RevealGroup className="grid grid-cols-3 items-stretch gap-6 max-[900px]:grid-cols-1">
            {CASE_STUDIES.map((c) => (
              <CaseCard
                key={c.slug}
                image={c.image}
                meta={c.tag}
                metric={c.metric}
                metricLabel={c.metricLabel}
                title={c.client}
                readLabel="Read case study →"
                href={`/case-studies/${c.slug}`}
              />
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  )
}
