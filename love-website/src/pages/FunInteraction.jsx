import React, { useState, useRef, useCallback } from 'react'
import FloatingHearts from '../components/FloatingHearts'
import Confetti from '../components/Confetti'
import '../styles/FunInteraction.css'

export default function FunInteraction() {
  const [answer, setAnswer] = useState(null) // null | 'yes' | 'no-attempt'
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [confetti, setConfetti] = useState(0)
  const [noCount, setNoCount] = useState(0)
  const containerRef = useRef(null)

  const handleYes = () => {
    setAnswer('yes')
    setConfetti(c => c + 1)
  }

  const escapeNo = useCallback(() => {
    // keep escape range small on mobile to avoid overflow
    const isMobile = window.innerWidth < 600
    const range = isMobile ? 80 : 160

    setNoPos({
      x: (Math.random() - 0.5) * range * 2,
      y: (Math.random() - 0.5) * range,
    })
    setNoCount(c => c + 1)
    setAnswer('no-attempt')
  }, [])

  const noLabel = noCount === 0 ? "No 😐"
    : noCount === 1 ? "Are you sure? 🤔"
    : noCount === 2 ? "Think again! 😅"
    : noCount === 3 ? "Wrong answer! 😤"
    : noCount === 4 ? "Stop it! 😂"
    : "You can't say no! 💕"

  const reset = () => {
    setAnswer(null)
    setNoPos({ x: 0, y: 0 })
    setNoCount(0)
  }

  return (
    <div className="fun page-enter" ref={containerRef}>
      <FloatingHearts count={16} />
      <Confetti trigger={confetti} />

      <div className="fun__header">
        <h1 className="fun__title">A Question for You 💘</h1>
        <p className="fun__sub">Answer carefully... 😄</p>
      </div>

      {answer !== 'yes' && (
        <div className="fun__question-box glass-card">
          <div className="fun__heart-big">💗</div>
          <h2 className="fun__question">Do you love me?</h2>
          <p className="fun__hint">
            {noCount > 0 ? `You've tried to say no ${noCount} time${noCount > 1 ? 's' : ''}... 😏` : 'Choose wisely 😉'}
          </p>

          <div className="fun__buttons">
            <button className="btn-glow fun__yes-btn" onClick={handleYes}>
              YES 💖
            </button>

            <button
              className="fun__no-btn"
              onMouseEnter={escapeNo}
              onFocus={escapeNo}
              onClick={escapeNo}
              style={{
                transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              }}
            >
              {noLabel}
            </button>
          </div>
        </div>
      )}

      {answer === 'yes' && (
        <div className="fun__success glass-card">
          <div className="fun__success-hearts">
            {['💖','💕','💗','💓','💞','❤️','🌹','✨'].map((h, i) => (
              <span key={i} className="fun__success-heart" style={{ '--i': i }}>{h}</span>
            ))}
          </div>
          <h2 className="fun__success-title">I knew it! 💖</h2>
          <p className="fun__success-msg">
            I love you more than words could ever say.<br />
            You are my whole world. 🌍❤️
          </p>
          <button className="btn-glow" style={{ marginTop: '28px' }} onClick={reset}>
            Ask again 🔄
          </button>
        </div>
      )}

      {/* Extra fun section */}
      <div className="fun__extras">
        <div className="glass-card fun__extra-card" onClick={() => setConfetti(c => c + 1)}>
          <span>🎉</span>
          <p>Tap for hearts!</p>
        </div>
        <div className="glass-card fun__extra-card fun__extra-card--pulse">
          <span>💓</span>
          <p>My heart beats for you</p>
        </div>
        <div className="glass-card fun__extra-card" onClick={() => setConfetti(c => c + 1)}>
          <span>🌸</span>
          <p>You're my everything</p>
        </div>
      </div>
    </div>
  )
}
