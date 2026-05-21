import { Button } from '@/components/ui/button'
import { Activity, ArrowRight } from 'lucide-react'

export function DiagnosticCTA() {
  const handleStartDiagnostic = () => {
    // Analytics Mock: Client-side tracking event
    console.log('[Analytics] Event tracked: cta_diagnostico_clicked')

    // Interaction Logic: Trigger state change for MODULE-DIAG-FORM
    console.log('[State] Open MODULE-DIAG-FORM (to be implemented)')
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      {/* Dark/tech aesthetic background decoration */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <div className="h-[500px] w-[500px] rounded-full bg-blue-500/30 blur-[100px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[url('https://img.usecurling.com/p/100/100?q=noise&color=black')] opacity-[0.03] mix-blend-overlay" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-blue-500/10 p-3 ring-1 ring-blue-500/20">
              <Activity className="h-6 w-6 text-blue-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Diagnóstico Preliminar
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Descubra o melhor serviço para sua empresa.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              id="cta-diagnostico"
              size="lg"
              className="group bg-blue-600 text-white hover:bg-blue-500"
              onClick={handleStartDiagnostic}
            >
              Iniciar Diagnóstico
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
