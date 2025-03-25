export default function TerminalStats({ isVisible }) {
  const stats = [
    { value: '33', label: 'WEEKS', color: 'emerald' },
    { value: '2', label: 'PHASES', color: 'cyan' },
    { value: '200+', label: 'PARTICIPANTS', color: 'teal' },
    { value: '∞', label: 'POSSIBILITIES', color: 'blue' }
  ]

  return (
    <div className={`grid grid-cols-4 gap-1 mt-8 transition-all duration-1000 delay-900 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
    }`}>
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          color={stat.color}
          isFirst={index === 0}
          isLast={index === stats.length - 1}
        />
      ))}
    </div>
  )
}

function StatCard({ value, label, color, isFirst, isLast }) {
  const colorMap = {
    emerald: 'border-emerald-400 text-emerald-400',
    cyan: 'border-cyan-400 text-cyan-400',
    teal: 'border-teal-400 text-teal-400',
    blue: 'border-blue-400 text-blue-400'
  }

  return (
    <div className={`bg-gray-900/90 border-t ${colorMap[color]} p-4 ${
      isFirst ? 'rounded-l-md' : ''} ${isLast ? 'rounded-r-md' : ''
    }`}>
      <div className="flex items-center">
        <span className={`font-mono font-bold text-2xl`}>{value}</span>
        <span className="text-xs uppercase ml-2 text-gray-400 font-mono tracking-wider">{label}</span>
      </div>
    </div>
  )
}
