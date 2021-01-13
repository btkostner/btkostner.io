const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

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
    },

    fontFamily: {
      sans: [
        'Inter',
        ...defaultTheme.fontFamily.sans
      ],

      display: [
        'Inter',
        'Raleway',
        ...defaultTheme.fontFamily.sans
      ],

      body: [
        '"Noto Serif"',
        '"Droid Serif"',
        ...defaultTheme.fontFamily.serif
      ]
    },

    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.body').join(', '),

            a: { textDecorationThickness: '1px' },

            h1: { fontFamily: theme('fontFamily.display').join(', ') },
            h2: { fontFamily: theme('fontFamily.display').join(', ') },
            h3: { fontFamily: theme('fontFamily.display').join(', ') },
            h4: { fontFamily: theme('fontFamily.display').join(', ') },
            h5: { fontFamily: theme('fontFamily.display').join(', ') },
            h6: { fontFamily: theme('fontFamily.display').join(', ') }
          }
        }
      })
    }
  }
}
