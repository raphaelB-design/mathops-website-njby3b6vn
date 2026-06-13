import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase/client'
import { Loader2 } from 'lucide-react'

export function ContactSection() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [lgpd, setLgpd] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!lgpd) {
      toast({
        variant: 'destructive',
        title: 'Consent required',
        description: 'You must agree to the privacy policy to continue.',
      })
      return
    }

    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const nome = formData.get('nome') as string
    const email = formData.get('email') as string
    const mensagem = formData.get('mensagem') as string

    const { error } = await supabase.from('leads').insert({
      nome,
      email,
      mensagem,
      origem: 'site',
      consentimento_lgpd: lgpd,
      status: 'novo',
    })

    setIsLoading(false)

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error submitting form',
        description: 'Please try again later.',
      })
      return
    }

    toast({
      title: 'Message sent successfully!',
      description: "We'll get back to you shortly.",
    })

    ;(e.target as HTMLFormElement).reset()
    setLgpd(false)
    setShowForm(false)
  }

  return (
    <section id="contact" className="bg-[#070709] py-24 pb-32 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Banner CTA */}
        <div className="bg-[#0c0c0f] border border-white/10 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden mb-12 shadow-2xl">
          {/* Top glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70" />

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Transform Your Data
            <br />
            into an Asset?
          </h2>
          <p className="text-gray-400 mb-8">Ready to transform your Data into an Asset?</p>

          {!showForm && (
            <Button
              onClick={() => setShowForm(true)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 h-14 rounded-xl font-medium transition-all animate-neon-breathe-indigo text-lg"
            >
              Contact Us Today
            </Button>
          )}
        </div>

        {/* Integrated Form */}
        {showForm && (
          <div className="bg-[#0c0c0f] border border-white/10 rounded-2xl p-8 md:p-10 animate-fade-in-up shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-gray-300">
                    Full Name *
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    required
                    className="bg-[#15151a] border-white/10 text-white focus-visible:ring-indigo-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Corporate Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-[#15151a] border-white/10 text-white focus-visible:ring-indigo-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-gray-300">
                  Message *
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  className="bg-[#15151a] border-white/10 text-white min-h-[120px] focus-visible:ring-indigo-500 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="consentimento_lgpd"
                  checked={lgpd}
                  onCheckedChange={(checked) => setLgpd(checked as boolean)}
                  className="border-white/20 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                />
                <Label
                  htmlFor="consentimento_lgpd"
                  className="text-sm text-gray-400 font-normal leading-snug cursor-pointer"
                >
                  I agree to the processing of my data according to the Privacy Policy. *
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white h-14 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
