/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        main__title: 'clamp(3.8175rem, 3.3753rem + 1.9654vw, 4.8125rem)',
        main__sub__title: 'clamp(0.875rem, 0.6528rem + 0.9877vw, 1.375rem)',
        card__oferta__title: 'clamp(1.25rem, 1.1000rem + 0.6667vw, 1.5rem)',
        card__oferta__day: 'clamp(0.625rem, 0.3250rem + 1.3333vw, 1.125rem)',
        card__oferta__day__span:
          'clamp(1.25rem, 0.4250rem + 3.6667vw, 2.625rem)',
        card__horario__semana: 'clamp(0.75rem, 0.5250rem + 1.0000vw, 1.125rem)'
      },
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
      },
      dropShadow: {
        cardsShadow: '0px 4px 40px rgba(179, 155, 132, 0.5)',
        cardTestimonials: '0px 4px 25px rgba(60, 35, 13, 0.1)'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
