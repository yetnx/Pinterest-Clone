/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '50vh': '50vh',
        '75vh': '75vh',
        '90vh': '90vh',
      },
      minHeight: {
        '50vh': '50vh',
        '75vh': '75vh',
        '90vh': '90vh',
      },
      colors: {
        Custom1: '#c31952',
      },
    },
  },
  plugins: [],
}