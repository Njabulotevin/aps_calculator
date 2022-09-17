/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#32B3D4",
        secondary: "#FED45E",
        dark: '#262626'
      }
    },
  },
  plugins: [],
}