import { GradientOverlay } from "@/components/ui/GradientOverlay"
import Image from "next/image"
import { FaTrophy, FaHandshake, FaIndustry } from "react-icons/fa"

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="relative h-[40vh]">
        <Image
          src="/images/about-hero.jpg"
          alt="MMLH Construction Site"
          fill
          className="object-cover"
        />
        <GradientOverlay variant="hero" showDecorative={true} />
        <div className="relative z-10 container mx-auto h-full flex items-center px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              À Propos de MMLH
            </h1>
            <p className="text-xl text-white/90">
              Leader en travaux publics et construction en Mauritanie depuis
              plus de 15 ans, engagé dans l&apos;excellence et l&apos;innovation
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Notre Histoire
              </h2>
              <p className="text-gray-700 mb-4">
                MMLH est une société de négoce et de services leader dans le
                domaine des travaux publics et de la construction en Mauritanie.
                Depuis notre création, nous nous sommes engagés à fournir des
                services de haute qualité dans la construction et les
                infrastructures.
              </p>
              <p className="text-gray-700">
                Notre expertise diversifiée nous permet d&apos;intervenir dans
                de nombreux secteurs, de la construction résidentielle aux
                infrastructures routières, en passant par l&apos;aménagement de
                stations-service et le transport d&apos;eau pour les chantiers.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/construction.jpeg"
                alt="MMLH History"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Values */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaTrophy className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Notre engagement envers l&apos;excellence se reflète dans chaque
                projet que nous entreprenons.
              </p>
            </div>
            <div className="text-center">
              <FaHandshake className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Partenariat</h3>
              <p className="text-gray-600">
                Nous construisons des relations durables avec nos clients et
                partenaires, notamment ETER.
              </p>
            </div>
            <div className="text-center">
              <FaIndustry className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Nous adoptons les meilleures pratiques et technologies pour
                améliorer nos services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12">
            Nos Réalisations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Réhabilitation Route Tintane-Aioun
              </h3>
              <p className="text-gray-600 mb-4">
                Un projet majeur en collaboration avec ETER pour la fourniture
                d&apos;eau d&apos;irrigation, démontrant notre capacité à gérer des
                projets d&apos;infrastructure à grande échelle.
              </p>
              <div className="relative h-[250px]">
                <Image
                  src="/images/tintane-aioun.jpg"
                  alt="Projet Tintane-Aioun"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Développement d&apos;Infrastructures
              </h3>
              <p className="text-gray-600 mb-4">
                Notre expertise s&apos;étend à la construction de ponts, de bordures
                et d&apos;autres infrastructures essentielles au développement du
                pays.
              </p>
              <div className="relative h-[250px]">
                <Image
                  src="/images/infrastructure.jpg"
                  alt="Infrastructures"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-primary-light">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Notre Mission
              </h2>
              <p className="text-gray-700">
                Fournir des solutions de construction et d&apos;infrastructure de
                haute qualité qui contribuent au développement durable de la
                Mauritanie, tout en maintenant les plus hauts standards de
                sécurité et de qualité.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Notre Vision
              </h2>
              <p className="text-gray-700">
                Être le leader reconnu dans le secteur des travaux publics et de
                la construction en Mauritanie, en innovant constamment et en
                développant des solutions durables pour nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
