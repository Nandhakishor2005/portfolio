import Reveal from '../components/Reveal.jsx'

const skillGroups = [
  { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript (ES6)'] },
  { label: 'Backend', items: ['Python', 'Django', 'PHP'] },
  { label: 'Databases', items: ['MySQL', 'SQLite'] },
  { label: 'Languages', items: ['C', 'C++','Python'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
  { label: 'Concepts', items: ['OOP', 'SDLC', 'Role-based Auth'] },
]

const certifications = [
  { title: 'Mastering HTML, CSS, SCSS, SASS, JS, TypeScript & Python', org: 'Udemy', date: 'Mar 2025' },
  { title: 'Workshop on Java Full Stack', org: 'Spectrum Softtech Solutions Pvt. Ltd.', date: 'Feb 2026' },
  { title: 'Soft Skills Program — Communication, Interview Skills, Presentation, GD, Business & Email Etiquette', org: 'TCS iON, Tata Consultancy Services', date: 'May 2026' },
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
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {certifications.map((c) => (
              <div key={c.title} style={{ display: 'flex', justifyContent: 'space-between', gap: 20, borderBottom: '1px solid var(--line)', paddingBottom: 18, flexWrap: 'wrap' }}>
                <div style={{ maxWidth: 520 }}>
                  <p style={{ fontSize: 14 }}>{c.title}</p>
                  <p style={{ color: 'var(--ink-dim)', fontSize: 12.5, marginTop: 6 }}>{c.org}</p>
                </div>
                <span style={{ color: 'var(--accent)', fontSize: 12, whiteSpace: 'nowrap' }}>{c.date}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
