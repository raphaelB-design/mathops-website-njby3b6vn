import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ArrowRight, BarChart3 } from 'lucide-react'

export function CommercialCTA() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative w-full py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-300 backdrop-blur-sm">
            <BarChart3 className="mr-2 h-4 w-4" />
            Metodologia Lean Six Sigma
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Pronto para elevar o nível de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]">
              maturidade dos seus dados?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-[42rem] mx-auto leading-relaxed">
            Receba um pré-orçamento e uma análise inicial baseada na estrutura da sua empresa.
            Descubra como nossa consultoria data-driven pode otimizar seus processos.
          </p>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="h-14 px-8 text-lg bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] hover:opacity-90 transition-opacity text-white rounded-full group shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)] hover:shadow-[0_0_60px_-15px_rgba(124,58,237,0.7)]"
              >
                Iniciar Diagnóstico Preliminar
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#0a0a0f] border-gray-800 text-white">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]">
                  Diagnóstico Preliminar
                </DialogTitle>
                <DialogDescription className="text-gray-400 pt-4 text-base">
                  O formulário completo de diagnóstico será integrado e exibido aqui na próxima
                  etapa do desenvolvimento.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
