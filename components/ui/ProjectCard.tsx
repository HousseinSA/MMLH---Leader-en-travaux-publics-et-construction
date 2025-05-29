"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  date?: string
  category?: string
  href?: string
}

export const ProjectCard = ({
  title,
  description,
  image,
  date,
  category,
  href = "#",
}: ProjectCardProps) => {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5 }}
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          {category && (
            <span className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm">
              {category}
            </span>
          )}
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {date && <span className="text-sm text-gray-500">{date}</span>}
          </div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-primary font-medium group-hover:text-primary-hover transition-colors flex items-center">
              En savoir plus
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
