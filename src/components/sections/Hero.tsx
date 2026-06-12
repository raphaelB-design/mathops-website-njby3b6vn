import { ArrowRight, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ParticleBackground } from '@/components/ParticleBackground'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[var(--bg-primary)]">
      <ParticleBackground />

      <div
        ref={ref}
        className={cn(
          'container relative z-10 mx-auto px-4 md:px-6 opacity-0',
          isRevealed && 'animate-fade-in-up',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content Column (1-7) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-1.5 text-sm font-medium text-[#f5f5f7] mb-8 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--success)] mr-3 animate-pulse shadow-[0_0_8px_var(--success)]"></span>
              Consultoria de Alta Performance
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-serif tracking-tight max-w-4xl mb-6 text-[#f5f5f7] leading-[1.05]">
              Transforme dados em <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)]">
                decisões estratégicas
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mb-10 leading-relaxed font-sans font-light">
              Consultoria data-driven para estruturar pessoas, processos e governança da sua
              empresa, focada em resultados mensuráveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] rounded-full px-8 h-14 text-base shadow-[0_4px_25px_rgba(74,108,247,0.4)] hover:scale-105 hover:shadow-[0_6px_30px_rgba(123,47,247,0.5)] transition-all duration-300 text-white border-0"
                asChild
              >
                <a href="#servicos">
                  Agende uma Sessão
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--hover-bg)] hover:text-[#f5f5f7] backdrop-blur-md transition-all duration-300"
                asChild
              >
                <a href="#contato">Saiba Mais</a>
              </Button>
            </div>
          </div>

          {/* Visual Column (8-12) */}
          <div className="col-span-1 lg:col-span-5 relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] rounded-full blur-[100px] opacity-20 animate-pulse" />

            <div className="relative z-10 w-full h-[500px] flex items-center justify-center">
              {/* Abstract Glass shapes */}
              <div className="absolute w-64 h-80 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl backdrop-blur-2xl shadow-2xl rotate-[-10deg] translate-x-10 hover:rotate-0 hover:translate-x-0 transition-transform duration-700 ease-out flex flex-col p-6">
                <div className="h-4 w-1/3 bg-white/10 rounded-full mb-8"></div>
                <div className="space-y-4 flex-1">
                  <div className="h-2 w-full bg-white/5 rounded-full"></div>
                  <div className="h-2 w-5/6 bg-white/5 rounded-full"></div>
                  <div className="h-2 w-4/6 bg-white/5 rounded-full"></div>
                </div>
                <div className="mt-auto flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)]"></div>
                  <div className="h-8 w-8 rounded-full bg-white/5"></div>
                </div>
              </div>

              <div className="absolute w-72 h-64 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl backdrop-blur-3xl shadow-2xl rotate-[5deg] -translate-x-12 translate-y-12 hover:rotate-0 hover:-translate-x-4 transition-transform duration-700 ease-out p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="h-8 w-8 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-[var(--accent-gold)]" />
                  </div>
                  <div className="px-2 py-1 rounded-full bg-[var(--success)]/10 text-[var(--success)] text-xs font-medium">
                    +14.5%
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-secondary)] mb-1">Performance</div>
                  <div className="text-4xl font-serif text-[#f5f5f7]">
                    98.2<span className="text-lg text-[var(--text-tertiary)] font-sans">/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
