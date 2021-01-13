export default function pwaConfig () {
  this.options.pwa = { meta: false, workbox: false }

  this.options.icon = {
    iconHash: 'main',
    plugin: false
  }

  this.options.manifest = {
    name: 'btkostner.io',
    short_name: 'btkostner.io',
    description: `Blake Kostner's slice of the web. Senior web engineer at System76. Core team at elementary. Open source proselytizer, and drive by contributor.`,
    start_url: '/',
    display: 'browser',
    background_color: '#000',
    theme_color: '#000',
    lang: 'en',
    dir: 'ltr',
    fileName: 'manifest.[ext]'
  }
}
