import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import './TraslocoDetail.css'

export default function TraslocoFaiDaTe() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/servizi">Servizi</Link> / <span>Fai Da Te</span></div>
          <h1>Trasloco economico <span className="gold-accent">Fai Da Te</span></h1>
          <p>Soluzione economica per piccoli traslochi. Forniamo furgone e attrezzature.</p>
        </div>
      </section>
      <section className="trasloco-detail">
        <div className="container">
          <div className="trasloco-layout">
            <div className="trasloco-text">
              <h2>Per piccoli traslochi e traslochi per le vacanze</h2>
              <p>Se decidi di occuparti personalmente dell&apos;imballaggio della tua merce, ti consigliamo di seguire i nostri consigli per un trasloco fai da te di successo.</p>
              <p>Facilitiamo piccoli traslochi da Roma per le vacanze estive o natalizie verso la casa al mare o la villa in campagna. Se hai problemi di spazio custodiamo bici, lettini, ombrelloni e qualsiasi attrezzatura per le tue vacanze.</p>
              <h3 style={{marginTop:24,marginBottom:16}}>Consigli per il tuo trasloco</h3>
              <ul>
                <li><CheckCircle size={18} /> Consegniamo scatole piatte con nastro adesivo sufficiente</li>
                <li><CheckCircle size={18} /> Sigilla le scatole con due strisce di nastro adesivo</li>
                <li><CheckCircle size={18} /> Scatole piccole per oggetti pesanti (libri, bottiglie)</li>
                <li><CheckCircle size={18} /> Scatole grandi per articoli leggeri (vestiti, coperte)</li>
                <li><CheckCircle size={18} /> Contrassegna le scatole fragili con apposita sigla</li>
                <li><CheckCircle size={18} /> Forniamo armadi di cartone per vestiti da appendere</li>
              </ul>
              <h3 style={{marginTop:24,marginBottom:16}}>Custodia materiale vacanze</h3>
              <p>Se hai problemi di spazio, custodiamo bici, lettini, ombrelloni e qualsiasi attrezzatura per le tue vacanze al mare o in montagna, e lo ritrasportiamo al luogo desiderato per la prossima vacanza.</p>
            </div>
            <div className="trasloco-sidebar">
              <img src="/img/trasloco-imballaggio.jpg" alt="Trasloco fai da te" />
              <div className="sidebar-cta">
                <h3>Preventivo Gratuito</h3>
                <p>Richiedi un preventivo personalizzato per il tuo trasloco fai da te.</p>
                <Link to="/preventivo-trasloco" className="btn btn-gold">Richiedi Preventivo <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
