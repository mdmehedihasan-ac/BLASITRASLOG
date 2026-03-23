import { Link } from 'react-router-dom'
import { ArrowRight, Home, Building2, Truck, Warehouse, Package, Key, Wrench } from 'lucide-react'
import './Servizi.css'

export default function Servizi() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / <span>Servizi</span></div>
          <h1>Servizi dedicati ai <span className="gold-accent">traslochi</span> e alla logistica</h1>
          <p>Gestiamo tutti i servizi dedicati ai traslochi di abitazioni, uffici, aziende, negozi e capannoni con servizi personalizzati di alta qualit&agrave;.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="servizi-intro">
            <div className="servizi-intro-text">
              <h2>Soluzioni su misura per ogni esigenza</h2>
              <p>Il nostro ufficio operativo con sede a Roma pianifica e coordina tutte le fasi del trasloco. Dalla fase di imballaggio al trasporto, dallo smontaggio al rimontaggio dei mobili.</p>
              <p>Siamo specializzati nei traslochi di abitazioni e uffici, fornendo anche un servizio di deposito merci e di noleggio di automezzi e piattaforme aeree.</p>
              <Link to="/preventivo-trasloco" className="btn btn-gold">Richiedi Preventivo <ArrowRight size={18} /></Link>
            </div>
            <div className="servizi-intro-img">
              <img src="/img/trasloco-imballaggio.jpg" alt="Servizi trasloco" />
            </div>
          </div>
        </div>
      </section>

      <section className="servizi-types">
        <div className="container">
          <div className="section-header">
            <h2>Tipologie di Trasloco</h2>
            <p>Scegli la soluzione pi&ugrave; adatta alle tue esigenze</p>
            <div className="gold-bar"></div>
          </div>
          <div className="servizi-types-grid">
            <div className="servizio-type-card">
              <div className="card-img">
                <img src="/img/trasloco-team.jpg" alt="Trasloco chiavi in mano" />
              </div>
              <div className="card-body">
                <h3>Trasloco Chiavi in Mano</h3>
                <p>Servizio completo: imballaggio professionale, smontaggio, trasporto, rimontaggio e sistemazione. Pensiamo a tutto noi, tu non devi preoccuparti di nulla.</p>
                <Link to="/trasloco-chiavi-in-mano" className="btn btn-navy btn-sm">Scopri <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="servizio-type-card">
              <div className="card-img">
                <img src="/img/trasloco-boxes.jpg" alt="Trasloco normale" />
              </div>
              <div className="card-body">
                <h3>Trasloco Normale</h3>
                <p>Smontaggio, trasporto e rimontaggio dei mobili. Soluzione risparmio ideale per chi preferisce occuparsi personalmente degli imballaggi.</p>
                <Link to="/trasloco-normale" className="btn btn-navy btn-sm">Scopri <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="servizio-type-card">
              <div className="card-img">
                <img src="/img/trasloco-imballaggio.jpg" alt="Trasloco fai da te" />
              </div>
              <div className="card-body">
                <h3>Trasloco Fai Da Te</h3>
                <p>Soluzione economica per piccoli traslochi: forniamo furgone e attrezzature, tu ti occupi di imballaggio e carico/scarico.</p>
                <Link to="/trasloco-fai-da-te" className="btn btn-navy btn-sm">Scopri <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Come Funziona</h2>
            <p>Il processo per richiedere un preventivo in 6 semplici passi</p>
            <div className="gold-bar"></div>
          </div>
          <div className="process-grid">
            <div className="process-step"><h3>Contattaci</h3><p>Chiamaci o compila il modulo online con i dettagli del tuo trasloco.</p></div>
            <div className="process-step"><h3>Sopralluogo Gratuito</h3><p>Un nostro responsabile verr&agrave; a casa tua per valutare il volume del trasloco.</p></div>
            <div className="process-step"><h3>Preventivo Dettagliato</h3><p>Riceverai un preventivo completo e personalizzato via email.</p></div>
            <div className="process-step"><h3>Discussione</h3><p>Ti contattiamo per discutere il preventivo e rispondere alle tue domande.</p></div>
            <div className="process-step"><h3>Accettazione</h3><p>Conferma il preventivo e procediamo con la pianificazione del trasloco.</p></div>
            <div className="process-step"><h3>Trasloco</h3><p>Il nostro team professionale si occupa di tutto il giorno del trasloco.</p></div>
          </div>
        </div>
      </section>
    </>
  )
}
