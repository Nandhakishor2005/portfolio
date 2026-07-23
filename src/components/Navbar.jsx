import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Index' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)', background: 'rgba(10,10,10,0.75)', borderBottom: '1px solid var(--line)' }}>
      <nav className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <NavLink to="/" style={{ fontFamily: 'var(--serif)', fontSize: 19, letterSpacing: '-0.01em' }} data-hover>
          Nandhakishor<span style={{ color: 'var(--accent)' }}>.</span>
        </NavLink>

        <div className="nav-links" style={{ display: 'flex', gap: 36 }}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-hover
              style={({ isActive }) => ({
                fontSize: 13,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--ink)' : 'var(--ink-dim)',
                position: 'relative',
                paddingBottom: 4,
                borderBottom: isActive ? '1px solid var(--accent)' : '1px solid transparent',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          className="nav-toggle"
          data-hover
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ display: 'none', background: 'none', border: '1px solid var(--line)', color: 'var(--ink)', width: 40, height: 40, fontFamily: 'var(--mono)' }}
        >
          {open ? '×' : '≡'}
        </button>
      </nav>

      {open && (
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingBottom: 24 }}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} style={{ fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {l.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .nav-links { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </header>
  )
}
