import { Network, PieChart, BarChart3, BrainCircuit } from 'lucide-react'

const SERVICES = [
  {
    icon: Network,
    title: 'Data Strategy & Architecture',
    description: 'Customize data group architecture and robust data strategy solutions.',
  },
  {
    icon: PieChart,
    title: 'Business Intelligence & Reporting',
    description:
      'Comprehensive business intelligence monitoring and automated real-time reporting.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Data Analytics',
    description: 'Deep data analytics and enterprise-scale business data modeling.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning Solutions',
    description:
      'Advanced AI and machine learning algorithms deployed for enterprise environments.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#05070B] py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Core Competencies
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#0c0c0f]/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/5 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <service.icon className="h-6 w-6 text-cyan-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
