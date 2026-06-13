import { HeroSection } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { MetricsBento } from '@/components/sections/MetricsBento'
import { DiagnosticCTA } from '@/components/sections/DiagnosticCTA'
import { AboutSection } from '@/components/sections/About'
import { ContactSection } from '@/components/sections/Contact'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-[#05070B] overflow-x-hidden">
      <HeroSection />
      <MetricsBento />
      <ServicesSection />
      <DiagnosticCTA />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
