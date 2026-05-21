import { HeroSection } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { AboutSection } from '@/components/sections/About'
import { ContactSection } from '@/components/sections/Contact'

const Index = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default Index
