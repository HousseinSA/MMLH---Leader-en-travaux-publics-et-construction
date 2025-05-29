import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/Button"

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/MMLH1.png"
              alt="MMLH Logo"
              width={80}
              height={60}
              className="mr-2"
            />
          </Link>

          {/* Primary Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-primary transition font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-primary transition font-medium"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-gray-800 hover:text-primary transition font-medium"
            >
              Projets
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-primary transition font-medium"
            >
              À propos
            </Link>
          </div>

          <div className="hidden md:flex items-center ml-auto space-x-4">
            <Button>
              <Link
                href="/contact"
              >
                Contactez-nous
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
