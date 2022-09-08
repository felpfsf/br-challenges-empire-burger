/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lilita One', 'cursive'],
        sans: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
