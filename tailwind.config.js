//const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      // backgroundImage: theme => ({
      //   mt: "url('../images/svg/FlatMountains.svg')",
      // }),
      colors: {
        "brown-light": "#97613",
        "brown-dark": "#603e26",
        "teal-light": "#9af6f6",
        "teal-dark": "#5c9393",
        "pink-light": "#f05454",
        "purple-light": "#e5c3fe",
        "purple-dark": "#ab3afc",
      },
    },
  },

  fontFamily: {
    sans: ["Roboto", "Helvetica", "sans-serif"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
