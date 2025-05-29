import Image from "next/image"
import { ProjectCard } from "../ui/ProjectCard"

const projects = [
  {
    title: "Réhabilitation Route Tintane-Aioun",
    description:
      "Fourniture d'eau d'irrigation pour les travaux de réhabilitation",
    image: "/images/route.jpg",
  },
  {
    title: "Réhabilitation Route Tintane-Aioun",
    description:
      "Fourniture d'eau d'irrigation pour les travaux de réhabilitation",
    image: "/images/route.jpg",
  },
  {
    title: "Réhabilitation Route Tintane-Aioun",
    description:
      "Fourniture d'eau d'irrigation pour les travaux de réhabilitation",
    image: "/images/route.jpg",
  },
  {
    title: "Réhabilitation Route Tintane-Aioun",
    description:
      "Fourniture d'eau d'irrigation pour les travaux de réhabilitation",
    image: "/images/route.jpg",
  },
  {
    title: "Réhabilitation Route Tintane-Aioun",
    description:
      "Fourniture d'eau d'irrigation pour les travaux de réhabilitation",
    image: "/images/route.jpg",
  },
]

export const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Projets Récents
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos réalisations les plus récentes et comment nous contribuons
            au développement des infrastructures en Mauritanie.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
