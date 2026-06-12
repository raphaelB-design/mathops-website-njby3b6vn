import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Cpu, LayoutDashboard, Cog } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

export function TAIEProductSection() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section id="taie" className="py-24 relative border-t border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
            Produto Exclusivo MathOps
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Metodologia <span className="text-gradient">TAIE</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologia, Automação, Inteligência e Estratégia. Um framework proprietário para elevar
            o nível de maturidade analítica e operacional da sua empresa.
          </p>
        </div>

        <div
          ref={ref}
          className={cn('w-full max-w-5xl mx-auto opacity-0', isRevealed && 'animate-fade-in-up')}
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto bg-card/50 p-1 border border-white/10 rounded-2xl">
              <TabsTrigger
                value="overview"
                className="rounded-xl py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <LayoutDashboard className="w-4 h-4 mr-2" /> Visão Geral
              </TabsTrigger>
              <TabsTrigger
                value="framework"
                className="rounded-xl py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Cog className="w-4 h-4 mr-2" /> O Framework
              </TabsTrigger>
              <TabsTrigger
                value="plans"
                className="rounded-xl py-3 text-base data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <Cpu className="w-4 h-4 mr-2" /> Planos de Implantação
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="overview"
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <Card className="bg-card/40 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-primary">
                    Diagnóstico e Cultura Data-Driven
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground/90">
                    O TAIE não é apenas um software, é uma transformação cultural acompanhada de
                    ferramental técnico robusto.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Implementamos uma cultura orientada a dados garantindo que sua equipe possua as
                    informações certas, no momento exato, para tomar decisões estratégicas.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {[
                      'Alinhamento Estratégico de TI',
                      'Mapeamento de Fluxos de Informação',
                      'Governança de Dados',
                      'Treinamento de Times Operacionais',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/5"
                      >
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              value="framework"
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card/40 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-primary">
                      Tecnologia & Automação
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Substituímos processos manuais repetitivos por fluxos automatizados em Python e
                    RPA, integrando ERPs, CRMs e planilhas desconexas em um Data Warehouse
                    centralizado.
                  </CardContent>
                </Card>
                <Card className="bg-card/40 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-secondary">
                      Inteligência & Estratégia
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Com os dados limpos e automatizados, aplicamos algoritmos estatísticos e
                    construímos painéis visuais interativos que apontam a direção exata para o
                    crescimento sustentável.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent
              value="plans"
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card/40 border-white/10 flex flex-col relative">
                  <CardHeader>
                    <CardTitle className="text-xl font-display">TAIE Essential</CardTitle>
                    <CardDescription>Para PMEs iniciando a jornada</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div className="text-3xl font-bold text-foreground mb-6">
                      Diagnóstico
                      <span className="text-sm font-normal text-muted-foreground block">
                        Mapeamento inicial
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary" /> Mapeamento de 2 Processos
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary" /> 1 Dashboard Operacional
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary" /> Treinamento Básico
                      </li>
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="outline" className="w-full border-white/20" asChild>
                      <a href="#contato">Solicitar Orçamento</a>
                    </Button>
                  </div>
                </Card>

                <Card className="bg-card/80 border-secondary relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(251,191,36,0.15)] flex flex-col">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary to-primary"></div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Mais Escolhido
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-secondary">
                      TAIE Advanced
                    </CardTitle>
                    <CardDescription>Estruturação completa de BI</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div className="text-3xl font-bold text-foreground mb-6">
                      Implantação
                      <span className="text-sm font-normal text-muted-foreground block">
                        Setup de Data Warehouse
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-secondary" /> Mapeamento End-to-End
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-secondary" /> Pipelines Automatizados
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-secondary" /> Dashboards Interativos
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-secondary" /> Otimização Lean Six Sigma
                      </li>
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button
                      className="w-full bg-secondary text-black hover:bg-secondary/90"
                      asChild
                    >
                      <a href="#contato">Falar com Consultor</a>
                    </Button>
                  </div>
                </Card>

                <Card className="bg-card/40 border-white/10 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl font-display">TAIE Enterprise</CardTitle>
                    <CardDescription>Governança corporativa integral</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div className="text-3xl font-bold text-foreground mb-6">
                      Contínuo
                      <span className="text-sm font-normal text-muted-foreground block">
                        C-Level Advisory
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary" /> Tudo do TAIE Advanced
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary" /> Modelos Preditivos
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary" /> Comitê de Governança
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary" /> Auditoria Contínua
                      </li>
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="outline" className="w-full border-white/20" asChild>
                      <a href="#contato">Agendar Reunião</a>
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
