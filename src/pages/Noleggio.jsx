import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Clock, MapPin, Truck, Scale } from 'lucide-react'
import './Noleggio.css'

export default function Noleggio() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Servizi di Noleggio</h1>
          <p>Furgoni con conducente e scale per traslochi a Roma e provincia</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="noleggio-grid">
            <div className="noleggio-card">
              <div className="noleggio-card-img">
                <img
                  src="/img/noleggio-furgone-con-conducente-roma-02-800x600.jpg"
                  alt="Noleggio furgone con conducente Roma"
                />
              </div>
              <div className="noleggio-card-body">
                <h3>Noleggio Furgone con Conducente</h3>
                <p>
                  Se hai bisogno di noleggiare un furgone per trasloco, deposito o esigenze lavorative
                  in tutto il raccordo anulare, richiedi un preventivo gratuito e senza impegno.
                </p>
                <ul className="noleggio-features">
                  <li><CheckCircle size={18} /> Accesso ZTL incluso</li>
                  <li><CheckCircle size={18} /> Attrezzature: carrelli, brevetti, cinte, coperte</li>
                  <li><CheckCircle size={18} /> Conducente professionista incluso</li>
                  <li><Clock size={18} /> Prestazione: da 1 a 8 ore al giorno</li>
                  <li><MapPin size={18} /> Tutto il raccordo anulare di Roma</li>
                </ul>
                <Link to="/preventivo" className="btn btn-primary">
                  Richiedi Preventivo <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="noleggio-card">
              <div className="noleggio-card-img">
                <img
                  src="/img/noleggio-scala-traslochi-cestello-roma-01-800x600.jpg"
                  alt="Noleggio scala traslochi Roma"
                />
              </div>
              <div className="noleggio-card-body">
                <h3>Noleggio Scala per Traslochi</h3>
                <p>
                  Noleggio di scale componibili e piattaforme aeree per ridurre la durata del tuo
                  trasloco o raggiungere i piani più alti di qualsiasi edificio.
                </p>
                <ul className="noleggio-features">
                  <li><CheckCircle size={18} /> Scale da 18, 25, 34 e 70 metri</li>
                  <li><CheckCircle size={18} /> Piattaforme aeree disponibili</li>
                  <li><CheckCircle size={18} /> Elimina costi impalcature e gru</li>
                  <li><Clock size={18} /> Prestazione minima: da 1 a 4 ore</li>
                  <li><MapPin size={18} /> Roma e tutta la provincia</li>
                </ul>
                <Link to="/preventivo" className="btn btn-primary">
                  Richiedi Preventivo <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Hai bisogno di un noleggio?</h2>
          <p>Contattaci per un preventivo personalizzato e senza impegno</p>
          <Link to="/preventivo" className="btn btn-dark">
            Richiedi Preventivo <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
