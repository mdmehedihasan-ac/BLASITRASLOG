import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import './Preventivo.css'

const WEB3FORMS_ACCESS_KEY = '8f81b793-d714-482e-8f33-1e2852cd2c65'
const MAX_ATTACHMENTS = 5
const MAX_FILE_SIZE = 5 * 1024 * 1024

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
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [attachments, setAttachments] = useState([])
  const [fileError, setFileError] = useState('')

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const handleFilesChange = (e) => {
    setFileError('')
    const selected = Array.from(e.target.files || [])

    if (selected.length > MAX_ATTACHMENTS) {
      setAttachments(selected.slice(0, MAX_ATTACHMENTS))
      setFileError(`Puoi allegare al massimo ${MAX_ATTACHMENTS} foto.`)
      return
    }

    const tooLarge = selected.find(file => file.size > MAX_FILE_SIZE)
    if (tooLarge) {
      setAttachments([])
      setFileError(`Il file "${tooLarge.name}" supera 5MB.`)
      return
    }

    setAttachments(selected)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.privacy) return
    if (fileError) return
    setStatus('sending')

    const message = [
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
      attachments.length ? `Foto allegate: ${attachments.length}` : 'Foto allegate: nessuna',
      form.note ? `\nNote: ${form.note}` : '',
    ].filter(Boolean).join('\n')

    const payload = new FormData()
    payload.append('access_key', WEB3FORMS_ACCESS_KEY)
    payload.append('subject', `Richiesta Preventivo Trasloco - ${form.nome} ${form.cognome}`)
    payload.append('from_name', `${form.nome} ${form.cognome}`)
    payload.append('email', form.email || 'noreply@blasitraslog.it')
    payload.append('replyto', form.email || 'noreply@blasitraslog.it')
    payload.append('message', message)
    attachments.forEach(file => payload.append('attachment', file))

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setAttachments([])
        setFileError('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
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

              <div className="form-section-title">Foto da allegare (opzionale)</div>
              <div className="form-group">
                <label>Carica foto ambienti/mobili</label>
                <input type="file" accept="image/*" multiple onChange={handleFilesChange} />
                <div className="upload-help">Massimo 5 foto, 5MB ciascuna.</div>
                {attachments.length > 0 && (
                  <ul className="upload-list">
                    {attachments.map(file => <li key={file.name}>{file.name}</li>)}
                  </ul>
                )}
                {fileError && <div className="form-error">{fileError}</div>}
              </div>

              <div className="privacy-check">
                <input type="checkbox" id="privacy" checked={form.privacy} onChange={e => update('privacy', e.target.checked)} />
                <label htmlFor="privacy">Dichiaro di aver letto e compreso l&apos;Informativa privacy</label>
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
                <h3>Come funziona</h3>
                <div className="step"><div className="step-num">1</div><p><strong>Compila il modulo</strong>Inserisci i dettagli del tuo trasloco</p></div>
                <div className="step"><div className="step-num">2</div><p><strong>Riceviamo la richiesta</strong>La mail arriva direttamente a noi</p></div>
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
