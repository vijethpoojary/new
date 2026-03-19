import React, { useMemo, useState } from 'react'
import FloatingHearts from '../components/FloatingHearts'
import '../styles/Sorry.css'

const VARIANTS = [
  "I love you ❤️",
  "I love you so much 💕",
  "I love you endlessly 💖",
  "I love you more every day 💗",
  "I love you to the moon 🌙",
  "I love you forever 💞",
  "I love you, always 🌹",
  "I love you deeply 💓",
  "I love you truly 🌸",
  "I love you unconditionally 💫",
  "I love you, my everything 🦋",
  "I love you more than words 💌",
  "I love you with all my heart 🌷",
  "I love you, my sunshine ☀️",
  "I love you beyond measure ✨",
]

function getVariant(i) {
  return VARIANTS[i % VARIANTS.length]
}

const COLORS = [
  'rgba(255,107,157,0.18)',
  'rgba(199,125,255,0.18)',
  'rgba(255,179,71,0.15)',
  'rgba(255,77,109,0.18)',
  'rgba(255,200,220,0.12)',
]

export default function Sorry() {
  const [filter, setFilter] = useState('all')

  const cards = useMemo(() =>
    Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      text: getVariant(i),
      color: COLORS[i % COLORS.length],
    })), [])

  return (
    <div className="sorry page-enter">
      <FloatingHearts count={12} />

      <div className="sorry__header">
        <h1 className="sorry__title">1000 "I Love You"s 💖</h1>
        <p className="sorry__sub">
          A thousand times, and still not enough.
        </p>
        <div className="sorry__count">
          <span>❤️</span> 1,000 times I love you <span>❤️</span>
        </div>
      </div>

      <div className="sorry__grid">
        {cards.map(card => (
          <div
            key={card.id}
            className="sorry__card glass-card"
            style={{ '--card-bg': card.color }}
          >
            <span className="sorry__num">#{card.id + 1}</span>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
