import aspectRatio from '@tailwindcss/aspect-ratio'
import typography from '@tailwindcss/typography'

export default {
  plugins: [
    aspectRatio,
    typography
  ],

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  }
}
