export default function Button({ children, variant = 'primary', onClick, className = '' }) {
  const baseStyles = "group relative overflow-hidden px-8 py-3 rounded text-base font-mono transition-all duration-300 transform hover:scale-105"

  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-500 border-t border-emerald-400/30",
    secondary: "bg-transparent border border-emerald-600 hover:border-emerald-400"
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
      {variant === 'primary' && (
        <span className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:animate-shimmer"></span>
      )}
    </button>
  )
}
