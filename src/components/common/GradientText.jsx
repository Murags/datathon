export default function GradientText({ children, className = '' }) {
  return (
    <h1 className={`bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tighter coding-font ${className}`}>
      {children}
    </h1>
  )
}
