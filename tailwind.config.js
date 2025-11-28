/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Segoe UI", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f9fafb",
        },
        border: {
          subtle: "#e5e7eb",
        },
        text: {
          primary: "#111827",
          secondary: "#4b5563",
          subtle: "#6b7280",
        },
        brand: {
          primary: "#0f766e",
          soft: "#ecfdf3",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};
