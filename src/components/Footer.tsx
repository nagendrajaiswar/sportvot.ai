import { Link } from 'react-router-dom'
import { Container } from './ui'

const PRODUCT = [
  { to: '/for-organisations', label: 'For Organisations' },
  { to: '/play', label: 'SportVot Play' },
  { to: '/live-tv', label: 'SportVot OTT — Live TV' },
  { to: '/solutions', label: 'Cloud Studio & Capabilities' },
]

const COMPANY = [
  { to: '/about', label: 'About Us' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact Us' },
]

const SOCIALS = ['IG', 'in', 'YT', 'X']

export default function Footer() {
  return (
    <footer className="border-t border-sv-border bg-sv-black-soft py-[72px] pb-8">
      <Container>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <Link to="/" className="flex items-center">
              <img src="/sportvot-logo.svg" alt="SportVot" className="h-10 w-auto" />
            </Link>
            <p className="mt-7 max-w-[280px] text-sm text-sv-text-muted">
              The global sports production platform — live production, streaming and analytics for every level of the game.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-sv-border-strong text-sm transition-all duration-300 hover:-translate-y-[3px] hover:border-sv-primary-light hover:text-sv-primary-light"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.06em] text-sv-text-faint">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {PRODUCT.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-sv-text-muted transition-colors hover:text-sv-primary-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.06em] text-sv-text-faint">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-sv-text-muted transition-colors hover:text-sv-primary-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.06em] text-sv-text-faint">Get Started</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/for-organisations#proposal" className="text-sm text-sv-text-muted transition-colors hover:text-sv-primary-light">
                  Get a Proposal
                </Link>
              </li>
              <li>
                <Link to="/live-tv" className="text-sm text-sv-text-muted transition-colors hover:text-sv-primary-light">
                  Watch Live Sports
                </Link>
              </li>
              <li>
                <a href="mailto:hello@sportvot.ai" className="text-sm text-sv-text-muted transition-colors hover:text-sv-primary-light">
                  hello@sportvot.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-sv-border pt-6 text-[13px] text-sv-text-faint">
          <span>© 2026 SportVot. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </Container>
    </footer>
  )
}
