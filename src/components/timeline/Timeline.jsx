import Footer from '../common/Footer'
import TimelinePhase from './TimelinePhase'

export default function Timeline() {
  const phases = {
    phaseI: [
      {
        id: 'phaseI',
        position: 'left',
        number: 1,
        title: 'Registration & Team Formation',
        duration: '6 Weeks',
        functionName: 'registrationAndTeams',
        borderColor: 'emerald',
        content: (
          <ul className="text-gray-300 list-none ml-5">
            <li className="mb-1"><span className="text-emerald-400">→</span> Registration opens</li>
            <li className="mb-1"><span className="text-emerald-400">→</span> Team formations (3-5 members)</li>
            <li><span className="text-emerald-400">→</span> Getting to know teams</li>
          </ul>
        )
      },
      {
        position: 'right',
        number: 2,
        title: 'Environment Setup',
        duration: '4 Weeks',
        functionName: 'setupEnvironment',
        borderColor: 'cyan',
        content: (
          <>
            <p className="text-gray-300 mb-2">Local and remote environments setup with GitHub Workflows</p>
            <p className="text-gray-500 text-sm italic font-mono mt-3 border-t border-gray-700 pt-2">
              <span className="text-cyan-400">criteriaFactory</span>
              <span className="text-gray-400">.evaluate</span>([
              <span className="text-cyan-400">'Presentation'</span>,{' '}
              <span className="text-teal-400">'Communication'</span>,{' '}
              <span className="text-cyan-400">'Collaboration'</span>]);
            </p>
          </>
        )
      },
      {
        position: 'left',
        number: 3,
        title: 'Data Exploration & Preparation',
        duration: '8 Weeks',
        functionName: 'dataExploration',
        borderColor: 'emerald',
        content: (
          <>
            <ul className="text-gray-300 list-none ml-5">
              <li className="mb-1"><span className="text-emerald-400">→</span> Data collection & visualizations</li>
              <li className="mb-2"><span className="text-emerald-400">→</span> Exploration & cleaning</li>
              <li className="mb-1"><span className="text-emerald-400">→</span> Finding data issues and their potential causes</li>
              <li className="mb-1"><span className="text-emerald-400">→</span> Problem definition</li>
              <li><span className="text-emerald-400">→</span> Data preparation</li>
            </ul>
            <p className="text-gray-500 text-sm italic font-mono mt-3 border-t border-gray-700 pt-2">
              <span className="text-emerald-400">criteriaFactory</span>
              <span className="text-gray-400">.evaluate</span>([
              <span className="text-cyan-400">'DataScienceProcess'</span>,{' '}
              <span className="text-teal-400">'Documentation'</span>,{' '}
              <span className="text-cyan-400">'Presentation'</span>,{' '}
              <span className="text-teal-400">'Collaboration'</span>]);
            </p>
          </>
        )
      },
      {
        position: 'right',
        number: 4,
        title: 'Phase I Evaluation',
        duration: '2 Weeks',
        functionName: 'phaseOneEvaluation',
        borderColor: 'cyan',
        content: (
          <>
            <p className="text-gray-500 text-sm italic font-mono">
              <span className="text-cyan-400">scores</span>
              <span className="text-gray-400">.aggregate</span>([
              <span className="text-cyan-400">'PhaseI'</span>]);
            </p>
            <p className="text-gray-300 mt-3">Recess week</p>
          </>
        )
      }
    ],
    phaseII: [
      {
        id: 'phaseII',
        position: 'left',
        number: 5,
        title: 'Model Training & Evaluation',
        duration: '4 Weeks',
        functionName: 'trainAndEvaluate',
        borderColor: 'emerald',
        content: (
          <>
            <ul className="text-gray-300 list-none ml-5">
              <li className="mb-1"><span className="text-emerald-400">→</span> Benchmark model training</li>
              <li className="mb-1"><span className="text-emerald-400">→</span> Model evaluation & tuning</li>
              <li><span className="text-emerald-400">→</span> Validation procedures</li>
            </ul>
            <p className="text-gray-500 text-sm italic font-mono mt-3 border-t border-gray-700 pt-2">
              <span className="text-emerald-400">criteriaFactory</span>
              <span className="text-gray-400">.evaluate</span>([
              <span className="text-cyan-400">'DataScience'</span>,{' '}
              <span className="text-teal-400">'Documentation'</span>]);
            </p>
          </>
        )
      },
      {
        position: 'right',
        number: 6,
        title: 'Deployment & Final Touches',
        duration: '4 Weeks',
        functionName: 'deployAndFinalize',
        borderColor: 'cyan',
        content: (
          <>
            <p className="text-gray-300">Preparing solution for real-world application</p>
            <p className="text-gray-500 text-sm italic font-mono mt-3 border-t border-gray-700 pt-2">
              <span className="text-cyan-400">criteriaFactory</span>
              <span className="text-gray-400">.evaluate</span>([
              <span className="text-cyan-400">'Documentation'</span>,{' '}
              <span className="text-teal-400">'Communication'</span>]);
            </p>
          </>
        )
      },
      {
        position: 'left',
        number: 7,
        title: 'Phase II Evaluation',
        duration: '3 Weeks',
        functionName: 'phaseTwoEvaluation',
        borderColor: 'emerald',
        content: (
          <>
            <p className="text-gray-300 mb-2">Final score aggregations based on:</p>
            <ul className="text-gray-300 list-none ml-5">
              <li className="mb-1"><span className="text-emerald-400">→</span> Technical Implementation</li>
              <li className="mb-1"><span className="text-emerald-400">→</span> Impact & Feasibility</li>
              <li><span className="text-emerald-400">→</span> Learning Value</li>
            </ul>
          </>
        )
      },
      {
        id: 'finalEvent',
        position: 'right',
        number: 8,
        title: 'Final Event',
        duration: '2 Weeks',
        functionName: 'celebrationAndAwards',
        borderColor: 'cyan',
        content: (
          <ul className="text-gray-300 list-none ml-5">
            <li className="mb-1"><span className="text-cyan-400">→</span> Career fair</li>
            <li className="mb-1"><span className="text-cyan-400">→</span> Participant booths</li>
            <li><span className="text-cyan-400">→</span> Winner announcements</li>
          </ul>
        )
      }
    ]
  }

  return (
    <section className=" bg-gray-950 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-950 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
        <div className="code-grid opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Opening tag */}
        <div className="animate-on-scroll pt-20">
          <h2 className="text-4xl font-bold text-center text-white mb-4 font-mono">
            <span className="text-gray-500">&lt;</span>
            <span className="text-emerald-400">hackathon</span>
            <span className="text-gray-500">&nbsp;class=</span>
            <span className="text-cyan-400">"</span>
            <span className="text-white">journey</span>
            <span className="text-cyan-400">"</span>
            <span className="text-gray-500">&gt;</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto font-mono">
            <span className="text-gray-500">/**</span> A year-long series of hackathons guiding you through the complete data science workflow <span className="text-gray-500">*/</span>
          </p>
        </div>

        {/* Phase I */}
        <TimelinePhase
          id={phases.phaseI[0].id}
          title="PhaseI"
          items={phases.phaseI}
          borderColor="emerald"
        />

        {/* Phase II */}
        <TimelinePhase
          id={phases.phaseII[0].id}
          finalEventID={phases.phaseII[3].id}
          title="PhaseII"
          items={phases.phaseII}
          borderColor="cyan"
        />

        {/* Closing tag */}
        <div className="text-center animate-on-scroll mt-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-gray-500">&lt;/</span>
            <span className="text-emerald-400">hackathon</span>
            <span className="text-gray-500">&gt;</span>
          </h2>
        </div>

      </div>

      <Footer phase1_ID={phases.phaseI[0].id} phase2_ID={phases.phaseII[0].id} finalEventID={phases.phaseII[3].id} />
    </section>
  )
}
