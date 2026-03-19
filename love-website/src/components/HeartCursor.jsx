import React, { useEffect, useRef } from 'react'

export default function HeartCursor() {
  const cursorRef = useRef(null)

  // Don't render on touch-only devices
  const isTouch = typeof window !== 'undefined' &&
    window.matchMedia('(hover: none) and (pointer: coarse)').matches

  useEffect(() => {
    if (isTouch) return
    const cursor = cursorRef.current
    if (!cursor) return
    let mouseX = 0, mouseY = 0

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'

      // spawn trail heart
      spawnTrail(mouseX, mouseY)
    }

    const spawnTrail = (x, y) => {
      const heart = document.createElement('div')
      heart.innerHTML = '❤️'
      heart.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: ${8 + Math.random() * 10}px;
        pointer-events: none;
        z-index: 9998;
        animation: trailFade 0.8s ease forwards;
        transform: translate(-50%, -50%);
      `
      document.body.appendChild(heart)
      setTimeout(() => heart.remove(), 800)
    }

    window.addEventListener('mousemove', move)

    // inject trail keyframe
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes trailFade {
        0%   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -150%) scale(0.3); }
      }
    `
    document.head.appendChild(style)

    return () => window.removeEventListener('mousemove', move)
  }, [isTouch])

  if (isTouch) return null

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '24px',
        height: '24px',
        fontSize: '20px',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease',
        userSelect: 'none',
      }}
    >
      💗
    </div>
  )
}
