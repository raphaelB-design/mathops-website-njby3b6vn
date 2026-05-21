import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Check, Info } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z
    .string()
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, 'Formato: (11) 99999-8888')
    .optional()
    .or(z.literal('')),
  company: z.string().min(1, 'Empresa é obrigatória'),
  role: z.string().optional(),
  revenue: z.string().optional(),
  employees: z.string().optional(),
  challenge: z.string().optional(),
  interest: z.string().min(1, 'Área de interesse é obrigatória'),
  urgency: z.string().min(1, 'Urgência é obrigatória'),
  objective: z.string().optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function DiagnosticForm({ onSuccess }: { onSuccess?: () => void }) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    console.log('[Analytics] Event tracked: form_diagnostic_submitted')
    console.log('[Form Data]', data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSuccess(true)
    toast({
      title: 'Diagnóstico recebido!',
      description: 'Entraremos em contato em breve para os próximos passos.',
    })
    if (onSuccess) setTimeout(onSuccess, 3000)
  }

  if (isSuccess) {
    return (
      <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-[#00bcd4]/20 rounded-full flex items-center justify-center mb-4">
          <Check className="w-8 h-8 text-[#00bcd4]" />
        </div>
        <h3 className="text-2xl font-bold text-white">Tudo certo!</h3>
        <p className="text-[#b0b0c0] max-w-sm">
          Nossa equipe analisará as informações e entrará em contato em breve.
        </p>
        <Alert className="bg-[#0d0d1a] border-zinc-800 text-[#b0b0c0] mt-8 text-left">
          <Info className="h-4 w-4 text-[#00bcd4] shrink-0" />
          <AlertDescription>
            Nota: Os dados foram salvos localmente (em memória) para direcionamento na próxima etapa
            e não persistem após recarregar a página.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#b0b0c0]">
                  Nome <span className="text-[#00bcd4]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Seu nome"
                    className="bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#b0b0c0]">
                  E-mail corporativo <span className="text-[#00bcd4]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#b0b0c0]">WhatsApp</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-8888"
                    className="bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#b0b0c0]">
                  Empresa <span className="text-[#00bcd4]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nome da empresa"
                    className="bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#b0b0c0]">Cargo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Diretor"
                    className="bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="revenue"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#b0b0c0]">Faturamento aprox.</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: R$ 50 mi"
                    className="bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employees"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#b0b0c0]">Nº funcionários</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Ex: 200"
                    className="bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#b0b0c0]">
                  Área de interesse <span className="text-[#00bcd4]">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#0d0d1a] border-zinc-800 text-white">
                    {[
                      'Gestão e processos',
                      'BI e dashboards',
                      'Lean Six Sigma',
                      'Governança',
                      'Diagnóstico geral',
                    ].map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="urgency"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#b0b0c0]">
                  Urgência <span className="text-[#00bcd4]">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#0d0d1a] border-zinc-800 text-white">
                    {['Imediata', '30 dias', '90 dias', 'Sem prazo definido'].map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="challenge"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#b0b0c0]">Principal desafio</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Falta de indicadores"
                    className="bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="objective"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#b0b0c0]">Objetivo do projeto</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Estruturar KPIs"
                    className="bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#b0b0c0]">Mensagem complementar</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Detalhe sua necessidade..."
                  className="resize-none bg-[#0d0d1a] border-zinc-800 text-white focus-visible:ring-[#00bcd4]"
                  rows={2}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#00bcd4] hover:bg-[#00bcd4]/90 text-zinc-950 font-bold py-6 mt-6 transition-all shadow-[0_0_15px_rgba(0,188,212,0.2)] hover:shadow-[0_0_25px_rgba(0,188,212,0.4)]"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Receber diagnóstico preliminar'}
        </Button>
      </form>
    </Form>
  )
}
