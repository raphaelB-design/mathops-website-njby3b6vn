import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const METRICS = [
  {
    value: 'R$1,5M',
    label: 'Economia evitada por erro de regime tributário em um único caso',
    accent: 'primary',
  },
  {
    value: '70+',
    label: 'Cruzamentos matemáticos automatizados sobre os dados da empresa',
    accent: 'secondary',
  },
  {
    value: '15 dias',
    label: 'Da ingestão de dados ao relatório executivo validado juridicamente',
    accent: 'gold',
  },
]

const PILLARS = [
  { icon: TrendingUp, label: 'Inteligência Tributária' },
  { icon: Shield, label: 'Conformidade Proativa' },
  { icon: Zap, label: 'Decisão em Tempo Real' },
]

export function HeroSection() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden grid-pattern noise-texture">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={ref}
        className={cn(
          'max-w-7xl mx-auto px-6 relative z-10 opacity-0',
          isRevealed && 'animate-fade-in-up',
        )}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/8 text-xs font-semibold text-primary uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Inteligência Tributária & Gestão
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-8">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
            Dados que revelam
            <br />
            <span className="text-gradient">créditos invisíveis</span>
            <br />
            e riscos ocultos.
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-medium">
          Cruzamos matematicamente todas as obrigações fiscais da sua empresa — SPED, DCTFWeb,
          EFD-Reinf, NF-e, folha e financeiro — com 70+ verificações que a contabilidade
          convencional não executa.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="#taie"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-white font-semibold text-sm glow-primary hover:opacity-90 transition-all duration-200 group"
          >
            Ver como funciona
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
          >
            Agendar diagnóstico gratuito
          </a>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
          {METRICS.map((m, i) => (
            <div
              key={i}
              className="bg-card/60 backdrop-blur-sm p-8 hover:bg-card/80 transition-colors group"
            >
              <p
                className={cn(
                  'font-display text-4xl font-bold mb-2',
                  m.accent === 'primary' && 'text-gradient',
                  m.accent === 'secondary' &&
                    'bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary',
                  m.accent === 'gold' && 'text-gradient-gold',
                )}
              >
                {m.value}
              </p>
              <p className="text-sm text-muted-foreground leading-snug">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="flex flex-wrap gap-3 mt-8">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02] text-sm text-muted-foreground"
            >
              <p.icon className="h-3.5 w-3.5 text-primary" />
              {p.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
