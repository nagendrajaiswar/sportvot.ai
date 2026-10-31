import { Container, Section, Eyebrow, Tag } from '../components/ui'
import { Reveal, RevealGroup } from '../components/Reveal'
import { MatchCard } from '../components/cards'
import Btn from '../components/Btn'

const WATCH = 'https://sportvot.com/video/'

// Highlights picked from sportvot.com/tv — each links to its watch page. Thumbnails are saved in public/tv/.
const MATCHES = [
  { sport: 'Cricket', title: 'Match 1 | Rays vs Sailors | Century Champions League | Full Match Highlights', dur: '9:26', image: '/tv/cricket-ccl.webp', href: WATCH + '6a6d6c2a24aa9a0001d35329' },
  { sport: 'Kabaddi', title: 'A Commanding Victory | Ambika Sports Club vs Jolly Krida Mandal | Semi Final 2', dur: '10:38', image: '/tv/kabaddi-semi.webp', href: WATCH + '6a77604b24aa9a0001251650' },
  { sport: 'Football', title: 'NVFC vs SO | Group B | Match Highlights', dur: '4:54', image: '/tv/football-nvfc.webp', href: WATCH + '6ae4831e24aa9a000163ebad' },
  { sport: 'Padel', title: 'Coello & Sanchez vs Tapia & Sainz | Epic padel showdown', dur: '4:31', image: '/tv/padel-coello.webp', href: WATCH + '6a9483fd24aa9a00015eab70' },
  { sport: 'Cricket', title: 'Rising Stars All Out for 48! Men in Blue Seal a Perfect 10-Wicket Win | JCL T10', dur: '3:52', image: '/tv/cricket-jcl.webp', href: WATCH + '6a64a91c24aa9a00010b3671' },
  { sport: 'Boxing', title: 'Naman Joshi Ready for War | ISF 2.0', dur: '8:56', image: '/tv/boxing-isf.webp', href: WATCH + '6acbc2c924aa9a000122fd7d' },
  { sport: 'Kabaddi', title: 'The Raid King Is Here! | Aslam Inamdar', dur: '2:12', image: '/tv/kabaddi-raid.webp', href: WATCH + '6abcb25b24aa9a0001a88a5d' },
  { sport: 'Football', title: 'UKSC vs SAG Highlights', dur: '3:24', image: '/tv/football-uksc.webp', href: WATCH + '6ae1ec8524aa9a0001991e72' },
]

const SPORT_TAGS = ['Cricket', 'Football', 'Kabaddi', 'Basketball', 'Badminton', 'Boxing', 'Tennis', 'Padel', 'Rugby', '+15 more sports']

export default function LiveTV() {
  return (
    <>
      <section
        className="border-b border-sv-border pt-[180px] pb-20"
        style={{ background: 'radial-gradient(90% 90% at 50% 0%, rgba(255,0,67,.18), transparent 50%)' }}
      >
        <Container>
          <Reveal className="mb-4 inline-flex items-center gap-[7px] rounded-full border border-[rgba(255,0,67,0.4)] bg-sv-live-dim px-3.5 py-1.5 text-xs font-extrabold tracking-[0.06em] text-white before:h-[7px] before:w-[7px] before:animate-[sv-pulse_1.6s_infinite] before:rounded-full before:bg-sv-live">
            Live Now
          </Reveal>
          <Reveal as="h1" className="mt-5 max-w-[1180px] text-balance font-display text-[clamp(36px,5.2vw,58px)] font-extrabold tracking-[-0.02em] text-sv-white">
            SportVot OTT — every sport, every level, live.
          </Reveal>
          <Reveal as="p" className="mt-5 max-w-[880px] text-[19px] text-sv-text-muted">
            Grassroots to national championships across 15+ sports — live matches, full replays, and highlight reels updated daily on SportVot's streaming
            platform.
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap gap-5">
            <Btn href="https://sportvot.com/tv" target="_blank" rel="noopener" variant="live">
              ▶ Watch on SportVot OTT
            </Btn>
            <Btn to="/live-production#proposal" variant="outline">
              Stream Your Own Tournament
            </Btn>
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Latest Highlights</Eyebrow>
            <h2 className="mt-3 font-display text-[30px] font-extrabold text-sv-white">Nail-biting moments, from every sport.</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid grid-cols-4 gap-4 max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
            {MATCHES.map((m, i) => (
              <MatchCard key={i} {...m} />
            ))}
          </RevealGroup>
          <p className="mt-14 text-center">
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
