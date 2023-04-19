/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif']
      },
      colors: {
        'gray': '#444444',
        'black-light': '#1f1f1f',
        'burgundy-red': '#65081f',
        'cyan': '#2990B5',
      },
      keyframes: {
        fleet: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(100%)'},
        }
      },
      animation: {
        fleet: 'fleet 7s infinite linear',
      }
    },
  },
  plugins: [],
}
