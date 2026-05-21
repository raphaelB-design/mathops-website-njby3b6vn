import { HeroSection } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { AboutSection } from '@/components/sections/About'
import { DiagnosticCTA } from '@/components/sections/DiagnosticCTA'
import { CommercialCTA } from '@/components/sections/CommercialCTA'
import { ContactSection } from '@/components/sections/Contact'

const Index = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <DiagnosticCTA />
      <CommercialCTA />
      <ContactSection />
    </div>
  )
}

export default Index
