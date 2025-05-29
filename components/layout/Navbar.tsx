"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/Button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
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

          {/* Desktop Navigation */}
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

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button>
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-800 hover:text-primary transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className="text-gray-800 hover:text-primary transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-gray-800 hover:text-primary transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </Link>
              <Link
                href="/about"
                className="text-gray-800 hover:text-primary transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full">Contactez-nous</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
