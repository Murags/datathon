import Button from '../common/Button'
import GradientText from '../common/GradientText'

export default function Impact() {
  return (
    <section className="py-32 bg-gray-900/50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-950 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>

        {/* Breathing effect orbs */}
        <div className="absolute inset-0">
          {/* Large background orbs */}
          <div className="absolute h-[60rem] w-[60rem] bg-emerald-500/5 rounded-full blur-[100px] -top-1/4 -left-1/4 [animation:var(--animate-pulse-slow)]"></div>
          <div className="absolute h-[50rem] w-[50rem] bg-cyan-500/5 rounded-full blur-[80px] -bottom-1/4 -right-1/4 [animation:var(--animate-pulse-slow)] delay-1000"></div>

          {/* Medium orbs */}
          <div className="absolute h-[40rem] w-[40rem] bg-blue-500/5 rounded-full blur-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [animation:var(--animate-pulse-slow)] delay-300"></div>
          <div className="absolute h-[35rem] w-[35rem] bg-teal-500/5 rounded-full blur-3xl left-1/4 top-3/4 -translate-x-1/2 -translate-y-1/2 [animation:var(--animate-pulse-slow)] delay-700"></div>

          {/* Smaller dynamic orbs */}
          <div className="absolute h-96 w-96 bg-emerald-500/10 rounded-full blur-3xl top-1/4 left-1/4 [animation:var(--animate-pulse-slow)] delay-500"></div>
          <div className="absolute h-80 w-80 bg-cyan-500/10 rounded-full blur-3xl bottom-1/3 right-1/4 [animation:var(--animate-pulse-slow)] delay-200"></div>
          <div className="absolute h-72 w-72 bg-teal-500/10 rounded-full blur-3xl top-1/3 right-1/3 [animation:var(--animate-pulse-slow)] delay-1000"></div>

          {/* Accent orbs */}
          <div className="absolute h-48 w-48 bg-emerald-400/10 rounded-full blur-2xl top-1/2 left-1/6 [animation:var(--animate-float-slow)]"></div>
          <div className="absolute h-36 w-36 bg-cyan-400/10 rounded-full blur-2xl bottom-1/4 right-1/6 [animation:var(--animate-float-slow)] delay-500"></div>
          <div className="absolute h-24 w-24 bg-blue-400/10 rounded-full blur-xl top-1/3 left-1/2 [animation:var(--animate-float-slow)] delay-1000"></div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            <div className="absolute h-3 w-3 bg-emerald-400/30 rounded-full top-1/4 left-1/4 [animation:var(--animate-float-slow)]"></div>
            <div className="absolute h-2 w-2 bg-cyan-400/30 rounded-full top-3/4 right-1/4 [animation:var(--animate-float-slow)] delay-1000"></div>
            <div className="absolute h-4 w-4 bg-teal-400/30 rounded-full top-1/2 left-1/3 [animation:var(--animate-float-slow)] delay-[2000ms]"></div>
            <div className="absolute h-3 w-3 bg-blue-400/30 rounded-full bottom-1/4 right-1/3 [animation:var--animate-float-slow)] delay-[1500ms]"></div>
            <div className="absolute h-2 w-2 bg-emerald-400/30 rounded-full top-2/3 right-1/2 [animation:var(--animate-float-slow)] delay-[800ms]"></div>
          </div>

          {/* Enhanced gradient waves */}
          <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-emerald-500/10 to-transparent [animation:var(--animate-spin-slow)]"></div>
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-cyan-500/10 to-transparent [animation:var(--animate-spin-slow-reverse)] delay-500"></div>
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-teal-500/10 to-transparent [animation:var(--animate-spin-slow)] delay-1000"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Main Impact Title with Code Effect */}
        <div className="animate-on-scroll text-center mb-24">
          <div className="inline-block">
            <div className="text-sm text-gray-500 text-left mb-2 font-mono">// The Future of Data Science</div>
            <div className="text-7xl font-bold relative">
              <span className="absolute -left-8 text-emerald-400/20">{`{`}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
                Impact.generate()
              </span>
              <span className="absolute -right-8 text-emerald-400/20">{`}`}</span>
            </div>
          </div>
        </div>

        {/* Main Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mt-20">
          <TransformativeLearning />
          <FeatureShowcase />
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-transparent blur-3xl"></div>
          <Button
            variant="primary"
            className="text-lg px-16 py-5 relative z-10 shadow-xl"
          >
            Initialize Your Journey
          </Button>
        </div>
      </div>
    </section>
  )
}

function TransformativeLearning() {
  const features = [
    { icon: '🎯', title: 'Hands-on Experience', description: 'Real-world projects with real impact', color: 'emerald' },
    { icon: '💡', title: 'Expert Mentorship', description: 'Learn from industry leaders', color: 'cyan' },
    { icon: '🚀', title: 'Career Growth', description: 'Launch your data science career', color: 'teal' }
  ]

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-emerald-500/20 relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <h3 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
        Transformative Learning
      </h3>
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center`}>
              <span className="text-2xl">{feature.icon}</span>
            </div>
            <div className="flex-1">
              <div className="text-xl font-semibold text-white">{feature.title}</div>
              <div className="text-gray-400">{feature.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FeatureShowcase() {
  const features = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      ),
      title: 'Real-time Collaboration',
      description: 'Work alongside peers and mentors in a dynamic environment designed for growth and innovation.',
      color: 'cyan'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      ),
      title: 'Accelerated Learning',
      description: 'Fast-track your data science journey with hands-on projects and expert guidance.',
      color: 'emerald'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      ),
      title: 'Industry Projects',
      description: 'Work on real-world challenges that matter, building a portfolio that stands out.',
      color: 'teal'
    }
  ]

  return (
    <div className="relative space-y-6">
      {features.map((feature, index) => (
        <div key={index} className={`group relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border-r-4 border-${feature.color}-500/50 transform hover:-translate-x-2 transition-all duration-300`}>
          <div className={`absolute inset-0 bg-gradient-to-r from-${feature.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          <div className="flex items-start space-x-4">
            <div className={`flex-shrink-0 w-16 h-16 bg-${feature.color}-500/10 rounded-lg flex items-center justify-center`}>
              <svg className={`w-8 h-8 text-${feature.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {feature.icon}
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Decorative Element */}
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-96 bg-gradient-to-t from-emerald-500/10 via-cyan-500/10 to-teal-500/10 blur-3xl"></div>
    </div>
  )
}
