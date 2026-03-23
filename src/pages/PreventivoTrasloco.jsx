import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, ImagePlus } from 'lucide-react'
import './Preventivo.css'

const tipiTrasloco = [
  'Trasloco Chiavi in Mano',
  'Trasloco Normale (smontaggio/rimontaggio)',
  'Trasloco Fai Da Te',
  'Trasloco Abitazione',
  'Trasloco Ufficio/Azienda',
  'Trasloco Roma-Milano',
  'Trasloco Milano-Roma',
  'Trasloco Internazionale',
  'Deposito/Custodia Merci',
  'Trasloco Pianoforte',
]

export default function PreventivoTrasloco() {
  const [form, setForm] = useState({ nome:'', cognome:'', telefono:'', email:'', tipo:'', data:'', partenzaIndirizzo:'', partenzaPiano:'', partenzaAscensore:'', destinazioneIndirizzo:'', destinazionePiano:'', destinazioneAscensore:'', note:'', privacy:false })

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.privacy) return
    const subject = encodeURIComponent('Richiesta Preventivo Trasloco')
    const body = encodeURIComponent([
      'RICHIESTA PREVENTIVO TRASLOCO',
      '',
      `Nome: ${form.nome} ${form.cognome}`,
      `Telefono: ${form.telefono}`,
      `Email: ${form.email}`,
      '',
      `Tipo trasloco: ${form.tipo}`,
      `Data: ${form.data}`,
      '',
      'PARTENZA:',
      `Indirizzo: ${form.partenzaIndirizzo}`,
      `Piano: ${form.partenzaPiano}`,
      `Ascensore: ${form.partenzaAscensore}`,
      '',
      'DESTINAZIONE:',
      `Indirizzo: ${form.destinazioneIndirizzo}`,
      `Piano: ${form.destinazionePiano}`,
      `Ascensore: ${form.destinazioneAscensore}`,
      '',
      form.note ? `Note: ${form.note}` : '',
    ].filter(Boolean).join('\n'))
    window.location.href = `mailto:info@blasitraslog.it?subject=${subject}&body=${body}`
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/servizi">Preventivi</Link> / <span>Trasloco</span></div>
          <h1>Preventivo <span className="gold-accent">Trasloco</span></h1>
          <p>Compila il modulo e invia la richiesta via email. Sopralluogo gratuito.</p>
        </div>
      </section>

      <section style={{background:'var(--off-white)'}}>
        <div className="container">
          <div className="prev-layout">
            <form className="prev-form-card" onSubmit={handleSubmit}>
              <h2>Richiedi un preventivo</h2>
              <p className="subtitle">Compila tutti i campi e invia la richiesta via email</p>

              <div className="form-section-title">Informazioni di contatto</div>
              <div className="form-row">
                <div className="form-group"><label>Nome *</label><input required value={form.nome} onChange={e => update('nome', e.target.value)} /></div>
                <div className="form-group"><label>Cognome *</label><input required value={form.cognome} onChange={e => update('cognome', e.target.value)} /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Telefono *</label><input type="tel" required value={form.telefono} onChange={e => update('telefono', e.target.value)} /></div>
                <div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={e => update('email', e.target.value)} /></div>
              </div>

              <div className="form-section-title">Tipo e data trasloco</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Tipo di trasloco *</label>
                  <select required value={form.tipo} onChange={e => update('tipo', e.target.value)}>
                    <option value="">Seleziona tipo...</option>
                    {tipiTrasloco.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-group"><label>Data indicativa</label><input type="date" value={form.data} onChange={e => update('data', e.target.value)} /></div>
              </div>

              <div className="form-section-title">Indirizzo di partenza</div>
              <div className="form-group"><label>Indirizzo completo *</label><input required value={form.partenzaIndirizzo} onChange={e => update('partenzaIndirizzo', e.target.value)} placeholder="Via, numero civico, CAP, citt&agrave;" /></div>
              <div className="form-row">
                <div className="form-group"><label>Piano</label><input value={form.partenzaPiano} onChange={e => update('partenzaPiano', e.target.value)} placeholder="Es: 3" /></div>
                <div className="form-group">
                  <label>Ascensore</label>
                  <select value={form.partenzaAscensore} onChange={e => update('partenzaAscensore', e.target.value)}>
                    <option value="">Seleziona...</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="form-section-title">Indirizzo di destinazione</div>
              <div className="form-group"><label>Indirizzo completo *</label><input required value={form.destinazioneIndirizzo} onChange={e => update('destinazioneIndirizzo', e.target.value)} placeholder="Via, numero civico, CAP, citt&agrave;" /></div>
              <div className="form-row">
                <div className="form-group"><label>Piano</label><input value={form.destinazionePiano} onChange={e => update('destinazionePiano', e.target.value)} placeholder="Es: 1" /></div>
                <div className="form-group">
                  <label>Ascensore</label>
                  <select value={form.destinazioneAscensore} onChange={e => update('destinazioneAscensore', e.target.value)}>
                    <option value="">Seleziona...</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="form-section-title">Note aggiuntive</div>
              <div className="form-group"><textarea rows={4} value={form.note} onChange={e => update('note', e.target.value)} placeholder="Informazioni aggiuntive sul trasloco..." /></div>

              <div className="privacy-check">
                <input type="checkbox" id="privacy" checked={form.privacy} onChange={e => update('privacy', e.target.checked)} />
                <label htmlFor="privacy">Dichiaro di aver letto e compreso l&apos;Informativa privacy</label>
              </div>

              <button type="submit" className="btn btn-gold btn-lg" style={{width:'100%',justifyContent:'center'}}>
                <Mail size={20} /> Invia Richiesta via Email
              </button>
              <div className="mailto-photo-hint">
                <ImagePlus size={15} />
                Dopo il click si aprirà il tuo client email precompilato — potrai allegare foto direttamente lì prima di inviare.
              </div>
            </form>

            <div className="prev-sidebar">
              <div className="prev-sidebar-card">
                <h3>Come funziona</h3>
                <div className="step"><div className="step-num">1</div><p><strong>Compila il modulo</strong>Inserisci i dettagli del tuo trasloco</p></div>
                <div className="step"><div className="step-num">2</div><p><strong>Si apre la tua email</strong>Il testo è già precompilato, allega le foto se vuoi</p></div>
                <div className="step"><div className="step-num">3</div><p><strong>Sopralluogo gratuito</strong>Un nostro responsabile ti contatter&agrave;</p></div>
                <div className="step"><div className="step-num">4</div><p><strong>Ricevi il preventivo</strong>Preventivo dettagliato e personalizzato</p></div>
              </div>
              <div className="prev-sidebar-card">
                <h3>Perch&eacute; sceglierci</h3>
                <div className="step"><p>&#10003; Oltre 30 anni di esperienza</p></div>
                <div className="step"><p>&#10003; Certificazioni ISO 9001, 14001, 45001</p></div>
                <div className="step"><p>&#10003; Assicurazione completa</p></div>
                <div className="step"><p>&#10003; 5.0 stelle su Google</p></div>
                <div className="step"><p>&#10003; Sopralluogo gratuito</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
