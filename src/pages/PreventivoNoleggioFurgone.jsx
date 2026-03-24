import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import './Preventivo.css'

const WEB3FORMS_ACCESS_KEY = '8f81b793-d714-482e-8f33-1e2852cd2c65'
const MAX_ATTACHMENTS = 5
const MAX_FILE_SIZE = 5 * 1024 * 1024

export default function PreventivoNoleggioFurgone() {
  const [form, setForm] = useState({ nome:'', cognome:'', telefono:'', email:'', durata:'', data:'', indirizzo:'', note:'', privacy:false })
  const [status, setStatus] = useState('idle')
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
      'RICHIESTA PREVENTIVO NOLEGGIO FURGONE',
      '',
      `Nome: ${form.nome} ${form.cognome}`,
      `Telefono: ${form.telefono}`,
      `Email: ${form.email}`,
      '',
      `Durata: ${form.durata}`,
      `Data: ${form.data}`,
      `Indirizzo ritiro: ${form.indirizzo}`,
      '',
      attachments.length ? `Foto allegate: ${attachments.length}` : 'Foto allegate: nessuna',
      form.note ? `\nNote: ${form.note}` : '',
    ].filter(Boolean).join('\n')

    const payload = new FormData()
    payload.append('access_key', WEB3FORMS_ACCESS_KEY)
    payload.append('subject', `Richiesta Preventivo Noleggio Furgone - ${form.nome} ${form.cognome}`)
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
          <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/noleggio-furgone">Noleggio</Link> / <span>Preventivo Furgone</span></div>
          <h1>Preventivo <span className="gold-accent">Noleggio Furgone</span></h1>
          <p>Richiedi un preventivo per il noleggio del nostro furgone con autista.</p>
        </div>
      </section>

      <section style={{background:'var(--off-white)'}}>
        <div className="container">
          <div className="prev-layout">
            <form className="prev-form-card" onSubmit={handleSubmit}>
              <h2>Noleggio Furgone con Autista</h2>
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
                  <label>Durata *</label>
                  <select required value={form.durata} onChange={e => update('durata', e.target.value)}>
                    <option value="">Seleziona durata...</option>
                    <option value="1-4 ore (€250)">1-4 ore &mdash; €250</option>
                    <option value="Fino a 7 ore (€350)">Fino a 7 ore &mdash; €350</option>
                  </select>
                </div>
                <div className="form-group"><label>Data</label><input type="date" value={form.data} onChange={e => update('data', e.target.value)} /></div>
              </div>
              <div className="form-group"><label>Indirizzo per il ritiro</label><input value={form.indirizzo} onChange={e => update('indirizzo', e.target.value)} placeholder="Via, numero civico, CAP, citt&agrave;" /></div>

              <div className="form-section-title">Note aggiuntive</div>
              <div className="form-group"><textarea rows={3} value={form.note} onChange={e => update('note', e.target.value)} placeholder="Informazioni aggiuntive..." /></div>

              <div className="form-section-title">Foto da allegare (opzionale)</div>
              <div className="form-group">
                <label>Carica foto utili</label>
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
                <input type="checkbox" id="privacy-nf" checked={form.privacy} onChange={e => update('privacy', e.target.checked)} />
                <label htmlFor="privacy-nf">Dichiaro di aver letto e compreso l&apos;Informativa privacy</label>
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
                <h3>Cosa include</h3>
                <div className="step"><p>&#10003; Furgone da 35 quintali</p></div>
                <div className="step"><p>&#10003; Autista esperto</p></div>
                <div className="step"><p>&#10003; Carrelli, brevetti, cinte</p></div>
                <div className="step"><p>&#10003; Coperte per protezione</p></div>
                <div className="step"><p>&#10003; Permessi ZTL inclusi</p></div>
              </div>
              <div className="prev-sidebar-card">
                <h3>Tariffe</h3>
                <div className="step"><p><strong>1-4 ore:</strong> €250</p></div>
                <div className="step"><p><strong>Fino a 7 ore:</strong> €350</p></div>
                <div className="step"><p style={{fontSize:'0.85rem',color:'var(--text-light)'}}>IVA inclusa. Pedaggi e ZTL extra esclusi.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
