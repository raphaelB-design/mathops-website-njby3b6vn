import { Badge } from '@/components/ui/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const BADGES = ['Data-Driven', 'Lean Six Sigma', 'Personalizado', 'Resultados Mensuráveis']

export function AboutSection() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section id="sobre" className="py-24 bg-card/30 relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            'flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto opacity-0',
            isRevealed && 'animate-fade-in-up',
          )}
        >
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
              {/* Avatar circle */}
              <div className="relative h-64 w-64 rounded-full bg-card border-2 border-white/10 flex items-center justify-center overflow-hidden">
                {/* Fallback stylized avatar if no image */}
                <div className="h-full w-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    RB
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Sobre <span className="text-gradient">Nós</span>
              </h2>
              <h3 className="text-xl text-primary font-medium">Raphael Batista da Silva</h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Especialista em unir a profundidade analítica da Matemática com a eficiência
                pragmática das metodologias Lean Six Sigma e o poder inovador da Inteligência
                Artificial.
              </p>
              <p>
                A MathOps nasceu da visão de que empresas tomam as melhores decisões quando
                sustentadas por dados claros e processos padronizados. Nosso compromisso é mergulhar
                na realidade de cada cliente, diagnosticando gargalos e implementando soluções
                tecnológicas e operacionais que geram impacto real na última linha do balanço.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-4">
              {BADGES.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="bg-white/5 hover:bg-primary/20 text-foreground/80 font-normal px-4 py-1.5 text-sm rounded-full border border-white/10 transition-colors"
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
