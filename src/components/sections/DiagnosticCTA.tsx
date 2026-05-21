import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Activity, Check } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { DiagnosticForm } from '@/components/forms/DiagnosticForm'

export function DiagnosticCTA() {
  const [isOpen, setIsOpen] = useState(false)

  const handleStartDiagnostic = () => {
    console.log('[Analytics] Event tracked: cta_diagnostico_clicked')
  }

  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-800/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Pronto para dar o próximo passo?
        </h2>
        <p className="text-[#b0b0c0] mb-8 max-w-2xl mx-auto text-lg">
          Faça um diagnóstico preliminar e descubra como podemos ajudar sua empresa a transformar
          dados em resultados concretos e escaláveis.
        </p>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              id="cta-diagnostico"
              size="lg"
              className="bg-[#00bcd4] text-zinc-950 hover:bg-[#00bcd4]/90 text-lg font-semibold px-8 py-6 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,188,212,0.3)] hover:shadow-[0_0_30px_rgba(0,188,212,0.5)]"
              onClick={handleStartDiagnostic}
            >
              <Activity className="mr-2 h-5 w-5" />
              Iniciar Diagnóstico
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl p-0 bg-[#0d0d1a] border-zinc-800 overflow-hidden sm:rounded-2xl gap-0">
            <div className="sr-only">
              <DialogTitle>Diagnóstico Preliminar</DialogTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] h-[85vh] md:h-[750px] overflow-hidden">
              {/* Left Column - Copy & Benefits */}
              <div className="p-8 md:p-12 bg-[#0d0d1a] flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-800/50 overflow-y-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Sua empresa cresce, mas os processos e indicadores não acompanham?
                </h3>
                <p className="text-[#b0b0c0] text-lg mb-8 leading-relaxed">
                  Transforme dados em decisões estratégicas com um diagnóstico preliminar
                  estruturado.
                </p>

                <div className="space-y-5 mb-12">
                  {[
                    'Clareza do cenário atual e gargalos',
                    'Direção inicial de escopo e prioridades',
                    'Faixa preliminar de investimento',
                    'Próxima conversa mais objetiva e produtiva',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <div className="mt-1 bg-[#00bcd4]/10 p-1.5 rounded-full mr-4 shrink-0 border border-[#00bcd4]/20">
                        <Check className="w-4 h-4 text-[#00bcd4]" />
                      </div>
                      <span className="text-zinc-300 font-medium text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/80 backdrop-blur-sm">
                  <p className="text-sm text-[#b0b0c0] leading-relaxed">
                    <strong className="text-white">MathOps</strong> — Consultoria data-driven com
                    metodologia comprovada para médias e grandes empresas.
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="p-8 md:p-10 bg-[#0a0a14] overflow-y-auto">
                <DiagnosticForm onSuccess={() => setIsOpen(false)} />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
