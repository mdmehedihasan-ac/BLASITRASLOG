import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Servizi from './pages/Servizi'
import TraslocoChiaviInMano from './pages/TraslocoChiaviInMano'
import TraslocoNormale from './pages/TraslocoNormale'
import TraslocoFaiDaTe from './pages/TraslocoFaiDaTe'
import PreventivoTrasloco from './pages/PreventivoTrasloco'
import PreventivoNoleggioFurgone from './pages/PreventivoNoleggioFurgone'
import PreventivoNoleggioScala from './pages/PreventivoNoleggioScala'
import NoleggioFurgone from './pages/NoleggioFurgone'
import NoleggioScala from './pages/NoleggioScala'
import ChiSiamo from './pages/ChiSiamo'
import Contatti from './pages/Contatti'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/trasloco-chiavi-in-mano" element={<TraslocoChiaviInMano />} />
          <Route path="/trasloco-normale" element={<TraslocoNormale />} />
          <Route path="/trasloco-fai-da-te" element={<TraslocoFaiDaTe />} />
          <Route path="/preventivo-trasloco" element={<PreventivoTrasloco />} />
          <Route path="/preventivo-noleggio-furgone" element={<PreventivoNoleggioFurgone />} />
          <Route path="/preventivo-noleggio-scala" element={<PreventivoNoleggioScala />} />
          <Route path="/noleggio-furgone" element={<NoleggioFurgone />} />
          <Route path="/noleggio-scala" element={<NoleggioScala />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
