import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import './Navbar.css'

const NAV_LINKS_DESKTOP = (toggle, dropdownOpen) => (
  <>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li>
        <a href="#" onClick={e => { e.preventDefault(); toggle('traslochi') }}>
          Traslochi <ChevronDown size={13} />
        </a>
        <div className={`nav-dropdown${dropdownOpen.traslochi ? ' mobile-open' : ''}`}>
          <div className="nav-dropdown-inner">
            <Link to="/trasloco-chiavi-in-mano">Trasloco Chiavi in Mano</Link>
            <Link to="/trasloco-normale">Trasloco Normale</Link>
            <Link to="/trasloco-fai-da-te">Trasloco Fai Da Te</Link>
          </div>
        </div>
      </li>
      <li><Link to="/servizi">Servizi</Link></li>
      <li>
        <a href="#" onClick={e => { e.preventDefault(); toggle('preventivi') }}>
          Preventivi <ChevronDown size={13} />
        </a>
        <div className={`nav-dropdown${dropdownOpen.preventivi ? ' mobile-open' : ''}`}>
          <div className="nav-dropdown-inner">
            <Link to="/preventivo-trasloco">Preventivo Trasloco</Link>
            <Link to="/preventivo-noleggio-furgone">Preventivo Furgone</Link>
            <Link to="/preventivo-noleggio-scala">Preventivo Scala</Link>
          </div>
        </div>
      </li>
      <li>
        <a href="#" onClick={e => { e.preventDefault(); toggle('noleggio') }}>
          Noleggio <ChevronDown size={13} />
        </a>
        <div className={`nav-dropdown${dropdownOpen.noleggio ? ' mobile-open' : ''}`}>
          <div className="nav-dropdown-inner">
            <Link to="/noleggio-furgone">Noleggio Furgone</Link>
            <Link to="/noleggio-scala">Noleggio Scala</Link>
          </div>
        </div>
      </li>
      <li><Link to="/chi-siamo">Chi Siamo</Link></li>
      <li><Link to="/contatti">Contatti</Link></li>
    </ul>
    <div className="nav-cta">
      <Link to="/preventivo-trasloco" className="btn btn-gold">Preventivo Gratuito</Link>
    </div>
  </>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState({})
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setDropdownOpen({}) }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggle = (key) => setDropdownOpen(prev => ({
    ...Object.fromEntries(Object.keys(prev).map(k => [k, false])),
    [key]: !prev[key]
  }))

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="nav-logo">
            <img
              src="/img/logo-blasi-traslog-retina.png"
              alt="Blasi Traslog srl logo"
            />
          </Link>

          {/* Desktop nav — inline in navbar */}
          <div className="nav-menu nav-menu-desktop">
            {NAV_LINKS_DESKTOP(toggle, dropdownOpen)}
          </div>

          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer — rendered via portal directly on body to avoid stacking context issues */}
      {createPortal(
        <div className={`nav-mobile-drawer${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS_DESKTOP(toggle, dropdownOpen)}
        </div>,
        document.body
      )}
    </>
  )
}
