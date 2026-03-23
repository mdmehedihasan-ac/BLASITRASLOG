import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servizi from './pages/Servizi'
import Preventivo from './pages/Preventivo'
import Noleggio from './pages/Noleggio'
import ChiSiamo from './pages/ChiSiamo'
import Contatti from './pages/Contatti'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/preventivo" element={<Preventivo />} />
          <Route path="/noleggio" element={<Noleggio />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
