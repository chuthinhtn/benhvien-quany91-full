/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          bg: "#f5faff",
          primary: "#1976d2",
          accent: "#e53935",
        },
      },
      fontFamily: {
        sans: ["'Segoe UI'", "Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
