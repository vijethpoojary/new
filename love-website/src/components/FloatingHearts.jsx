import React, { useMemo } from 'react'

const EMOJIS = ['❤️', '💕', '💖', '💗', '💓', '💞', '🌸', '✨', '💫', '🦋']

export default function FloatingHearts({ count = 18 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      left: Math.random() * 100,
      size: 14 + Math.random() * 22,
      duration: 6 + Math.random() * 10,
      delay: Math.random() * 8,
    }))
  }, [count])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {hearts.map(h => (
        <span
          key={h.id}
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animation: `floatUp ${h.duration}s ${h.delay}s linear infinite`,
            opacity: 0.75,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  )
}
