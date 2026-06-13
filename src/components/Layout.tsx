import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Linkedin, Instagram, Facebook } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Serviços', href: '#services' },
  { name: 'Método', href: '#about' },
  { name: 'Sobre', href: '#about' },
  { name: 'Contato', href: '#contact' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        background: '#04060A',
        color: '#F0F4F8',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          borderBottom: '0.5px solid rgba(28,42,58,.8)',
          background: 'rgba(4,6,10,.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '0 48px',
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={scrollToTop}
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #0A66C2, #00B4D8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 18,
                color: '#fff',
                letterSpacing: '-0.03em',
                boxShadow: '0 0 20px rgba(0,180,216,.25)',
              }}
            >
              M
            </div>
            <span
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 20,
                color: '#F0F4F8',
                letterSpacing: '-0.02em',
              }}
            >
              Math<span style={{ color: '#00B4D8' }}>Ops</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: 'flex', alignItems: 'center', gap: 36 }}
            className="mo-desktop-nav"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.name}
                href={l.href}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#8FA3B8',
                  textDecoration: 'none',
                  transition: 'color .2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F0F4F8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#8FA3B8')}
              >
                {l.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#diagnostico"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '9px 20px',
              background: '#0A66C2',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontSize: 13,
              fontWeight: 600,
              border: 'none',
              borderRadius: 7,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background .2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0d7ae0')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0A66C2')}
            className="mo-desktop-cta"
          >
            Diagnóstico Gratuito
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: 'none',
              border: 'none',
              color: '#8FA3B8',
              cursor: 'pointer',
              padding: 4,
            }}
            className="mo-mobile-btn"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#080D14',
              borderBottom: '0.5px solid #1C2A3A',
              padding: '16px 24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#8FA3B8',
                  textDecoration: 'none',
                  padding: '10px 0',
                  borderBottom: '0.5px solid #1C2A3A',
                }}
              >
                {l.name}
              </a>
            ))}
            <a
              href="#diagnostico"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 12,
                padding: '11px 0',
                background: '#0A66C2',
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                fontWeight: 600,
                border: 'none',
                borderRadius: 7,
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Diagnóstico Gratuito
            </a>
          </div>
        )}

        <style>{`
          @media (min-width: 768px) { .mo-mobile-btn { display: none !important; } }
          @media (max-width: 767px) { .mo-desktop-nav, .mo-desktop-cta { display: none !important; } }
        `}</style>
      </header>

      {/* ── MAIN ───────────────────────────────────────────────────── */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer
        style={{ background: '#04060A', borderTop: '0.5px solid #1C2A3A', padding: '48px 0 32px' }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 40,
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 7,
                    background: 'linear-gradient(135deg, #0A66C2, #00B4D8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 15,
                    color: '#fff',
                  }}
                >
                  M
                </div>
                <span
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 18,
                    color: '#F0F4F8',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Math<span style={{ color: '#00B4D8' }}>Ops</span>
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: 11,
                  color: '#3D5470',
                  letterSpacing: '.04em',
                  lineHeight: 1.6,
                }}
              >
                Inteligência decisória baseada em matemática.
                <br />
                Clareza. Inteligência. Confiança.
              </p>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
              <div>
                <div
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: 9,
                    color: '#3D5470',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    marginBottom: 14,
                  }}
                >
                  Serviços
                </div>
                {[
                  'Lean Six Sigma',
                  'Modelagem Matemática',
                  'Business Intelligence',
                  'Governança de Dados',
                  'Memórias de Cálculo',
                ].map((s) => (
                  <div
                    key={s}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 13,
                      color: '#8FA3B8',
                      marginBottom: 8,
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F0F4F8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#8FA3B8')}
                  >
                    {s}
                  </div>
                ))}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: 9,
                    color: '#3D5470',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    marginBottom: 14,
                  }}
                >
                  Empresa
                </div>
                {['Sobre', 'Método', 'Cases', 'Contato'].map((s) => (
                  <div
                    key={s}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 13,
                      color: '#8FA3B8',
                      marginBottom: 8,
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F0F4F8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#8FA3B8')}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: 9,
                  color: '#3D5470',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                Redes
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { Icon: Linkedin, href: '#' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Facebook, href: '#' },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      border: '0.5px solid #1C2A3A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3D5470',
                      textDecoration: 'none',
                      transition: 'border-color .2s, color .2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#8FA3B8'
                      e.currentTarget.style.color = '#F0F4F8'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#1C2A3A'
                      e.currentTarget.style.color = '#3D5470'
                    }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: '0.5px solid #1C2A3A',
              paddingTop: 20,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            <span
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, color: '#3D5470' }}
            >
              © {new Date().getFullYear()} MathOps. Todos os direitos reservados.
            </span>
            <div style={{ display: 'flex', gap: 20 }}>
              {['Política de Privacidade', 'Termos de Uso', 'LGPD'].map((t) => (
                <a
                  key={t}
                  href="#"
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: 10,
                    color: '#3D5470',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#8FA3B8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#3D5470')}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
