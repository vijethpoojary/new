import React, { useState, useRef, useEffect } from 'react'

// Using a free royalty-free romantic piano piece from pixabay (CDN)
const MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio(MUSIC_URL)
    audioRef.current.loop = true
    audioRef.current.volume = 0.3
    return () => {
      audioRef.current.pause()
      audioRef.current = null
    }
  }, [])

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setPlaying(p => !p)
  }

  return (
    <button
      onClick={toggle}
      title={playing ? 'Pause music' : 'Play music'}
      aria-label={playing ? 'Pause music' : 'Play music'}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'linear-gradient(135deg, #ff6b9d, #c77dff)',
        border: 'none',
        borderRadius: '50%',
        width: '52px',
        height: '52px',
        minWidth: '52px',
        fontSize: '22px',
        cursor: 'pointer',
        boxShadow: '0 0 20px rgba(255,107,157,0.6)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: playing ? 'pulse 1.5s ease infinite' : 'none',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      {playing ? '🎵' : '🎶'}
    </button>
  )
}
