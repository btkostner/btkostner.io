import typography from '@tailwindcss/typography'

export default {
  plugins: [
    typography
  ],

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  }
}
