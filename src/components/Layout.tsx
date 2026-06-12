import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, ChartNetwork, Lock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'TAIE', href: '#taie' },
  { name: 'Resultados', href: '#resultados' },
  { name: 'Sobre Nós', href: '#sobre' },
]

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-primary)] overflow-x-hidden">
      <header
        className={cn(
          'fixed top-0 z-[1000] w-full transition-all duration-500',
          isScrolled
            ? 'scrolled bg-[rgba(2,6,4,0.85)] backdrop-blur-xl border-b border-[var(--glass-border)] py-4'
            : 'bg-transparent py-6',
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <ChartNetwork className="h-8 w-8 text-[var(--accent-gold)] group-hover:scale-105 transition-transform duration-300" />
            <span className="text-2xl font-display font-bold tracking-wide text-[#f5f5f7]">
              MATHOPS
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[#f5f5f7] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6 border-l border-[var(--glass-border)] pl-6">
              <a
                href="#cliente"
                className="flex items-center gap-2 text-sm font-medium text-[var(--accent-gold)] hover:text-yellow-400 transition-colors"
              >
                <Lock className="h-4 w-4" />
                Área do Cliente
              </a>
              <Button
                className="bg-gradient-primary border-0 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.3)] text-black font-semibold px-6 h-11"
                asChild
              >
                <a href="#contato" className="flex items-center gap-2">
                  Diagnóstico Rápido
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[var(--text-primary)] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[rgba(2,6,4,0.95)] backdrop-blur-xl border-b border-[var(--glass-border)] p-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4 text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-[var(--text-primary)] py-2 border-b border-[var(--glass-border)]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cliente"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-lg font-medium text-[var(--accent-gold)] py-2 border-b border-[var(--glass-border)]"
              >
                <Lock className="h-5 w-5" />
                Área do Cliente
              </a>
              <Button
                className="bg-gradient-primary w-full rounded-full mt-4 h-12 text-black font-semibold"
                asChild
              >
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  Diagnóstico Rápido
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-[var(--glass-border)] bg-[rgba(255,255,255,0.01)] py-12 mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center text-[var(--text-secondary)] text-sm">
          <div className="flex justify-center items-center gap-2 mb-6">
            <ChartNetwork className="h-6 w-6 text-[var(--accent-gold)]" />
            <span className="font-display font-bold text-xl text-[var(--text-primary)]">
              MATHOPS
            </span>
          </div>
          <p>
            © {new Date().getFullYear()} MathOps. Consultoria Data-Driven & Lean Six Sigma. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
