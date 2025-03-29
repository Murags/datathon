import { useState } from 'react'
import GradientText from '../common/GradientText'

export default function Team() {
  const teamMembers = [
    {
      name: "Ziro",
      role: "Lead Organizer",
      specialty: "Project Lead",
      links: { github: "#", linkedin: "#" },
      color: "emerald",
      stats: ["Project Architecture", "Team Management", "Strategic Planning"],
      id: "0xLEAD1"
    },
    {
      name: "Frank",
      role: "Lead Organizer",
      specialty: "Technical Lead",
      links: { github: "#", linkedin: "#" },
      color: "emerald",
      stats: ["Technical Direction", "System Design", "Innovation Strategy"],
      id: "0xLEAD2"
    },
    {
      name: "Murage",
      role: "Frontend Developer",
      specialty: "UI/UX Engineer",
      links: { github: "#", linkedin: "#" },
      color: "cyan",
      stats: ["React Expert", "UI Architecture", "Animation Design"],
      id: "0xFE001"
    },
    {
      name: "Hashim",
      role: "Frontend Developer",
      specialty: "Frontend Engineer",
      links: { github: "#", linkedin: "#" },
      color: "cyan",
      stats: ["Component Design", "User Experience", "Performance"],
      id: "0xFE002"
    },
    {
      name: "Mark",
      role: "Backend Developer",
      specialty: "Backend Architect",
      links: { github: "#", linkedin: "#" },
      color: "teal",
      stats: ["API Design", "Database Management", "System Integration"],
      id: "0xBE001"
    },
    {
      name: "Festus",
      role: "Backend Developer",
      specialty: "Backend Engineer",
      links: { github: "#", linkedin: "#" },
      color: "teal",
      stats: ["Server Logic", "Data Processing", "API Implementation"],
      id: "0xBE002"
    },
    {
      name: "Leon",
      role: "Backend Developer",
      specialty: "Systems Engineer",
      links: { github: "#", linkedin: "#" },
      color: "teal",
      stats: ["Infrastructure", "DevOps", "Security"],
      id: "0xBE003"
    },
    {
      name: "Karen",
      role: "Team Operations",
      specialty: "Team Formation Specialist",
      links: { github: "#", linkedin: "#" },
      color: "blue",
      stats: ["Team Building", "Coordination", "Resource Management"],
      id: "0xOPS1"
    }
  ]

  return (
    <section className="py-32 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-90"></div>
        <div className="cyber-grid"></div>
        <div className="data-streams"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="animate-on-scroll text-center mb-24">
          <div className="inline-block">
            <div className="text-sm text-gray-500 text-left mb-2 font-mono terminal-line">
              <span className="text-emerald-400">root@datahack</span>
              <span className="text-gray-500">:</span>
              <span className="text-cyan-400">~/team</span>
              <span className="text-gray-500">$ </span>
              <span className="typing-effect">initialize --protocol=quantum</span>
            </div>
            <div className="text-7xl font-bold relative group cyberpunk-title">
              <div className="absolute -left-12 text-emerald-400/20 group-hover:text-emerald-400/40 transition-colors">[</div>
              <GradientText className="relative inline-block">
                TEAM.DEPLOY()
                <div className="cyber-glitch"></div>
              </GradientText>
              <div className="absolute -right-12 text-emerald-400/20 group-hover:text-emerald-400/40 transition-colors">]</div>
            </div>
          </div>
        </div>

        <div className="mb-32 relative">
          <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-emerald-500/50 via-transparent to-emerald-500/50"></div>
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-emerald-500/50 via-transparent to-emerald-500/50"></div>

          <div className="grid md:grid-cols-2 gap-16 relative">
            <div className="cyber-panel group">
              <div className="cyber-panel-header">
                <span className="text-emerald-400 font-mono text-sm"># System Status</span>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse delay-100"></div>
                  <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse delay-200"></div>
                </div>
              </div>
              <div className="space-y-6 p-6">
                <div className="cyber-text-block">
                  <span className="text-gray-500">/**</span>
                  <p className="text-lg text-gray-300 leading-relaxed pl-4">
                    Elite team of data scientists, engineers, and designers pushing the boundaries
                    of what's possible with AI and data science.
                  </p>
                  <span className="text-gray-500">*/</span>
                </div>
                <div className="cyber-stats-grid">
                  <div className="cyber-stat-item">
                    <span className="text-emerald-400 text-2xl font-bold">100+</span>
                    <span className="text-gray-400 text-sm">Projects Deployed</span>
                  </div>
                  <div className="cyber-stat-item">
                    <span className="text-cyan-400 text-2xl font-bold">50TB</span>
                    <span className="text-gray-400 text-sm">Data Processed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-panel group">
              <div className="cyber-panel-header">
                <span className="text-cyan-400 font-mono text-sm"># Core Capabilities</span>
                <span className="text-gray-500 font-mono text-sm">v2.4.1</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="cyber-capability-list">
                  {[
                    { text: "Quantum ML Architecture", color: "emerald" },
                    { text: "Neural Network Design", color: "cyan" },
                    { text: "Advanced Data Processing", color: "teal" },
                    { text: "AI System Integration", color: "blue" }
                  ].map((item, index) => (
                    <div key={index} className="cyber-capability-item group/item">
                      <div className={`cyber-capability-icon bg-${item.color}-500/10 text-${item.color}-400`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className={`text-${item.color}-400 group-hover/item:text-${item.color}-300`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>

          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-6 pb-4 px-4 min-w-min">
              {teamMembers.map((member, index) => (
                <div key={index} className="w-[350px] flex-shrink-0">
                  <TeamCard member={member} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative animate-on-scroll perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={`relative h-[400px] rounded-lg overflow-hidden bg-gray-900/80 backdrop-blur-sm transition-all duration-500 transform hover:scale-[1.02] cyber-card`}>
        <div className="cyber-frame">
          <div className={`cyber-line-top bg-${member.color}-500/50`}></div>
          <div className={`cyber-line-right bg-${member.color}-500/50`}></div>
          <div className={`cyber-line-bottom bg-${member.color}-500/50`}></div>
          <div className={`cyber-line-left bg-${member.color}-500/50`}></div>
        </div>

        <div className="relative h-full p-6 flex flex-col justify-between z-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className={`cyber-circle bg-${member.color}-500`}></div>
              <div className="font-mono text-sm">
                <span className="text-gray-500">[</span>
                <span className={`text-${member.color}-400`}>{member.id}</span>
                <span className="text-gray-500">]</span>
              </div>
            </div>

            <div className={`cyber-text-container mb-4`}>
              <h3 className={`text-3xl font-bold text-${member.color}-400 cyber-text`}>
                {member.name}
              </h3>
              <div className={`cyber-badge bg-${member.color}-500/10 border border-${member.color}-500/20`}>
                <span className="text-sm font-mono">{member.role}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {member.stats.map((stat, i) => (
                <div key={i} className={`cyber-stat bg-${member.color}-500/5 border-l-2 border-${member.color}-500/30`}>
                  <span className="font-mono text-sm">
                    <span className="text-gray-500">&gt; </span>
                    <span className={`text-${member.color}-400`}>{stat}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={`cyber-separator bg-gradient-to-r from-transparent via-${member.color}-500/20 to-transparent`}></div>
            <div className="flex justify-between items-center pt-4">
              <div className="cyber-tag">
                <span className={`text-${member.color}-400`}>{member.specialty}</span>
              </div>
              <div className="flex gap-4">
                {Object.entries(member.links).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    className={`cyber-link text-gray-400 hover:text-${member.color}-400`}
                  >
                    <div className={`cyber-link-bg bg-${member.color}-500/20`}></div>
                    <svg className="w-5 h-5 relative" fill="currentColor" viewBox="0 0 24 24">
                      {platform === 'github' ? (
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      ) : (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
