import { ContactForm } from "./components/contactForm"
import { ContactInfo } from "./components/contactInfo"
import { GradientOverlay } from "@/components/ui/GradientOverlay"

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="relative h-[40vh]">
        <GradientOverlay variant="hero" showDecorative={true} />
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contactez-nous
            </h1>
            <p className="text-white/90 max-w-xl">
              Notre équipe est à votre disposition pour répondre à toutes vos
              questions. N'hésitez pas à nous contacter pour plus
              d'informations.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-6 py-16 bg-gray-50">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
        <div className="mt-16  rounded -lg overflow-hidden shadow-lg h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18246.45198158452!2d-16.010552746125512!3d18.11274322187706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1748448360626!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  )
}
