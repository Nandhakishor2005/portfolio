import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      }
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      }
      requestAnimationFrame(loop)
    }

    const onOver = (e) => {
      const target = e.target.closest('a, button, [data-hover]')
      ring.current?.classList.toggle('hover', !!target)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    const raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}
