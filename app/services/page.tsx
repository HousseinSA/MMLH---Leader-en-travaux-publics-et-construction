import { GradientOverlay } from "@/components/ui/GradientOverlay"

import {
  FaHome,
  FaGasPump,
  FaBuilding,
  FaTruck,
  FaRoad,
  FaTools,
} from "react-icons/fa"

const serviceDetails = [
  {
    icon: FaHome,
    title: "Construction",
    description:
      "Construction de maisons, hôtels, restaurants et bâtiments commerciaux",
    details: [
      "Conception architecturale moderne",
      "Matériaux de haute qualité",
      "Gestion de projet complète",
      "Respect des normes internationales",
    ],
  },
  {
    icon: FaGasPump,
    title: "Stations-service",
    description: "Construction et aménagement de stations diesel",
    details: [
      "Installation complète",
      "Respect des normes de sécurité",
      "Équipement moderne",
      "Maintenance préventive",
    ],
  },
  {
    icon: FaBuilding,
    title: "Infrastructure",
    description: "Construction de ponts et bordures",
    details: [
      "Solutions durables",
      "Expertise technique",
      "Équipement spécialisé",
      "Gestion environnementale",
    ],
  },
  {
    icon: FaTruck,
    title: "Transport d'eau",
    description: "Approvisionnement en eau pour les chantiers",
    details: [
      "Service rapide",
      "Grande capacité",
      "Livraison fiable",
      "Couverture régionale",
    ],
  },
  {
    icon: FaRoad,
    title: "Travaux routiers",
    description: "Services liés aux infrastructures routières",
    details: [
      "Construction de routes",
      "Réhabilitation",
      "Maintenance routière",
      "Solutions innovantes",
    ],
  },
  {
    icon: FaTools,
    title: "Services généraux",
    description: "Maintenance et services de construction",
    details: [
      "Maintenance préventive",
      "Réparations",
      "Services sur mesure",
      "Support technique",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="relative h-[40vh]">
        <GradientOverlay variant="hero" showDecorative />
        <div className="relative z-10 container mx-auto h-full flex items-center px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos Services
            </h1>
            <p className="text-xl text-white/90">
              Une expertise complète en travaux publics et construction
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          {serviceDetails.map((service, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <service.icon className="text-5xl text-primary mr-4" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    {service.title}
                  </h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Caractéristiques principales
                    </h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-primary mt-1 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Nos engagements
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Qualité garantie
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Délais respectés
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Service personnalisé
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Support continu
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
