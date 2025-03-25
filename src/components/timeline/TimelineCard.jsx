export default function TimelineCard({
  position = 'left',
  number,
  title,
  duration,
  functionName,
  children,
  borderColor = 'emerald'
}) {
  const cardStyles = `bg-gray-900/80 backdrop-blur-sm p-6 rounded border ${
    position === 'left' ? `border-l-4 border-emerald-500/50` : `border-r-4 border-cyan-500/50`
  } hover:border-${position === 'left' ? 'emerald' : 'cyan'}-400/70 transition-all duration-300 hover:transform hover:scale-105 shadow-md`

  return (
    <div className="mb-24 relative animate-on-scroll">
      <div className="flex flex-col md:flex-row items-center">
        {position === 'left' ? (
          <>
            <div className="md:w-1/2 md:pr-8 md:text-right">
              <div className={cardStyles}>
                <div className="font-mono mb-3">
                  <span className="text-gray-500">// </span>
                  <span className="text-emerald-400">function</span>{' '}
                  <span className="text-cyan-400">{functionName}</span>
                  <span className="text-white">()</span>
                  {/* <span className="text-gray-500">// {duration}</span> */}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{title}</h3>
                {children}
              </div>
            </div>
            <TimelineNumber number={number} color="emerald" />
            <div className="md:w-1/2 md:pl-8"></div>
          </>
        ) : (
          <>
            <div className="md:w-1/2 md:pr-8"></div>
            <TimelineNumber number={number} color="cyan" />
            <div className="md:w-1/2 md:pl-8">
              <div className={cardStyles}>
                <div className="font-mono mb-3">
                  <span className="text-gray-500">// </span>
                  <span className="text-emerald-400">function</span>{' '}
                  <span className="text-cyan-400">{functionName}</span>
                  <span className="text-white">()</span>
                  {/* <span className="text-gray-500">// {duration}</span> */}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{title}</h3>
                {children}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function TimelineNumber({ number, color }) {
  return (
    <div className="md:w-12 flex justify-center my-4 md:my-0">
      <div className={`h-10 w-10 flex items-center justify-center bg-gray-900 border border-${color}-500 text-${color}-400 font-mono rounded z-10`}>
        {String(number).padStart(2, '0')}
      </div>
    </div>
  )
}
