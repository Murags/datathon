import TerminalHeader from './TerminalHeader'
import TerminalCommand from './TerminalCommand'
import TerminalStats from './TerminalStats'
import Button from '../common/Button'
import GradientText from '../common/GradientText'
import { useNavigate } from 'react-router-dom';
export default function Terminal({ isVisible, currentYear }) {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-md overflow-hidden shadow-glow terminal-window">
      <TerminalHeader />

      <div className="p-6 text-left">
        <TerminalCommand
          isVisible={isVisible}
          command="sudo launch --event"
        />

        <div className={`terminal-output mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <GradientText className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="block">&lt;DATA</span>
            <span className="block pl-6">HACKATHON</span>
            <span className="block pl-12">{currentYear}/&gt;</span>
          </GradientText>

          <div className="text-gray-300 text-lg mb-8 coding-comments">
            <span className="text-gray-500">// </span>
            Transform raw data into groundbreaking solutions.<br />
            <span className="text-gray-500">// </span>
            Join the ultimate competition for{' '}
            <span className="text-emerald-400 font-bold">innovators</span>,{' '}
            <span className="text-cyan-400 font-bold">visionaries</span>, and{' '}
            <span className="text-teal-400 font-bold">problem solvers</span>.
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Button variant="primary" className="cursor-pointer" onClick={() => navigate('/signup')}>
            &gt; Register_Now()
          </Button>
          <Button variant="secondary">
            &gt; Learn_More()
          </Button>
        </div>

        <TerminalStats isVisible={isVisible} />
      </div>
    </div>
  )
}
