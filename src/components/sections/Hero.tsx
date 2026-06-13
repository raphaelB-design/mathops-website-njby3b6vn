import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search, Settings, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const VALUE_PROPS = [
  {
    icon: Search,
    title: 'Data-Driven Insights',
    description:
      'Tailor B2B data consulting to optimize performance, predict trends, and drive smarter business decisions.',
  },
  {
    icon: Settings,
    title: 'Optimized Operations',
    description:
      'Advanced mathematical modeling to streamline processes, reduce costs, and maximize operational efficiency.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description:
      'Leverage machine learning to forecast market dynamics, quantify risks, and identify growth opportunities.',
  },
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const [tooltip, setTooltip] = useState<{
    show: boolean
    x: number
    y: number
    title: string
    content: string
  }>({
    show: false,
    x: 0,
    y: 0,
    title: '',
    content: '',
  })

  const handleTooltipEnter = (e: React.MouseEvent, title: string, content: string) => {
    setTooltip({ show: true, x: e.clientX, y: e.clientY, title, content })
  }
  const handleTooltipMove = (e: React.MouseEvent) => {
    setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }))
  }
  const handleTooltipLeave = () => {
    setTooltip((prev) => ({ ...prev, show: false }))
  }

  useEffect(() => {
    let reqId: number
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.05
      currentY += (targetY - currentY) * 0.05
      const scrollY = window.scrollY

      if (svgRef.current) {
        const layers = svgRef.current.querySelectorAll('.parallax-layer')
        layers.forEach((layer) => {
          const depth = parseFloat(layer.getAttribute('data-depth') || '0')
          const scrollDepth = parseFloat(layer.getAttribute('data-scroll-depth') || '0')
          const moveX = currentX * depth * 30
          const moveY = currentY * depth * 30 - scrollY * scrollDepth
          ;(layer as SVGElement).style.transform = `translate(${moveX}px, ${moveY}px)`
        })
      }
      reqId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    reqId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(reqId)
    }
  }, [])

  return (
    <section ref={containerRef} className="bg-[#05070B] pt-20 pb-24 relative overflow-hidden">
      {/* Custom Tooltip */}
      <div
        className={cn(
          'fixed z-50 pointer-events-none transition-opacity duration-200 w-72 p-5 rounded-xl bg-[#0c0c0f]/95 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,245,255,0.15)]',
          tooltip.show ? 'opacity-100' : 'opacity-0',
        )}
        style={{
          left: tooltip.x + 20,
          top: tooltip.y + 20,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 rounded-xl pointer-events-none" />
        <h4 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 font-display uppercase tracking-wider">
          {tooltip.title}
        </h4>
        <p className="text-[13px] text-gray-300 leading-relaxed font-medium">{tooltip.content}</p>
      </div>

      {/* Background ambient glow */}
      <div
        className="parallax-layer absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
        data-depth="0"
        data-scroll-depth="0.3"
      />
      <div
        className="parallax-layer absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none"
        data-depth="0"
        data-scroll-depth="0.2"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Hero Top */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="max-w-xl relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Quantitative Intelligence Engine v3.0
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-white tracking-tight">
              Mathematical Precision for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Enterprise Growth
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md font-medium">
              Transform raw data into strategic advantage with advanced mathematical modeling,
              predictive analytics, and optimization algorithms.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-14 rounded-xl text-base font-medium transition-all hover:scale-105 animate-neon-breathe"
              asChild
            >
              <a href="#contact">Schedule a Strategy Call</a>
            </Button>
          </div>

          <div className="relative w-full aspect-square flex items-center justify-center perspective-[1000px] z-10">
            <svg
              ref={svgRef}
              className="w-[140%] h-[140%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible"
              viewBox="0 0 1000 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="glow-cyan" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00F5FF" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="glow-violet" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="glow-magenta" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF3EF5" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FF3EF5" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="obsidian-base" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1A1C24" />
                  <stop offset="100%" stopColor="#05070B" />
                </linearGradient>

                <linearGradient id="glass-panel" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                </linearGradient>

                <linearGradient id="glass-layer" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
                </linearGradient>

                <filter id="blur-xl">
                  <feGaussianBlur stdDeviation="32" />
                </filter>
                <filter id="blur-lg">
                  <feGaussianBlur stdDeviation="24" />
                </filter>
                <filter id="glow-heavy" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-light" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Parallax Layer -0.1: Volumetric Backgrounds */}
              <g className="parallax-layer" data-depth="-0.1" data-scroll-depth="0.4">
                <circle
                  cx="500"
                  cy="500"
                  r="400"
                  fill="url(#glow-violet)"
                  filter="url(#blur-xl)"
                  className="animate-pulse"
                  style={{ animationDuration: '8s' }}
                />
                <circle
                  cx="300"
                  cy="600"
                  r="300"
                  fill="url(#glow-cyan)"
                  filter="url(#blur-xl)"
                  className="animate-pulse"
                  style={{ animationDuration: '6s', animationDelay: '1s' }}
                />
                <circle
                  cx="700"
                  cy="400"
                  r="300"
                  fill="url(#glow-magenta)"
                  filter="url(#blur-xl)"
                  className="animate-pulse"
                  style={{ animationDuration: '7s', animationDelay: '2s' }}
                />
              </g>

              {/* Parallax Layer 0.1: Particles and Grid */}
              <g className="parallax-layer" data-depth="0.1" data-scroll-depth="0.15">
                <g className="animate-float" style={{ animationDuration: '10s' }}>
                  <path
                    d="M 0 500 Q 250 400 500 500 T 1000 500"
                    fill="none"
                    stroke="url(#glow-cyan)"
                    strokeWidth="2"
                    strokeDasharray="10 20"
                    opacity="0.3"
                    className="animate-pulse"
                  />
                  <path
                    d="M 0 450 Q 250 550 500 450 T 1000 450"
                    fill="none"
                    stroke="url(#glow-magenta)"
                    strokeWidth="1"
                    strokeDasharray="5 15"
                    opacity="0.2"
                    className="animate-pulse"
                  />
                </g>
              </g>

              {/* Parallax Layer 0.2: Base Platform */}
              <g className="parallax-layer" data-depth="0.2" data-scroll-depth="0.1">
                <g className="animate-float" style={{ animationDuration: '8s' }}>
                  <path
                    d="M 500 700 L 760 570 L 760 620 L 500 750 Z"
                    fill="#05070B"
                    stroke="#00F5FF"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />
                  <path
                    d="M 240 570 L 500 700 L 500 750 L 240 620 Z"
                    fill="#0A0D14"
                    stroke="#00F5FF"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />
                  <path
                    d="M 500 440 L 760 570 L 500 700 L 240 570 Z"
                    fill="url(#obsidian-base)"
                    stroke="#00F5FF"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    filter="url(#glow-light)"
                  />
                  <path
                    d="M 500 470 L 690 570 L 500 670 L 310 570 Z"
                    fill="none"
                    stroke="#3B82F6"
                    strokeOpacity="0.4"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 500 500 L 630 570 L 500 640 L 370 570 Z"
                    fill="none"
                    stroke="#FF3EF5"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />
                </g>
              </g>

              {/* Parallax Layer 0.5: Floating Equations Background */}
              <g
                className="parallax-layer"
                data-depth="0.5"
                data-scroll-depth="0.08"
                filter="url(#glow-light)"
              >
                <text
                  x="250"
                  y="200"
                  fill="#00F5FF"
                  fontSize="16"
                  fontFamily="monospace"
                  fontStyle="italic"
                  opacity="0.8"
                  className="animate-pulse"
                  style={{ animationDuration: '4s' }}
                >
                  ∂f / ∂x
                </text>
                <text
                  x="750"
                  y="220"
                  fill="#FF3EF5"
                  fontSize="18"
                  fontFamily="monospace"
                  fontStyle="italic"
                  opacity="0.7"
                  className="animate-pulse"
                  style={{ animationDuration: '5s' }}
                >
                  A x = b
                </text>
                <text
                  x="350"
                  y="750"
                  fill="#8B5CF6"
                  fontSize="16"
                  fontFamily="monospace"
                  fontStyle="italic"
                  opacity="0.8"
                  className="animate-pulse"
                  style={{ animationDuration: '3s' }}
                >
                  ∫ f(x) dx
                </text>
                <text
                  x="650"
                  y="700"
                  fill="#3B82F6"
                  fontSize="16"
                  fontFamily="monospace"
                  fontStyle="italic"
                  opacity="0.8"
                  className="animate-pulse"
                  style={{ animationDuration: '6s' }}
                >
                  lim(x→∞)
                </text>
              </g>

              {/* Parallax Layer 0.6: Computational Core */}
              <g className="parallax-layer" data-depth="0.6" data-scroll-depth="0">
                <g
                  className="animate-float"
                  style={{ animationDuration: '7s', animationDelay: '1s' }}
                >
                  <path
                    d="M 240 570 L 500 440 L 500 120 L 240 250 Z"
                    fill="url(#glass-panel)"
                    stroke="#ffffff"
                    strokeOpacity="0.1"
                  />
                  <path
                    d="M 760 570 L 500 440 L 500 120 L 760 250 Z"
                    fill="url(#glass-panel)"
                    stroke="#ffffff"
                    strokeOpacity="0.1"
                  />

                  <path
                    d="M 500 650 L 500 200"
                    stroke="url(#glow-cyan)"
                    strokeWidth="6"
                    filter="url(#glow-heavy)"
                    className="animate-pulse"
                  />

                  {[
                    { offset: -40, color: '#00F5FF', name: 'RAW_DATA' },
                    { offset: -100, color: '#3B82F6', name: 'PROCESSING' },
                    { offset: -160, color: '#8B5CF6', name: 'OPTIMIZATION' },
                    { offset: -220, color: '#FF3EF5', name: 'PREDICTIVE' },
                    { offset: -280, color: '#00F5FF', name: 'INSIGHTS' },
                  ].map((layer, i) => (
                    <g key={i} transform={`translate(0, ${layer.offset})`}>
                      <path
                        d="M 500 450 L 740 570 L 500 690 L 260 570 Z"
                        fill="url(#glass-layer)"
                        stroke={layer.color}
                        strokeOpacity="0.6"
                        strokeWidth="1.5"
                      />
                      {i === 0 && (
                        <g>
                          <path
                            d="M 400 570 L 600 570 M 450 540 L 550 600 M 500 510 L 500 630"
                            stroke={layer.color}
                            strokeOpacity="0.4"
                            strokeWidth="1"
                          />
                          <circle
                            cx="500"
                            cy="570"
                            r="3"
                            fill={layer.color}
                            filter="url(#glow-light)"
                          />
                          <circle cx="450" cy="540" r="2" fill={layer.color} />
                          <circle cx="550" cy="600" r="2" fill={layer.color} />
                        </g>
                      )}
                      {i === 1 && (
                        <g>
                          <path
                            d="M 320 570 Q 410 480 500 570 T 680 570"
                            fill="none"
                            stroke={layer.color}
                            strokeWidth="2"
                            filter="url(#glow-light)"
                          />
                          <path
                            d="M 380 530 Q 500 650 620 530"
                            fill="none"
                            stroke="#FF3EF5"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                          />
                        </g>
                      )}
                      {i === 2 && (
                        <g>
                          <ellipse
                            cx="500"
                            cy="570"
                            rx="80"
                            ry="40"
                            fill="none"
                            stroke={layer.color}
                            strokeWidth="2"
                            filter="url(#glow-light)"
                          />
                          <ellipse
                            cx="500"
                            cy="570"
                            rx="40"
                            ry="20"
                            fill="none"
                            stroke="#00F5FF"
                            strokeWidth="1.5"
                          />
                          <circle
                            cx="500"
                            cy="570"
                            r="4"
                            fill="#00F5FF"
                            filter="url(#glow-heavy)"
                          />
                          <path
                            d="M 500 570 L 580 530 M 500 570 L 420 610"
                            stroke={layer.color}
                            strokeWidth="1"
                            strokeDasharray="2 2"
                          />
                        </g>
                      )}
                      {i === 3 && (
                        <g>
                          <path
                            d="M 500 570 L 560 540 M 500 570 L 440 540 M 500 570 L 560 600 M 500 570 L 440 600"
                            stroke={layer.color}
                            strokeWidth="2"
                            filter="url(#glow-light)"
                          />
                          <circle cx="560" cy="540" r="3" fill="#ffffff" />
                          <circle cx="440" cy="540" r="3" fill="#ffffff" />
                          <circle cx="560" cy="600" r="3" fill="#ffffff" />
                          <circle cx="440" cy="600" r="3" fill="#ffffff" />
                          <path
                            d="M 560 540 L 600 520 M 440 600 L 400 620"
                            stroke={layer.color}
                            strokeWidth="1"
                            opacity="0.6"
                          />
                        </g>
                      )}
                      {i === 4 && (
                        <g>
                          <path
                            d="M 500 550 L 520 570 L 500 590 L 480 570 Z"
                            fill="#ffffff"
                            filter="url(#glow-heavy)"
                          />
                          <circle cx="500" cy="570" r="25" fill="url(#glow-cyan)" />
                          <path
                            d="M 500 550 L 500 450"
                            stroke="#00F5FF"
                            strokeWidth="3"
                            filter="url(#glow-heavy)"
                          />
                        </g>
                      )}
                    </g>
                  ))}

                  <g>
                    <circle cx="500" cy="600" r="2.5" fill="#ffffff" filter="url(#glow-light)">
                      <animate
                        attributeName="cy"
                        values="650; 200"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0; 1; 0"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="480" cy="600" r="2" fill="#00F5FF" filter="url(#glow-light)">
                      <animate
                        attributeName="cy"
                        values="650; 200"
                        dur="3s"
                        repeatCount="indefinite"
                        delay="1s"
                      />
                      <animate
                        attributeName="opacity"
                        values="0; 1; 0"
                        dur="3s"
                        repeatCount="indefinite"
                        delay="1s"
                      />
                    </circle>
                    <circle cx="520" cy="600" r="2" fill="#FF3EF5" filter="url(#glow-light)">
                      <animate
                        attributeName="cy"
                        values="650; 200"
                        dur="3.5s"
                        repeatCount="indefinite"
                        delay="2s"
                      />
                      <animate
                        attributeName="opacity"
                        values="0; 1; 0"
                        dur="3.5s"
                        repeatCount="indefinite"
                        delay="2s"
                      />
                    </circle>
                  </g>

                  <path
                    d="M 240 570 L 500 700 L 500 380 L 240 250 Z"
                    fill="url(#glass-panel)"
                    stroke="#00F5FF"
                    strokeOpacity="0.4"
                    strokeWidth="1"
                  />
                  <path
                    d="M 760 570 L 500 700 L 500 380 L 760 250 Z"
                    fill="url(#glass-panel)"
                    stroke="#8B5CF6"
                    strokeOpacity="0.4"
                    strokeWidth="1"
                  />
                  <path
                    d="M 500 700 L 500 380"
                    stroke="#ffffff"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    filter="url(#glow-light)"
                  />
                  <path
                    d="M 500 120 L 760 250 L 500 380 L 240 250 Z"
                    fill="url(#glass-panel)"
                    stroke="#00F5FF"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                  />
                </g>
              </g>

              {/* Parallax Layer 0.35: Left Holographic Panel */}
              <g className="parallax-layer" data-depth="0.35" data-scroll-depth="-0.05">
                <g
                  className="animate-float cursor-crosshair"
                  style={{ animationDuration: '7s', animationDelay: '1.2s' }}
                  onMouseEnter={(e) =>
                    handleTooltipEnter(
                      e,
                      'Predictive Modeling',
                      'Bayesian inference networks computing conditional probabilities to forecast market dynamics with high confidence.',
                    )
                  }
                  onMouseMove={handleTooltipMove}
                  onMouseLeave={handleTooltipLeave}
                >
                  <g transform="matrix(-0.866, 0.5, 0, 1, 220, 300)">
                    <rect
                      width="200"
                      height="280"
                      fill="url(#glass-panel)"
                      stroke="#00F5FF"
                      strokeOpacity="0.4"
                      rx="8"
                    />
                    <rect
                      width="200"
                      height="280"
                      fill="#00F5FF"
                      fillOpacity="0.02"
                      filter="url(#glow-heavy)"
                      rx="8"
                    />

                    <text
                      x="20"
                      y="30"
                      fill="#00F5FF"
                      fontSize="12"
                      fontFamily="monospace"
                      opacity="0.8"
                    >
                      FORECASTING
                    </text>
                    <text
                      x="20"
                      y="50"
                      fill="#ffffff"
                      fontSize="18"
                      fontFamily="sans-serif"
                      fontWeight="bold"
                    >
                      94.2% ACCURACY
                    </text>

                    <path
                      d="M 20 150 Q 60 100 100 120 T 180 80"
                      fill="none"
                      stroke="#FF3EF5"
                      strokeWidth="2"
                      filter="url(#glow-light)"
                    />
                    <path
                      d="M 20 180 Q 60 130 100 150 T 180 110"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      opacity="0.7"
                    />
                    <circle cx="180" cy="80" r="4" fill="#ffffff" filter="url(#glow-heavy)" />

                    <path
                      d="M 20 200 L 180 200 M 20 160 L 180 160 M 20 120 L 180 120"
                      stroke="#ffffff"
                      strokeOpacity="0.1"
                      strokeWidth="1"
                    />

                    <g filter="url(#glow-light)">
                      <text
                        x="20"
                        y="230"
                        fill="#00F5FF"
                        fontSize="12"
                        fontFamily="monospace"
                        fontStyle="italic"
                      >
                        P(Y|X)
                      </text>
                      <text
                        x="80"
                        y="230"
                        fill="#8B5CF6"
                        fontSize="12"
                        fontFamily="monospace"
                        fontStyle="italic"
                      >
                        y = β₀ + β₁x
                      </text>
                      <text
                        x="20"
                        y="250"
                        fill="#ffffff"
                        fontSize="10"
                        fontFamily="monospace"
                        fontStyle="italic"
                        opacity="0.9"
                      >
                        P(A|B) = P(B|A)P(A)/P(B)
                      </text>
                    </g>
                  </g>
                </g>
              </g>

              {/* Parallax Layer 0.4: Right Holographic Panel */}
              <g className="parallax-layer" data-depth="0.4" data-scroll-depth="-0.08">
                <g
                  className="animate-float cursor-crosshair"
                  style={{ animationDuration: '6.5s', animationDelay: '0.8s' }}
                  onMouseEnter={(e) =>
                    handleTooltipEnter(
                      e,
                      'Mathematical Optimization',
                      'Gradient descent algorithms exploring objective functions to locate optimal operational minima and maximize efficiency.',
                    )
                  }
                  onMouseMove={handleTooltipMove}
                  onMouseLeave={handleTooltipLeave}
                >
                  <g transform="matrix(0.866, 0.5, 0, 1, 780, 300)">
                    <rect
                      width="200"
                      height="280"
                      fill="url(#glass-panel)"
                      stroke="#8B5CF6"
                      strokeOpacity="0.4"
                      rx="8"
                    />
                    <rect
                      width="200"
                      height="280"
                      fill="#8B5CF6"
                      fillOpacity="0.02"
                      filter="url(#glow-heavy)"
                      rx="8"
                    />

                    <text
                      x="20"
                      y="30"
                      fill="#8B5CF6"
                      fontSize="12"
                      fontFamily="monospace"
                      opacity="0.8"
                    >
                      OPTIMIZATION
                    </text>
                    <text
                      x="20"
                      y="50"
                      fill="#ffffff"
                      fontSize="18"
                      fontFamily="sans-serif"
                      fontWeight="bold"
                    >
                      +28% EFFICIENCY
                    </text>

                    <rect x="20" y="160" width="20" height="40" fill="#3B82F6" opacity="0.6" />
                    <rect x="50" y="130" width="20" height="70" fill="#3B82F6" opacity="0.8" />
                    <rect x="80" y="100" width="20" height="100" fill="#8B5CF6" />
                    <rect
                      x="110"
                      y="60"
                      width="20"
                      height="140"
                      fill="#00F5FF"
                      filter="url(#glow-light)"
                    />

                    <g filter="url(#glow-light)">
                      <text
                        x="20"
                        y="230"
                        fill="#00F5FF"
                        fontSize="12"
                        fontFamily="monospace"
                        fontStyle="italic"
                      >
                        min f(x)
                      </text>
                      <text
                        x="100"
                        y="230"
                        fill="#FF3EF5"
                        fontSize="12"
                        fontFamily="monospace"
                        fontStyle="italic"
                      >
                        ŷ = f(x)
                      </text>
                      <text
                        x="20"
                        y="250"
                        fill="#ffffff"
                        fontSize="11"
                        fontFamily="monospace"
                        fontStyle="italic"
                        opacity="0.9"
                      >
                        d²f / dx² &gt; 0
                      </text>
                    </g>
                  </g>
                </g>
              </g>

              {/* Parallax Layer 0.8: Top Lid Micro-panel */}
              <g className="parallax-layer" data-depth="0.8" data-scroll-depth="-0.15">
                <g
                  className="animate-float"
                  style={{ animationDuration: '5s', animationDelay: '0.5s' }}
                >
                  <g transform="matrix(0.866, 0.5, -0.866, 0.5, 500, -20)">
                    <rect
                      width="140"
                      height="140"
                      fill="url(#glass-panel)"
                      stroke="#00F5FF"
                      strokeOpacity="0.5"
                      rx="8"
                    />
                    <rect
                      width="140"
                      height="140"
                      fill="#00F5FF"
                      fillOpacity="0.05"
                      filter="url(#glow-heavy)"
                      rx="8"
                    />

                    <circle
                      cx="70"
                      cy="70"
                      r="30"
                      fill="none"
                      stroke="#FF3EF5"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="animate-spin"
                      style={{ animationDuration: '10s' }}
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r="15"
                      fill="#00F5FF"
                      opacity="0.8"
                      filter="url(#glow-light)"
                    />
                    <circle cx="70" cy="70" r="5" fill="#ffffff" filter="url(#glow-heavy)" />

                    <g filter="url(#glow-light)">
                      <text
                        x="10"
                        y="20"
                        fill="#00F5FF"
                        fontSize="10"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        ∇f(x)=0
                      </text>
                      <text
                        x="100"
                        y="120"
                        fill="#8B5CF6"
                        fontSize="10"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        A⁻¹
                      </text>
                    </g>
                  </g>
                </g>
              </g>

              {/* Micro Panels */}
              <g className="parallax-layer" data-depth="0.7" data-scroll-depth="-0.12">
                <g
                  className="animate-float"
                  style={{ animationDuration: '4.5s', animationDelay: '2s' }}
                >
                  <g transform="matrix(-0.866, 0.5, 0, 1, 150, 480)">
                    <rect
                      width="120"
                      height="60"
                      fill="url(#glass-panel)"
                      stroke="#FF3EF5"
                      strokeOpacity="0.4"
                      rx="4"
                    />
                    <text x="10" y="25" fill="#FF3EF5" fontSize="10" fontFamily="monospace">
                      RISK REDUCTION
                    </text>
                    <text
                      x="10"
                      y="45"
                      fill="#ffffff"
                      fontSize="16"
                      fontFamily="sans-serif"
                      fontWeight="bold"
                    >
                      -42.3%
                    </text>
                    <path
                      d="M 90 25 L 100 45 L 110 30"
                      fill="none"
                      stroke="#00F5FF"
                      strokeWidth="2"
                    />
                  </g>
                </g>
              </g>

              <g className="parallax-layer" data-depth="0.6" data-scroll-depth="-0.1">
                <g
                  className="animate-float"
                  style={{ animationDuration: '5.5s', animationDelay: '1.5s' }}
                >
                  <g transform="matrix(0.866, 0.5, 0, 1, 850, 480)">
                    <rect
                      width="120"
                      height="60"
                      fill="url(#glass-panel)"
                      stroke="#3B82F6"
                      strokeOpacity="0.4"
                      rx="4"
                    />
                    <text x="10" y="25" fill="#3B82F6" fontSize="10" fontFamily="monospace">
                      REVENUE LIFT
                    </text>
                    <text
                      x="10"
                      y="45"
                      fill="#ffffff"
                      fontSize="16"
                      fontFamily="sans-serif"
                      fontWeight="bold"
                    >
                      +$2.4M
                    </text>
                    <path
                      d="M 80 40 L 95 25 L 110 35"
                      fill="none"
                      stroke="#00F5FF"
                      strokeWidth="2"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Value Proposition Bottom */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16 mt-16 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          {VALUE_PROPS.map((prop, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start text-left relative z-20 group cursor-default"
            >
              <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 mb-6 group-hover:bg-blue-500/10 group-hover:border-cyan-500/30 transition-colors">
                <prop.icon className="h-7 w-7 text-cyan-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{prop.title}</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed font-medium">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
