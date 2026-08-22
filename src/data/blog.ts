export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  image: string
  body: string[]
  bullets?: string[]
  bulletsAfterIndex?: number
  faqs: { q: string; a: string }[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'corporate-event-ideas-employee-engagement',
    title: 'Top Corporate Event Ideas to Boost Employee Engagement',
    excerpt:
      'Corporate events are no longer just formal gatherings. Today, companies use corporate events as a way to improve employee engagement activities, boost morale, and build stronger teams.',
    image: '/play/blog-corporate-events.png',
    body: [
      'Corporate events are no longer just formal gatherings. Today, companies use corporate events as a way to improve employee engagement activities, boost morale, and build stronger teams.',
      'A well-planned event helps employees connect beyond work, leading to better collaboration and productivity. In a fast-paced work environment, taking time out for team building activities is not a luxury—it is a necessity.',
      'Corporate events today are shifting towards more interactive formats. Traditional sit-down events are being replaced by engaging and activity-driven experiences.',
      'If you are planning corporate events, here are some ideas that are simple yet effective:',
    ],
    bullets: [
      'Sports-based corporate events like football, cricket, or padel encourage teamwork and healthy competition.',
      'Team building activities such as group challenges improve communication and trust.',
      'Mini tournaments between teams keep participation high and energy levels up.',
      'Outdoor formats make employee engagement activities more refreshing and enjoyable.',
    ],
    faqs: [
      { q: 'What are corporate events?', a: 'Corporate events are organized activities by companies to engage employees, improve team bonding, and celebrate achievements.' },
      { q: 'Why are employee engagement activities important?', a: 'Employee engagement activities help improve morale, productivity, and communication within teams.' },
      { q: 'What are the best team building activities for corporate events?', a: 'The best team building activities include sports, group challenges, and interactive games that encourage participation.' },
      { q: 'How do you plan a successful corporate event?', a: 'To plan successful corporate events, define your goal, choose the right format, select a venue, and focus on participation.' },
      { q: 'Are sports-based corporate events effective?', a: 'Yes, sports-based corporate events are highly effective as they naturally promote teamwork and engagement.' },
    ],
  },
  {
    slug: 'best-corporate-offsites-team-building',
    title: 'Best Corporate Offsites for Team Building and Engagement',
    excerpt:
      'Corporate offsites are becoming one of the most effective ways to improve employee engagement activities. They give employees a break from their routine and create opportunities to connect in a relaxed environment.',
    image: '/play/blog-corporate-offsites.jpeg',
    body: [
      'Corporate offsites are becoming one of the most effective ways to improve employee engagement activities. They give employees a break from their routine and create opportunities to connect in a relaxed environment.',
      'Unlike regular corporate events, corporate offsites focus more on experiences. They help teams build stronger relationships while enjoying the process.',
      'Companies are now shifting towards activity-based corporate offsites that are engaging and interactive.',
      'Here are some popular corporate offsites ideas that employees actually enjoy:',
    ],
    bullets: [
      'Sports-based corporate offsites such as football, cricket, or padel games',
      'Team building activities that involve problem-solving and collaboration',
      'Outdoor games that create a fun and relaxed atmosphere',
      'Multi-activity formats that keep employees engaged throughout',
    ],
    faqs: [
      { q: 'What are corporate offsites?', a: 'Corporate offsites are events conducted outside the office to focus on team bonding and engagement.' },
      { q: 'How are corporate offsites different from corporate events?', a: 'Corporate offsites are more experience-driven, while corporate events can include formal or informal gatherings.' },
      { q: 'What are the best activities for corporate offsites?', a: 'The best activities include sports, outdoor games, and team building activities that encourage collaboration.' },
      { q: 'Why are team building activities important in offsites?', a: 'Team building activities help improve communication, trust, and overall team performance.' },
      { q: 'How do you plan effective corporate offsites?', a: 'To plan effective corporate offsites, choose the right location, include engaging activities, and focus on participation.' },
    ],
  },
  {
    slug: 'why-sportvot-right-choice-corporate-events',
    title: 'Why SportVot is the Right Choice for Your Corporate Events',
    excerpt:
      'When it comes to planning corporate events or corporate offsites, companies are no longer looking for basic venues. They want experiences that drive real employee engagement activities and create lasting impact.',
    image: '/play/blog-why-sportvot.png',
    body: [
      'When it comes to planning corporate events or corporate offsites, companies are no longer looking for basic venues. They want experiences that drive real employee engagement activities and create lasting impact.',
      'This is where SportVot stands out. Instead of traditional event formats, SportVot focuses on activity-driven experiences that combine sports, fun, and effective team building activities.',
      'Modern teams need more than just meetings and dinners. They need engaging environments where employees can interact, compete, and collaborate naturally. SportVot is built around this exact idea.',
      'One of the biggest advantages of choosing SportVot for your corporate events is the focus on participation. Events are designed in a way that every employee gets involved, making employee engagement activities more meaningful and effective.',
      'Unlike static formats, SportVot offers dynamic experiences such as sports-based events, mini tournaments, and interactive challenges. These formats make corporate offsites more engaging and memorable.',
      'Another key factor is simplicity. Planning corporate events can often become complicated, but SportVot simplifies the process by offering structured yet flexible event formats. From venue setup to activity execution, everything is designed to ensure smooth experiences for teams.',
      'Team building activities at SportVot are not forced or overly complex. They are naturally integrated into games and sports, allowing employees to connect without pressure. This leads to better communication, stronger relationships, and improved team performance.',
      'Accessibility is also a major advantage. With well-equipped turfs and ready-to-use setups, companies can easily host corporate offsites without extensive planning.',
      'Today, companies are moving towards experiences that deliver real value. With its focus on sports, interaction, and structured activities, SportVot helps companies achieve exactly that.',
    ],
    faqs: [
      { q: 'Why should companies choose SportVot for corporate events?', a: 'SportVot offers activity-based corporate events that focus on participation, engagement, and team bonding.' },
      { q: 'What makes SportVot different from other event platforms?', a: 'Unlike traditional formats, SportVot focuses on sports and interactive team building activities that drive real engagement.' },
      { q: 'Does SportVot organize corporate offsites?', a: 'Yes, SportVot specializes in organizing engaging corporate offsites with sports and activity-based formats.' },
      { q: 'How does SportVot improve employee engagement?', a: 'Through well-designed employee engagement activities, SportVot ensures active participation and better team interaction.' },
      { q: 'Are SportVot events suitable for all employees?', a: 'Yes, SportVot designs team building activities that are simple, inclusive, and suitable for all participants.' },
    ],
  },
]
