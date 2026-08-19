import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import Btn from './Btn'
import { cn } from '../lib/utils'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/for-organisations', label: 'For Organisations' },
  { to: '/play', label: 'SportVot Play' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/news', label: 'News' },
  { to: '/about', label: 'About Us' },
]

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  cn(
    'relative py-1 font-display text-sm font-semibold text-sv-text-muted transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-sv-primary-light after:transition-[width] after:duration-300 hover:text-sv-white hover:after:w-full max-[960px]:text-[22px]',
    isActive ? 'text-sv-white after:w-full' : 'after:w-0',
  )

const liveLinkClasses =
  'inline-flex items-center gap-[7px] rounded-full border border-[rgba(255,0,67,0.4)] bg-sv-live-dim px-3.5 py-1.5 text-xs font-extrabold tracking-[0.06em] text-white before:h-[7px] before:w-[7px] before:animate-[sv-pulse_1.6s_infinite] before:rounded-full before:bg-sv-live before:shadow-[0_0_0_3px_var(--color-sv-live-dim)]'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-100 border-b border-sv-border bg-sv-black/72 backdrop-blur-2xl backdrop-saturate-150 transition-shadow duration-300',
        scrolled && 'shadow-[0_10px_40px_rgba(0,0,0,.35)]',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-[18px] max-[640px]:px-4">
        <NavLink to="/" className="flex items-center gap-2 font-display text-[22px] font-black tracking-[-0.02em] text-sv-white mr-4">
          Sport<span className="text-sv-primary-light">Vot</span>
        </NavLink>

        <nav className="flex items-center gap-8 max-[960px]:hidden">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/live-tv" className={liveLinkClasses}>
            Live TV
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Btn to="/contact" variant="outline" size="sm" className="max-[960px]:hidden">
            Get in Touch
          </Btn>
          <Btn to="/for-organisations#proposal" variant="primary" size="sm" className="max-[960px]:hidden">
            Get a Proposal
          </Btn>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="hidden h-[42px] w-[42px] shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-sv-sm border border-sv-border-strong text-sv-white max-[960px]:flex"
          >
            <span className={cn('h-0.5 w-[18px] bg-sv-white transition-all duration-250', open && 'translate-y-[7px] rotate-45')} />
            <span className={cn('h-0.5 w-[18px] bg-sv-white transition-opacity duration-200', open && 'opacity-0')} />
            <span className={cn('h-0.5 w-[18px] bg-sv-white transition-all duration-250', open && '-translate-y-[7px] -rotate-45')} />
          </button>
        </div>
      </div>

      {createPortal(
        <nav
          className={cn(
            'fixed inset-x-0 top-[70px] bottom-0 z-100 hidden flex-col items-start gap-6 overflow-y-auto bg-sv-black px-5 py-8 transition-transform duration-300 max-[960px]:flex',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={close} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/live-tv" onClick={close} className={liveLinkClasses}>
            Live TV
          </NavLink>
          <div className="mt-4 flex w-full flex-col gap-3">
            <Btn to="/contact" variant="outline" block onClick={close} magnetic={false}>
              Get in Touch
            </Btn>
            <Btn to="/for-organisations#proposal" variant="primary" block onClick={close} magnetic={false}>
              Get a Proposal
            </Btn>
          </div>
        </nav>,
        document.body,
      )}
    </header>
  )
}
