import { ArrowRight, TrendingUp, Target, HandCoins, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ParticleBackground } from '@/components/ParticleBackground'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const STATS = [
  { value: '+45%', label: 'Aumento de Eficiência', icon: Activity },
  { value: '3.2x', label: 'ROI Médio em 1 Ano', icon: Target },
  { value: 'R$15M+', label: 'Economia Gerada', icon: HandCoins },
  { value: '100%', label: 'Decisões Data-Driven', icon: TrendingUp },
]

export function HeroSection() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      <ParticleBackground />

      <div
        ref={ref}
        className={cn(
          'container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center opacity-0',
          isRevealed && 'animate-fade-in-up',
        )}
      >
        <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
          Inteligência Operacional Avançada
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight max-w-5xl mb-6 text-foreground leading-[1.1]">
          Escale seus resultados com <br className="hidden md:block" />
          <span className="text-gradient">Precisão Matemática</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-sans">
          A MathOps une Lean Six Sigma, Inteligência Artificial e Data Science para eliminar
          desperdícios e transformar dados em lucro direto na última linha do seu balanço.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20">
          <Button
            size="lg"
            className="bg-gradient-primary text-black font-semibold rounded-full px-8 text-md shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition-all duration-300 h-14"
            asChild
          >
            <a href="#contato">
              Iniciar Avaliação de Maturidade
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-md border-white/10 bg-white/5 hover:bg-white/10 hover:text-foreground backdrop-blur-sm transition-all duration-300 h-14 font-medium"
            asChild
          >
            <a href="#taie">Conhecer a Metodologia TAIE</a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
          {STATS.map((stat, idx) => (
            <Card
              key={idx}
              className="bg-card/40 backdrop-blur-md border-white/5 hover:-translate-y-1 transition-transform duration-300 hover:border-secondary/50"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <stat.icon className="h-6 w-6 text-secondary mb-3 opacity-90" />
                <h3 className="text-3xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </section>
  )
}
