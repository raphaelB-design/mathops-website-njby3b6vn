import { useState } from 'react'
import { Mail, Phone, Linkedin, Loader2, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

export function ContactSection() {
  const { ref, isRevealed } = useScrollReveal()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Em breve retornaremos o seu contato.',
      })
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  return (
    <section id="contato" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-muted-foreground">
            Pronto para transformar os dados da sua empresa? Fale com a gente.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto opacity-0',
            isRevealed && 'animate-fade-in-up',
          )}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="prose prose-invert">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Vamos conversar sobre o seu negócio.
              </h3>
              <p className="text-muted-foreground">
                Seja para estruturar processos, implementar inteligência de negócios ou treinar sua
                equipe, estamos prontos para entender seus desafios.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:raphael_batista@outlook.com"
                className="flex items-center gap-4 group"
              >
                <div className="h-12 w-12 rounded-full bg-card border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    raphael_batista@outlook.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/5511991553336"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="h-12 w-12 rounded-full bg-card border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">WhatsApp</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    (11) 99155-3336
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/raphaelbatista"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="h-12 w-12 rounded-full bg-card border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">LinkedIn</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    /in/raphaelbatista
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/40 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    required
                    placeholder="João Silva"
                    className="bg-background/50 border-white/10 focus-visible:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Corporativo</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="joao@empresa.com"
                      className="bg-background/50 border-white/10 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      placeholder="(00) 00000-0000"
                      className="bg-background/50 border-white/10 focus-visible:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    placeholder="Sua Empresa Ltda"
                    className="bg-background/50 border-white/10 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Como podemos ajudar?"
                    className="min-h-[120px] bg-background/50 border-white/10 focus-visible:ring-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-primary hover:opacity-90 rounded-xl h-12"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
