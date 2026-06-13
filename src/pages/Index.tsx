import { HeroSection } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { MetricsBento } from '@/components/sections/MetricsBento'
import { DiagnosticCTA } from '@/components/sections/DiagnosticCTA'
import { AboutSection } from '@/components/sections/About'
import { ContactSection } from '@/components/sections/Contact'

export default function Index() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#04060A',
        overflowX: 'hidden',
      }}
    >
      <HeroSection />
      <MetricsBento />
      <ServicesSection />
      <DiagnosticCTA />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
