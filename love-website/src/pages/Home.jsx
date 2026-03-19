import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts'
import Confetti from '../components/Confetti'
import '../styles/Home.css'

const FULL_TEXT = 'Enna lifed mokeda kinni mnky❤️ '

export default function Home() {
  const [displayed, setDisplayed] = useState('')
  const [confetti, setConfetti] = useState(0)
  const navigate = useNavigate()

  // Typing effect
  useEffect(() => {
    let i = 0
    setDisplayed('')
    const interval = setInterval(() => {
      i++
      setDisplayed(FULL_TEXT.slice(0, i))
      if (i >= FULL_TEXT.length) clearInterval(interval)
    }, 60)
    return () => clearInterval(interval)
  }, [])

  const handleOpen = () => {
    setConfetti(c => c + 1)
    setTimeout(() => navigate('/love-messages'), 800)
  }

  return (
    <div className="home page-enter">
      <FloatingHearts count={22} />
      <Confetti trigger={confetti} />

      <div className="home__hero">
        <div className="home__sparkles">
          {['✨','💫','🌟','✨','💫'].map((s, i) => (
            <span key={i} className="sparkle" style={{ '--i': i }}>{s}</span>
          ))}
        </div>

        <p className="home__subtitle">A message from my heart</p>

        <h1 className="home__title">
          {displayed}
          <span className="home__cursor">|</span>
        </h1>

        <p className="home__poem">
          Every moment with you is a dream I never want to wake from.<br />
          You are my sunshine, my moonlight, my everything. 🌙
        </p>

        <button className="btn-glow home__btn" onClick={handleOpen}>
          Open My Heart 💌
        </button>

        <div className="home__scroll-hint">scroll down ↓</div>
      </div>

      <div className="home__section">
        <div className="glass-card home__card">
          <span className="home__card-icon">💖</span>
          <h3>1000 I Love Yous</h3>
          <p>Because I can never say it enough times.</p>
          <button className="btn-glow" style={{ fontSize: '1rem', padding: '10px 24px' }}
            onClick={() => navigate('/sorry')}>
            See them 💕
          </button>
        </div>
        <div className="glass-card home__card">
          <span className="home__card-icon">💌</span>
          <h3>Love Notes</h3>
          <p>Letters written straight from my soul to yours.</p>
          <button className="btn-glow" style={{ fontSize: '1rem', padding: '10px 24px' }}
            onClick={() => navigate('/love-messages')}>
            Read them 💕
          </button>
        </div>
        <div className="glass-card home__card">
          <span className="home__card-icon">💘</span>
          <h3>Are You Mine?</h3>
          <p>A little game just for us. I already know the answer.</p>
          <button className="btn-glow" style={{ fontSize: '1rem', padding: '10px 24px' }}
            onClick={() => navigate('/fun')}>
            Play 😄
          </button>
        </div>
      </div>
    </div>
  )
}
