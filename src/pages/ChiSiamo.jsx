import { Link } from 'react-router-dom'
import { Award, Users, Truck, Shield, Heart, Clock } from 'lucide-react'
import './ChiSiamo.css'

export default function ChiSiamo() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / <span>Chi Siamo</span></div>
          <h1>Chi <span className="gold-accent">Siamo</span></h1>
          <p>Da oltre 30 anni al servizio di Roma per traslochi professionali, sicuri e garantiti.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="chi-intro">
            <div>
              <h2>La storia di <span className="gold-accent">BlasiTraslog</span></h2>
              <p>
                BlasiTraslog srl&reg; &egrave; un&apos;azienda leader nel settore dei traslochi a Roma,
                con oltre 30 anni di esperienza nel trasporto e nella logistica. Fondata con la missione
                di offrire un servizio di trasloco completo e professionale, siamo diventati un punto
                di riferimento per famiglie e aziende in tutta Roma e provincia.
              </p>
              <p>
                La nostra squadra &egrave; composta da professionisti qualificati, formati per gestire
                ogni tipo di trasloco con la massima cura e attenzione. Dal piccolo appartamento al
                grande ufficio, garantiamo un servizio su misura per ogni esigenza.
              </p>
              <p>
                Siamo orgogliosi delle nostre certificazioni ISO 9001, 14001 e 45001 che attestano
                il nostro impegno per la qualit&agrave;, l&apos;ambiente e la sicurezza sul lavoro.
              </p>
            </div>
            <div className="chi-intro-img">
              <img src="/img/trasloco-team.jpg" alt="Team BlasiTraslog" />
            </div>
          </div>
        </div>
      </section>

      <section style={{background:'var(--off-white)'}}>
        <div className="container">
          <div className="section-header"><h2>I nostri <span className="gold-accent">valori</span></h2></div>
          <div className="chi-values">
            <div className="chi-value">
              <div className="chi-value-icon"><Award size={28} /></div>
              <h3>Professionalit&agrave;</h3>
              <p>Personale formato e qualificato, attrezzature moderne e procedure certificate per ogni trasloco.</p>
            </div>
            <div className="chi-value">
              <div className="chi-value-icon"><Shield size={28} /></div>
              <h3>Sicurezza</h3>
              <p>Assicurazione completa su tutti i traslochi, imballaggio professionale e trasporto sicuro.</p>
            </div>
            <div className="chi-value">
              <div className="chi-value-icon"><Heart size={28} /></div>
              <h3>Cura del cliente</h3>
              <p>Ascoltiamo le tue esigenze e offriamo soluzioni personalizzate. 5.0 stelle su Google.</p>
            </div>
            <div className="chi-value">
              <div className="chi-value-icon"><Clock size={28} /></div>
              <h3>Puntualit&agrave;</h3>
              <p>Rispettiamo tempi e scadenze, organizzando ogni fase del trasloco con precisione.</p>
            </div>
            <div className="chi-value">
              <div className="chi-value-icon"><Truck size={28} /></div>
              <h3>Esperienza</h3>
              <p>Oltre 30 anni nel settore, pi&ugrave; di 1 milione di oggetti trasportati con successo.</p>
            </div>
            <div className="chi-value">
              <div className="chi-value-icon"><Users size={28} /></div>
              <h3>Team affiatato</h3>
              <p>Una squadra coesa di professionisti che lavora con passione e dedizione ogni giorno.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chi-certs">
        <div className="container">
          <div className="section-header"><h2>Le nostre <span className="gold-accent">certificazioni</span></h2><p>Garanzia di qualit&agrave; e affidabilit&agrave;</p></div>
          <div className="chi-certs-grid">
            <div className="chi-cert-card">
              <h3>ISO 9001</h3>
              <p>Sistema di Gestione per la Qualit&agrave; &mdash; Garanzia di processi ottimizzati e servizio eccellente.</p>
            </div>
            <div className="chi-cert-card">
              <h3>ISO 14001</h3>
              <p>Sistema di Gestione Ambientale &mdash; Impegno concreto per la sostenibilit&agrave; e il rispetto dell&apos;ambiente.</p>
            </div>
            <div className="chi-cert-card">
              <h3>ISO 45001</h3>
              <p>Salute e Sicurezza sul Lavoro &mdash; Tutela del personale e condizioni di lavoro sicure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chi-legal">
        <div className="container">
          <div className="section-header"><h2>Dati <span className="gold-accent">aziendali</span></h2></div>
          <div className="chi-legal-grid">
            <div className="chi-legal-item"><strong>Ragione Sociale</strong><span>BlasiTraslog srl</span></div>
            <div className="chi-legal-item"><strong>P.IVA</strong><span>12345678901</span></div>
            <div className="chi-legal-item"><strong>REA</strong><span>RM - 1234567</span></div>
            <div className="chi-legal-item"><strong>Sede Legale</strong><span>Roma, Italia</span></div>
            <div className="chi-legal-item"><strong>Telefono</strong><span>06 45495964</span></div>
            <div className="chi-legal-item"><strong>Email</strong><span>info@blasitraslog.it</span></div>
          </div>
        </div>
      </section>
    </>
  )
}
