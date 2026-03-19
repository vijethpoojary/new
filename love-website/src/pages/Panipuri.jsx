import React from 'react'
import FloatingHearts from '../components/FloatingHearts'
import '../styles/Panipuri.css'

export default function Panipuri() {
  return (
    <div className="pani page-enter">
      <FloatingHearts count={14} />

      <div className="pani__header">
        <h1 className="pani__title">Bale panipuri tinka🫧</h1>
        <p className="pani__sub">Bayig korpe dethonle🥺❤️</p>
      </div>

      <div className="pani__video-wrap glass-card">
        <video
          className="pani__video"
          controls
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/panipuri.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="pani__caption">
          <span>🫧</span>
          <p>Erna cheepedath panipuri taste ijjige😁</p>
          <span>🫧</span>
        </div>
      </div>

      <div className="pani__note glass-card">
        <p>
          "Mella tinle nana 👊"
        </p>
      </div>
    </div>
  )
}
