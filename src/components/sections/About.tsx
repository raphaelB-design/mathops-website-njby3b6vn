import { Badge } from '@/components/ui/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const EXPERTISE = [
  { label: 'Diagnóstico Tributário', years: '10+' },
  { label: 'Lean Six Sigma', years: 'Black Belt' },
  { label: 'Inteligência de Dados', years: 'Avançado' },
  { label: 'Matemática Aplicada', years: 'Especialista' },
]

const BADGES = [
  'Modelagem Matemática',
  'Lean Six Sigma',
  'Engenharia de Dados',
  'Tributário',
  'Governança',
  'Resultados Mensuráveis',
]

export function AboutSection() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section id="sobre" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-16 items-center opacity-0',
            isRevealed && 'animate-fade-in-up',
          )}
        >
          {/* Left — avatar + expertise */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-xl" />
                <div className="relative h-24 w-24 rounded-full border border-white/10 bg-card flex items-center justify-center overflow-hidden">
                  <span className="font-display text-3xl font-bold text-gradient">RB</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">Raphael Batista</h3>
                <p className="text-primary text-sm font-medium mt-0.5">
                  Founder & Principal Consultant
                </p>
                <p className="text-muted-foreground text-sm mt-1">São José dos Campos — SP</p>
              </div>
            </div>

            {/* Expertise grid */}
            <div className="grid grid-cols-2 gap-3">
              {EXPERTISE.map((e, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-card/40 p-4">
                  <p className="font-display font-bold text-foreground text-sm">{e.years}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{e.label}</p>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 text-xs font-medium text-muted-foreground rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-primary/20 hover:text-foreground transition-colors"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — copy */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Sobre
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Matemática aplicada
                <span className="text-gradient"> onde o dinheiro </span>
                está em jogo.
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Especialista em unir profundidade analítica da matemática com eficiência do Lean Six
                Sigma e o poder da inteligência de dados. A MathOps nasceu da evidência de que as
                maiores perdas tributárias e operacionais das empresas não vêm de irregularidades —
                vêm de dados não cruzados.
              </p>
              <p>
                O caso de referência que valida o método: empresa de engenharia de R$ 46M, 21 bases
                documentais, 25.117 lançamentos analisados. Resultado: R$ 1,5M em erro de regime
                evitado, R$ 249k em créditos rastreados, contingência municipal de R$ 800k
                identificada que nenhuma revisão anterior havia mapeado.
              </p>
              <p>
                Cada conclusão entregue tem um dado primário com hash, uma lei vigente verificada na
                competência analisada e um número auditável e reproduzível. Esse é o padrão.
              </p>
            </div>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
            >
              Conversar sobre seu caso
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
