/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'clouds': 'url("images/svg/endless-clouds.svg")'
      },
      fontFamily: {
        'play': ['Playwrite DE Grund']
      }
    },
  },
  plugins: [],
}

