/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lilita One', 'cursive'],
        sans: ['Lato', 'sans-serif']
      },
      colors: {
        burgerPalette: {
          red: '#F43127',
          yellow: '#F59A1B',
          title_black_38: '#1D0605',
          title_black_60: '#635352',
          title_black_87: '#34201F',
          beige: '#FAE2CB',
          brown: '#3B200B'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
