import React, { useEffect, useRef } from 'react'

const PIECES = ['❤️', '💕', '🌸', '✨', '💖', '💗', '🦋', '💫']

export default function Confetti({ trigger }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!trigger) return
    const container = containerRef.current
    if (!container) return

    for (let i = 0; i < 40; i++) {
      const el = document.createElement('span')
      el.textContent = PIECES[Math.floor(Math.random() * PIECES.length)]
      const x = (Math.random() - 0.5) * window.innerWidth * 0.8
      const y = -(Math.random() * 400 + 100)
      el.style.cssText = `
        position: fixed;
        left: 50%;
        top: 50%;
        font-size: ${12 + Math.random() * 20}px;
        pointer-events: none;
        z-index: 9000;
        animation: confettiBurst 1.2s ease forwards;
        --tx: ${x}px;
        --ty: ${y}px;
      `
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 1300)
    }
  }, [trigger])

  // inject keyframe once
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes confettiBurst {
        0%   { opacity: 1; transform: translate(0, 0) scale(1); }
        100% { opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0.4) rotate(360deg); }
      }
    `
    document.head.appendChild(style)
  }, [])

  return <div ref={containerRef} />
}
