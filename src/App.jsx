import { useState, useEffect } from 'react'
import Terminal from './components/terminal/Terminal'
import Timeline from './components/timeline/Timeline'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const currentYear = new Date().getFullYear()

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-90"></div>
          <div className="code-matrix"></div>
        </div>

        {/* Terminal */}
        <div className="container mx-auto px-6 z-10 max-w-5xl mb-12 mt-8">
          <Terminal isVisible={isVisible} currentYear={currentYear} />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <svg className="h-8 w-8 text-emerald-400 filter drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <Timeline />
    </div>
  )
}

export default App
