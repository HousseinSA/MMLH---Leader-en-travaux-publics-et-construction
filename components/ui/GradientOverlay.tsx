import { FaBuilding, FaTruck, FaHardHat } from "react-icons/fa"

interface GradientOverlayProps {
  variant?: "hero" | "light" | "primary"
  className?: string
  showDecorative?: boolean
}

export const GradientOverlay = ({
  variant = "hero",
  className = "",
  showDecorative = false,
}: GradientOverlayProps) => {
  const variants = {
    hero: [
      "bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark/90",
      "after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-transparent after:to-black/40",
    ].join(" "),
    light: [
      "bg-gradient-to-br from-gray-800 via-gray-700 to-primary/70",
      "after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-transparent after:to-black/30",
    ].join(" "),
    primary: [
      "bg-gradient-to-br from-primary-dark via-primary/90 to-primary/60",
      "after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-transparent after:to-black/30",
    ].join(" "),
  }

  return (
    <>
      <div
        className={`absolute inset-0 after:z-10 ${variants[variant]} ${className}`}
      />
      {showDecorative && (
        <div className="absolute inset-0 z-0">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="border-[0.5px] border-primary/20" />
              ))}
            </div>
          </div>

          {/* Floating icons */}
          <div className="absolute top-20 right-10 text-primary/20 animate-float-slow">
            <FaBuilding size={80} />
          </div>
          <div className="absolute bottom-20 left-10 text-primary/20 animate-float">
            <FaTruck size={60} />
          </div>
          <div className="absolute top-40 left-1/4 text-primary/20 animate-float-delayed">
            <FaHardHat size={40} />
          </div>
        </div>
      )}
    </>
  )
}
