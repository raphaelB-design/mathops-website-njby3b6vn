import { useEffect, useState } from 'react'

export function ParticleBackground() {
  const [particles, setParticles] = useState<
    { id: number; left: string; top: string; delay: string; duration: string; size: string }[]
  >([])

  useEffect(() => {
    // Generate particles for CSS animation
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 10}s`,
      size: `${2 + Math.random() * 4}px`,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,108,247,0.1)_0%,rgba(5,5,8,0)_70%)]" />
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            boxShadow: '0 0 15px 2px rgba(123, 47, 247, 0.4)',
            opacity: 0.3 + Math.random() * 0.4,
          }}
        />
      ))}
    </div>
  )
}
