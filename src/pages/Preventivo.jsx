import { useState } from 'react'
import { MessageCircle, Upload, Phone, Clock, Shield, CheckCircle, X, Camera } from 'lucide-react'
import './Preventivo.css'

const WHATSAPP_NUMBER = '393204085611'

const tipiTrasloco = [
  'Trasloco completo chiavi in mano',
  'Trasloco normale',
  'Trasloco economico Fai da Te',
  'Trasloco ufficio/azienda',
  'Deposito merci / custodia mobili',
  'Solo trasporto',
  'Trasloco Roma - Milano',
  'Trasloco Milano - Roma',
  'Trasloco internazionale',
  'Altro',
]

export default function Preventivo() {
  const [form, setForm] = useState({
    nome: '', cognome: '', telefono: '', email: '',
    tipoTrasloco: '', dataTrasloco: '',
    partenzaIndirizzo: '', partenzaPiano: '', partenzaAscensore: '',
    destinazioneIndirizzo: '', destinazionePiano: '', destinazioneAscensore: '',
    note: '',
  })
  const [photos, setPhotos] = useState([])
  const [privacy, setPrivacy] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files)
    const newPhotos = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }))
    setPhotos(prev => [...prev, ...newPhotos].slice(0, 8))
  }

  const removePhoto = (index) => {
    setPhotos(prev => {
      const updated = [...prev]
      URL.revokeObjectURL(updated[index].preview)
      updated.splice(index, 1)
      return updated
    })
  }

  const buildWhatsAppMessage = () => {
    let msg = `🏠 *RICHIESTA PREVENTIVO TRASLOCO*\n\n`
    msg += `👤 *Dati Personali*\n`
    msg += `Nome: ${form.nome} ${form.cognome}\n`
    if (form.telefono) msg += `Tel: ${form.telefono}\n`
    if (form.email) msg += `Email: ${form.email}\n`
    msg += `\n📦 *Tipo Trasloco*\n`
    msg += `${form.tipoTrasloco || 'Non specificato'}\n`
    if (form.dataTrasloco) msg += `Data indicativa: ${form.dataTrasloco}\n`
    msg += `\n📍 *Indirizzo di Partenza*\n`
    msg += `${form.partenzaIndirizzo || 'Non specificato'}\n`
    if (form.partenzaPiano) msg += `Piano: ${form.partenzaPiano}`
    if (form.partenzaAscensore) msg += ` | Ascensore: ${form.partenzaAscensore}`
    if (form.partenzaPiano || form.partenzaAscensore) msg += '\n'
    msg += `\n📍 *Indirizzo di Destinazione*\n`
    msg += `${form.destinazioneIndirizzo || 'Non specificato'}\n`
    if (form.destinazionePiano) msg += `Piano: ${form.destinazionePiano}`
    if (form.destinazioneAscensore) msg += ` | Ascensore: ${form.destinazioneAscensore}`
    if (form.destinazionePiano || form.destinazioneAscensore) msg += '\n'
    if (form.note) {
      msg += `\n📝 *Note aggiuntive*\n${form.note}\n`
    }
    if (photos.length > 0) {
      msg += `\n📸 *Foto*: ${photos.length} foto allegate (verranno inviate di seguito)`
    }
    return msg
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nome || !form.telefono || !privacy) {
      alert('Per favore compila almeno nome, telefono e accetta la privacy.')
      return
    }
    const message = buildWhatsAppMessage()
    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener')
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Richiedi un Preventivo</h1>
          <p>Compila il modulo e invia la tua richiesta direttamente su WhatsApp. Ti risponderemo rapidamente!</p>
        </div>
      </section>

      <section className="preventivo-page">
        <div className="container">
          <div className="preventivo-layout">
            <form className="preventivo-form-card" onSubmit={handleSubmit}>
              <div className="form-section-title">Informazioni di Contatto</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Nome *</label>
                  <input type="text" name="nome" value={form.nome} onChange={handleChange} placeholder="Il tuo nome" required />
                </div>
                <div className="form-group">
                  <label>Cognome</label>
                  <input type="text" name="cognome" value={form.cognome} onChange={handleChange} placeholder="Il tuo cognome" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Telefono *</label>
                  <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+39 ..." required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@esempio.it" />
                </div>
              </div>

              <div className="form-section-title">Tipo e Data del Trasloco</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Tipo di Trasloco</label>
                  <select name="tipoTrasloco" value={form.tipoTrasloco} onChange={handleChange}>
                    <option value="">Seleziona tipo...</option>
                    {tipiTrasloco.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Data Indicativa</label>
                  <input type="date" name="dataTrasloco" value={form.dataTrasloco} onChange={handleChange} />
                </div>
              </div>

              <div className="form-section-title">Indirizzo di Partenza</div>
              <div className="form-group">
                <label>Indirizzo</label>
                <input type="text" name="partenzaIndirizzo" value={form.partenzaIndirizzo} onChange={handleChange} placeholder="Via, numero civico, città" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Piano</label>
                  <select name="partenzaPiano" value={form.partenzaPiano} onChange={handleChange}>
                    <option value="">Seleziona...</option>
                    <option value="Terra">Piano terra</option>
                    <option value="1">1° Piano</option>
                    <option value="2">2° Piano</option>
                    <option value="3">3° Piano</option>
                    <option value="4">4° Piano</option>
                    <option value="5+">5° Piano o superiore</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Ascensore</label>
                  <select name="partenzaAscensore" value={form.partenzaAscensore} onChange={handleChange}>
                    <option value="">Seleziona...</option>
                    <option value="Sì">Sì</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="form-section-title">Indirizzo di Destinazione</div>
              <div className="form-group">
                <label>Indirizzo</label>
                <input type="text" name="destinazioneIndirizzo" value={form.destinazioneIndirizzo} onChange={handleChange} placeholder="Via, numero civico, città" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Piano</label>
                  <select name="destinazionePiano" value={form.destinazionePiano} onChange={handleChange}>
                    <option value="">Seleziona...</option>
                    <option value="Terra">Piano terra</option>
                    <option value="1">1° Piano</option>
                    <option value="2">2° Piano</option>
                    <option value="3">3° Piano</option>
                    <option value="4">4° Piano</option>
                    <option value="5+">5° Piano o superiore</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Ascensore</label>
                  <select name="destinazioneAscensore" value={form.destinazioneAscensore} onChange={handleChange}>
                    <option value="">Seleziona...</option>
                    <option value="Sì">Sì</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="form-section-title">Foto & Note</div>
              <div className="form-group">
                <label>Foto delle stanze / merce da traslocare</label>
                <label className="photo-upload-area" htmlFor="photo-input">
                  <Camera size={32} />
                  <p>Clicca per aggiungere foto</p>
                  <small>Massimo 8 foto. Le invierai poi su WhatsApp.</small>
                </label>
                <input
                  id="photo-input"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoChange}
                  style={{ display: 'none' }}
                />
                {photos.length > 0 && (
                  <div className="photo-preview-grid">
                    {photos.map((photo, i) => (
                      <div className="photo-preview" key={i}>
                        <img src={photo.preview} alt={`Foto ${i + 1}`} />
                        <button type="button" onClick={() => removePhoto(i)}><X size={12} /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Note aggiuntive</label>
                <textarea name="note" value={form.note} onChange={handleChange} placeholder="Oggetti particolari, pianoforti, casseforti, mobili su misura, necessità speciali..."></textarea>
              </div>

              <div className="privacy-check">
                <input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} />
                <span>Dichiaro di aver letto e compreso l'Informativa Privacy e acconsento al trattamento dei miei dati personali.</span>
              </div>

              <div className="whatsapp-submit">
                <button type="submit" className="btn btn-whatsapp">
                  <MessageCircle size={22} /> Invia Preventivo su WhatsApp
                </button>
              </div>
            </form>

            <div className="preventivo-sidebar">
              <div className="sidebar-card">
                <h3>Come funziona</h3>
                <div className="sidebar-step">
                  <div className="sidebar-step-num">1</div>
                  <div className="sidebar-step-text">
                    <h4>Compila il modulo</h4>
                    <p>Inserisci i dettagli del trasloco</p>
                  </div>
                </div>
                <div className="sidebar-step">
                  <div className="sidebar-step-num">2</div>
                  <div className="sidebar-step-text">
                    <h4>Invia su WhatsApp</h4>
                    <p>Le info vengono inviate come messaggio</p>
                  </div>
                </div>
                <div className="sidebar-step">
                  <div className="sidebar-step-num">3</div>
                  <div className="sidebar-step-text">
                    <h4>Allega le foto</h4>
                    <p>Invia le foto delle stanze nella chat</p>
                  </div>
                </div>
                <div className="sidebar-step">
                  <div className="sidebar-step-num">4</div>
                  <div className="sidebar-step-text">
                    <h4>Ricevi il preventivo</h4>
                    <p>Ti rispondiamo con un'offerta dettagliata</p>
                  </div>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Perché sceglierci</h3>
                <div className="sidebar-info"><CheckCircle size={18} /> Sopralluogo gratuito</div>
                <div className="sidebar-info"><CheckCircle size={18} /> Preventivo senza impegno</div>
                <div className="sidebar-info"><Shield size={18} /> Azienda autorizzata</div>
                <div className="sidebar-info"><Clock size={18} /> Risposta entro 24h</div>
                <div className="sidebar-info"><Phone size={18} /> Assistenza telefonica</div>
              </div>

              <div className="sidebar-card" style={{ background: 'var(--primary)', color: 'white' }}>
                <h3 style={{ color: 'var(--accent)' }}>Preferisci chiamare?</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
                  Siamo disponibili dal lunedì al sabato
                </p>
                <a href="tel:+393204085611" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Phone size={18} /> 320 408 5611
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
