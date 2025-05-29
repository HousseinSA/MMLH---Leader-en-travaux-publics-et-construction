import "@/css/globals.css"

import { Metadata } from "next"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "MMLH -  Leader en travaux publics et construction",
  description:
    "Votre partenaire de confiance pour la construction, l'infrastructure routière et les services généraux",
  icons: {
    icon: "images/MMLH1.png",
  },
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
