import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import { ChevronDown, Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'About Us', href: '#about' },
  { name: 'Case Studies', href: '#case-studies' },
]

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="flex min-h-screen flex-col bg-[#070709] text-white font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#070709]/90 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <span className="text-xl font-bold tracking-tight">MathOps</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                {link.name}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-white hover:text-black rounded-full px-6 bg-transparent"
              asChild
            >
              <a href="#contact">Contact Sales</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#070709] border-b border-white/5 p-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-gray-300 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full mt-2 border-gray-600 text-white rounded-full bg-transparent hover:bg-white hover:text-black"
              variant="outline"
              asChild
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Sales
              </a>
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-[#070709] py-12 border-t border-white/5 mt-auto">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                  M
                </div>
                <span className="text-lg font-bold">MathOps</span>
              </div>
              <p className="text-gray-400 text-sm">Modern B2B data consulting</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-500">
            <p>Website - www.mathops.com</p>
            <p>Footer</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
