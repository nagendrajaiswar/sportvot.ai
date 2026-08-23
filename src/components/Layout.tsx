import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './Header'
import Footer from './Footer'
import CursorDot from './CursorDot'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
        return
      }
    }
    window.scrollTo(0, 0)
    // location.key changes on every navigation (even to an unchanged hash), so a
    // second click on the same in-page anchor link still re-triggers this scroll.
  }, [location.pathname, location.hash, location.key])

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [location.pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CursorDot />
    </>
  )
}
