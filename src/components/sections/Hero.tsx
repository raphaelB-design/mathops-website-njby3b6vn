import { ArrowRight, BarChart3, Target, Activity, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ParticleBackground } from '@/components/ParticleBackground'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const STATS = [
  { value: '10+', label: 'Anos de experiência', icon: Activity },
  { value: '4', label: 'Pilares de atuação', icon: Target },
  { value: '100%', label: 'Abordagem Lean Six Sigma', icon: BarChart3 },
  { value: 'Nacional', label: 'Presença em todo Brasil', icon: MapPin },
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
        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Consultoria de Alta Performance
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 text-foreground leading-[1.1]">
          Transforme dados em <br className="hidden md:block" />
          <span className="text-gradient">decisões estratégicas</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Consultoria data-driven para estruturar pessoas, processos e governança da sua empresa,
          focada em resultados mensuráveis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20">
          <Button
            size="lg"
            className="bg-gradient-primary rounded-full px-8 text-md shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="#servicos">
              Conheça nossos serviços
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-md border-white/10 bg-white/5 hover:bg-white/10 hover:text-foreground backdrop-blur-sm transition-all duration-300"
            asChild
          >
            <a href="#contato">Fale conosco</a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
          {STATS.map((stat, idx) => (
            <Card
              key={idx}
              className="bg-card/40 backdrop-blur-md border-white/10 hover:-translate-y-1 transition-transform duration-300 hover:border-primary/50"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <stat.icon className="h-6 w-6 text-primary mb-3 opacity-80" />
                <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  )
}
