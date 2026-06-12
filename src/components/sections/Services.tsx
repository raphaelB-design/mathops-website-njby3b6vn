import { CheckCircle2, Workflow, DatabaseZap, LineChart, Building2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const SERVICES = [
  {
    title: 'Engenharia de Processos',
    description: 'Otimização estrutural para eficiência operacional máxima com base matemática.',
    icon: Workflow,
    items: [
      'Mapeamento e Redesenho (AS-IS/TO-BE)',
      'Padronização Sistêmica (SOPs)',
      'Otimização de Cadeia de Suprimentos (S&OP)',
      'Matrizes de Responsabilidade (RACI)',
    ],
  },
  {
    title: 'Data Science & BI',
    description: 'Ecossistemas analíticos que convertem volume de dados em inteligência.',
    icon: DatabaseZap,
    items: [
      'Arquitetura de Dados (Data Lakes/Warehouses)',
      'Pipelines Automatizados (ETL/ELT)',
      'Dashboards Executivos e Operacionais',
      'Modelagem Preditiva',
    ],
  },
  {
    title: 'Lean Six Sigma',
    description: 'Eliminação cirúrgica de desperdícios e variabilidade com DMAIC.',
    icon: LineChart,
    items: [
      'Projetos de Redução de Custo (Kaizen)',
      'Controle Estatístico de Processo (CEP)',
      'Treinamento e Certificação (Yellow/Green Belt)',
      'Aumento de Capacidade Produtiva',
    ],
  },
  {
    title: 'Governança Corporativa',
    description: 'Estruturação hierárquica e financeira para crescimento sustentável.',
    icon: Building2,
    items: [
      'Plano de Cargos e Salários',
      'Estruturação de Comitês Diretivos',
      'Fluxos de Alçada e Aprovação',
      'Indicadores Globais (OKRs / BSC)',
    ],
  },
]

export function ServicesSection() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section id="servicos" className="py-24 relative bg-card/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Pilares de <span className="text-gradient">Atuação</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Combinamos o rigor da ciência de dados com metodologias de gestão consagradas para
            escalar seus resultados de forma consistente.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((service, idx) => (
            <Card
              key={idx}
              className={cn(
                'group bg-card/60 border-white/5 backdrop-blur-sm hover:border-secondary/40 transition-all duration-500 hover:-translate-y-1 opacity-0 flex flex-col relative overflow-hidden',
                isRevealed && `animate-fade-in-up`,
              )}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150" />

              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-black transition-all duration-300">
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground/90 text-base font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 mt-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
