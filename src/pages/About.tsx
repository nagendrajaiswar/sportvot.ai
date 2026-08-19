import { Cloud, SoccerBall, Television } from '@phosphor-icons/react'
import { Container, Section, SectionHead, PageHero, TwoCol, ColMedia, CTAStrip } from '../components/ui'
import { Reveal, RevealGroup } from '../components/Reveal'
import { PlayCard, TeamCard } from '../components/cards'
import Btn from '../components/Btn'

const OFFERINGS = [
  {
    icon: <Cloud size={26} weight="bold" />,
    title: 'SportVot Cloud Studio',
    body: 'Top-quality live sports production with multi-angle streaming, detailed scoring for 30+ sports, custom graphics, automated highlights, and integrated advertising.',
  },
  {
    icon: <SoccerBall size={26} weight="bold" />,
    title: 'SportVot Play',
    body: 'World-class facilities for pay-and-play sports, with digital experiences like personalised player cards and match highlights.',
  },
  {
    icon: <Television size={26} weight="bold" />,
    title: 'SportVot OTT',
    body: 'A multi-sports streaming platform bringing grassroots talent to the limelight across 15+ sports.',
  },
]

const TEAM = [
  { initials: 'SA', name: 'Siddhant Agarwal', role: 'CEO', body: 'Tech expert with 12+ years of experience building software technology products.' },
  { initials: 'YB', name: 'Yash Bhagwatkar', role: 'COO', body: 'Management expert with 5+ years of experience spearheading operations across India.' },
  { initials: 'SG', name: 'Shubhangi Gupta', role: 'CMO', body: 'Digital marketing expert with experience handling 40+ brands.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About SportVot"
        title="Bringing unseen sports talent to the world stage."
        subtitle="SportVot is a global Sports Tech startup with a cutting-edge live video production and streaming platform designed to empower sports talent at every tier by giving them a stage to showcase their skills."
      />

      <Section>
        <Container>
          <TwoCol>
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-sv-primary">Our Mission</p>
              <h2 className="mt-4 font-display text-[clamp(28px,4.5vw,40px)] font-extrabold text-sv-white">To bring unseen sports talent to the world stage.</h2>
              <p className="mt-5 text-[17px] text-sv-text-muted">
                By transforming the way grassroots sports are captured and broadcasted, SportVot fosters both athletic growth and community engagement —
                aiming to be the leader in digital sports production.
              </p>
            </Reveal>
            <ColMedia>Grassroots to global.</ColMedia>
          </TwoCol>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHead eyebrow="Core Offerings" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">Three products. One mission.</h2>
          </SectionHead>
          <RevealGroup className="mt-12 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {OFFERINGS.map((o) => (
              <PlayCard key={o.title} {...o} />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead eyebrow="Leadership" center className="mx-auto">
            <h2 className="mt-3 text-balance font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">About Our Founders</h2>
          </SectionHead>
          <RevealGroup className="mt-12 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {TEAM.map((t) => (
              <TeamCard key={t.name} {...t} />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <CTAStrip title="Want to build the future of grassroots sports with us?" body="We're always looking for people who care about giving athletes a stage.">
            <Btn to="/contact" variant="primary">
              Get in Touch
            </Btn>
          </CTAStrip>
        </Container>
      </Section>
    </>
  )
}
