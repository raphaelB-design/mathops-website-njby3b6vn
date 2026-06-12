import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpRight, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const CASES = [
  {
    industry: 'Logística & Distribuição',
    metric: '+35%',
    metricLabel: 'Produtividade da Frota',
    description:
      'Implementação de roteirização baseada em dados espaciais e telemetria, reduzindo o custo de frete em 18% e melhorando o SLA de entrega.',
    icon: TrendingUp,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    industry: 'Indústria Manufatureira',
    metric: '-42%',
    metricLabel: 'Redução de Lead Time',
    description:
      'Aplicação de Lean Six Sigma na linha de produção, eliminando gargalos mapeados por sensores IoT e estabilizando a capacidade produtiva.',
    icon: Clock,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    industry: 'Varejo & E-commerce',
    metric: 'R$2.4M',
    metricLabel: 'Recuperação de Receita',
    description:
      'Automação do fluxo de precificação dinâmica e gestão de estoque utilizando algoritmos preditivos para evitar rupturas e excessos.',
    icon: DollarSign,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
]

export function ResultsSection() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section id="resultados" className="py-24 relative bg-black/40 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Resultados <span className="text-gradient">Documentados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Impacto real medido em eficiência, tempo e dinheiro. Conheça alguns cenários onde nossa
            metodologia transformou a operação.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CASES.map((item, idx) => (
            <Card
              key={idx}
              className={cn(
                'bg-card/40 border-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 opacity-0',
                isRevealed && 'animate-fade-in-up',
              )}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className={cn('p-3 rounded-xl', item.bg)}>
                    <item.icon className={cn('w-6 h-6', item.color)} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                    {item.industry}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl font-display font-bold text-foreground">
                      {item.metric}
                    </h3>
                    <ArrowUpRight className={cn('w-5 h-5', item.color)} />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mt-1">
                    {item.metricLabel}
                  </p>
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed border-t border-white/5 pt-4">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
