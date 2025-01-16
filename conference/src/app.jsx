import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import Router from 'preact-router'
import viteLogo from '/vite.svg'
import './styles/globals.css'
import Navbar from './components/shared/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import Faqs from './components/Faqs'
import LogoSection from './components/LogoSection'
import Home from './components/Home'
import Schedule from './components/Schedule'

export function App() {
  return (
    <>
    <Router>
      <Home path='/'/>
      <Schedule path='/schedule'/>
    </Router>
    </>
  )
}
