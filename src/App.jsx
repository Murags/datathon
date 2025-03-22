import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Initialize any animation libraries or effects here if needed
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Animated Data Particles */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black opacity-90"></div>
          <div className="data-particles"></div>
        </div>

        {/* Glowing circle backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-gradient-to-r from-cyan-900/10 via-emerald-900/20 to-blue-900/10 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 grid-lines opacity-20"></div>

        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center">
            {/* Hero animated title */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-7xl sm:text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 animate-gradient-x tracking-tight">
                <span className="block">DATA</span>
                <span className="block">HACKATHON</span>
                <span className="block text-5xl sm:text-6xl text-emerald-400">{currentYear}</span>
              </h1>
            </div>

            <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-xl sm:text-2xl mb-8 text-cyan-100">
                Transform raw data into groundbreaking solutions. Join the ultimate competition
                for <span className="text-emerald-400 font-bold">innovators</span>, <span className="text-cyan-400 font-bold">visionaries</span>, and <span className="text-teal-400 font-bold">problem solvers</span>.
              </p>
      </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 rounded-md text-lg font-bold hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Register Now</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 group-hover:animate-shimmer"></span>
              </button>
              <button className="group relative overflow-hidden bg-transparent border border-cyan-500 px-8 py-4 rounded-md text-lg font-bold hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 group-hover:animate-shimmer"></span>
        </button>
            </div>
          </div>
        </div>

        {/* Animated stats cards */}
        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="container mx-auto px-6">
            <div className={`relative bg-slate-900/50 backdrop-blur-md p-4 border border-emerald-500/30 rounded-lg shadow-glow transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center items-center mb-2">
                    <div className="h-16 w-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-cyan-400 animate-pulse-subtle">33</h3>
                    </div>
                  </div>
                  <p className="text-sm font-medium uppercase tracking-wider text-cyan-200">Weeks</p>
                </div>
                <div className="text-center p-3 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center items-center mb-2">
                    <div className="h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-emerald-400 animate-pulse-subtle">2</h3>
                    </div>
                  </div>
                  <p className="text-sm font-medium uppercase tracking-wider text-emerald-200">Phases</p>
                </div>
                <div className="text-center p-3 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center items-center mb-2">
                    <div className="h-16 w-16 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-teal-400 animate-pulse-subtle">200+</h3>
                    </div>
                  </div>
                  <p className="text-sm font-medium uppercase tracking-wider text-teal-200">Participants</p>
                </div>
                <div className="text-center p-3 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center items-center mb-2">
                    <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-blue-400 animate-pulse-subtle">∞</h3>
                    </div>
                  </div>
                  <p className="text-sm font-medium uppercase tracking-wider text-blue-200">Possibilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black relative">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute inset-0 circular-gradient opacity-40"></div>
          <div className="absolute inset-0 grid-lines opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-5xl font-black text-center text-white mb-4 animate-gradient-text relative">
              Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Journey</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></span>
            </h2>
            <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
              Our data hackathon unfolds over two comprehensive phases spanning several months, giving teams ample time to develop sophisticated data solutions.
        </p>
      </div>

          <div className="relative">
            {/* Phase I Header */}
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-md text-white font-bold text-xl shadow-glow-sm animate-pulse-subtle">
                Phase I
              </div>
            </div>

            {/* Timeline container */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-600 via-emerald-600 to-blue-600 rounded-full glow-line"></div>

              {/* Registration & Team Formation - 6 weeks */}
              <div className="mb-24 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-md shadow-glow border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-md text-white bg-cyan-600 mb-3">
                        6 Weeks
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">Registration & Team Formation</h3>
                      <ul className="text-slate-300 list-disc list-inside">
                        <li>Registration opens</li>
                        <li>Team formations</li>
                        <li>Getting to know teams and final registration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-12 w-12 bg-cyan-500 rounded-md z-10 flex items-center justify-center border-4 border-black shadow-glow-sm animate-pulse-subtle">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>

              {/* Environment Setup - 4 weeks */}
              <div className="mb-24 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-12 w-12 bg-teal-500 rounded-md z-10 flex items-center justify-center border-4 border-black shadow-glow-sm animate-pulse-subtle">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-md shadow-glow border border-teal-500/30 hover:border-teal-400/60 transition-all duration-300 hover:transform hover:scale-105">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-md text-white bg-teal-600 mb-3">
                        4 Weeks
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">Environment Setup</h3>
                      <p className="text-slate-300 mb-3">Focus on collaboration and presentation skills</p>
                      <p className="text-slate-400 text-sm italic">Evaluation: Presentation & Communication, Collaboration</p>
                      <p className="text-slate-300 mt-2">Local and Remote environments presentation (GitHub Workflows)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Exploration - 8 weeks */}
              <div className="mb-24 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-md shadow-glow border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:transform hover:scale-105">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-md text-white bg-emerald-600 mb-3">
                        8 Weeks
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">Data Exploration & Preparation</h3>
                      <p className="text-slate-300 mb-3">Dive deep into the data and identify problems</p>
                      <p className="text-slate-400 text-sm italic">Evaluation: Data Science Process, Documentation, Presentation, Collaboration</p>
                      <ul className="text-slate-300 list-disc list-inside mt-2">
                        <li>Data collection & visualization</li>
                        <li>Exploration & cleaning</li>
                        <li>Problem definition</li>
                        <li>Data preparation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-12 w-12 bg-emerald-500 rounded-md z-10 flex items-center justify-center border-4 border-black shadow-glow-sm animate-pulse-subtle">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>

              {/* Phase I Wrap-up - 2 weeks */}
              <div className="mb-32 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-12 w-12 bg-blue-500 rounded-md z-10 flex items-center justify-center border-4 border-black shadow-glow-sm animate-pulse-subtle">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-md shadow-glow border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-md text-white bg-blue-600 mb-3">
                        2 Weeks
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">Phase I Wrap-up</h3>
                      <p className="text-slate-300">Score aggregations and recess week</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase II Header */}
              <div className="text-center mb-16 animate-on-scroll">
                <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md text-white font-bold text-xl shadow-glow-sm animate-pulse-subtle">
                  Phase II
                </div>
              </div>

              {/* Model Training - 4 weeks */}
              <div className="mb-24 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-md shadow-glow border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:transform hover:scale-105">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-md text-white bg-indigo-600 mb-3">
                        4 Weeks
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">Model Training & Evaluation</h3>
                      <p className="text-slate-300 mb-3">Develop and refine your models</p>
                      <p className="text-slate-400 text-sm italic">Evaluation: Data Science Process, Documentation, Presentation, Collaboration</p>
                      <ul className="text-slate-300 list-disc list-inside mt-2">
                        <li>Benchmark model training</li>
                        <li>Evaluations & tuning</li>
                        <li>Validations</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-12 w-12 bg-indigo-500 rounded-md z-10 flex items-center justify-center border-4 border-black shadow-glow-sm animate-pulse-subtle">
                      <span className="text-white font-bold">5</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>

              {/* Deployment - 4 weeks */}
              <div className="mb-24 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-12 w-12 bg-violet-500 rounded-md z-10 flex items-center justify-center border-4 border-black shadow-glow-sm animate-pulse-subtle">
                      <span className="text-white font-bold">6</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-md shadow-glow border border-violet-500/30 hover:border-violet-400/60 transition-all duration-300 hover:transform hover:scale-105">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-md text-white bg-violet-600 mb-3">
                        4 Weeks
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">Deployment & Final Touches</h3>
                      <p className="text-slate-300 mb-3">Prepare your solution for real-world application</p>
                      <p className="text-slate-400 text-sm italic">Evaluation: Documentation, Presentation, Collaboration</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Score Aggregation - 3 weeks */}
              <div className="mb-24 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-md shadow-glow border border-fuchsia-500/30 hover:border-fuchsia-400/60 transition-all duration-300 hover:transform hover:scale-105">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-md text-white bg-fuchsia-600 mb-3">
                        3 Weeks
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">Phase II Evaluation</h3>
                      <p className="text-slate-300 mb-3">Final assessment of projects</p>
                      <p className="text-slate-400 text-sm italic">Evaluation: Difficulty, Technical Implementation, Learning Value, Impact & Feasibility</p>
                      <p className="text-slate-300 mt-2">Phase II score aggregations</p>
                    </div>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-12 w-12 bg-fuchsia-500 rounded-md z-10 flex items-center justify-center border-4 border-black shadow-glow-sm animate-pulse-subtle">
                      <span className="text-white font-bold">7</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>

              {/* Final Event - 2 weeks */}
              <div className="relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-12 w-12 bg-emerald-500 rounded-md z-10 flex items-center justify-center border-4 border-black shadow-glow-sm animate-pulse-subtle">
                      <span className="text-white font-bold">8</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-md shadow-glow border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:transform hover:scale-105">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-md text-white bg-emerald-600 mb-3">
                        2 Weeks
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">Celebration & Awards</h3>
                      <ul className="text-slate-300 list-disc list-inside">
                        <li>Career fair</li>
                        <li>Participant booths</li>
                        <li>Final event</li>
                        <li>Announcement of winners</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
