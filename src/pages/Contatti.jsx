import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react'
import './Contatti.css'

export default function Contatti() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / <span>Contatti</span></div>
          <h1>Contatti e <span className="gold-accent">Recapiti</span></h1>
          <p>Ti rispondiamo rapidamente per traslochi, noleggio e richieste operative su Roma.</p>
        </div>
      </section>

      <section className="cont-hub">
        <div className="container">
          <div className="cont-hub-grid">
            <div className="cont-main-card">
              <div className="cont-main-head">
                <h2>Parla con un <span className="gold-accent">responsabile</span></h2>
                <p>Scegli il canale che preferisci. Siamo operativi tutti i giorni feriali e il sabato mattina.</p>
              </div>

              <div className="cont-quick-actions">
                <a href="tel:+393204085611" className="cont-quick-action">
                  <Phone size={18} />
                  <div>
                    <strong>Telefono</strong>
                    <span>+39 320 408 5611</span>
                  </div>
                </a>
                <a href="https://wa.me/393204085611" target="_blank" rel="noopener noreferrer" className="cont-quick-action">
                  <MessageCircle size={18} />
                  <div>
                    <strong>WhatsApp</strong>
                    <span>Chat diretta con il team</span>
                  </div>
                </a>
                <a href="mailto:info@blasitraslog.it" className="cont-quick-action">
                  <Mail size={18} />
                  <div>
                    <strong>Email</strong>
                    <span>info@blasitraslog.it</span>
                  </div>
                </a>
              </div>

              <div className="cont-detail-grid">
                <div className="cont-detail-item">
                  <div className="cont-detail-icon"><MapPin size={17} /></div>
                  <div>
                    <h3>Sede operativa</h3>
                    <p>Via del Fosso della Magliana, 24b - 00148 Roma</p>
                  </div>
                </div>
                <div className="cont-detail-item">
                  <div className="cont-detail-icon"><Clock size={17} /></div>
                  <div>
                    <h3>Orari</h3>
                    <p>Lun-Ven 8:00-19:00 | Sab 8:00-13:00</p>
                  </div>
                </div>
              </div>

              <div className="cont-note">
                <p>Per un preventivo accurato indica zona di partenza, destinazione e data indicativa.</p>
              </div>
            </div>

            <div className="cont-map-card">
              <div className="cont-map-top">
                <h3>Dove lavoriamo</h3>
                <p>Copertura completa su Roma, comprese aree centrali e ZTL.</p>
              </div>
              <div className="cont-map-wrap">
                <iframe title="Mappa BlasiTraslog Roma" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.52643267946!2d12.395912649999999!3d41.9102415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRoma%20RM!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="cont-zone-tags">
                <span>Roma Nord</span>
                <span>Roma Centro</span>
                <span>Roma Sud / EUR</span>
                <span>Roma Est</span>
                <span>Roma Ovest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cont-steps">
        <div className="container">
          <div className="section-header">
            <h2>Come gestiamo la tua <span className="gold-accent">richiesta</span></h2>
          </div>
          <div className="cont-steps-grid">
            <div className="cont-step-card">
              <div className="cont-step-num">1</div>
              <h3>Contatto iniziale</h3>
              <p>Raccogliamo i dati principali per capire volume, zona e tempistiche.</p>
            </div>
            <div className="cont-step-card">
              <div className="cont-step-num">2</div>
              <h3>Valutazione tecnica</h3>
              <p>Definiamo mezzi, personale e accessi in base alle tue esigenze reali.</p>
            </div>
            <div className="cont-step-card">
              <div className="cont-step-num">3</div>
              <h3>Preventivo chiaro</h3>
              <p>Ricevi una proposta dettagliata e senza sorprese sui servizi inclusi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cont-cta">
        <div className="container">
          <h2>Richiedi un preventivo gratuito</h2>
          <p>Compila il modulo e ricevi una proposta personalizzata in base al tuo trasloco.</p>
          <div className="btn-row">
            <Link to="/preventivo-trasloco" className="btn btn-gold btn-lg">Preventivo trasloco <ArrowRight size={16} /></Link>
            <a href="mailto:info@blasitraslog.it" className="btn btn-outline-white btn-lg">Email diretta</a>
          </div>
        </div>
      </section>
    </>
  )
}
