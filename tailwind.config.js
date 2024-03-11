/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "font-primary": "#D1D5DB",
        "font-secondary": "#FEF08A",
      }
    },
  },
  plugins: [],
}