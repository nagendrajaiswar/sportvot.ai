import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import LiveProduction from './pages/LiveProduction'
import Play from './pages/Play'
import BlogPost from './pages/BlogPost'
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
        <Route path="/live-production" element={<LiveProduction />} />
        <Route path="/play" element={<Play />} />
        <Route path="/play/blog/:slug" element={<BlogPost />} />
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
