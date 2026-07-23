import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'Website visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:nandhakishork0@gmail.com?subject=${subject}&body=${body}`
  }

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--line)',
    color: 'var(--ink)',
    fontFamily: 'var(--mono)',
    fontSize: 15,
    padding: '14px 0',
    outline: 'none',
  }

  return (
    <div className="wrap" style={{ paddingTop: '12vh', paddingBottom: '12vh' }}>
      <Reveal>
        <span className="label">Contact</span>
        <h1 style={{ fontSize: 'clamp(34px, 6vw, 60px)', marginTop: 16, maxWidth: 640 }}>
          Let's build something together.
        </h1>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginTop: 60 }} className="contact-grid">
        <Reveal delay={100}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <span className="label">Email</span>
              <a href="mailto:nandhakishork0@gmail.com" data-hover style={{ display: 'block', fontSize: 18, marginTop: 8 }}>
                nandhakishork0@gmail.com
              </a>
            </div>
            <div>
              <span className="label">Phone</span>
              <a href="tel:+918590581243" data-hover style={{ display: 'block', fontSize: 18, marginTop: 8 }}>
                +91 85905 81243
              </a>
            </div>
            <div>
              <span className="label">Location</span>
              <p style={{ fontSize: 18, marginTop: 8 }}>Puthuppally, Kottayam, Kerala</p>
            </div>
            <div>
              <span className="label">Elsewhere</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
                <a href="https://github.com/Nandhakishor2005" target="_blank" rel="noreferrer" data-hover style={{ fontSize: 14, color: 'var(--ink-dim)' }}>GitHub ↗</a>
                <a href="https://linkedin.com/in/nandha-kishor" target="_blank" rel="noreferrer" data-hover style={{ fontSize: 14, color: 'var(--ink-dim)' }}>LinkedIn ↗</a>
                <a href="https://hackerrank.com/nandhakishor" target="_blank" rel="noreferrer" data-hover style={{ fontSize: 14, color: 'var(--ink-dim)' }}>HackerRank ↗</a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
              data-hover
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={inputStyle}
              data-hover
            />
            <textarea
              required
              placeholder="Your message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical' }}
              data-hover
            />
            <button
              type="submit"
              data-hover
              style={{ alignSelf: 'flex-start', border: '1px solid var(--ink)', background: 'transparent', color: 'var(--ink)', padding: '14px 28px', fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'none' }}
            >
              Send Message ↗
            </button>
          </form>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
