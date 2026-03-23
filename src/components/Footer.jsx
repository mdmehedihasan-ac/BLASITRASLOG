import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Blasi<span>Traslog</span> srl&reg;</h3>
            <p>Azienda con oltre 30 anni di esperienza nel settore logistico e dei traslochi a Roma. Specializzata in traslochi di abitazioni e uffici, deposito merci e noleggio automezzi.</p>
            <div className="footer-contact-item"><Phone size={15} /> <a href="tel:+393204085611">+39 320 408 5611</a></div>
            <div className="footer-contact-item"><Mail size={15} /> <a href="mailto:info@blasitraslog.it">info@blasitraslog.it</a></div>
            <div className="footer-contact-item"><MapPin size={15} /> Via del Fosso della Magliana, 24b &ndash; 00148 Roma</div>
            <div className="footer-contact-item"><Clock size={15} /> Lun&ndash;Ven 8:00&ndash;18:00 / Sab 8:00&ndash;13:00</div>
          </div>

          <div>
            <h4>Servizi Traslochi</h4>
            <ul className="footer-links">
              <li><Link to="/trasloco-chiavi-in-mano"><ChevronRight size={14} /> Trasloco Chiavi in Mano</Link></li>
              <li><Link to="/trasloco-normale"><ChevronRight size={14} /> Trasloco Normale</Link></li>
              <li><Link to="/trasloco-fai-da-te"><ChevronRight size={14} /> Trasloco Fai Da Te</Link></li>
              <li><Link to="/servizi"><ChevronRight size={14} /> Tutti i Servizi</Link></li>
            </ul>
          </div>

          <div>
            <h4>Noleggio</h4>
            <ul className="footer-links">
              <li><Link to="/noleggio-furgone"><ChevronRight size={14} /> Noleggio Furgone</Link></li>
              <li><Link to="/noleggio-scala"><ChevronRight size={14} /> Noleggio Scala</Link></li>
            </ul>
            <h4 style={{marginTop: '24px'}}>Azienda</h4>
            <ul className="footer-links">
              <li><Link to="/chi-siamo"><ChevronRight size={14} /> Chi Siamo</Link></li>
              <li><Link to="/contatti"><ChevronRight size={14} /> Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4>Preventivi</h4>
            <ul className="footer-links">
              <li><Link to="/preventivo-trasloco"><ChevronRight size={14} /> Preventivo Trasloco</Link></li>
              <li><Link to="/preventivo-noleggio-furgone"><ChevronRight size={14} /> Prev. Noleggio Furgone</Link></li>
              <li><Link to="/preventivo-noleggio-scala"><ChevronRight size={14} /> Prev. Noleggio Scala</Link></li>
            </ul>
            <div className="footer-certs">
              <span className="cert-badge">ISO 9001</span>
              <span className="cert-badge">ISO 14001</span>
              <span className="cert-badge">ISO 45001</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Blasi Traslog s.r.l. &reg; &mdash; P.IVA 09211981007 &mdash; REA 1147526
        </div>
      </div>
    </footer>
  )
}
