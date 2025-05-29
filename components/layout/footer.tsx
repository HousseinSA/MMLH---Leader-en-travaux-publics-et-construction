import React from "react"
import Image from "next/image"
import { GradientOverlay } from "@/components/ui/GradientOverlay"

const Footer = () => {
  return (
    <footer className="relative text-white py-8">
      <GradientOverlay variant="hero" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <Image
          src="/images/MMLH1.png"
          alt="MMLH Logo"
          width={100}
          height={100}
          className="mx-auto mb-4"
        />
        <p className="mb-4 text-gray-200">
          MMLH - Votre partenaire en travaux publics et construction
        </p>
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()} MMLH. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}

export default Footer
