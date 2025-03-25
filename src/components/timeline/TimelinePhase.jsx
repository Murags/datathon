import TimelineCard from './TimelineCard'

export default function TimelinePhase({ title, items, borderColor }) {
  return (
    <div className="relative">
      {/* Phase Header */}
      <div className="text-center mb-16 animate-on-scroll">
        <div className={`inline-block px-8 py-3 bg-gray-900 border border-${borderColor}-500/50 rounded text-white font-mono text-lg`}>
          <span className="text-emerald-400">class</span>{' '}
          <span className="text-white">{title}</span>{' '}
          <span className="text-emerald-400">extends</span>{' '}
          <span className="text-cyan-400">Datathon</span> {"{"}
        </div>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical line */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-${borderColor}-500/50 dashed-line`}></div>

        {/* Timeline items */}
        {items.map((item, index) => (
          <TimelineCard
            key={index}
            position={item.position}
            number={item.number}
            title={item.title}
            duration={item.duration}
            functionName={item.functionName}
            borderColor={item.borderColor}
          >
            {item.content}
          </TimelineCard>
        ))}
      </div>

      {/* Phase closing tag */}
      <div className="text-center mt-12 mb-16 animate-on-scroll">
        <div className={`inline-block px-8 py-3 bg-gray-900 border-t border-${borderColor}-500/50 rounded-b text-white font-mono text-lg`}>
          {"}"}
        </div>
      </div>
    </div>
  )
}
