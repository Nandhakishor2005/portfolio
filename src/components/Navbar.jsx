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
    <>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: 'blur(10px)', background: 'var(--bg-alpha)', borderBottom: '1px solid var(--line)', transition: 'background-color 0.4s ease, border-color 0.4s ease' }}>
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
            <div className="social-nav" style={{ display: 'flex', alignItems: 'center', gap: 12, marginRight: 8 }}>
              <a href="https://github.com/Nandhakishor2005" target="_blank" rel="noreferrer" data-hover aria-label="GitHub" style={{ color: 'var(--ink)', display: 'flex', transition: 'color 0.4s ease' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/nandha-kishor" target="_blank" rel="noreferrer" data-hover aria-label="LinkedIn" style={{ color: 'var(--ink)', display: 'flex', transition: 'color 0.4s ease' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

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
      <div style={{ height: 72 }} aria-hidden="true" />
    </>
  )
}
