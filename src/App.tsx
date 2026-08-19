import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ForOrganisations from './pages/ForOrganisations'
import Solutions from './pages/Solutions'
import Play from './pages/Play'
import About from './pages/About'
import News from './pages/News'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import LiveTV from './pages/LiveTV'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/for-organisations" element={<ForOrganisations />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/live-tv" element={<LiveTV />} />
      </Route>
    </Routes>
  )
}

export default App
