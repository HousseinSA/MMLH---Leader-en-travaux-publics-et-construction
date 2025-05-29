import { Button } from "../ui/Button"
import Link from "next/link"

export const ContactSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Contactez-nous
          </h2>
          <p className="text-gray-700 mb-8">
            Besoin d'un devis ou d'informations sur nos services ? Notre équipe
            est à votre disposition pour répondre à toutes vos questions.
          </p>
          <Link href="/contact">
            <Button variant="primary">Nous Contacter</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
