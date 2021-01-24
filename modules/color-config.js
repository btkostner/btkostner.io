export default function tailwindCssConfig () {
  this.options.colorMode = {
    fallback: 'dark'
  }

  this.options.tailwindcss = {
    exposeConfig: true
  }
}
