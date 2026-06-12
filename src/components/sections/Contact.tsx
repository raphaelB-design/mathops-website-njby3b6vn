import { useState } from 'react'
import { Mail, Phone, Linkedin, Loader2, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('Email corporativo inválido'),
  whatsapp: z.string().optional(),
  company: z.string().min(2, 'Nome da empresa é obrigatório'),
  role: z.string().optional(),
  revenue: z.string().optional(),
  employees: z.string().optional(),
  challenge: z.string().optional(),
  interest: z.string().optional(),
  urgency: z.string().optional(),
  objective: z.string().optional(),
  message: z.string().optional(),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactSection() {
  const { ref, isRevealed } = useScrollReveal()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
      company: '',
      role: '',
      revenue: '',
      employees: '',
      challenge: '',
      interest: '',
      urgency: '',
      objective: '',
      message: '',
    },
  })

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true)

    // Simulate backend submission in-memory
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Diagnóstico solicitado com sucesso!',
        description: 'Nossa equipe de consultores entrará em contato em breve.',
      })
      form.reset()
    }, 1500)
  }

  return (
    <section id="contato" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Inicie seu <span className="text-gradient">Diagnóstico</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Forneça os dados do seu negócio para que possamos estruturar a melhor abordagem
            analítica e operacional.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            'grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto opacity-0',
            isRevealed && 'animate-fade-in-up',
          )}
        >
          <Card className="lg:col-span-8 bg-card/40 border-white/10 backdrop-blur-sm shadow-xl">
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="João Silva"
                              className="bg-background/50 border-white/10"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Corporativo *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="joao@empresa.com.br"
                              className="bg-background/50 border-white/10"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <FormField
                      control={form.control}
                      name="whatsapp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(00) 00000-0000"
                              className="bg-background/50 border-white/10"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nome da Empresa"
                              className="bg-background/50 border-white/10"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cargo</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: CEO, Diretor"
                              className="bg-background/50 border-white/10"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="revenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Faturamento Aproximado</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-white/10">
                                <SelectValue placeholder="Selecione..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ate-1m">Até R$ 1 Milhão/ano</SelectItem>
                              <SelectItem value="1m-5m">R$ 1M a R$ 5 Milhões/ano</SelectItem>
                              <SelectItem value="5m-20m">R$ 5M a R$ 20 Milhões/ano</SelectItem>
                              <SelectItem value="mais-20m">Acima de R$ 20 Milhões/ano</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="employees"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número de Funcionários</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: 50"
                              className="bg-background/50 border-white/10"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Área de Interesse</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-white/10">
                                <SelectValue placeholder="Selecione o foco..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="gestao">Gestão e processos</SelectItem>
                              <SelectItem value="bi">BI e dashboards</SelectItem>
                              <SelectItem value="lean">Lean Six Sigma</SelectItem>
                              <SelectItem value="governanca">Governança</SelectItem>
                              <SelectItem value="diagnostico">Diagnóstico geral</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="urgency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Urgência</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-white/10">
                                <SelectValue placeholder="Prazo para início..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="imediata">Imediata</SelectItem>
                              <SelectItem value="30-dias">30 dias</SelectItem>
                              <SelectItem value="90-dias">90 dias</SelectItem>
                              <SelectItem value="sem-prazo">Sem prazo definido</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="challenge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Principal Desafio Atual</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: Gargalo na produção, falta de dados precisos..."
                            className="bg-background/50 border-white/10"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="objective"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Objetivo do Projeto / Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Como podemos impulsionar seus resultados?"
                            className="min-h-[100px] bg-background/50 border-white/10 resize-none"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-black font-semibold hover:opacity-90 rounded-xl h-14 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processando Dados...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" /> Enviar para Análise
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-card/30 p-8 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Por que preencher?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Coletamos estes dados para realizar uma avaliação prévia da maturidade da sua
                operação. Quanto mais precisas as informações, mais assertiva será nossa reunião de
                diagnóstico.
              </p>

              <div className="space-y-6">
                <a href="mailto:contato@mathops.com.br" className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-full bg-card border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Email Direto</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      contato@mathops.com.br
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/5511991553336"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-full bg-card border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      WhatsApp Corporativo
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      (11) 99155-3336
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/company/mathops"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-full bg-card border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <Linkedin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">LinkedIn</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      /company/mathops
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
              <p className="text-sm text-secondary font-medium text-center">
                Atendemos empresas em todo o território nacional e projetos internacionais sob
                demanda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
