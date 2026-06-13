import { Network, PieChart, BarChart3, BrainCircuit } from 'lucide-react'

const SERVICES = [
  {
    icon: Network,
    title: 'Data Strategy & Architecture',
    description: 'Customize data group architecture and data strategy & Architecture solutions.',
  },
  {
    icon: PieChart,
    title: 'Business Intelligence & Reporting',
    description: 'Comprehensive business intelligence monitoring and reporting.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Data Analytics',
    description: 'Advanced data analytics and business data modeling analytics.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning Solutions',
    description: 'Advanced AI machine learning solutions for enterprise environments.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#fcfcfd] py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-12">Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                <service.icon className="h-6 w-6 text-gray-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
