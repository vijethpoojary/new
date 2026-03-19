import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeartCursor from './components/HeartCursor'
import MusicToggle from './components/MusicToggle'
import Home from './pages/Home'
import Sorry from './pages/Sorry'
import LoveMessages from './pages/LoveMessages'
import FunInteraction from './pages/FunInteraction'

export default function App() {
  return (
    <BrowserRouter>
      <HeartCursor />
      <MusicToggle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorry" element={<Sorry />} />
        <Route path="/love-messages" element={<LoveMessages />} />
        <Route path="/fun" element={<FunInteraction />} />
      </Routes>
    </BrowserRouter>
  )
}
