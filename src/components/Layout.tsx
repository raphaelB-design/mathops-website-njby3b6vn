import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Hexagon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Contato', href: '#contato' },
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
    <div className="flex min-h-screen flex-col">
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-white/5 shadow-sm py-3'
            : 'bg-transparent py-5',
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <Hexagon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
            <span className="text-xl font-bold tracking-tight text-gradient">MathOps</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-gradient-primary border-0 rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(124,58,237,0.3)]">
              <a href="#contato">Fale Conosco</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-lg border-b border-white/5 p-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4 text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-gradient-primary w-full rounded-full mt-2" asChild>
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  Fale Conosco
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-card py-8 mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground text-sm">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Hexagon className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">MathOps</span>
          </div>
          <p>© {new Date().getFullYear()} MathOps. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
