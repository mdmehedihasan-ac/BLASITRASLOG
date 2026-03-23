import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Noleggio.css'

const scale = [
  { m: '20', piano: '6', desc: 'Ideale per palazzi di media altezza, condomini residenziali e ville.' },
  { m: '24', piano: '7', desc: 'Perfetta per edifici pi\u00f9 alti con accesso dalla strada o cortili.' },
  { m: '34', piano: '10', desc: 'Per grattacieli e grandi edifici, sollevamento merci pesanti.' },
  { m: '37', piano: '12', desc: 'La nostra scala pi\u00f9 alta, per le situazioni pi\u00f9 impegnative.' },
]

export default function NoleggioScala() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / <span>Noleggio Scala</span></div>
          <h1>Noleggio Scala <span className="gold-accent">Aerea per Traslochi</span></h1>
          <p>Scale aeree da 20 a 37 metri per traslochi ad alto piano, sollevamento mobili e pianoforti.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="nol-intro">
            <div className="nol-intro-text">
              <h2>Scale aeree <span className="gold-accent">professionali</span></h2>
              <p>
                Il noleggio scala aerea per traslochi &egrave; la soluzione ideale quando l&apos;ascensore non basta
                o quando le scale interne sono troppo strette per il passaggio di mobili ingombranti.
              </p>
              <p>
                Le nostre scale aeree raggiungono fino a 37 metri di altezza, permettendo di operare
                fino al 12&deg; piano. Perfette anche per il sollevamento di pianoforti, casseforti e
                oggetti di grandi dimensioni.
              </p>
              <Link to="/preventivo-noleggio-scala" className="btn btn-gold">Richiedi preventivo <ArrowRight size={16} /></Link>
            </div>
            <div className="nol-intro-img">
              <img src="/img/noleggio-scala-traslochi-cestello-roma-01-800x600.jpg" alt="Scala aerea BlasiTraslog" />
            </div>
          </div>
        </div>
      </section>

      <section style={{background:'var(--off-white)'}}>
        <div className="container">
          <div className="section-header"><h2>Le nostre <span className="gold-accent">scale</span></h2><p>Quattro metrature per ogni esigenza</p></div>
          <div className="nol-scale-grid">
            {scale.map(s => (
              <div className="nol-scale-card" key={s.m}>
                <div className="meters">{s.m}m</div>
                <div className="meters-sub">fino al {s.piano}&deg; piano</div>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header"><h2>Quando <span className="gold-accent">serve</span></h2></div>
          <div className="nol-features">
            <div className="nol-feature-card"><h3>Traslochi ad alto piano</h3><p>Quando l&apos;ascensore &egrave; troppo piccolo o assente, la scala aerea velocizza il trasloco in sicurezza.</p></div>
            <div className="nol-feature-card"><h3>Mobili ingombranti</h3><p>Divani, armadi e mobili pesanti che non passano dalle scale interne del palazzo.</p></div>
            <div className="nol-feature-card"><h3>Pianoforti e casseforti</h3><p>Sollevamento sicuro di oggetti pesanti con braccio meccanico professionale.</p></div>
            <div className="nol-feature-card"><h3>Ristrutturazioni</h3><p>Ideale anche per il sollevamento di materiali edili ai piani alti.</p></div>
          </div>
        </div>
      </section>

      <section className="nol-cta">
        <div className="container">
          <h2>Prenota la scala aerea</h2>
          <p>Contattaci per un preventivo gratuito sul noleggio scala per il tuo trasloco.</p>
          <div className="btn-row">
            <Link to="/preventivo-noleggio-scala" className="btn btn-gold btn-lg">Richiedi preventivo <ArrowRight size={16} /></Link>
            <a href="https://wa.me/393204085611" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">WhatsApp diretto</a>
          </div>
        </div>
      </section>
    </>
  )
}
