import { HeroSection } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { TAIEProductSection } from '@/components/sections/TAIEProduct'
import { ResultsSection } from '@/components/sections/Results'
import { AboutSection } from '@/components/sections/About'
import { ContactSection } from '@/components/sections/Contact'

const Index = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <TAIEProductSection />
      <ResultsSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default Index
