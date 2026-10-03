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
  return (
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
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {certifications.map((c) => (
              <div key={c.title} style={{ display: 'flex', gap: 24, borderBottom: '1px solid var(--line)', paddingBottom: 24, flexWrap: 'wrap', alignItems: 'center' }}>
                {/* THUMBNAIL */}
                <div style={{ width: '100px', height: '70px', background: 'var(--bg-soft)', border: '1px solid var(--line)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--ink-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>

                <div style={{ flex: 1, minWidth: '260px' }}>
                  <p style={{ fontSize: 14.5, fontWeight: 500 }}>{c.title}</p>
                  <p style={{ color: 'var(--ink-dim)', fontSize: 13, marginTop: 4 }}>{c.org}</p>
                  <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 14 }}>
                    <span style={{ color: 'var(--accent)', fontSize: 12, whiteSpace: 'nowrap' }}>{c.date}</span>
                    <a href={c.link} target="_blank" rel="noreferrer" data-hover style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--ink)' }}>
                      Live View ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
