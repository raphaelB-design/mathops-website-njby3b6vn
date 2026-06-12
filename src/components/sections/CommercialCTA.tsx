import { useState } from 'react'
import { Mail, Phone, Linkedin, Loader2, Send, Calendar, MessageSquare } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'raphael_batista@outlook.com',
    href: 'mailto:raphael_batista@outlook.com',
    desc: 'Resposta em até 24h',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '(11) 99155-3336',
    href: 'https://wa.me/5511991553336',
    desc: 'Seg–Sex, 8h às 18h',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/raphaelbatista',
    href: 'https://linkedin.com/in/raphaelbatista',
    desc: 'Conecte-se',
  },
]

const INTERESTS = [
  'Diagnóstico 360',
  'Monitoramento mensal',
  'TAIE Enterprise',
  'Reforma Tributária (CBS/IBS)',
  'Consultoria de Gestão',
  'Business Intelligence',
]

export function ContactSection() {
  const { ref, isRevealed } = useScrollReveal()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  const toggleInterest = (interest: string) => {
    setSelected((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest],
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: 'Mensagem recebida.',
        description: 'Retornaremos em até 24 horas.',
      })
      ;(e.target as HTMLFormElement).reset()
      setSelected([])
    }, 1500)
  }

  return (
    <section id="contato" className="py-28 relative">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Contato
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Pronto para saber
            <span className="text-gradient"> quanto está deixando </span>
            na mesa?
          </h2>
          <p className="text-muted-foreground text-lg">
            O primeiro diagnóstico preliminar é gratuito. Envie sua mensagem e agendamos uma análise
            inicial sem compromisso.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            'grid grid-cols-1 lg:grid-cols-5 gap-12 opacity-0',
            isRevealed && 'animate-fade-in-up',
          )}
        >
          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact methods */}
            <div className="space-y-4">
              {CONTACT_METHODS.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-card/40 hover:border-primary/20 hover:bg-card/60 transition-all duration-200 group"
                >
                  <div className="h-10 w-10 rounded-lg border border-white/[0.08] bg-white/[0.04] flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/10 transition-all shrink-0">
                    <c.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      {c.label} · {c.desc}
                    </p>
                    <p className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* What to expect */}
            <div className="rounded-xl border border-white/[0.06] bg-card/30 p-6 space-y-4">
              <p className="text-sm font-semibold text-foreground">O que acontece depois?</p>
              {[
                { icon: MessageSquare, text: 'Resposta em até 24h com confirmação' },
                { icon: Calendar, text: 'Diagnóstico preliminar gratuito em 30 min' },
                { icon: Send, text: 'Proposta customizada com escopo e garantia' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <s.icon className="h-4 w-4 text-secondary shrink-0" />
                  {s.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/[0.06] bg-card/40 p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground/80">
                      Nome completo
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="João Silva"
                      className="bg-background/40 border-white/[0.08] focus-visible:ring-primary/50 focus-visible:border-primary/30 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground/80">
                      Email corporativo
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="joao@empresa.com"
                      className="bg-background/40 border-white/[0.08] focus-visible:ring-primary/50 focus-visible:border-primary/30 text-sm"
                    />
                  </div>
                </div>

                {/* Company + Revenue */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-sm font-medium text-foreground/80">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      placeholder="Sua Empresa Ltda"
                      className="bg-background/40 border-white/[0.08] focus-visible:ring-primary/50 focus-visible:border-primary/30 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="revenue" className="text-sm font-medium text-foreground/80">
                      Faturamento anual
                    </Label>
                    <select
                      id="revenue"
                      className="w-full h-10 px-3 rounded-lg border border-white/[0.08] bg-background/40 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30"
                    >
                      <option value="">Selecione...</option>
                      <option>Até R$ 5M</option>
                      <option>R$ 5M – R$ 20M</option>
                      <option>R$ 20M – R$ 100M</option>
                      <option>Acima de R$ 100M</option>
                    </select>
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground/80">
                    Tenho interesse em (selecione)
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map((interest) => (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={cn(
                          'px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200',
                          selected.includes(interest)
                            ? 'border-primary/50 bg-primary/10 text-primary'
                            : 'border-white/[0.08] bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-foreground',
                        )}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground/80">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Descreva brevemente o contexto: regime tributário, faturamento, setor de atuação, e o que está buscando..."
                    className="min-h-[100px] bg-background/40 border-white/[0.08] focus-visible:ring-primary/50 focus-visible:border-primary/30 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 rounded-xl bg-gradient-primary text-white font-semibold text-sm glow-primary hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Enviar mensagem
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  Seus dados são confidenciais. Não compartilhamos com terceiros.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
