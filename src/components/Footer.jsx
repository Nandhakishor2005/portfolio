export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', marginTop: 120 }}>
      <div className="wrap" style={{ padding: '40px 32px', display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--ink-dim)', fontSize: 13 }}>© {new Date().getFullYear()} Nandhakishor. Built with React.</span>
        <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
          <a href="https://github.com/Nandhakishor2005" target="_blank" rel="noreferrer" data-hover>GitHub</a>
          <a href="https://linkedin.com/in/nandha-kishor" target="_blank" rel="noreferrer" data-hover>LinkedIn</a>
          <a href="https://hackerrank.com/nandhakishor" target="_blank" rel="noreferrer" data-hover>HackerRank</a>
          <a href="mailto:nandhakishork0@gmail.com" data-hover>Email</a>
        </div>
      </div>
    </footer>
  )
}
