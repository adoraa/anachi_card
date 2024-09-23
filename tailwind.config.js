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
      },
      colors: {
        primary: {
          '100': '#3C194B',
        }
      }
    },
  },
  plugins: [],
}

