import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import './TraslocoDetail.css'

export default function TraslocoChiaviInMano() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/servizi">Servizi</Link> / <span>Chiavi in Mano</span></div>
          <h1>Trasloco completo <span className="gold-accent">chiavi in mano</span></h1>
          <p>Servizio tutto compreso: imballaggio, smontaggio, trasporto, rimontaggio. Pensiamo a tutto noi!</p>
        </div>
      </section>
      <section className="trasloco-detail">
        <div className="container">
          <div className="trasloco-layout">
            <div className="trasloco-text">
              <h2>Richiedi un trasloco assicurato e con imballaggi sicuri certificati</h2>
              <p>Se decidi di usufruire del servizio di trasloco completo chiavi in mano, inviamo una squadra di imballatori professionisti a casa tua prima del trasloco, in modo da imballare tutte le tue cose e preparare tutto l&apos;occorrente.</p>
              <p>Il nostro staff ha accesso a materiali di imballaggio di alta qualit&agrave; ed &egrave; formato da professionisti con pi&ugrave; di venti anni di esperienza. Il fatto che il nostro personale effettui l&apos;imballaggio ti offre anche una copertura assicurativa ulteriore.</p>
              <h3 style={{marginTop:24,marginBottom:16}}>Cosa include il servizio</h3>
              <ul>
                <li><CheckCircle size={18} /> Imballaggio professionale di tutti gli oggetti</li>
                <li><CheckCircle size={18} /> Smontaggio completo dei mobili</li>
                <li><CheckCircle size={18} /> Trasporto sicuro con furgoni attrezzati</li>
                <li><CheckCircle size={18} /> Rimontaggio mobili nella nuova sede</li>
                <li><CheckCircle size={18} /> Copertura assicurativa completa</li>
                <li><CheckCircle size={18} /> Materiali di imballaggio certificati</li>
                <li><CheckCircle size={18} /> Trasporto pianoforti e oggetti di valore</li>
              </ul>
              <h3 style={{marginTop:24,marginBottom:16}}>Traslochiamo pianoforti in tutta sicurezza</h3>
              <p>Blasi Traslog vanta esperienza nel trasportare in modo sicuro pianoforti sia verticali che a coda. Proteggiamo il tuo pianoforte mentre lo spostiamo e assicuriamo di proteggere anche il tuo pavimento. Siamo assicurati al 100%.</p>
            </div>
            <div className="trasloco-sidebar">
              <img src="/img/trasloco-team.jpg" alt="Trasloco chiavi in mano" />
              <div className="sidebar-cta">
                <h3>Preventivo Gratuito</h3>
                <p>Richiedi un preventivo personalizzato per il tuo trasloco chiavi in mano.</p>
                <Link to="/preventivo-trasloco" className="btn btn-gold">Richiedi Preventivo <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
