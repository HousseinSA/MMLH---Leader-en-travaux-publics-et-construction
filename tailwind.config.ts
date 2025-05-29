module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EC972A",
          hover: "#D68621",
          dark: "#8B4513",
          light: "#FDE7CE",
        },
        secondary: {
          DEFAULT: "#4A5568",
          dark: "#2D3748",
          light: "#A0AEC0",
        },
      },
      textShadow: {
        default: "0 2px 4px rgba(0,0,0,0.10)",
        lg: "0 2px 6px rgba(0,0,0,0.20)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [],
}
