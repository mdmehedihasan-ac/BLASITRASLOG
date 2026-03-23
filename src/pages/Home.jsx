import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Truck, Package, Home as HomeIcon, Building2, Warehouse, Scale,
  Shield, Award, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Phone, MapPin
} from 'lucide-react'
import './Home.css'

const services = [
  { icon: <HomeIcon size={22} />, title: 'Trasloco Abitazioni', desc: 'Trasloco completo di appartamenti e ville con smontaggio, imballaggio professionale e rimontaggio.', link: '/trasloco-normale' },
  { icon: <Building2 size={22} />, title: 'Trasloco Uffici', desc: 'Trasferimento di uffici e aziende con pianificazione accurata per ridurre i tempi di inattività.', link: '/servizi' },
  { icon: <Award size={22} />, title: 'Chiavi in Mano', desc: 'Servizio completo: imballaggio, smontaggio, trasporto, rimontaggio. Pensiamo a tutto noi.', link: '/trasloco-chiavi-in-mano' },
  { icon: <Truck size={22} />, title: 'Traslochi Nazionali', desc: 'Tratta ad alta frequenza Roma–Milano e viceversa. Anche internazionali Roma–Parigi.', link: '/servizi' },
  { icon: <Warehouse size={22} />, title: 'Deposito & Custodia', desc: 'Magazzini sicuri per la custodia temporanea dei tuoi beni durante il trasloco o stoccaggio.', link: '/servizi' },
  { icon: <Scale size={22} />, title: 'Noleggio Attrezzature', desc: 'Furgoni con conducente, scale per traslochi fino a 37 metri e piattaforme aeree.', link: '/noleggio-furgone' },
]

const reviews = [
  { name: 'Anna Catalano', initials: 'AC', text: 'Team professionale, preparato e attento. Cura e rapidità nello smontaggio e rimontaggio dei mobili. Cordiali e sempre educati.' },
  { name: 'Alessandra Principini', initials: 'AP', text: 'Non farò mai più un trasloco senza di loro! Servizio impeccabile e senza alcuno stress. Gentilezza, affidabilità, efficienza.' },
  { name: 'Simona Boccanelli', initials: 'SB', text: 'Con grandissima professionalità, cura, attenzione, precisione e bravura, ci ha aiutato a risolvere il nostro problema. Super consigliato!' },
  { name: 'Micaela Calabresi', initials: 'MC', text: 'Riccardo e i suoi ragazzi sono persone splendide, attente, puntuali e professionali. Il trasloco è avvenuto nei tempi definiti.' },
  { name: 'Chiara Franchin', initials: 'CF', text: 'Sempre affidabili, puntuali, precisi e per di più simpatici! Li consiglio vivamente a chiunque debba fare un trasloco a Roma.' },
  { name: 'Simona Sturba', initials: 'SS', text: 'Rapporto qualità/costo ottima! Un servizio ECCELLENTE! Attenzione in ogni fase del trasloco, sempre rispettosi.' },
]

const quartieri = [
  'Parioli', 'Flaminio', 'Prati', 'Trastevere', 'Monti', 'Testaccio',
  'EUR', 'Ostiense', 'Monteverde', 'Balduina', 'San Giovanni', 'Tuscolano',
  'Tiburtino', 'Aurelio', 'Trionfale', 'Torrino',
]

export default function Home() {
  const [activeReview, setActiveReview] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview(prev => (prev + 1) % reviews.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const goPrev = () => setActiveReview(prev => (prev - 1 + reviews.length) % reviews.length)
  const goNext = () => setActiveReview(prev => (prev + 1) % reviews.length)

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-left-inner">
            <img src="/LOGONO.png" alt="Blasi Traslog srl" className="hero-logo" />
            <h1 className="hero-title">
              Il tuo trasloco<br />a Roma,<br /><em>in mani sicure</em>
            </h1>
            <p className="hero-desc">Da oltre 30 anni siamo il riferimento per traslochi di abitazioni e uffici nella Capitale. Sopralluogo gratuito e preventivo personalizzato.</p>
            <div className="hero-actions">
              <Link to="/preventivo-trasloco" className="btn btn-gold btn-lg">
                Preventivo Gratuito <ArrowRight size={17} />
              </Link>
              <a href="tel:+393204085611" className="hero-phone">
                <Phone size={17} /> 320&nbsp;408&nbsp;5611
              </a>
            </div>
            <div className="hero-numbers">
              <div className="hero-num"><strong>30+</strong><span>Anni esperienza</span></div>
              <div className="hero-num"><strong>5.0 &#9733;</strong><span>Google Reviews</span></div>
              <div className="hero-num"><strong>1M+</strong><span>Oggetti trasportati</span></div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="/img/colosseo.jpg"
            alt="Roma"
            className="hero-photo"
          />
          <div className="hero-right-overlay" />
        </div>
      </section>

      {/* ─── TRUST ─── */}
      <div className="trust-bar">
        <div className="container trust-bar-inner">
          <div className="trust-item"><Shield size={15} /> Autorizzata Min. Trasporti</div>
          <div className="trust-item"><Shield size={15} /> ISO 9001</div>
          <div className="trust-item"><Shield size={15} /> ISO 14001</div>
          <div className="trust-item"><Shield size={15} /> ISO 45001</div>
          <div className="trust-item"><Shield size={15} /> Albo Autotrasportatori</div>
        </div>
      </div>

      {/* ─── PERCHE NOI ─── */}
      <section className="why-section">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Perché sceglierci</span>
            <h2>Esperienza, professionalità<br />e cura dei dettagli</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><CheckCircle size={24} /></div>
              <h3>Sopralluogo gratuito</h3>
              <p>Valutiamo ogni dettaglio direttamente a casa tua prima di fornirti un preventivo trasparente e senza sorprese.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Shield size={24} /></div>
              <h3>Azienda autorizzata</h3>
              <p>Personale in regola, mezzi assicurati e tutte le certificazioni: ISO 9001, 14001, 45001.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Truck size={24} /></div>
              <h3>Flotta operativa</h3>
              <p>Mezzi di ogni dimensione per servire tutti i quartieri di Roma, anche zone ZTL e centri storici.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Package size={24} /></div>
              <h3>Imballaggi professionali</h3>
              <p>Materiali di alta qualità e tecniche certificate per proteggere i tuoi oggetti più delicati.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="services-section">
        <div className="container">
          <div className="section-head">
            <span className="section-label">I nostri servizi</span>
            <h2>Tutto ciò che serve per il tuo trasloco</h2>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link to={s.link} className="service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-link">Scopri di più <ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
          <div className="services-footer">
            <Link to="/servizi" className="btn btn-navy">Tutti i Servizi <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Recensioni</span>
            <h2>La parola ai nostri clienti</h2>
          </div>

          <div className="rev-carousel">
            <button type="button" className="rev-arrow rev-prev" onClick={goPrev} aria-label="Precedente">
              <ChevronLeft size={20} />
            </button>

            <div className="rev-window">
              <div className="rev-track" style={{ transform: `translateX(-${activeReview * 100}%)` }}>
                {reviews.map((r, i) => (
                  <article className="rev-slide" key={i}>
                    <div className="rev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <blockquote className="rev-quote">&ldquo;{r.text}&rdquo;</blockquote>
                    <div className="rev-author">
                      <div className="rev-avatar">{r.initials}</div>
                      <div>
                        <div className="rev-name">{r.name}</div>
                        <div className="rev-source">Google Reviews</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button type="button" className="rev-arrow rev-next" onClick={goNext} aria-label="Successiva">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="rev-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`rev-dot${i === activeReview ? ' active' : ''}`}
                onClick={() => setActiveReview(i)}
                aria-label={`Recensione ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUARTIERI ─── */}
      <section className="quartieri-section">
        <div className="container quartieri-grid">
          <div className="quartieri-text">
            <span className="section-label">Copertura territoriale</span>
            <h2>Traslochi in tutti i <em>quartieri di Roma</em></h2>
            <p>La nostra flotta opera quotidianamente in tutta la Capitale, comprese le zone ZTL. Copriamo con capillarità l&apos;intero territorio urbano.</p>
            <ul className="quartieri-list">
              {quartieri.map((q, i) => (
                <li key={i}><MapPin size={13} /> {q}</li>
              ))}
            </ul>
            <Link to="/contatti" className="btn btn-navy" style={{ marginTop: 24 }}>
              Contattaci <ArrowRight size={15} />
            </Link>
          </div>
          <div className="quartieri-img">
            <img src="/img/quartieri-roma.jpg" alt="Quartieri Roma" />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Richiedi un Preventivo Gratuito</h2>
          <p>Compila il modulo e ricevi un preventivo personalizzato entro 24 ore.<br />Sopralluogo gratuito e senza impegno.</p>
          <div className="cta-btns">
            <Link to="/preventivo-trasloco" className="btn btn-white btn-lg">
              Preventivo Trasloco <ArrowRight size={17} />
            </Link>
            <a
              href="https://wa.me/393204085611?text=Salve%2C%20vorrei%20un%20preventivo%20per%20un%20trasloco."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white btn-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
