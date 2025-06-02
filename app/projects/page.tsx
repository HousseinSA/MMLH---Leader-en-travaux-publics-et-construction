import { GradientOverlay } from "@/components/ui/GradientOverlay"

const projects = [
  {
    title: "Réhabilitation Route Tintane-Aioun",
    description:
      "Fourniture d'eau d'irrigation pour les travaux de réhabilitation de la route nationale",
    image: "/images/route.jpg",
    category: "Infrastructure Routière",
    date: "2024",
    client: "ETER",
    location: "Tintane-Aioun",
    surfaceArea: "120 km",
    duration: "18 mois",
    status: "En cours",
    details: [
      "Approvisionnement continu en eau pour les travaux",
      "Gestion logistique complexe sur longue distance",
      "Coordination avec les équipes locales",
      "Respect des normes environnementales",
    ],
  },
  {
    title: "Station TOTAL Nouakchott",
    description:
      "Construction et aménagement complet d'une station-service moderne",
    image: "/images/station.jpg",
    category: "Stations-service",
    date: "2023",
    client: "TOTAL Énergies",
    location: "Nouakchott",
    surfaceArea: "2500 m²",
    duration: "8 mois",
    status: "Terminé",
    details: [
      "Construction des infrastructures principales",
      "Installation des équipements pétroliers",
      "Aménagement des espaces de service",
      "Mise en place des systèmes de sécurité",
    ],
  },
  {
    title: "Transport d'Eau Chantier Akjoujt",
    description: "Approvisionnement en eau pour le projet minier",
    image: "/images/water.jpg",
    category: "Transport d'eau",
    date: "2023",
    client: "MCM",
    location: "Akjoujt",
    surfaceArea: "N/A",
    duration: "12 mois",
    status: "Terminé",
    details: [
      "Distribution quotidienne d'eau",
      "Gestion de la flotte de camions",
      "Maintenance des équipements",
      "Contrôle qualité de l'eau",
    ],
  },
]

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <section className="relative h-[40vh]">
        <GradientOverlay variant="hero" showDecorative />
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos Projets
            </h1>

            <p className="text-xl text-white/90">
              Découvrez nos réalisations majeures dans le domaine des travaux
              publics et de la construction en Mauritanie
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          {projects.map((project, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-[400px]">
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-3">
                      {project.title}
                    </h2>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-gray-600 text-lg mb-6">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 gap-y-4">
                        {/* <div>
                          <span className="text-sm text-gray-500">Client</span>
                          <p className="font-medium text-gray-900">
                            {project.client}
                          </p>
                        </div> */}
                        <div>
                          <span className="text-sm text-gray-500">
                            Localisation
                          </span>
                          <p className="font-medium text-gray-900">
                            {project.location}
                          </p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Surface</span>
                          <p className="font-medium text-gray-900">
                            {project.surfaceArea}
                          </p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Durée</span>
                          <p className="font-medium text-gray-900">
                            {project.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              project.status === "En cours"
                                ? "bg-primary"
                                : "bg-green-500"
                            }`}
                          />
                          <span className="text-sm font-medium text-gray-600">
                            {project.status}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          Points clés du projet
                        </h3>
                        <ul className="space-y-3">
                          {project.details.map((detail, idx) => (
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
                    </div>
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
