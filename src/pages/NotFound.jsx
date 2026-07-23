import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="wrap" style={{ paddingTop: '20vh', paddingBottom: '20vh', textAlign: 'center' }}>
      <span className="label">404</span>
      <h1 style={{ fontSize: 'clamp(40px, 8vw, 90px)', marginTop: 16 }}>Page not found.</h1>
      <Link to="/" data-hover style={{ display: 'inline-block', marginTop: 32, borderBottom: '1px solid var(--accent)', paddingBottom: 4 }}>
        Back to Index ↗
      </Link>
    </div>
  )
}
