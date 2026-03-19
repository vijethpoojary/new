import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const links = [
  { to: '/',              label: '🏠 Home' },
  { to: '/sorry',         label: '💖 Kinya surprise 😁' },
  { to: '/love-messages', label: '💌 Kavana 😁' },
  { to: '/fun',           label: '💘 Bale gobbuga 😁' },
  { to: '/panipuri',      label: '🫧 Panipuri' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__brand">💖 Enna appu 🫂</div>

      <button className="navbar__burger" onClick={() => setOpen(o => !o)} aria-label="menu">
        {open ? '✕' : '☰'}
      </button>

      <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
        {links.map(l => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
