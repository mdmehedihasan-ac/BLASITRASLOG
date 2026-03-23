import { Link } from 'react-router-dom'
import { Truck, Shield, Clock, MapPin, ArrowRight } from 'lucide-react'
import './Noleggio.css'

export default function NoleggioFurgone() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / <span>Noleggio Furgone</span></div>
          <h1>Noleggio Furgone <span className="gold-accent">con Autista</span></h1>
          <p>Furgone da 35 quintali con autista esperto, attrezzatura completa e permessi ZTL inclusi.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="nol-intro">
            <div className="nol-intro-text">
              <h2>Il furgone giusto per ogni <span className="gold-accent">esigenza</span></h2>
              <p>
                BlasiTraslog mette a disposizione un furgone da 35 quintali completo di autista qualificato
                e tutta l&apos;attrezzatura necessaria per il carico e scarico della merce.
              </p>
              <p>
                Il servizio include carrelli, brevetti e cinte di sicurezza, coperte per la protezione
                degli arredi e i permessi ZTL per circolare nel centro storico di Roma.
              </p>
              <Link to="/preventivo-noleggio-furgone" className="btn btn-gold">Richiedi preventivo <ArrowRight size={16} /></Link>
            </div>
            <div className="nol-intro-img">
              <img src="/img/noleggio-furgone.jpg" alt="Furgone BlasiTraslog" />
            </div>
          </div>
        </div>
      </section>

      <section style={{background:'var(--off-white)'}}>
        <div className="container">
          <div className="section-header"><h2>Cosa <span className="gold-accent">include</span></h2></div>
          <div className="nol-features">
            <div className="nol-feature-card"><h3><Truck size={18} style={{color:'var(--gold)',marginRight:6}} />Furgone 35 Quintali</h3><p>Mezzo di grandi dimensioni perfetto per traslochi, trasporti di mobili e merci ingombranti.</p></div>
            <div className="nol-feature-card"><h3><Shield size={18} style={{color:'var(--gold)',marginRight:6}} />Autista Qualificato</h3><p>Personale esperto con patente professionale e anni di esperienza nel settore trasporti.</p></div>
            <div className="nol-feature-card"><h3><Clock size={18} style={{color:'var(--gold)',marginRight:6}} />Attrezzatura Completa</h3><p>Carrelli, brevetti, cinte di sicurezza e coperte protettive incluse nel prezzo.</p></div>
            <div className="nol-feature-card"><h3><MapPin size={18} style={{color:'var(--gold)',marginRight:6}} />Permessi ZTL</h3><p>Accesso garantito nelle zone a traffico limitato del centro storico di Roma.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header"><h2>Le nostre <span className="gold-accent">tariffe</span></h2><p>Prezzi trasparenti, senza sorprese. IVA inclusa.</p></div>
          <div className="nol-pricing">
            <div className="nol-price-card">
              <h3>Mezza Giornata</h3>
              <div className="price">&euro;250</div>
              <div className="price-sub">da 1 a 4 ore</div>
              <ul>
                <li>Furgone 35 quintali</li>
                <li>Autista esperto</li>
                <li>Attrezzatura completa</li>
                <li>Permessi ZTL</li>
              </ul>
              <Link to="/preventivo-noleggio-furgone" className="btn btn-gold">Prenota ora</Link>
            </div>
            <div className="nol-price-card">
              <h3>Giornata Intera</h3>
              <div className="price">&euro;350</div>
              <div className="price-sub">fino a 7 ore</div>
              <ul>
                <li>Furgone 35 quintali</li>
                <li>Autista esperto</li>
                <li>Attrezzatura completa</li>
                <li>Permessi ZTL</li>
              </ul>
              <Link to="/preventivo-noleggio-furgone" className="btn btn-gold">Prenota ora</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="nol-cta">
        <div className="container">
          <h2>Hai bisogno del furgone?</h2>
          <p>Contattaci ora per prenotare il noleggio del furgone con autista a Roma.</p>
          <div className="btn-row">
            <Link to="/preventivo-noleggio-furgone" className="btn btn-gold btn-lg">Richiedi preventivo <ArrowRight size={16} /></Link>
            <a href="https://wa.me/393204085611" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">WhatsApp diretto</a>
          </div>
        </div>
      </section>
    </>
  )
}
