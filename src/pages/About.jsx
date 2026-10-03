import Reveal from '../components/Reveal.jsx'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

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
      <div style={{ marginTop: 100 }}>
        <Reveal delay={140}>
          <span className="label">Certifications</span>
        </Reveal>
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 80 }}>
          {certifications.map((c, i) => (
            <Reveal delay={140 + (i * 100)} key={c.title}>
              <article>
                <div style={{ display: 'flex', gap: 24, alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>{c.title}</h2>
                </div>

                <div style={{ marginTop: 24, width: '100%', maxWidth: '800px', overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--line)', background: '#fff', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ width: '100%', pointerEvents: 'none' }}>
                    <Document file={c.link} loading={<div style={{ padding: '60px', textAlign: 'center', color: '#888' }}>Loading certificate...</div>}>
                      <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={800} />
                    </Document>
                  </div>
                </div>

                <p style={{ marginTop: 20, color: 'var(--ink-dim)', maxWidth: 640, fontSize: 15.5 }}>
                  {c.org}
                </p>
                <span style={{ color: 'var(--accent)', fontSize: 14, display: 'block', marginTop: 8 }}>
                  {c.date}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      
      <style>{`
        .react-pdf__Page__canvas {
          max-width: 100% !important;
          height: auto !important;
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}
