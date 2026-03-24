import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import './Preventivo.css'

export default function PreventivoNoleggioScala() {
  const [form, setForm] = useState({ nome:'', cognome:'', telefono:'', email:'', metratura:'', data:'', indirizzo:'', piano:'', note:'', privacy:false })
  const [status, setStatus] = useState('idle')
  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.privacy) return
    setStatus('sending')
    const message = [
      'RICHIESTA PREVENTIVO NOLEGGIO SCALA',
      '',
      `Nome: ${form.nome} ${form.cognome}`,
      `Telefono: ${form.telefono}`,
      `Email: ${form.email}`,
      '',
      `Metratura scala: ${form.metratura}`,
      `Data: ${form.data}`,
      `Indirizzo: ${form.indirizzo}`,
      `Piano: ${form.piano}`,
      form.note ? `\nNote: ${form.note}` : '',
    ].filter(Boolean).join('\n')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '8f81b793-d714-482e-8f33-1e2852cd2c65',
          subject: 'Richiesta Preventivo Noleggio Scala — ' + form.nome + ' ' + form.cognome,
          from_name: form.nome + ' ' + form.cognome,
          replyto: form.email || undefined,
          message,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/noleggio-scala">Noleggio</Link> / <span>Preventivo Scala</span></div>
          <h1>Preventivo <span className="gold-accent">Noleggio Scala</span></h1>
          <p>Richiedi un preventivo per il noleggio di scala aerea per traslochi.</p>
        </div>
      </section>

      <section style={{background:'var(--off-white)'}}>
        <div className="container">
          <div className="prev-layout">
            <form className="prev-form-card" onSubmit={handleSubmit}>
              <h2>Noleggio Scala Aerea</h2>
              <p className="subtitle">Compila il modulo e invia la richiesta via email</p>

              <div className="form-section-title">Informazioni di contatto</div>
              <div className="form-row">
                <div className="form-group"><label>Nome *</label><input required value={form.nome} onChange={e => update('nome', e.target.value)} /></div>
                <div className="form-group"><label>Cognome *</label><input required value={form.cognome} onChange={e => update('cognome', e.target.value)} /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Telefono *</label><input type="tel" required value={form.telefono} onChange={e => update('telefono', e.target.value)} /></div>
                <div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={e => update('email', e.target.value)} /></div>
              </div>

              <div className="form-section-title">Dettagli noleggio</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Metratura scala *</label>
                  <select required value={form.metratura} onChange={e => update('metratura', e.target.value)}>
                    <option value="">Seleziona metratura...</option>
                    <option value="20 metri">20 metri</option>
                    <option value="24 metri">24 metri</option>
                    <option value="34 metri">34 metri</option>
                    <option value="37 metri">37 metri</option>
                  </select>
                </div>
                <div className="form-group"><label>Data</label><input type="date" value={form.data} onChange={e => update('data', e.target.value)} /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Indirizzo</label><input value={form.indirizzo} onChange={e => update('indirizzo', e.target.value)} placeholder="Via, numero civico, CAP" /></div>
                <div className="form-group"><label>Piano</label><input value={form.piano} onChange={e => update('piano', e.target.value)} placeholder="Es: 5" /></div>
              </div>

              <div className="form-section-title">Note aggiuntive</div>
              <div className="form-group"><textarea rows={3} value={form.note} onChange={e => update('note', e.target.value)} placeholder="Informazioni aggiuntive..." /></div>

              <div className="privacy-check">
                <input type="checkbox" id="privacy-ns" checked={form.privacy} onChange={e => update('privacy', e.target.checked)} />
                <label htmlFor="privacy-ns">Dichiaro di aver letto e compreso l&apos;Informativa privacy</label>
              </div>
              {status === 'success' && (
                <div className="form-success"><CheckCircle size={20} /> Richiesta inviata! Ti contatteremo presto.</div>
              )}
              {status === 'error' && (
                <div className="form-error"><AlertCircle size={20} /> Errore nell'invio. Riprova o chiamaci al 320 408 5611.</div>
              )}
              <button type="submit" disabled={status === 'sending' || status === 'success'} className="btn btn-gold btn-lg" style={{width:'100%',justifyContent:'center'}}>
                <Mail size={20} /> {status === 'sending' ? 'Invio in corso...' : 'Invia Richiesta'}
              </button>
            </form>

            <div className="prev-sidebar">
              <div className="prev-sidebar-card">
                <h3>Scale disponibili</h3>
                <div className="step"><p><strong>20 metri</strong> &mdash; fino al 6&deg; piano</p></div>
                <div className="step"><p><strong>24 metri</strong> &mdash; fino al 7&deg; piano</p></div>
                <div className="step"><p><strong>34 metri</strong> &mdash; fino al 10&deg; piano</p></div>
                <div className="step"><p><strong>37 metri</strong> &mdash; fino al 12&deg; piano</p></div>
              </div>
              <div className="prev-sidebar-card">
                <h3>Ideale per</h3>
                <div className="step"><p>&#10003; Traslochi ad alto piano</p></div>
                <div className="step"><p>&#10003; Mobili ingombranti</p></div>
                <div className="step"><p>&#10003; Scale strette o assenti</p></div>
                <div className="step"><p>&#10003; Sollevamento pianoforti</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
