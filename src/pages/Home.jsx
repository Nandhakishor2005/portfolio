import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const skills = ['Python', 'Django', 'PHP', 'MySQL', 'JavaScript', 'TypeScript', 'SCSS', 'Git', 'SQLite', 'OOP']

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="wrap" style={{ paddingTop: '14vh', paddingBottom: '10vh' }}>
        <Reveal>
          <span className="label">Junior Full-Stack Developer</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 88px)', lineHeight: 1.02, marginTop: 18 }}>
            Building role-based
            <br />
            web apps with <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>precision.</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p style={{ maxWidth: 560, marginTop: 28, color: 'var(--ink-dim)', fontSize: 16 }}>
            BCA graduate specialising in Python/Django and PHP/MySQL. I design and ship
            end-to-end applications — from database schema to admin dashboards — and I'm
            looking for a junior developer role to grow into.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
            <Link to="/work" data-hover style={{ border: '1px solid var(--ink)', padding: '14px 28px', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              View Work
            </Link>
            <a href="/Nandhakishor-Resume.pdf" download data-hover style={{ border: '1px solid var(--line)', padding: '14px 28px', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-dim)' }}>
              Download Resume ↓
            </a>
          </div>
        </Reveal>
      </section>

      {/* MARQUEE */}
      <div className="line" />
      <div style={{ overflow: 'hidden', padding: '24px 0', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-block', animation: 'scroll 26s linear infinite' }}>
          {[...skills, ...skills, ...skills].map((s, i) => (
            <span key={i} style={{ fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--ink-dim)', margin: '0 28px' }}>
              {s} <span style={{ color: 'var(--accent)' }}>·</span>
            </span>
          ))}
        </div>
      </div>
      <div className="line" />
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>

      {/* FEATURED WORK PREVIEW */}
      <section className="wrap" style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
        <Reveal>
          <span className="label">Selected Work</span>
        </Reveal>
        <div style={{ display: 'grid', gap: 1, marginTop: 24, background: 'var(--line)' }}>
          {[
            { n: '01', title: 'Internship Platform', stack: 'Python · Django · SQLite', to: '/work' },
            { n: '02', title: 'Tourism Management System', stack: 'PHP · MySQL · JavaScript', to: '/work' },
          ].map((p, i) => (
            <Reveal delay={i * 120} key={p.n}>
              <Link to={p.to} data-hover className="proj-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '32px 0', background: 'var(--bg)' }}>
                <span style={{ fontFamily: 'var(--mono)', color: 'var(--ink-dim)', fontSize: 13 }}>{p.n}</span>
                <h3 style={{ fontSize: 'clamp(24px, 4vw, 40px)', flex: 1, marginLeft: 32 }}>{p.title}</h3>
                <span style={{ color: 'var(--ink-dim)', fontSize: 13 }}>{p.stack}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
