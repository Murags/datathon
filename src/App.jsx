import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Terminal from './components/terminal/Terminal'
import Timeline from './components/timeline/Timeline'
import Impact from './components/sections/Impact'
import Team from './components/sections/Team'
import Footer from './components/common/Footer'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const currentYear = new Date().getFullYear()

  // Section IDs for navigation
  const sectionIds = {
    phaseI: 'phaseI',
    phaseII: 'phaseII',
    finalEvent: 'finalEvent'
  }

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden font-mono">
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-5 right-5 z-20 flex space-x-4">
          <Link to="/login" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md shadow-md transition-colors duration-200">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md shadow-md transition-colors duration-200">
            Signup
          </Link>
        </div>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-90"></div>
          <div className="code-matrix"></div>
        </div>

        <div className="container mx-auto px-6 z-10 max-w-5xl text-center">
          <Terminal isVisible={isVisible} currentYear={currentYear} />
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <svg className="h-8 w-8 text-emerald-400 filter drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <Timeline />
      <Impact />
      <Team />
      <Footer
        phase1ID={sectionIds.phaseI}
        phase2ID={sectionIds.phaseII}
        finalEventID={sectionIds.finalEvent}
      />
    </div>
  )
}

export default App
