import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)

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
      {/* Hero Section with Code-like Design */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-90"></div>
          <div className="code-matrix"></div>
        </div>

        {/* Terminal frame - pushed down with margin-top */}
        <div className="container mx-auto px-6 z-10 max-w-5xl mb-12 mt-8">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-md overflow-hidden shadow-glow terminal-window">
            {/* Terminal header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="mx-auto text-sm text-gray-400">datathon@terminal ~ </div>
            </div>

            {/* Terminal content */}
            <div className="p-6 text-left">
              <div className={`mb-6 terminal-text transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-start">
                  <span className="text-emerald-400 mr-2">$</span>
                  <div>
                    <span className="typing-animation text-emerald-200">sudo launch --event</span>
                    <span className="blinking-cursor">|</span>
                  </div>
                </div>
              </div>

              <div className={`terminal-output mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tighter coding-font">
                  <span className="block">&lt;DATA</span>
                  <span className="block pl-6">HACKATHON</span>
                  <span className="block pl-12">{currentYear}/&gt;</span>
                </h1>

                <div className="text-gray-300 text-lg mb-8 coding-comments">
                  <span className="text-gray-500">// </span>
                  Transform raw data into groundbreaking solutions.<br />
                  <span className="text-gray-500">// </span>
                  Join the ultimate competition for <span className="text-emerald-400 font-bold">innovators</span>, <span className="text-cyan-400 font-bold">visionaries</span>, and <span className="text-teal-400 font-bold">problem solvers</span>.
                </div>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <button className="group relative overflow-hidden bg-emerald-600 px-8 py-3 rounded text-base font-mono hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105 border-t border-emerald-400/30">
                  <span className="relative z-10">&gt; Register_Now()</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <span className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:animate-shimmer"></span>
                </button>
                <button className="group relative overflow-hidden bg-transparent border border-emerald-600 px-8 py-3 rounded text-base font-mono hover:border-emerald-400 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">&gt; Learn_More()</span>
                  <span className="absolute inset-0 bg-emerald-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </button>
              </div>

              {/* Moved stats cards inside the terminal window */}
              <div className={`grid grid-cols-4 gap-1 mt-8 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="bg-gray-900/90 border-t border-emerald-500/30 p-4 first:rounded-l-md last:rounded-r-md">
                  <div className="flex items-center">
                    <span className="text-emerald-400 font-mono font-bold text-2xl">33</span>
                    <span className="text-xs uppercase ml-2 text-gray-400 font-mono">Weeks</span>
                  </div>
                </div>
                <div className="bg-gray-900/90 border-t border-cyan-500/30 p-4">
                  <div className="flex items-center">
                    <span className="text-cyan-400 font-mono font-bold text-2xl">2</span>
                    <span className="text-xs uppercase ml-2 text-gray-400 font-mono">Phases</span>
                  </div>
                </div>
                <div className="bg-gray-900/90 border-t border-teal-500/30 p-4">
                  <div className="flex items-center">
                    <span className="text-teal-400 font-mono font-bold text-2xl">200+</span>
                    <span className="text-xs uppercase ml-2 text-gray-400 font-mono">Participants</span>
                  </div>
                </div>
                <div className="bg-gray-900/90 border-t border-blue-500/30 p-4">
                  <div className="flex items-center">
                    <span className="text-blue-400 font-mono font-bold text-2xl">∞</span>
                    <span className="text-xs uppercase ml-2 text-gray-400 font-mono">Possibilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator - positioned better */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <svg className="h-8 w-8 text-emerald-400 filter drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Timeline Section with Code-like Design */}
      <section className="py-20 bg-gray-950 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-950 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
          <div className="code-grid opacity-5"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-center text-white mb-4 font-mono relative">
              <span className="text-gray-500">&lt;</span><span className="text-emerald-400">hackathon</span><span className="text-gray-500">&nbsp;class=</span><span className="text-cyan-400">"</span><span className="text-white">journey</span><span className="text-cyan-400">"</span><span className="text-gray-500">&gt;</span>
            </h2>
            <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto font-mono">
              <span className="text-gray-500">/**</span> A year-long series of hackathons guiding you through the complete data science workflow <span className="text-gray-500">*/</span>
            </p>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto font-mono">
              <span className="text-gray-500">/**</span> We focus on deliberate practice, non-dipstick evaluation, and gamification <span className="text-gray-500">*/</span>
            </p>
          </div>

          <div className="relative">
            {/* Phase I Header */}
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-block px-8 py-3 bg-gray-900 border border-emerald-500/50 rounded text-white font-mono text-lg">
                <span className="text-emerald-400">class</span> <span className="text-white">PhaseI</span> <span className="text-emerald-400">extends</span> <span className="text-cyan-400">Datathon</span> {"{"}
              </div>
            </div>

            {/* Timeline container */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-emerald-500/50 dashed-line"></div>

              {/* Registration & Team Formation - 6 weeks */}
              <div className="mb-24 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded border border-l-4 border-emerald-500/50 hover:border-emerald-400/70 transition-all duration-300 hover:transform hover:scale-105 shadow-md">
                      <div className="font-mono mb-3">
                        <span className="text-gray-500">// </span><span className="text-emerald-400">function</span> <span className="text-cyan-400">registrationAndTeams</span><span className="text-white">()</span> <span className="text-gray-500">// 6 Weeks</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Registration & Team Formation</h3>
                      <ul className="text-gray-300 list-none ml-5">
                        <li className="mb-1"><span className="text-emerald-400">→</span> Registration opens</li>
                        <li className="mb-1"><span className="text-emerald-400">→</span> Team formations (3-5 members per team)</li>
                        <li><span className="text-emerald-400">→</span> Getting to know teams and final registration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-gray-900 border border-emerald-500 text-emerald-400 font-mono rounded z-10">
                      01
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
                    <div className="h-10 w-10 flex items-center justify-center bg-gray-900 border border-cyan-500 text-cyan-400 font-mono rounded z-10">
                      02
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded border border-r-4 border-cyan-500/50 hover:border-cyan-400/70 transition-all duration-300 hover:transform hover:scale-105 shadow-md">
                      <div className="font-mono mb-3">
                        <span className="text-gray-500">// </span><span className="text-emerald-400">function</span> <span className="text-cyan-400">environmentSetup</span><span className="text-white">()</span> <span className="text-gray-500">// 4 Weeks</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Environment Setup</h3>
                      <p className="text-gray-300 mb-2">Local and remote environments presentation (GitHub Workflows)</p>
                      <p className="text-gray-500 text-sm italic font-mono mb-2">
                        <span className="text-emerald-400">criteriaFactory</span>.evaluate([<span className="text-cyan-400">'Presentation'</span>, <span className="text-cyan-400">'Communication'</span>, <span className="text-cyan-400">'Collaboration'</span>]);
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Exploration - 8 weeks */}
              <div className="mb-24 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded border border-l-4 border-emerald-500/50 hover:border-emerald-400/70 transition-all duration-300 hover:transform hover:scale-105 shadow-md">
                      <div className="font-mono mb-3">
                        <span className="text-gray-500">// </span><span className="text-emerald-400">function</span> <span className="text-cyan-400">dataExploration</span><span className="text-white">()</span> <span className="text-gray-500">// 8 Weeks</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Data Exploration & Preparation</h3>
                      <ul className="text-gray-300 list-none ml-5">
                        <li className="mb-1"><span className="text-emerald-400">→</span> Data collection & visualizations</li>
                        <li className="mb-1"><span className="text-emerald-400">→</span> Exploration & cleaning</li>
                        <li className="mb-1"><span className="text-emerald-400">→</span> Finding data issues and their potential causes</li>
                        <li className="mb-1"><span className="text-emerald-400">→</span> Problem definition</li>
                        <li><span className="text-emerald-400">→</span> Data preparation</li>
                      </ul>
                      <p className="text-gray-500 text-sm italic font-mono mt-3 border-t border-gray-700 pt-2">
                        <span className="text-emerald-400">criteriaFactory</span>.evaluate([<span className="text-cyan-400">'DataScienceProcess'</span>, <span className="text-cyan-400">'Documentation'</span>, <span className="text-cyan-400">'Presentation'</span>, <span className="text-cyan-400">'Collaboration'</span>]);
                      </p>
                    </div>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-gray-900 border border-emerald-500 text-emerald-400 font-mono rounded z-10">
                      03
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>

              {/* Phase I Wrap-up - 2 weeks */}
              <div className="mb-24 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-gray-900 border border-cyan-500 text-cyan-400 font-mono rounded z-10">
                      04
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded border border-r-4 border-cyan-500/50 hover:border-cyan-400/70 transition-all duration-300 hover:transform hover:scale-105 shadow-md">
                      <div className="font-mono mb-3">
                        <span className="text-gray-500">// </span><span className="text-emerald-400">function</span> <span className="text-cyan-400">phaseIWrapUp</span><span className="text-white">()</span> <span className="text-gray-500">// 2 Weeks</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Phase I Wrap-up</h3>
                      <ul className="text-gray-300 list-none ml-5">
                        <li className="mb-1"><span className="text-emerald-400">→</span> Phase I score aggregations</li>
                        <li><span className="text-emerald-400">→</span> Recess week</li>
                      </ul>
                      <p className="text-gray-500 text-sm italic font-mono mt-3 border-t border-gray-700 pt-2">
                        <span className="text-emerald-400">scores</span>.aggregate(<span className="text-cyan-400">'PhaseI'</span>);
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase I closing tag */}
            <div className="text-center mt-12 mb-16 animate-on-scroll">
              <div className="inline-block px-8 py-3 bg-gray-900 border-t border-emerald-500/50 rounded-b text-white font-mono text-lg">
                {"}"}
              </div>
            </div>

            {/* Phase II Header */}
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-block px-8 py-3 bg-gray-900 border border-cyan-500/50 rounded text-white font-mono text-lg">
                <span className="text-emerald-400">class</span> <span className="text-white">PhaseII</span> <span className="text-emerald-400">extends</span> <span className="text-cyan-400">Datathon</span> {"{"}
              </div>
            </div>

            {/* Model Training - 4 weeks */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-cyan-500/50 dashed-line"></div>

              <div className="mb-24 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded border border-l-4 border-cyan-500/50 hover:border-cyan-400/70 transition-all duration-300 hover:transform hover:scale-105 shadow-md">
                      <div className="font-mono mb-3">
                        <span className="text-gray-500">// </span><span className="text-emerald-400">function</span> <span className="text-cyan-400">modelTraining</span><span className="text-white">()</span> <span className="text-gray-500">// 4 Weeks</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Model Training & Evaluation</h3>
                      <ul className="text-gray-300 list-none ml-5">
                        <li className="mb-1"><span className="text-emerald-400">→</span> Benchmark model training</li>
                        <li className="mb-1"><span className="text-emerald-400">→</span> Evaluations & tuning</li>
                        <li><span className="text-emerald-400">→</span> Validations</li>
                      </ul>
                      <p className="text-gray-500 text-sm italic font-mono mt-3 border-t border-gray-700 pt-2">
                        <span className="text-emerald-400">criteriaFactory</span>.evaluate([<span className="text-cyan-400">'DataScienceProcess'</span>, <span className="text-cyan-400">'Documentation'</span>, <span className="text-cyan-400">'Presentation'</span>, <span className="text-cyan-400">'Collaboration'</span>]);
                      </p>
                    </div>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-gray-900 border border-cyan-500 text-cyan-400 font-mono rounded z-10">
                      05
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
                    <div className="h-10 w-10 flex items-center justify-center bg-gray-900 border border-indigo-500 text-indigo-400 font-mono rounded z-10">
                      06
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded border border-r-4 border-indigo-500/50 hover:border-indigo-400/70 transition-all duration-300 hover:transform hover:scale-105 shadow-md">
                      <div className="font-mono mb-3">
                        <span className="text-gray-500">// </span><span className="text-emerald-400">function</span> <span className="text-indigo-400">deployment</span><span className="text-white">()</span> <span className="text-gray-500">// 4 Weeks</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Deployment & Final Touches</h3>
                      <p className="text-gray-300 mb-2">Prepare your solution for real-world application</p>
                      <p className="text-gray-500 text-sm italic font-mono mt-3 border-t border-gray-700 pt-2">
                        <span className="text-emerald-400">criteriaFactory</span>.evaluate([<span className="text-indigo-400">'Documentation'</span>, <span className="text-indigo-400">'Presentation'</span>, <span className="text-indigo-400">'Collaboration'</span>]);
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Score Aggregation - 3 weeks */}
              <div className="mb-24 relative animate-on-scroll">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded border border-l-4 border-indigo-500/50 hover:border-indigo-400/70 transition-all duration-300 hover:transform hover:scale-105 shadow-md">
                      <div className="font-mono mb-3">
                        <span className="text-gray-500">// </span><span className="text-emerald-400">function</span> <span className="text-indigo-400">phaseIIEvaluation</span><span className="text-white">()</span> <span className="text-gray-500">// 3 Weeks</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Phase II Evaluation</h3>
                      <p className="text-gray-300 mb-2">Phase II score aggregations</p>
                      <p className="text-gray-500 text-sm italic font-mono mt-3 border-t border-gray-700 pt-2">
                        <span className="text-emerald-400">criteriaFactory</span>.evaluate([<span className="text-indigo-400">'Difficulty'</span>, <span className="text-indigo-400">'TechnicalImplementation'</span>, <span className="text-indigo-400">'LearningValue'</span>, <span className="text-indigo-400">'Impact'</span>, <span className="text-indigo-400">'Feasibility'</span>]);
                      </p>
                    </div>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-gray-900 border border-indigo-500 text-indigo-400 font-mono rounded z-10">
                      07
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
                    <div className="h-10 w-10 flex items-center justify-center bg-gray-900 border border-emerald-500 text-emerald-400 font-mono rounded z-10">
                      08
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded border border-r-4 border-emerald-500/50 hover:border-emerald-400/70 transition-all duration-300 hover:transform hover:scale-105 shadow-md">
                      <div className="font-mono mb-3">
                        <span className="text-gray-500">// </span><span className="text-emerald-400">function</span> <span className="text-cyan-400">celebrationAndAwards</span><span className="text-white">()</span> <span className="text-gray-500">// 2 Weeks</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">Celebration & Awards</h3>
                      <ul className="text-gray-300 list-none ml-5">
                        <li className="mb-1"><span className="text-emerald-400">→</span> Celebration event</li>
                        <li><span className="text-emerald-400">→</span> Awards ceremony</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase II closing tag */}
            <div className="text-center mt-12 mb-16 animate-on-scroll">
              <div className="inline-block px-8 py-3 bg-gray-900 border-t border-cyan-500/50 rounded-b text-white font-mono text-lg">
                {"}"}
              </div>
            </div>

            {/* Closing tag for the section */}
            <div className="text-center animate-on-scroll">
              <h2 className="text-2xl font-bold text-center text-white mb-4 font-mono">
                <span className="text-gray-500">&lt;/</span><span className="text-emerald-400">hackathon</span><span className="text-gray-500">&gt;</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
