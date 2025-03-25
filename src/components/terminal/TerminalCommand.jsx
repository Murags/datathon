export default function TerminalCommand({ isVisible, command }) {
  return (
    <div className={`mb-6 terminal-text transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex items-start">
        <span className="text-emerald-400 mr-2">$</span>
        <div>
          <span className="typing-animation text-emerald-200">{command}</span>
          <span className="blinking-cursor">|</span>
        </div>
      </div>
    </div>
  )
}
