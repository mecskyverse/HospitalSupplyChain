/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Monteserrat:['Montserrat', 'sans'],
        Cabin: ['Cabin', 'sans'],
        Sserif: ['Source Serif 4', 'sans']
      }
    },
  },
  plugins: [],
}

