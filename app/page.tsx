import { HeroSection } from "@/components/home/HeroSection"
import { AboutSection } from "@/components/home/AboutSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { ProjectsSection } from "@/components/home/ProjectsSection"
import { ContactSection } from "@/components/home/ContactSection"

export default function Home() {
  return (
    <main className="bg-gray-50">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
