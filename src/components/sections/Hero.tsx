import { Button } from '@/components/ui/button'
import { Search, Settings, TrendingUp } from 'lucide-react'

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
      'Optimized B2B data consulting to optimize performance, predict trends, and drive smarter business decisions.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description:
      'Predictive B2B data consulting to realize performance, predict trends, and drive smarter decisions.',
  },
]

export function HeroSection() {
  return (
    <section className="bg-[#070709] pt-20 pb-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Hero Top */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-white tracking-tight">
              Unlock Data's Power
              <br />
              for Strategic Growth
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
              Tailored B2B data consulting to optimize performance, predict trends, and drive
              smarter business decisions.
            </p>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-14 rounded-xl text-base font-medium shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all hover:scale-105"
              asChild
            >
              <a href="#contact">Schedule a Strategy Call</a>
            </Button>
          </div>

          <div className="relative aspect-square flex items-center justify-center perspective-[1000px]">
            <svg
              className="w-full h-full max-w-[500px]"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="animate-float" style={{ animationDuration: '6s' }}>
                <path
                  d="M200 320 L80 260 L200 200 L320 260 Z"
                  fill="#111115"
                  stroke="#22d3ee"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <path
                  d="M120 260 L200 220 L280 260"
                  stroke="#a855f7"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-70"
                />
                <circle cx="120" cy="260" r="3" fill="#a855f7" />
                <circle cx="280" cy="260" r="3" fill="#a855f7" />
                <path
                  d="M160 280 L200 300 L240 280"
                  stroke="#22d3ee"
                  strokeWidth="1.5"
                  fill="none"
                  className="opacity-50"
                />
              </g>
              <g
                className="animate-float"
                style={{ animationDuration: '5s', animationDelay: '1s' }}
              >
                <path
                  d="M200 240 L140 210 L140 140 L200 170 Z"
                  fill="#0d0d12"
                  stroke="#ffffff"
                  strokeOpacity="0.1"
                />
                <path
                  d="M200 240 L260 210 L260 140 L200 170 Z"
                  fill="#09090c"
                  stroke="#ffffff"
                  strokeOpacity="0.1"
                />
                <path
                  d="M200 170 L140 140 L200 110 L260 140 Z"
                  fill="#15151e"
                  stroke="#22d3ee"
                  strokeWidth="1.5"
                />
                <path
                  d="M200 170 L140 140 L200 110 L260 140 Z"
                  fill="url(#cube-grad)"
                  className="opacity-40"
                />
              </g>
              <g
                className="animate-float"
                style={{ animationDuration: '7s', animationDelay: '0.5s' }}
              >
                <path
                  d="M340 160 L280 130 L320 110 L380 140 Z"
                  fill="#111115"
                  stroke="#a855f7"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />
                <path d="M300 135 L340 120" stroke="#a855f7" strokeWidth="2" />
                <circle cx="345" cy="115" r="2" fill="#22d3ee" />
              </g>
              <g
                className="animate-float"
                style={{ animationDuration: '5.5s', animationDelay: '1.5s' }}
              >
                <path
                  d="M120 280 L60 250 L100 230 L160 260 Z"
                  fill="#111115"
                  stroke="#22d3ee"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />
                <path
                  d="M80 250 Q 110 230 140 255"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="1.5"
                />
              </g>
              <defs>
                <linearGradient
                  id="cube-grad"
                  x1="140"
                  y1="140"
                  x2="260"
                  y2="140"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Value Proposition Bottom */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
          {VALUE_PROPS.map((prop, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <prop.icon className="h-8 w-8 text-white mb-6" strokeWidth={1} />
              <h3 className="text-xl font-bold text-white mb-3">{prop.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
