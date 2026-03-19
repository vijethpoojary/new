import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts'
import Confetti from '../components/Confetti'
import '../styles/Home.css'

const FULL_TEXT = 'Enna lifed mokeda kinni mnky❤️ '

const HEART_EMOJIS = ['❤️','💕','💖','💗','💓','💞','💘','🌹','✨','💫','🌸','🦋']

function burstHeartsFromButton(btnEl) {
  const rect = btnEl.getBoundingClientRect()
  const originX = rect.left + rect.width / 2
  const originY = rect.top + rect.height / 2

  for (let i = 0; i < 80; i++) {
    const heart = document.createElement('span')
    heart.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)]

    const angle = Math.random() * 2 * Math.PI
    const distance = 80 + Math.random() * 320
    const tx = Math.cos(angle) * distance
    const ty = Math.sin(angle) * distance - Math.random() * 200
    const size = 14 + Math.random() * 24
    const duration = 0.8 + Math.random() * 0.9
    const delay = Math.random() * 0.3

    heart.style.cssText = `
      position: fixed;
      left: ${originX}px;
      top: ${originY}px;
      font-size: ${size}px;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      animation: heartBurst ${duration}s ${delay}s ease-out forwards;
      --tx: ${tx}px;
      --ty: ${ty}px;
    `
    document.body.appendChild(heart)
    setTimeout(() => heart.remove(), (duration + delay) * 1000 + 100)
  }
}

// inject keyframe once
if (typeof document !== 'undefined') {
  const s = document.createElement('style')
  s.innerHTML = `
    @keyframes heartBurst {
      0%   { opacity: 1; transform: translate(-50%, -50%) scale(0.2); }
      60%  { opacity: 1; transform: translate(calc(-50% + var(--tx) * 0.7), calc(-50% + var(--ty) * 0.7)) scale(1.2); }
      100% { opacity: 0; transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0.5); }
    }
  `
  document.head.appendChild(s)
}

export default function Home() {
  const [displayed, setDisplayed] = useState('')
  const [confetti, setConfetti] = useState(0)
  const btnRef = useRef(null)
  const navigate = useNavigate()

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
    if (btnRef.current) burstHeartsFromButton(btnRef.current)
    setConfetti(c => c + 1)
    setTimeout(() => navigate('/love-messages'), 1200)
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
          Tirth buttond enna heart undu press malpule 😁<br />
          Mella otthule nana 👇
        </p>

        <button ref={btnRef} className="btn-glow home__btn" onClick={handleOpen}>
          Open My Heart 💌
        </button>

        <button className="btn-glow home__btn home__btn--pani" onClick={() => navigate('/panipuri')}>
          Panipuri boda otthule 😁🫧
        </button>

        <div className="home__scroll-hint">scroll down ↓</div>
      </div>

      <div className="home__section">
        <div className="glass-card home__card">
          <span className="home__card-icon">💖</span>
          <h3>Mulpa othule😁</h3>
          <p>Kinya surprise undu ereg😁</p>
          <button className="btn-glow" style={{ fontSize: '1rem', padding: '10px 24px' }}
            onClick={() => navigate('/sorry')}>
            See them 💕
          </button>
        </div>
        <div className="glass-card home__card">
          <span className="home__card-icon">💌</span>
          <h3>Kavana 😁</h3>
          <p>Teliporchi haa 😀</p>
          <button className="btn-glow" style={{ fontSize: '1rem', padding: '10px 24px' }}
            onClick={() => navigate('/love-messages')}>
            Read them 💕
          </button>
        </div>
        <div className="glass-card home__card">
          <span className="home__card-icon">💘</span>
          <h3>Bale gobbuga churu😀</h3>
          <p>Net yane win k😁</p>
          <button className="btn-glow" style={{ fontSize: '1rem', padding: '10px 24px' }}
            onClick={() => navigate('/fun')}>
            Play 😄
          </button>
        </div>
      </div>
    </div>
  )
}
