import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import './TraslocoDetail.css'

export default function TraslocoNormale() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/servizi">Servizi</Link> / <span>Trasloco Normale</span></div>
          <h1>Trasloco normale <span className="gold-accent">soluzione risparmio</span></h1>
          <p>Smontaggio, trasporto e rimontaggio dei mobili. La soluzione ideale per chi vuole risparmiare.</p>
        </div>
      </section>
      <section className="trasloco-detail">
        <div className="container">
          <div className="trasloco-layout">
            <div className="trasloco-text">
              <h2>Innovazione tecnologica per lo smontaggio e rimontaggio dei mobili</h2>
              <p>Blasi Traslog ha sempre investito sulla formazione del personale in modo da andare di pari passo con l&apos;innovazione tecnologica. Grazie ad un aggiornamento costante, il nostro staff di traslocatori &egrave; in grado di affrontare qualsiasi operazione in modo accurato e in completa sicurezza.</p>
              <p>Si tratta di un servizio molto importante perch&eacute; da esso dipende l&apos;eventuale danno che si pu&ograve; causare durante il trasporto. Se un mobile non viene smontato nel modo corretto e non viene riposto con cura, ha un&apos;alta probabilit&agrave; di rompersi.</p>
              <h3 style={{marginTop:24,marginBottom:16}}>Smontaggio e rimontaggio mobili specializzato</h3>
              <ul>
                <li><CheckCircle size={18} /> Cucine componibili</li>
                <li><CheckCircle size={18} /> Camere da letto e camerette</li>
                <li><CheckCircle size={18} /> Armadi e cabine armadio</li>
                <li><CheckCircle size={18} /> Mobili da ufficio e librerie</li>
                <li><CheckCircle size={18} /> Mobili di antiquariato</li>
              </ul>
              <h3 style={{marginTop:24,marginBottom:16}}>Trasporto e stoccaggio sicuro</h3>
              <p>Il team di Blasi Traslog fornisce un servizio completo per lo spostamento di mobili per case, uffici o aziende, assicurando transito e stoccaggio sicuri. Abbiamo pi&ugrave; di tre decadi di esperienza nell&apos;offrire servizi di trasloco professionali.</p>
            </div>
            <div className="trasloco-sidebar">
              <img src="/img/trasloco-boxes.jpg" alt="Trasloco normale" />
              <div className="sidebar-cta">
                <h3>Preventivo Gratuito</h3>
                <p>Richiedi un preventivo personalizzato per il tuo trasloco normale.</p>
                <Link to="/preventivo-trasloco" className="btn btn-gold">Richiedi Preventivo <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
