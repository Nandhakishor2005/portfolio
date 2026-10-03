import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { SunMedium, MoonStar } from 'lucide-react'

const links = [
  { to: '/', label: 'Index' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode')
    } else {
      document.documentElement.classList.remove('light-mode')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)', background: 'var(--bg-alpha)', borderBottom: '1px solid var(--line)', transition: 'background-color 0.4s ease, border-color 0.4s ease' }}>
      <nav className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <NavLink to="/" style={{ fontFamily: 'var(--serif)', fontSize: 19, letterSpacing: '-0.01em', transition: 'color 0.4s ease' }} data-hover>
          Nandhakishor<span style={{ color: 'var(--accent)' }}></span>
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
                transition: 'color 0.4s ease, border-color 0.4s ease',
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button 
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            style={{ background: 'var(--bg-soft)', border: '1px solid var(--line)', color: 'var(--ink)', width: 38, height: 38, borderRadius: '50%', cursor: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.4s ease' }}
            aria-label="Toggle Theme"
            title="Toggle Theme"
            data-hover
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
          
          <button
            className="nav-toggle"
            data-hover
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ display: 'none', background: 'var(--bg-soft)', border: '1px solid var(--line)', color: 'var(--ink)', width: 40, height: 40, borderRadius: '8px', fontFamily: 'var(--mono)', transition: 'all 0.4s ease' }}
          >
            {open ? '×' : '≡'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingBottom: 24 }}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} style={{ fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.06em', transition: 'color 0.4s ease' }}>
              {l.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .nav-links { display: none !important; }
          .nav-toggle { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  )
}
