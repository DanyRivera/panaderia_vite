/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'merienda': ['Merienda', 'cursive'],
        'rubik': ['rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
