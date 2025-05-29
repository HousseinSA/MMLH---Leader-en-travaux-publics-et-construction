import {
  FaHome,
  FaGasPump,
  FaBuilding,
  FaTruck,
  FaRoad,
  FaTools,
} from "react-icons/fa"

const services = [
  {
    icon: FaHome,
    title: "Construction",
    description: "Maisons, hôtels, restaurants et bâtiments commerciaux",
  },
  {
    icon: FaGasPump,
    title: "Stations-service",
    description: "Construction et aménagement de stations diesel",
  },
  {
    icon: FaBuilding,
    title: "Infrastructure",
    description: "Construction de ponts et bordures",
  },
  {
    icon: FaTruck,
    title: "Transport d'eau",
    description: "Approvisionnement en eau pour les chantiers",
  },
  {
    icon: FaRoad,
    title: "Travaux routiers",
    description: "Services liés aux infrastructures routières",
  },
  {
    icon: FaTools,
    title: "Services généraux",
    description: "Maintenance et services de construction",
  },
]

export const ServicesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-10x0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Nos Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <service.icon className="text-primary text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
