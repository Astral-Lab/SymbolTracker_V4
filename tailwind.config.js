/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "fugaz": ["Fugaz One", "sans-serif"],
      },
      colors: {
        "dark-one": "#0c0c0c",
        "dark-two": "#0f0f0f",
        "dark-three": "#121212",
        "dark-four": "#171717",
        "dark-border": "#ffffff1a",
        "dark-back": "#ffffff50",
        "epic-blue": "#26bbff",
        "epic-blue-back": "#26bbff15",
        "epic-red": "#ef4444",
        "epic-red-back": "#ef444415",
        "epic-green": "#22c55e",
        "epic-green-back": "#22c55e15",
        "white-main": "#d3d3d3",
        "discord": "#5865f2",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}