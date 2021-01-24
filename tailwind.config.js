const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/typography')
  ],

  purge: {
    options: {
      safelist: [
        'dark-mode',
        /fa.*/,
        /svg.*/
      ]
    }
  },

  theme: {
    darkSelector: '.dark-mode',

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
            color: theme('colors.gray.900'),

            fontFamily: theme('fontFamily.body').join(', '),

            a: {
              color: theme('colors.red.700'),
              textDecorationThickness: '1px',

              '&:hover': {
                color: theme('colors.red.800')
              }
            },

            h1: {
              fontFamily: theme('fontFamily.display').join(', ')
            },
            h2: {
              fontFamily: theme('fontFamily.display').join(', ')
            },
            h3: {
              fontFamily: theme('fontFamily.display').join(', ')
            },
            h4: {
              fontFamily: theme('fontFamily.display').join(', ')
            },
            h5: {
              fontFamily: theme('fontFamily.display').join(', ')
            },
            h6: {
              fontFamily: theme('fontFamily.display').join(', ')
            }
          }
        },

        dark: {
          css: {
            color: theme('colors.gray.300'),

            '[class~="lead"]': {
              color: theme('colors.gray.400')
            },

            a: {
              color: theme('colors.red.500'),

              '&:hover': {
                color: theme('colors.red.400')
              }
            },

            strong: {
              color: theme('colors.gray.100')
            },

            'ul > li::before': {
              backgroundColor: theme('colors.gray.700')
            },

            hr: {
              borderColor: theme('colors.gray.800')
            },

            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.800')
            },

            h1: {
              color: theme('colors.gray.100')
            },

            h2: {
              color: theme('colors.gray.100')
            },

            h3: {
              color: theme('colors.gray.100')
            },

            h4: {
              color: theme('colors.gray.100')
            },

            code: {
              color: theme('colors.gray.100')
            },

            'a code': {
              color: theme('colors.gray.100')
            },

            pre: {
              color: theme('colors.gray.800'),
              backgroundColor: theme('colors.gray.200')
            },

            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.700')
            },

            'tbody tr': {
              borderBottomColor: theme('colors.gray.800')
            }
          }
        },
      })
    }
  },

  variants: {
    extend: {
      backgroundColor: [
        'dark',
        'dark-hover',
        'dark-group-hover'
      ],

      borderColor: [
        'dark',
        'dark-focus',
        'dark-focus-within'
      ],

      textColor: [
        'dark',
        'dark-hover',
        'dark-active'
      ],

      typography: [
        'dark'
      ]
    }
  }
}
