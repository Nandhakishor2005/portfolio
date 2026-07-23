import Reveal from '../components/Reveal.jsx'

const projects = [
  {
    n: '01',
    title: 'Internship Platform',
    stack: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Git'],
    summary:
      'A 28-page, full-stack role-based web app connecting 3 user roles — students, employers, and admin — across 12 database tables in a single Django application.',
    points: [
      'Students register, browse 2 internship types, apply, upload resumes, and track application status.',
      'Employers post listings, review applications, and manage payments.',
      '7-module admin dashboard: Users, Employers, Internship Listings, Industry Management, Internship Categories, Applications, Payments.',
      'Roadmap: payment gateway, email/SMS notifications, recommendation engine, React Native app.',
    ],
    link: 'https://github.com/Nandhakishor2005/Internship-Platform',
  },
  {
    n: '02',
    title: 'Tourism Management System',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    summary:
      'A 20-page tour booking platform across 10 database tables, letting users browse destinations, view packages, submit enquiries, and complete bookings with secure login.',
    points: [
      '6-module admin panel: Package, Destination, Category (Designation & Package), User, Enquiry, and Booking management.',
      'Full CRUD across all modules.',
      'Roadmap: Razorpay integration, email/SMS notifications, advanced search filters, mobile-responsive redesign.',
    ],
    link: 'https://github.com/Nandhakishor2005/Tourism-Management-System',
  },
]

export default function Work() {
  return (
    <div className="wrap" style={{ paddingTop: '12vh', paddingBottom: '10vh' }}>
      <Reveal>
        <span className="label">Selected Work</span>
        <h1 style={{ fontSize: 'clamp(34px, 6vw, 60px)', marginTop: 16 }}>Two projects, end to end.</h1>
      </Reveal>

      <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 100 }}>
        {projects.map((p, i) => (
          <Reveal delay={i * 100} key={p.n}>
            <article>
              <div style={{ display: 'flex', gap: 24, alignItems: 'baseline', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: 14 }}>{p.n}</span>
                <h2 style={{ fontSize: 'clamp(28px, 5vw, 46px)' }}>{p.title}</h2>
              </div>

              <p style={{ marginTop: 20, color: 'var(--ink-dim)', maxWidth: 640, fontSize: 15.5 }}>{p.summary}</p>

              <ul style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 640 }}>
                {p.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', gap: 12, color: 'var(--ink)', fontSize: 14 }}>
                    <span style={{ color: 'var(--accent)' }}>—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
                {p.stack.map((s) => (
                  <span key={s} style={{ border: '1px solid var(--line)', padding: '5px 12px', fontSize: 12, color: 'var(--ink-dim)' }}>
                    {s}
                  </span>
                ))}
              </div>

              <a href={p.link} target="_blank" rel="noreferrer" data-hover style={{ display: 'inline-block', marginTop: 28, borderBottom: '1px solid var(--accent)', paddingBottom: 4, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                View Source ↗
              </a>

              <div className="line" style={{ marginTop: 60 }} />
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
