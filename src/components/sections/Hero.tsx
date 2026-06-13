import { useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────────────────────────────────────
   MathOps — Hero Section v3.1
   Layout: grid 50/50, texto centralizado na coluna esquerda, SVG isométrico
   maior e bem posicionado na coluna direita.
───────────────────────────────────────────────────────────────────────────── */

const MANIFESTO = [
  { neg: 'Não vendemos relatórios.', aff: 'Entregamos clareza.' },
  { neg: 'Não vendemos dashboards.', aff: 'Entregamos inteligência.' },
  { neg: 'Não vendemos consultoria.', aff: 'Entregamos confiança.' },
]

const METRICS = [
  { val: '38%', label: 'Redução decisória', ctx: '12 projetos BI industrial' },
  { val: '4.8σ', label: 'Qualidade processo', ctx: 'baseline Lean Six Sigma' },
  { val: 'R$0', label: 'Erros de cálculo', ctx: 'memórias auditáveis' },
]

const CHIPS = [
  {
    color: '#22C55E',
    shadow: 'rgba(34,197,94,.7)',
    label: 'VALIDAÇÃO',
    val: 'ATIVA',
    valColor: '#22C55E',
  },
  { color: '#00B4D8', shadow: '', label: 'SIGMA', val: '4.82', valColor: '#00B4D8' },
  { color: '#0A66C2', shadow: '', label: 'R²', val: '0.9871', valColor: '#8FA3B8' },
  { color: '#F97316', shadow: '', label: 'CONFIANÇA', val: '99.6%', valColor: '#F0F4F8' },
]

export function HeroSection() {
  const scanRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scanRef.current
    if (!el) return
    el.style.opacity = '1'
    const start = performance.now()
    const dur = 1500
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      el.style.top = `${ease * 100}%`
      if (p < 1) requestAnimationFrame(tick)
      else el.style.opacity = '0'
    }
    requestAnimationFrame(tick)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap');

        /* ── Design tokens ───────────────────────────────────── */
        :root {
          --mo-void:    #04060A;
          --mo-deep:    #080D14;
          --mo-surface: #0E1620;
          --mo-border:  #1C2A3A;
          --mo-blue:    #0A66C2;
          --mo-cyan:    #00B4D8;
          --mo-slate:   #8FA3B8;
          --mo-ghost:   #3D5470;
          --mo-white:   #F0F4F8;
        }

        /* ── Scanner ─────────────────────────────────────────── */
        .mo-scan {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #00B4D8 35%, #00B4D8 65%, transparent);
          box-shadow: 0 0 16px 2px rgba(0,180,216,.5);
          pointer-events: none; z-index: 30; opacity: 0;
          top: 0; transition: opacity .2s;
        }

        /* ── Pill badge ──────────────────────────────────────── */
        .mo-pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 6px 16px;
          border: 0.5px solid rgba(0,180,216,.3);
          background: rgba(0,180,216,.07);
          border-radius: 999px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px; color: #00B4D8; letter-spacing: .05em;
          margin-bottom: 32px;
        }
        .mo-pdot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #00B4D8;
          animation: mo-pulse 2s ease-in-out infinite;
        }
        @keyframes mo-pulse { 0%,100%{opacity:1} 50%{opacity:.25} }

        /* ── Headline ────────────────────────────────────────── */
        .mo-h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(40px, 4.5vw, 68px);
          font-weight: 800;
          color: #F0F4F8;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        /* ── Subtitle ────────────────────────────────────────── */
        .mo-sub {
          font-family: 'Inter', sans-serif;
          font-size: clamp(16px, 1.2vw, 18px);
          color: #8FA3B8;
          line-height: 1.75;
          margin-bottom: 40px;
          max-width: 520px;
        }

        /* ── CTAs ────────────────────────────────────────────── */
        .mo-cta-row { display: flex; gap: 12px; margin-bottom: 48px; flex-wrap: wrap; }

        .mo-cta-p {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 15px 28px;
          background: #0A66C2; color: #fff;
          font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600;
          border: none; border-radius: 8px; cursor: pointer; text-decoration: none;
          transition: background .2s, transform .15s;
          white-space: nowrap;
        }
        .mo-cta-p:hover { background: #0d7ae0; transform: translateY(-1px); }

        .mo-cta-s {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 15px 24px;
          background: transparent; color: #8FA3B8;
          font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500;
          border: 0.5px solid #1C2A3A; border-radius: 8px;
          cursor: pointer; text-decoration: none;
          transition: border-color .2s, color .2s;
          white-space: nowrap;
        }
        .mo-cta-s:hover { border-color: #8FA3B8; color: #F0F4F8; }

        /* ── Manifesto card ──────────────────────────────────── */
        .mo-manifesto {
          background: #080D14;
          border: 0.5px solid #1C2A3A;
          border-radius: 12px;
          padding: 26px 32px;
          position: relative; overflow: hidden;
          margin-bottom: 32px;
        }
        .mo-manifesto::before {
          content: ''; position: absolute;
          left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(180deg, #0A66C2, #00B4D8);
          border-radius: 0 0 0 12px;
        }
        .mo-mtag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; color: #3D5470;
          letter-spacing: .12em; text-transform: uppercase;
          margin-bottom: 16px;
        }
        .mo-mrow {
          display: flex; align-items: baseline; gap: 10px;
          padding-bottom: 12px; margin-bottom: 12px;
          border-bottom: 0.5px solid #1C2A3A;
        }
        .mo-mrow:last-child { padding-bottom: 0; margin-bottom: 0; border-bottom: none; }
        .mo-mneg {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; color: #3D5470;
          text-decoration: line-through; white-space: nowrap; flex-shrink: 0;
        }
        .mo-marr {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; color: #3D5470; flex-shrink: 0;
        }
        .mo-maff {
          font-family: 'Syne', sans-serif;
          font-size: 16.5px; font-weight: 700; color: #F0F4F8;
        }

        /* ── Metrics ─────────────────────────────────────────── */
        .mo-metrics {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
        }
        .mo-mc { border-left: 2px solid #0A66C2; padding: 10px 0 10px 16px; }
        .mo-mv {
          font-family: 'Syne', sans-serif;
          font-size: 28px; font-weight: 800; color: #F0F4F8;
          line-height: 1; margin-bottom: 4px;
        }
        .mo-ml {
          font-family: 'Inter', sans-serif;
          font-size: 12px; font-weight: 600; color: #F0F4F8; margin-bottom: 4px;
        }
        .mo-md {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; color: #3D5470; line-height: 1.5;
        }

        /* ── Status chips ────────────────────────────────────── */
        .mo-chips {
          display: flex; flex-direction: column; gap: 6px;
          position: absolute; top: 20px; right: 12px; z-index: 20;
        }
        .mo-chip {
          display: flex; align-items: center; gap: 6px;
          padding: 5px 11px;
          background: rgba(8,13,20,.95);
          border: 0.5px solid #1C2A3A;
          border-radius: 6px;
          backdrop-filter: blur(10px);
        }
        .mo-cdot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }
        .mo-clbl {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px; color: #8FA3B8; letter-spacing: .05em;
        }
        .mo-cval {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; font-weight: 500;
        }

        /* ── Bottom cert bar ─────────────────────────────────── */
        .mo-bar {
          border-top: 0.5px solid #1C2A3A;
          padding: 13px 48px;
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
          position: relative; z-index: 10;
        }
        .mo-blbl {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px; color: #3D5470;
          letter-spacing: .1em; text-transform: uppercase; flex-shrink: 0;
        }
        .mo-ctag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; color: #3D5470;
          padding: 3px 9px; border: 0.5px solid #1C2A3A;
          border-radius: 4px; letter-spacing: .04em;
        }

        /* ── ISO layer animations ────────────────────────────── */
        @keyframes mo-fl0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes mo-fl1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes mo-fl2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes mo-fl3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes mo-fl4 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes mo-bmpulse { 0%,100%{opacity:.3} 50%{opacity:.95} }
        @keyframes mo-orb1 {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        @keyframes mo-orb2 {
          from { transform: rotate(180deg) translateX(46px) rotate(-180deg); }
          to   { transform: rotate(540deg) translateX(46px) rotate(-540deg); }
        }
        @keyframes mo-pbar { 0%{width:0} 100%{width:96%} }

        .mo-g0 { animation: mo-fl0 9s ease-in-out infinite 0s; }
        .mo-g1 { animation: mo-fl1 8.5s ease-in-out infinite .3s; }
        .mo-g2 { animation: mo-fl2 8s ease-in-out infinite .6s; }
        .mo-g3 { animation: mo-fl3 7.5s ease-in-out infinite .9s; }
        .mo-g4 { animation: mo-fl4 7s ease-in-out infinite 1.2s; }
        .mo-beam { animation: mo-bmpulse 3s ease-in-out infinite; }
        .mo-o1  { animation: mo-orb1 7s linear infinite; }
        .mo-o2  { animation: mo-orb2 11s linear infinite; }
        .mo-pbfill { animation: mo-pbar 2.2s ease-out forwards 1.8s; width: 0; }

        /* ── Reveal ──────────────────────────────────────────── */
        .mo-rv {
          opacity: 0; transform: translateY(10px);
          animation: mo-rvin .55s ease forwards;
          animation-delay: var(--d, 0s);
        }
        @keyframes mo-rvin { to { opacity:1; transform:none; } }

        /* ── Responsive ──────────────────────────────────────── */
        @media (max-width: 1023px) {
          .mo-right-col { display: none !important; }
          .mo-hero-grid { grid-template-columns: 1fr !important; padding: 0 24px !important; }
          .mo-left-col { padding-right: 0 !important; padding-top: 40px !important; padding-bottom: 40px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mo-scan { display: none; }
          .mo-rv { animation: none; opacity: 1; transform: none; }
          .mo-g0,.mo-g1,.mo-g2,.mo-g3,.mo-g4,
          .mo-beam,.mo-o1,.mo-o2 { animation: none; }
        }
      `}</style>

      <section
        style={{
          background: 'var(--mo-void)',
          paddingTop: 80,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        {/* Scanner */}
        <div ref={scanRef} className="mo-scan" style={{ position: 'absolute' }} />

        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              'linear-gradient(rgba(28,42,58,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(28,42,58,.4) 1px,transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 90% 80% at 50% 0%,black 15%,transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 80% at 50% 0%,black 15%,transparent 100%)',
          }}
        />

        {/* Ambient orbs */}
        <div
          style={{
            position: 'absolute',
            borderRadius: '50%',
            filter: 'blur(100px)',
            pointerEvents: 'none',
            width: 480,
            height: 480,
            top: -120,
            right: -60,
            background: 'rgba(10,102,194,.14)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            borderRadius: '50%',
            filter: 'blur(80px)',
            pointerEvents: 'none',
            width: 320,
            height: 320,
            bottom: -60,
            left: -40,
            background: 'rgba(0,180,216,.09)',
          }}
        />

        {/* ── MAIN GRID ─────────────────────────────────────────────── */}
        <div
          className="mo-hero-grid"
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '0 48px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
            minHeight: 'calc(100vh - 80px - 58px)',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* ══ LEFT COLUMN ════════════════════════════════════════════ */}
          <div
            className="mo-left-col"
            style={{ paddingTop: 64, paddingBottom: 64, paddingRight: 64 }}
          >
            {/* Pill */}
            <div className="mo-pill mo-rv" style={{ '--d': '.15s' } as React.CSSProperties}>
              <span className="mo-pdot" />
              inteligência decisória baseada em Dados
            </div>

            {/* H1 */}
            <h1 className="mo-h1 mo-rv" style={{ '--d': '.3s' } as React.CSSProperties}>
              Suas decisões são tão
              <br />
              <span style={{ color: '#00B4D8' }}>confiáveis</span>
              <br />
              quanto os dados
              <br />
              por trás delas?
            </h1>

            {/* Subtitle */}
            <p className="mo-sub mo-rv" style={{ '--d': '.45s' } as React.CSSProperties}>
              A MathOps une Lean Six Sigma, modelagem matemática e Business Intelligence para que
              sua empresa decida com segurança, evidência e previsibilidade.
            </p>

            {/* CTAs */}
            <div className="mo-cta-row mo-rv" style={{ '--d': '.58s' } as React.CSSProperties}>
              <a className="mo-cta-p" href="#diagnostico">
                Diagnóstico Estratégico Gratuito
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="mo-cta-s" href="#cases">
                Ver evidências
              </a>
            </div>

            {/* Manifesto */}
            <div className="mo-manifesto mo-rv" style={{ '--d': '.7s' } as React.CSSProperties}>
              <div className="mo-mtag">manifesto</div>
              {MANIFESTO.map((m, i) => (
                <div key={i} className="mo-mrow">
                  <span className="mo-mneg">{m.neg}</span>
                  <span className="mo-marr">→</span>
                  <span className="mo-maff">{m.aff}</span>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="mo-metrics mo-rv" style={{ '--d': '.85s' } as React.CSSProperties}>
              {METRICS.map((m, i) => (
                <div key={i} className="mo-mc">
                  <div className="mo-mv">{m.val}</div>
                  <div className="mo-ml">{m.label}</div>
                  <div className="mo-md">{m.ctx}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT COLUMN — 3D ISO STACK ════════════════════════════ */}
          <div
            className="mo-right-col"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 48,
              paddingBottom: 48,
              minHeight: 600,
            }}
          >
            {/* Status chips */}
            <div className="mo-chips mo-rv" style={{ '--d': '.9s' } as React.CSSProperties}>
              {CHIPS.map((c, i) => (
                <div key={i} className="mo-chip">
                  <span
                    className="mo-cdot"
                    style={{
                      background: c.color,
                      boxShadow: c.shadow ? `0 0 6px ${c.shadow}` : undefined,
                    }}
                  />
                  <span className="mo-clbl">{c.label}</span>
                  <span className="mo-cval" style={{ color: c.valColor }}>
                    {c.val}
                  </span>
                </div>
              ))}
            </div>

            {/* 3D Isometric SVG */}
            <svg
              className="mo-rv"
              style={
                {
                  '--d': '.4s',
                  width: '100%',
                  maxWidth: 500,
                  overflow: 'visible',
                  display: 'block',
                } as React.CSSProperties
              }
              viewBox="0 0 520 490"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Top faces */}
                <linearGradient id="mo-tGrey" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#111820" />
                  <stop offset="100%" stopColor="#0C1219" />
                </linearGradient>
                <linearGradient id="mo-tBlue" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0D2040" />
                  <stop offset="100%" stopColor="#091530" />
                </linearGradient>
                <linearGradient id="mo-tCyan" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#092838" />
                  <stop offset="100%" stopColor="#061C28" />
                </linearGradient>
                <linearGradient id="mo-tGreen" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0A2218" />
                  <stop offset="100%" stopColor="#061610" />
                </linearGradient>
                {/* Left faces */}
                <linearGradient id="mo-lGrey" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#080D14" />
                  <stop offset="100%" stopColor="#04060A" />
                </linearGradient>
                <linearGradient id="mo-lBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#060E20" />
                  <stop offset="100%" stopColor="#030A18" />
                </linearGradient>
                <linearGradient id="mo-lCyan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#071820" />
                  <stop offset="100%" stopColor="#041018" />
                </linearGradient>
                <linearGradient id="mo-lGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#061410" />
                  <stop offset="100%" stopColor="#030C09" />
                </linearGradient>
                {/* Right faces */}
                <linearGradient id="mo-rGrey" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0A1220" />
                  <stop offset="100%" stopColor="#060A14" />
                </linearGradient>
                <linearGradient id="mo-rBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#081428" />
                  <stop offset="100%" stopColor="#050F1E" />
                </linearGradient>
                <linearGradient id="mo-rCyan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#082030" />
                  <stop offset="100%" stopColor="#051428" />
                </linearGradient>
                <linearGradient id="mo-rGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#081C14" />
                  <stop offset="100%" stopColor="#041009" />
                </linearGradient>
                {/* Beam */}
                <linearGradient id="mo-beamG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00B4D8" stopOpacity="0" />
                  <stop offset="28%" stopColor="#00B4D8" stopOpacity="1" />
                  <stop offset="72%" stopColor="#0A66C2" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0A66C2" stopOpacity="0" />
                </linearGradient>
                {/* Filters */}
                <filter id="mo-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="mo-glowSm" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="mo-glowXl" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="9" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Ambient glows */}
              <ellipse
                cx="260"
                cy="320"
                rx="180"
                ry="65"
                fill="#0A66C2"
                opacity=".13"
                filter="url(#mo-glowXl)"
              />
              <ellipse
                cx="260"
                cy="235"
                rx="105"
                ry="42"
                fill="#00B4D8"
                opacity=".11"
                filter="url(#mo-glowXl)"
              />
              <ellipse
                cx="260"
                cy="155"
                rx="65"
                ry="28"
                fill="#22C55E"
                opacity=".09"
                filter="url(#mo-glowXl)"
              />

              {/* ── Layer 0: DADOS BRUTOS (grey) ── */}
              <g className="mo-g0">
                <polygon
                  points="260,332 375,389 260,446 145,389"
                  fill="url(#mo-tGrey)"
                  stroke="#1C2A3A"
                  strokeWidth="1"
                />
                <polygon
                  points="375,389 260,446 260,478 375,421"
                  fill="url(#mo-rGrey)"
                  stroke="#1C2A3A"
                  strokeWidth=".7"
                />
                <polygon
                  points="145,389 260,446 260,478 145,421"
                  fill="url(#mo-lGrey)"
                  stroke="#1C2A3A"
                  strokeWidth=".7"
                />
                <text
                  x="260"
                  y="412"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="9"
                  fill="#3D5470"
                  letterSpacing="2"
                >
                  DADOS BRUTOS
                </text>
                {/* Mini bar chart */}
                <line
                  x1="210"
                  y1="418"
                  x2="222"
                  y2="424"
                  stroke="#3D5470"
                  strokeWidth="2.5"
                  opacity=".4"
                />
                <line
                  x1="228"
                  y1="413"
                  x2="240"
                  y2="419"
                  stroke="#3D5470"
                  strokeWidth="3.5"
                  opacity=".45"
                />
                <line
                  x1="247"
                  y1="407"
                  x2="259"
                  y2="413"
                  stroke="#3D5470"
                  strokeWidth="5"
                  opacity=".5"
                />
                <line
                  x1="266"
                  y1="407"
                  x2="278"
                  y2="413"
                  stroke="#3D5470"
                  strokeWidth="3.5"
                  opacity=".45"
                />
                <line
                  x1="285"
                  y1="413"
                  x2="297"
                  y2="419"
                  stroke="#3D5470"
                  strokeWidth="2.5"
                  opacity=".4"
                />
              </g>

              {/* ── Layer 1: MAPEAMENTO LEAN (blue) ── */}
              <g className="mo-g1">
                <polygon
                  points="260,262 375,319 260,376 145,319"
                  fill="url(#mo-tBlue)"
                  stroke="#0A66C2"
                  strokeWidth="1.2"
                />
                <polygon
                  points="375,319 260,376 260,408 375,351"
                  fill="url(#mo-rBlue)"
                  stroke="#0A66C2"
                  strokeWidth=".8"
                />
                <polygon
                  points="145,319 260,376 260,408 145,351"
                  fill="url(#mo-lBlue)"
                  stroke="#0A66C2"
                  strokeWidth=".8"
                />
                <polygon
                  points="260,262 375,319 260,376 145,319"
                  fill="none"
                  stroke="#0A66C2"
                  strokeWidth="1.5"
                  opacity=".5"
                  filter="url(#mo-glowSm)"
                />
                <text
                  x="260"
                  y="342"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="9"
                  fill="#8FA3B8"
                  letterSpacing="2"
                >
                  MAPEAMENTO LEAN
                </text>
                {/* DMAIC dots */}
                <circle cx="196" cy="332" r="4.5" fill="#0A66C2" filter="url(#mo-glowSm)" />
                <line
                  x1="201"
                  y1="334"
                  x2="222"
                  y2="345"
                  stroke="#0A66C2"
                  strokeWidth="1.1"
                  strokeDasharray="3,2"
                  opacity=".7"
                />
                <circle cx="226" cy="347" r="4.5" fill="#0A66C2" filter="url(#mo-glowSm)" />
                <line
                  x1="231"
                  y1="346"
                  x2="256"
                  y2="346"
                  stroke="#0A66C2"
                  strokeWidth="1.1"
                  strokeDasharray="3,2"
                  opacity=".7"
                />
                <circle cx="260" cy="346" r="4.5" fill="#0A66C2" filter="url(#mo-glowSm)" />
                <line
                  x1="265"
                  y1="345"
                  x2="286"
                  y2="334"
                  stroke="#0A66C2"
                  strokeWidth="1.1"
                  strokeDasharray="3,2"
                  opacity=".7"
                />
                <circle cx="290" cy="332" r="4.5" fill="#22C55E" filter="url(#mo-glowSm)" />
              </g>

              {/* ── Layer 2: MODELAGEM MATEMÁTICA (cyan) ── */}
              <g className="mo-g2">
                <polygon
                  points="260,192 375,249 260,306 145,249"
                  fill="url(#mo-tCyan)"
                  stroke="#00B4D8"
                  strokeWidth="1.2"
                />
                <polygon
                  points="375,249 260,306 260,338 375,281"
                  fill="url(#mo-rCyan)"
                  stroke="#00B4D8"
                  strokeWidth=".8"
                />
                <polygon
                  points="145,249 260,306 260,338 145,281"
                  fill="url(#mo-lCyan)"
                  stroke="#00B4D8"
                  strokeWidth=".8"
                />
                <polygon
                  points="260,192 375,249 260,306 145,249"
                  fill="none"
                  stroke="#00B4D8"
                  strokeWidth="2"
                  opacity=".6"
                  filter="url(#mo-glowSm)"
                />
                <text
                  x="260"
                  y="272"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="9"
                  fill="#00B4D8"
                  letterSpacing="2"
                >
                  MODELAGEM MAT.
                </text>
                <text
                  x="182"
                  y="262"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="11"
                  fill="#00B4D8"
                  opacity=".85"
                  filter="url(#mo-glowSm)"
                >
                  ∂f/∂x
                </text>
                <text
                  x="228"
                  y="283"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="11"
                  fill="#8FA3B8"
                  opacity=".65"
                >
                  R²
                </text>
                <text
                  x="252"
                  y="265"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="11"
                  fill="#00B4D8"
                  opacity=".85"
                  filter="url(#mo-glowSm)"
                >
                  σ=4.8
                </text>
                <text
                  x="302"
                  y="275"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="9"
                  fill="#8FA3B8"
                  opacity=".5"
                >
                  lim→∞
                </text>
              </g>

              {/* ── Layer 3: VALIDAÇÃO SIX SIGMA (blue bright) ── */}
              <g className="mo-g3">
                <polygon
                  points="260,122 375,179 260,236 145,179"
                  fill="url(#mo-tBlue)"
                  stroke="#0A66C2"
                  strokeWidth="1.5"
                />
                <polygon
                  points="375,179 260,236 260,268 375,211"
                  fill="url(#mo-rBlue)"
                  stroke="#0A66C2"
                  strokeWidth="1"
                />
                <polygon
                  points="145,179 260,236 260,268 145,211"
                  fill="url(#mo-lBlue)"
                  stroke="#0A66C2"
                  strokeWidth="1"
                />
                <polygon
                  points="260,122 375,179 260,236 145,179"
                  fill="none"
                  stroke="#0A66C2"
                  strokeWidth="2.2"
                  opacity=".7"
                  filter="url(#mo-glow)"
                />
                <text
                  x="260"
                  y="202"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="9"
                  fill="#8FA3B8"
                  letterSpacing="1"
                >
                  VALIDAÇÃO SIX SIGMA
                </text>
                {/* Progress bar */}
                <rect x="186" y="211" width="148" height="7" rx="3.5" fill="#1C2A3A" />
                <rect
                  x="186"
                  y="211"
                  width="0"
                  height="7"
                  rx="3.5"
                  fill="#0A66C2"
                  className="mo-pbfill"
                  filter="url(#mo-glowSm)"
                />
                <text
                  x="338"
                  y="219"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="8.5"
                  fill="#0A66C2"
                >
                  4.82σ
                </text>
              </g>

              {/* ── Layer 4: DECISÃO CERTIFICADA (green, top) ── */}
              <g className="mo-g4">
                <polygon
                  points="260,52 375,109 260,166 145,109"
                  fill="url(#mo-tGreen)"
                  stroke="#22C55E"
                  strokeWidth="1.5"
                />
                <polygon
                  points="375,109 260,166 260,198 375,141"
                  fill="url(#mo-rGreen)"
                  stroke="#22C55E"
                  strokeWidth="1"
                />
                <polygon
                  points="145,109 260,166 260,198 145,141"
                  fill="url(#mo-lGreen)"
                  stroke="#22C55E"
                  strokeWidth="1"
                />
                <polygon
                  points="260,52 375,109 260,166 145,109"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="2.5"
                  opacity=".8"
                  filter="url(#mo-glow)"
                />
                <text
                  x="260"
                  y="130"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="9"
                  fill="#22C55E"
                  letterSpacing="1"
                  filter="url(#mo-glowSm)"
                >
                  DECISÃO CERTIFICADA
                </text>
                <text
                  x="236"
                  y="151"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="16"
                  fill="#22C55E"
                  opacity=".95"
                  filter="url(#mo-glow)"
                >
                  ✓
                </text>
                <text
                  x="256"
                  y="151"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="9"
                  fill="#22C55E"
                  opacity=".8"
                >
                  APROVADA
                </text>
              </g>

              {/* Vertical beam */}
              <rect
                className="mo-beam"
                x="257"
                y="52"
                width="6"
                height="394"
                fill="url(#mo-beamG)"
                opacity=".7"
                filter="url(#mo-glowSm)"
              />

              {/* Orbiting particles */}
              <g transform="translate(260,204)">
                <g className="mo-o1">
                  <circle cx="0" cy="0" r="4.5" fill="#00B4D8" filter="url(#mo-glow)" />
                </g>
              </g>
              <g transform="translate(260,274)">
                <g className="mo-o2">
                  <circle
                    cx="0"
                    cy="0"
                    r="3.5"
                    fill="#0A66C2"
                    filter="url(#mo-glowSm)"
                    opacity=".9"
                  />
                </g>
              </g>

              {/* Floating equation panel */}
              <g className="mo-g4" style={{ animationDelay: '.5s' }}>
                <rect
                  x="172"
                  y="5"
                  width="176"
                  height="42"
                  rx="7"
                  fill="#0E1620"
                  stroke="#1C2A3A"
                  strokeWidth="1"
                />
                <text
                  x="260"
                  y="21"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="10"
                  fill="#00B4D8"
                  filter="url(#mo-glowSm)"
                >
                  P(Decisão | Dados)
                </text>
                <text
                  x="260"
                  y="39"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono,monospace"
                  fontSize="13"
                  fill="#F0F4F8"
                  fontWeight="500"
                >
                  = 0.996
                </text>
                <line
                  x1="260"
                  y1="47"
                  x2="260"
                  y2="52"
                  stroke="#1C2A3A"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
              </g>

              {/* Layer numbers — left margin */}
              <g fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="#2A3C50">
                <text x="108" y="112">
                  04 ·
                </text>
                <line
                  x1="123"
                  y1="109"
                  x2="143"
                  y2="109"
                  stroke="#1C2A3A"
                  strokeWidth=".5"
                  strokeDasharray="2,2"
                />
                <text x="108" y="182">
                  03 ·
                </text>
                <line
                  x1="123"
                  y1="179"
                  x2="143"
                  y2="179"
                  stroke="#1C2A3A"
                  strokeWidth=".5"
                  strokeDasharray="2,2"
                />
                <text x="108" y="252">
                  02 ·
                </text>
                <line
                  x1="123"
                  y1="249"
                  x2="143"
                  y2="249"
                  stroke="#1C2A3A"
                  strokeWidth=".5"
                  strokeDasharray="2,2"
                />
                <text x="108" y="322">
                  01 ·
                </text>
                <line
                  x1="123"
                  y1="319"
                  x2="143"
                  y2="319"
                  stroke="#1C2A3A"
                  strokeWidth=".5"
                  strokeDasharray="2,2"
                />
                <text x="108" y="392">
                  00 ·
                </text>
                <line
                  x1="123"
                  y1="389"
                  x2="143"
                  y2="389"
                  stroke="#1C2A3A"
                  strokeWidth=".5"
                  strokeDasharray="2,2"
                />
              </g>

              {/* Ground shadow */}
              <ellipse
                cx="260"
                cy="462"
                rx="134"
                ry="15"
                fill="#000"
                opacity=".5"
                filter="url(#mo-glow)"
              />
            </svg>
          </div>
        </div>

        {/* ── CERTIFICATION BAR ─────────────────────────────────────────── */}
        <div className="mo-bar" style={{ maxWidth: 1320, margin: '0 auto', padding: '13px 48px' }}>
          <span className="mo-blbl">metodologias certificadas</span>
          {['Lean Six Sigma', 'DMAIC', 'PMBOK', 'ISO 9001', 'LGPD Compliance'].map((c) => (
            <span key={c} className="mo-ctag">
              {c}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
