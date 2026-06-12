import { Badge } from '@/components/ui/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const BADGES = [
  'Metodologia TAIE',
  'Cultura Data-Driven',
  'Lean Six Sigma',
  'Python & RPA',
  'Business Intelligence',
]

export function AboutSection() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section
      id="sobre"
      className="py-24 bg-card/30 relative border-y border-white/5 overflow-hidden"
    >
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            'flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto opacity-0',
            isRevealed && 'animate-fade-in-up',
          )}
        >
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-full blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
              <div className="relative h-72 w-72 rounded-full bg-card border-2 border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="h-full w-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <span className="text-7xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-br from-secondary to-primary">
                    M
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
                O Core da <span className="text-gradient">MathOps</span>
              </h2>
              <h3 className="text-xl text-secondary font-medium">
                Fundada por Raphael Batista da Silva
              </h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Nascemos da convicção de que intuição não escala operações. A MathOps atua na
                intersecção entre a Engenharia de Processos e a Ciência de Dados para reestruturar
                empresas de dentro para fora.
              </p>
              <p>
                Nosso compromisso não é apenas entregar relatórios ou softwares, mas sim implementar
                um <strong>Ecossistema de Inteligência Operacional</strong>. Através de metodologias
                pragmáticas como Lean Six Sigma e automação avançada, garantimos que cada decisão
                seja guiada por métricas, cada gargalo seja mapeado e o lucro seja uma consequência
                matemática.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-6">
              {BADGES.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="bg-white/5 hover:bg-secondary/20 hover:text-secondary text-foreground/80 font-medium px-4 py-2 text-sm rounded-full border border-white/10 transition-colors"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
