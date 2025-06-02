import { Button } from "../ui/Button"
import Link from "next/link"
import { GradientOverlay } from "../ui/GradientOverlay"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full pt-20 overflow-hidden">
      <GradientOverlay variant="hero" showDecorative={true} />

      <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-2xl">
          <div className="mb-8 flex items-center">
            <div className="w-20 h-1 bg-primary rounded-full mr-4" />
            <span className="text-primary font-medium">MMLH Construction</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Leader en travaux publics et construction
          </h1>

          <p className="text-xl mb-8 text-white/90">
            Votre partenaire de confiance pour la construction, l&apos;infrastructure
            routière et les services généraux
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-white/80">Années d&apos;expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-white/80">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-white/80">Professionnels</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/services">
              <Button variant="primary" className="group">
                Nos Services
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-2 !text-white !border-white hover:!bg-white hover:!text-primary group"
              >
                Nos Projets
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
