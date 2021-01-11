const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ],

  purge: {
    options: {
      safelist: [/svg.*/, /fa.*/]
    }
  },

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      orange: colors.orange,
    }
  }
}
