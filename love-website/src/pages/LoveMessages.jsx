import React, { useState } from 'react'
import FloatingHearts from '../components/FloatingHearts'
import Confetti from '../components/Confetti'
import '../styles/LoveMessages.css'

const MESSAGES = [
  {
    icon: '🌹',
    title: 'My Forever',
    text: "In a world full of chaos, you are my calm. Every time I look at you, I see my future — and it's the most beautiful thing I've ever seen.",
  },
  {
    icon: '🌙',
    title: 'Moonlight Thoughts',
    text: "Late at night when the world is quiet, my thoughts always find their way back to you. You live in every corner of my mind.",
  },
  {
    icon: '💫',
    title: 'You Are Magic',
    text: "I don't believe in coincidences anymore. Meeting you was the universe's greatest gift to me. You are pure, undeniable magic.",
  },
  {
    icon: '🦋',
    title: 'Butterflies',
    text: "Even after all this time, my heart still skips a beat when I see your name on my screen. You give me butterflies every single day.",
  },
  {
    icon: '🌸',
    title: 'Spring in My Heart',
    text: "Before you, my world was grey. You walked in and painted everything in the most beautiful colors. You are my spring.",
  },
  {
    icon: '⭐',
    title: 'Written in Stars',
    text: "I believe our love story was written in the stars long before we ever met. We were always meant to find each other.",
  },
  {
    icon: '🔥',
    title: 'My Warmth',
    text: "On my coldest days, the thought of you is enough to warm my entire soul. You are my fire, my light, my home.",
  },
  {
    icon: '💎',
    title: 'Irreplaceable',
    text: "There is no one in this world like you. You are rare, precious, and irreplaceable. I will never stop being grateful for you.",
  },
  {
    icon: '🌊',
    title: 'Endless',
    text: "My love for you is like the ocean — deep, vast, and endless. No matter how far you go, the waves always bring me back to you.",
  },
  {
    icon: '🎵',
    title: 'My Favorite Song',
    text: "You are the melody I never knew I needed. Life with you is the most beautiful song I've ever heard, and I want it on repeat forever.",
  },
  {
    icon: '🌺',
    title: 'Every Day',
    text: "I fall in love with you a little more every single day. Every laugh, every glance, every quiet moment — I treasure them all.",
  },
  {
    icon: '💌',
    title: 'A Promise',
    text: "I promise to be your safe place, your biggest fan, and your softest landing. Always. No matter what.",
  },
  {
    icon: '🕊️',
    title: 'Peace',
    text: "With you, I have found a peace I never knew existed. You are my sanctuary in this loud, beautiful, messy world.",
  },
  {
    icon: '✨',
    title: 'You Shine',
    text: "The way you light up a room when you walk in — I don't think you'll ever understand how breathtaking you truly are.",
  },
  {
    icon: '💞',
    title: 'Together',
    text: "Whatever comes our way, I want to face it with you. Hand in hand, heart to heart. Together is my favorite place to be.",
  },
]

export default function LoveMessages() {
  const [flipped, setFlipped] = useState({})
  const [confetti, setConfetti] = useState(0)

  const flip = (i) => {
    setFlipped(f => ({ ...f, [i]: !f[i] }))
    setConfetti(c => c + 1)
  }

  return (
    <div className="love page-enter">
      <FloatingHearts count={14} />
      <Confetti trigger={confetti} />

      <div className="love__header">
        <h1 className="love__title">Love Notes 💌</h1>
        <p className="love__sub">Click a card to reveal the message inside</p>
      </div>

      <div className="love__grid">
        {MESSAGES.map((msg, i) => (
          <div
            key={i}
            className={`love__card-wrap ${flipped[i] ? 'love__card-wrap--flipped' : ''}`}
            onClick={() => flip(i)}
          >
            <div className="love__card-inner">
              {/* Front */}
              <div className="love__card love__card--front glass-card">
                <span className="love__card-icon">{msg.icon}</span>
                <h3>{msg.title}</h3>
                <p className="love__card-hint">tap to open 💌</p>
              </div>
              {/* Back */}
              <div className="love__card love__card--back glass-card">
                <span className="love__card-icon">{msg.icon}</span>
                <p className="love__card-text">{msg.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
