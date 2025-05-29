interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  children: React.ReactNode
}

export const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-full transition cursor-pointer font-medium"
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-white text-primary hover:bg-gray-100",
    outline:
      "border-1 border-primary text-primary hover:bg-primary hover:text-white",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
