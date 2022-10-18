/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#62D0CD'
      },
      fontFamily: {
        'merienda': ['Merienda', 'cursive'],
        'rubik': ['rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
