// Source: "Website Case Studies" doc supplied by SportVot (31 Oct 2026). Images in public/play/case-*.jpg.
export type CaseSection = { heading: string; paragraphs?: string[]; bullets?: string[] }

export type CaseStudy = {
  slug: string
  client: string
  image: string
  /** Short label for cards, e.g. "Table Tennis · Australia". */
  tag: string
  title: string
  /** Headline number shown on cards. */
  metric: string
  metricLabel: string
  intro: string[]
  stats: { value: string; label: string }[]
  sections: CaseSection[]
  /** Arrow-separated journey line, rendered as a step row. */
  flow: string
  closing?: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'table-tennis-australia',
    client: 'Table Tennis Australia',
    image: '/play/case-tta.jpg',
    tag: 'Table Tennis · Australia',
    title: 'From Live Streaming to a Digital Home for Table Tennis',
    metric: '12,000+',
    metricLabel: 'games produced across 8 states and territories',
    intro: [
      'What started as a requirement for scalable live streaming and video capture has grown into a broader digital platform for Table Tennis Australia.',
    ],
    stats: [
      { value: '30+', label: 'tournaments' },
      { value: '12,000+', label: 'games' },
      { value: '8', label: 'states & territories' },
      { value: '4', label: 'state associations' },
    ],
    sections: [
      {
        heading: 'The journey',
        paragraphs: ['TTA needed a solution that could work across:'],
        bullets: [
          'Multiple tables and venues',
          'Different states and territories',
          'Multiple tournaments throughout the year',
          'Different production requirements',
          'A cost-efficient, scalable setup',
        ],
      },
      {
        heading: 'Scaling across Australia',
        paragraphs: [
          'SportVot started with flexible production using automated cameras, manned cameras and mobile cameras — from a single-camera stream to multi-camera and hybrid productions.',
          'SportVot manages the complete production workflow — capture, live production, graphics, scoring, highlights, data integration and sponsor integrations.',
        ],
      },
      {
        heading: 'Then came OTT',
        paragraphs: [
          'As TTA’s requirements grew, the need moved beyond streaming. In 2026, SportVot built a white-label OTT platform for TTA, bringing together live matches, replays and archives, highlights, tournament pages and player profiles.',
          'Fans and players can access the content directly, giving TTA a central digital home for its tournaments and content.',
        ],
      },
    ],
    flow: 'Capture → Production → Streaming → OTT',
    closing: 'What started with live streaming has evolved into a connected digital ecosystem for table tennis across Australia.',
  },
  {
    slug: 'tximist-foundation',
    client: 'Tximist Foundation',
    image: '/play/case-tximist.jpg',
    tag: 'Football · OTT',
    title: 'From Tournament to Platform: TximistCup TV',
    metric: '2,000+',
    metricLabel: 'viewers across 15+ countries',
    intro: [
      'A tournament lasts for a weekend. A platform can keep the audience connected for much longer.',
      'Tximist Foundation wanted to take its tournament beyond live match coverage and create a dedicated digital home for its audience.',
    ],
    stats: [
      { value: '30', label: 'matches' },
      { value: '15+', label: 'countries reached' },
      { value: '2,000+', label: 'viewers' },
    ],
    sections: [
      {
        heading: 'Built with SportVot',
        paragraphs: [
          'SportVot built TximistCup TV, a dedicated OTT platform bringing the tournament experience together in one place: live matches, replays and archives, highlights and player profiles.',
          'The platform gave fans and families a place to watch matches live, come back to replays and highlights, and stay connected to the tournament beyond the event itself.',
        ],
      },
      {
        heading: 'The reach',
        paragraphs: [
          'The platform also created a direct digital connection between Tximist Foundation and its audience, giving the tournament a permanent home for its content.',
        ],
      },
      {
        heading: 'Beyond the tournament',
        paragraphs: [
          'TximistCup TV turned a tournament into a longer-lasting digital experience — bringing together the audience, content and tournament experience in one platform.',
        ],
      },
    ],
    flow: 'Tournament → Content → Audience → Platform',
  },
  {
    slug: 'delhi-football-association',
    client: 'Delhi Football Association',
    image: '/play/case-dfa.jpg',
    tag: 'Football · India',
    title: 'From Key Matches to Complete Tournament Coverage',
    metric: '250+',
    metricLabel: 'matches covered over a 4+ year partnership',
    intro: [
      'The SportVot × Delhi Football Association journey has evolved over 4+ years — from streaming a few marquee matches to supporting the production and distribution of tournaments across Delhi football.',
    ],
    stats: [
      { value: '4+', label: 'years' },
      { value: '250+', label: 'matches covered' },
    ],
    sections: [
      {
        heading: 'The journey',
        paragraphs: ['The coverage started with key matches and finals, then grew step by step as DFA’s requirements did:'],
        bullets: [
          'Important tournaments',
          'Mobile streaming across multiple tournaments',
          'Automated camera production',
          'Multi-camera automated production',
          'Manned multi-camera production',
        ],
      },
      {
        heading: 'Today',
        paragraphs: ['SportVot provides end-to-end coverage, adapted to different tournaments and production requirements:'],
        bullets: [
          'Automated and multi-camera capture',
          'Manned camera production',
          'Live production',
          'Customised DFA graphics',
          'Scoring and data',
          'Automated highlights',
          'Live streaming',
        ],
      },
      {
        heading: 'From capture to distribution',
        paragraphs: ['All covered matches are also distributed through SportVot OTT, giving DFA a central destination for its live matches and tournament content.'],
      },
    ],
    flow: 'Capture → Production → Highlights → Streaming → OTT',
    closing:
      'What began with a few important matches has grown into a complete capture, production and distribution ecosystem for Delhi football.',
  },
  {
    slug: 'japan-cricket-association',
    client: 'Japan Cricket Association',
    image: '/play/case-jca.jpg',
    tag: 'Cricket · Japan',
    title: 'Powering Japan’s Domestic Cricket Broadcast Ecosystem',
    metric: '500+',
    metricLabel: 'matches across 20+ venues in Japan',
    intro: [
      'For the past 3 years, SportVot has worked with the Japan Cricket Association to make domestic cricket more accessible through scalable, remote live production. The requirement was simple but challenging — cover cricket across multiple venues throughout the domestic season, while keeping production efficient and consistent.',
    ],
    stats: [
      { value: '3–4', label: 'venues simultaneously' },
      { value: '20+', label: 'venues across Japan' },
      { value: '30+', label: 'tournaments' },
      { value: '500+', label: 'matches' },
    ],
    sections: [
      {
        heading: 'Built for multi-venue coverage',
        paragraphs: [
          'SportVot and JCA deploy the required camera and production systems for each game, while the entire production is managed remotely from India.',
          'From camera switching and scoring to graphics, feed management and production, the workflow is handled remotely through SportVot Cloud Studio. English commentary is delivered from India, while Japanese commentary is produced remotely, allowing JCA to deliver a localised broadcast experience to its audience.',
        ],
      },
      {
        heading: 'More than a live stream',
        paragraphs: [
          'Every match can generate more content beyond the live broadcast — including match recordings, highlights, replays, graphics and social media clips. The games are also available live through the SportVot app, giving fans a direct way to follow Japanese domestic cricket.',
          'Over the course of the partnership, SportVot has also supported JCA in creating sponsorship and monetisation opportunities around selected tournaments, helping extend the commercial value of the broadcast ecosystem.',
        ],
      },
    ],
    flow: 'Capture → Remote Production → Live Streaming → Content → Distribution → Monetisation',
    closing:
      'What started as live production for domestic cricket has developed into a scalable broadcast ecosystem connecting venues across Japan with audiences beyond the ground.',
  },
  {
    slug: 'brahmaputra-volleyball-league',
    client: 'Brahmaputra Volleyball League',
    image: '/play/case-bvl.jpg',
    tag: 'Volleyball · India',
    title: 'Taking grassroots volleyball beyond the local court',
    metric: '750+',
    metricLabel: 'matches every season across villages in Assam',
    intro: [
      'The Brahmaputra Volleyball League (BVL) was created to bring competitive volleyball to villages across Assam and create more opportunities for young players.',
    ],
    stats: [
      { value: '750+', label: 'matches every season' },
      { value: 'Villages', label: 'across Assam' },
      { value: 'Local students', label: 'trained in live production' },
    ],
    sections: [
      {
        heading: 'The need',
        paragraphs: [
          'With matches happening across different grassroots locations, the league needed a simple and scalable way to capture, stream and distribute these games to a wider audience.',
        ],
      },
      {
        heading: 'The solution',
        paragraphs: [
          'SportVot brought a mobile-first streaming model to BVL, enabling matches to be captured and streamed from grassroots locations without the infrastructure required for traditional broadcast production. Local students and members of the community were also trained to operate the setup, making them part of the production process.',
          'The workflow allowed BVL to take matches from local courts to audiences beyond the venue, while creating a consistent digital presence for the league.',
        ],
      },
      {
        heading: 'The result',
        paragraphs: [
          'Beyond streaming, the increased visibility also created opportunities around sponsorship, team support and investment in the league and its infrastructure.',
          'BVL became more than a grassroots tournament happening across villages — it became a competition that could be followed beyond the physical venue.',
        ],
      },
    ],
    flow: 'Local Courts → Local Broadcasters → Live Matches → Wider Audience',
    closing: 'SportVot helped BVL build a model where the game, the community and the technology come together to make grassroots volleyball more visible.',
  },
  {
    slug: 'vibgyor-group-of-schools',
    client: 'VIBGYOR Group of Schools',
    image: '/play/case-vibgyor.jpg',
    tag: 'School sports · India',
    title: 'Bringing school sports to screens across India',
    metric: '1,000+',
    metricLabel: 'matches across 12+ sports and 14 locations',
    intro: [
      'School sports happen across different cities, venues and age groups, often over several months. VIBGYOR Group of Schools wanted to give its young athletes and school competitions greater visibility while creating a consistent way to capture and stream matches across its large inter-school sporting calendar.',
    ],
    stats: [
      { value: '2', label: 'seasons covered' },
      { value: '12+', label: 'sports' },
      { value: '14', label: 'locations' },
      { value: '1,000+', label: 'matches' },
      { value: '7', label: 'month sporting calendar' },
    ],
    sections: [
      {
        heading: 'The solution',
        paragraphs: [
          'SportVot became part of VIBGYOR’s school sports ecosystem, providing the technology and production infrastructure to capture and stream competitions across multiple sports and locations. The setup is designed to handle a long, distributed tournament calendar — with matches scheduled across 7 months, rather than treating each event as a standalone broadcast.',
        ],
      },
      {
        heading: 'The scale',
        paragraphs: [
          'The coverage brings together competitions across multiple cities, giving young athletes the opportunity to have their games captured and watched beyond the physical venue.',
        ],
      },
      {
        heading: 'The result',
        paragraphs: [
          'What makes the VIBGYOR partnership different is the scale and consistency of school sports coverage. SportVot helps turn a large, multi-city youth sports calendar into a connected digital sports experience — giving schools, students, parents and audiences a way to follow the action across the season.',
        ],
      },
    ],
    flow: '12+ Sports → 14 Locations → 7 Months → 1,000+ Matches',
    closing: 'The partnership continues to build a larger digital footprint for school sports and the next generation of athletes.',
  },
  {
    slug: 'maharashtra-state-kabaddi-association',
    client: 'Maharashtra State Kabaddi Association',
    image: '/play/case-mska.jpg',
    tag: 'Kabaddi · India',
    title: 'Building a digital audience for India’s second-most popular sport',
    metric: '4+ years',
    metricLabel: 'growing kabaddi’s digital audience in Maharashtra',
    intro: [
      'Kabaddi has a massive following across India and a particularly strong grassroots culture in Maharashtra. MSKA wanted to take this popularity beyond the physical ground and give more players, tournaments and fans access to the game through digital platforms.',
    ],
    stats: [
      { value: '4+', label: 'years of partnership' },
      { value: 'Multiple', label: 'tournaments across Maharashtra' },
      { value: 'Automated', label: 'camera-based production' },
      { value: 'Live + PPV', label: 'distribution' },
    ],
    sections: [
      {
        heading: 'The need',
        paragraphs: [
          'The goal was to make live coverage a natural part of the kabaddi ecosystem and help elevate the visibility of the sport.',
        ],
      },
      {
        heading: 'The solution',
        paragraphs: [
          'Over the last 4 years, SportVot has worked with MSKA to build and evolve its live-streaming ecosystem. The journey began with SportVot teams working on the ground, introducing organisers and players to live streaming and showing them how their matches could reach audiences beyond the venue. This gradually evolved into automated camera-based production, live distribution through SportVot and PPV models for selected tournaments.',
        ],
      },
      {
        heading: 'The result',
        paragraphs: [
          'Today, organisers and players directly share their event details with SportVot and request cameras for their tournaments — making digital coverage an increasingly natural part of the game.',
          'What started with introducing the benefits of live streaming has evolved into a broader effort to uplift the visibility and digital presence of kabaddi, while creating new opportunities around content, audience and monetisation.',
        ],
      },
    ],
    flow: 'Awareness → Adoption → Regular Coverage → Digital Audience → Monetisation',
  },
]

/** The four foregrounded on the Live Production page (largest match counts). */
export const FEATURED_CASE_SLUGS = ['table-tennis-australia', 'japan-cricket-association', 'vibgyor-group-of-schools', 'delhi-football-association']
