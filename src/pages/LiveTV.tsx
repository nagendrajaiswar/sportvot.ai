import { Container, Section, Eyebrow, Tag } from '../components/ui'
import { Reveal, RevealGroup } from '../components/Reveal'
import { MatchCard } from '../components/cards'
import Btn from '../components/Btn'

const MATCHES = [
  { sport: 'Cricket', title: 'GSL Frankfurt | Match 4 | FC Alsbach vs MSC Frankfurt', dur: '8:41', live: true },
  { sport: 'Kabaddi', title: 'Mumbai Kabaddi Masters | Semi Final 2 | Ambika SC vs Jolly KM', dur: '10:38', live: true },
  { sport: 'Football', title: 'Club Friendlies 2026 | Real Betis vs Olympique Lyon', dur: '5:48' },
  { sport: 'Basketball', title: 'NSU Summer Heat Clash | ICS vs MTG', dur: '1:54' },
  { sport: 'Kabaddi', title: 'Premier League Kabaddi 2026 | Glasgow Unicorns vs Wolverhampton', dur: '6:03' },
  { sport: 'Cricket', title: 'Century Champions League Brisbane | Grand Final | Rockets vs Marlins', dur: '9:45' },
  { sport: 'Football', title: 'Assam Youth League U17 | Bodoland FC vs Eleven Stars', dur: '5:23' },
  { sport: 'Boxing', title: 'BFL Street V 2026 | Fight Night Highlights', dur: '3:11' },
]

const SPORT_TAGS = ['Cricket', 'Football', 'Kabaddi', 'Basketball', 'Badminton', 'Boxing', 'Tennis', 'Padel', 'Rugby', '+15 more sports']

export default function LiveTV() {
  return (
    <>
      <section
        className="border-b border-sv-border pt-[180px] pb-12"
        style={{ background: 'radial-gradient(90% 90% at 50% 0%, rgba(255,0,67,.18), transparent 50%)' }}
      >
        <Container>
          <Reveal className="mb-4 inline-flex items-center gap-[7px] rounded-full border border-[rgba(255,0,67,0.4)] bg-sv-live-dim px-3.5 py-1.5 text-xs font-extrabold tracking-[0.06em] text-white before:h-[7px] before:w-[7px] before:animate-[sv-pulse_1.6s_infinite] before:rounded-full before:bg-sv-live">
            ● Live Now
          </Reveal>
          <Reveal as="h1" className="mt-4 max-w-[900px] font-display text-[clamp(36px,6.5vw,68px)] font-extrabold tracking-[-0.02em] text-sv-white">
            SportVot OTT — every sport, every level, live.
          </Reveal>
          <Reveal as="p" className="mt-4 max-w-[640px] text-[19px] text-sv-text-muted">
            Grassroots to national championships across 15+ sports — live matches, full replays, and highlight reels updated daily on SportVot's streaming
            platform.
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap gap-4">
            <Btn href="https://sportvot.com/tv" target="_blank" rel="noopener" variant="live">
              ▶ Watch on SportVot OTT
            </Btn>
            <Btn to="/for-organisations#proposal" variant="outline">
              Stream Your Own Tournament
            </Btn>
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Trending Events</Eyebrow>
            <h2 className="mt-3 font-display text-[30px] font-extrabold text-sv-white">Nail-biting events, live right now.</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid grid-cols-4 gap-4 max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
            {MATCHES.map((m, i) => (
              <MatchCard key={i} {...m} />
            ))}
          </RevealGroup>
          <p className="mt-12 text-center">
            <Btn href="https://sportvot.com/tv" target="_blank" rel="noopener" variant="primary">
              See Everything Live on SportVot OTT →
            </Btn>
          </p>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <Reveal className="flex flex-wrap justify-center gap-2">
            {SPORT_TAGS.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
