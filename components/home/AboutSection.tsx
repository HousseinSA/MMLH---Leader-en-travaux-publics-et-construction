import Image from "next/image"

export const AboutSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              À propos de MMLH
            </h2>
            <p className="text-gray-700 mb-4">
              MMLH est une société de négoce et de services leader dans les
              travaux publics et la construction. Notre expertise s&apos;étend de la
              construction résidentielle et commerciale aux infrastructures
              routières.
            </p>
            <p className="text-gray-700">
              En tant que partenaire d&apos;ETER, nous contribuons activement au
              développement des infrastructures nationales avec un engagement
              constant vers l&apos;excellence.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/construction.jpeg"
              alt="MMLH Construction Site"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
