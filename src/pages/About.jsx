import { useState, useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'

const skillGroups = [
  { label: 'Frontend', items: ['HTML5', 'CSS3', 'SCSS/SASS', 'JavaScript (ES6)'] },
  { label: 'Backend', items: ['Python', 'Django', 'PHP'] },
  { label: 'Databases', items: ['MySQL', 'SQLite'] },
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Vercel'] },
  { label: 'Concepts', items: ['OOP', 'SDLC', 'Database Management System', 'Role-based Auth'] },
]

const certifications = [
  { 
    title: 'Mastering HTML, CSS, SCSS, SASS, JS, TypeScript & Python', 
    org: 'Udemy', 
    date: 'Mar 2025',
    link: '/UC-56ce025e-eae0-46be-bb37-a92e150ac0f4.pdf' 
  },
  { 
    title: 'Workshop on Java Full Stack', 
    org: 'Spectrum Softtech Solutions Pvt. Ltd.', 
    date: 'Feb 2026',
    link: '/Workshop_on_JAVA_Full_Stack_Certificate_Nandha_kishor__09022026043132.pdf'
  },
  { 
    title: 'Soft Skills Program — Communication, Interview Skills, Presentation, GD, Business & Email Etiquette', 
    org: 'TCS iON, Tata Consultancy Services', 
    date: 'May 2026',
    link: '/Nandhakishor_SoftSkills_Certificate.pdf'
  },
]

export default function About() {
  const [modalCert, setModalCert] = useState(null)

  useEffect(() => {
    if (modalCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [modalCert])

  return (
    <>
      <div className="wrap" style={{ paddingTop: '12vh', paddingBottom: '10vh' }}>
        <Reveal>
          <span className="label">About</span>
          <h1 style={{ fontSize: 'clamp(34px, 6vw, 58px)', marginTop: 16, maxWidth: 760 }}>
            BCA graduate, self-taught across the stack, obsessed with clean architecture.
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <p style={{ marginTop: 28, color: 'var(--ink-dim)', maxWidth: 640, fontSize: 15.5 }}>
            I specialise in full-stack web development with hands-on experience building
            role-based web applications using Python/Django, PHP/MySQL, and modern frontend
            technologies including TypeScript and SCSS. I've delivered two end-to-end projects
            covering requirements, design, development, and deployment — and I'm seeking a
            junior developer role where I can contribute to product growth while deepening
            industry experience.
          </p>
        </Reveal>

        {/* SKILLS */}
        <Reveal delay={180}>
          <div style={{ marginTop: 80 }}>
            <span className="label">Skills</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, marginTop: 24 }}>
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <h3 style={{ fontSize: 16, color: 'var(--ink)', marginBottom: 12, fontStyle: 'italic' }}>{g.label}</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {g.items.map((s) => (
                      <li key={s} style={{ fontSize: 13.5, color: 'var(--ink-dim)' }}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* EDUCATION */}
        <Reveal delay={100}>
          <div style={{ marginTop: 80 }}>
            <span className="label">Education</span>
            <div style={{ marginTop: 20 }}>
              <h3 style={{ fontSize: 22 }}>Bachelor of Computer Applications (BCA)</h3>
              <p style={{ color: 'var(--ink-dim)', marginTop: 8, fontSize: 14 }}>
                PG Radhakrishnan Memorial Sree Narayana College, Channanikadu — affiliated to
                Mahatma Gandhi University, Kottayam
              </p>
              <p style={{ color: 'var(--ink-dim)', marginTop: 4, fontSize: 13 }}>2023 – 2026 · Completed 2026</p>
            </div>
          </div>
        </Reveal>

        {/* CERTIFICATIONS */}
        <Reveal delay={140}>
          <div style={{ marginTop: 80 }}>
            <span className="label">Certifications</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24, marginTop: 24 }}>
              {certifications.map((c) => (
                <div key={c.title} className="cert-card" onClick={() => setModalCert(c)} style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--line)', borderRadius: '16px', overflow: 'hidden', background: 'var(--bg-soft)', cursor: 'none' }} data-hover>
                  {/* Large Thumbnail */}
                  <div style={{ height: '180px', width: '100%', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--line)', position: 'relative' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--ink-dim)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(10,10,10,0.8)', padding: '4px 8px', borderRadius: '4px', fontSize: 11, border: '1px solid var(--line)', color: 'var(--ink)' }}>
                      PDF
                    </div>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.4 }}>{c.title}</p>
                    <p style={{ color: 'var(--ink-dim)', fontSize: 13, marginTop: 8 }}>{c.org}</p>
                    
                    <div style={{ marginTop: 'auto', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--accent)', fontSize: 12 }}>{c.date}</span>
                      <button onClick={(e) => { e.stopPropagation(); setModalCert(c); }} style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink)', padding: '6px 14px', borderRadius: '4px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em', cursor: 'none' }} data-hover>
                        Live View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* MODAL */}
      {modalCert && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 32px', borderBottom: '1px solid var(--line)' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(18px, 4vw, 24px)', color: 'var(--ink)', paddingRight: 16 }}>{modalCert.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-dim)', marginTop: 4 }}>{modalCert.org}</p>
            </div>
            <button onClick={() => setModalCert(null)} style={{ flexShrink: 0, background: 'none', border: '1px solid var(--line)', color: 'var(--ink)', padding: '10px 20px', borderRadius: '8px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.04em', cursor: 'none' }} data-hover>
              Close
            </button>
          </div>
          <div style={{ flex: 1, padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
             <iframe src={`${modalCert.link}#toolbar=0&navpanes=0`} style={{ width: '100%', maxWidth: '1000px', height: '100%', border: '1px solid var(--line)', borderRadius: '8px', background: '#fff' }} title={modalCert.title}></iframe>
          </div>
        </div>
      )}
      
      <style>{`
        .cert-card { transition: transform 0.25s ease, border-color 0.25s ease; }
        .cert-card:hover { transform: translateY(-4px); border-color: var(--ink-dim); }
      `}</style>
    </>
  )
}
