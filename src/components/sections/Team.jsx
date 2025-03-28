import { useState } from 'react'
import GradientText from '../common/GradientText'

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Lead Data Scientist",
      specialty: "ML/AI Architecture",
      links: { github: "#", linkedin: "#" },
      color: "emerald",
      stats: ["10+ ML Models", "5 Years exp", "3 Patents"]
    },
    {
      name: "Alex Rodriguez",
      role: "Backend Engineer",
      specialty: "System Design",
      links: { github: "#", linkedin: "#" },
      color: "cyan",
      stats: ["99.9% Uptime", "50M+ API calls", "12 Services"]
    },
    {
      name: "Maya Patel",
      role: "Frontend Developer",
      specialty: "UI/UX Design",
      links: { github: "#", linkedin: "#" },
      color: "teal",
      stats: ["60 FPS", "A11Y Expert", "500+ Components"]
    }
  ]

  return (
    <section className="py-32 bg-gray-900/50 relative overflow-hidden">
      {/* Enhanced cyber grid with moving particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-90"></div>
        <div className="grid-pattern"></div>
        <div className="matrix-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Animated Section Title */}
        <div className="animate-on-scroll text-center mb-24">
          <div className="inline-block">
            <div className="text-sm text-gray-500 text-left mb-2 font-mono typing-effect">
              <span className="text-emerald-400">$</span> ./initialize-team --mode=production
            </div>
            <div className="text-7xl font-bold relative group">
              <div className="absolute -left-8 text-emerald-400/20 group-hover:text-emerald-400/40 transition-colors">{`<`}</div>
              <GradientText className="relative">
                Team.build()
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </GradientText>
              <div className="absolute -right-8 text-emerald-400/20 group-hover:text-emerald-400/40 transition-colors">{`/>`}</div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
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
      <div className={`relative h-[400px] rounded-lg overflow-hidden bg-gray-900/80 backdrop-blur-sm border-2 border-${member.color}-500/20 transition-all duration-500 transform group-hover:scale-[1.02] group-hover:border-${member.color}-500/40 hover:shadow-2xl hover:shadow-${member.color}-500/10`}>
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          {/* Matrix rain effect */}
          <div className="absolute inset-0 opacity-10 matrix-rain"></div>

          {/* Gradient overlays */}
          <div className={`absolute inset-0 bg-gradient-to-br from-${member.color}-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

          {/* Animated corner accents */}
          <div className={`absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-${member.color}-500/40 transform -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
          <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-${member.color}-500/40 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
        </div>

        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-between z-10">
          {/* Header with terminal style */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 rounded-full bg-${member.color}-500/60`}></div>
              <div className="font-mono text-sm text-gray-500">
                ~ connecting to server...
              </div>
            </div>

            <div className={`font-mono text-${member.color}-400 mb-2`}>
              <span className="text-gray-500">class</span> {member.role.replace(/\s+/g, '')} {`{`}
            </div>
            <h3 className={`text-3xl font-bold text-${member.color}-400 mb-4 glitch-text`}>
              {member.name}
            </h3>
            <div className={`inline-block px-4 py-1 rounded-full text-sm bg-${member.color}-500/10 text-${member.color}-400 font-mono border border-${member.color}-500/20`}>
              {member.specialty}
            </div>

            {/* Stats Display */}
            <div className="mt-6 space-y-2">
              {member.stats.map((stat, i) => (
                <div key={i} className="font-mono text-sm">
                  <span className="text-gray-500">$</span>
                  <span className={`text-${member.color}-400 ml-2`}>{stat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer with enhanced styling */}
          <div>
            <div className={`h-px bg-gradient-to-r from-transparent via-${member.color}-500/20 to-transparent my-4`}></div>
            <div className="flex justify-between items-center">
              <div className="font-mono text-gray-500"></div>
              <div className="flex gap-4">
                {Object.entries(member.links).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    className={`text-gray-400 hover:text-${member.color}-400 transition-colors relative group/link`}
                  >
                    <div className={`absolute -inset-2 bg-${member.color}-500/20 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity`}></div>
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
