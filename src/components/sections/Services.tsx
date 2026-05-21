import { CheckCircle2, Network, PieChart, TrendingUp, ShieldCheck } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const SERVICES = [
  {
    title: 'Consultoria em Gestão e Processos',
    description: 'Otimização estrutural para eficiência operacional máxima.',
    icon: Network,
    items: [
      'Diagnóstico estrutural',
      'Mapeamento AS-IS',
      'Redesenho organizacional',
      'Matriz RACI',
      'POPs e checklists operacionais',
      'S&OP integrado',
    ],
  },
  {
    title: 'Business Intelligence e Dashboards',
    description: 'Transformamos seus dados em painéis visuais para decisões precisas.',
    icon: PieChart,
    items: [
      'Extração e normalização de dados',
      'Pipelines automatizados',
      'Dashboards interativos por área',
      'KPIs em tempo real',
    ],
  },
  {
    title: 'Lean Six Sigma e Melhoria Contínua',
    description: 'Metodologia focada na eliminação de desperdícios e alta qualidade.',
    icon: TrendingUp,
    items: [
      'Redução de custos operacionais',
      'Eliminação de desperdícios',
      'Aumento de produtividade',
      'Certificação de equipes',
    ],
  },
  {
    title: 'Estruturação Org. e Governança',
    description: 'Bases sólidas para crescimento sustentável e governança corporativa.',
    icon: ShieldCheck,
    items: [
      'Plano de cargos e salários',
      'Fluxos de aprovação e alçadas',
      'Indicadores-chave por área',
      'Dashboard gerencial unificado',
      'Comitê de governança',
    ],
  },
]

export function ServicesSection() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground">
            Abordagens técnicas e comprovadas para escalar a maturidade de gestão do seu negócio.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {SERVICES.map((service, idx) => (
            <Card
              key={idx}
              className={cn(
                'group bg-card/60 border-white/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 opacity-0 flex flex-col',
                isRevealed && `animate-fade-in-up`,
              )}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground/80">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button
                  variant="outline"
                  className="w-full rounded-full border-white/10 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                  asChild
                >
                  <a href="#contato">Solicite um orçamento</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
