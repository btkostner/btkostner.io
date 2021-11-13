import { theme } from './tailwind.config.js'

export default {
  target: 'static',
  modern: 'client',

  components: true,

  build: {
    publicPath: '/public/'
  },

  head: {
    title: 'btkostner.io',
    titleTemplate: (title) => (title.indexOf('btkostner.io') === -1)
      ? `${title} ⋅ btkostner.io`
      : title,

    htmlAttrs: {
      lang: 'en'
    },

    meta: [
      { charset: 'utf-8' },

      { name: 'viewport', content: 'width=device-width' },

      { hid: 'description', name: 'description', content: `Blake Kostner's slice of the web. Senior web engineer at System76. Core team at elementary. Open source proselytizer, and drive by contributor.` },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nerdy_btkostner' },

      { hid: 'color-scheme', name: 'color-scheme', content: 'dark light' },
      { hid: 'theme-color-dark', name: 'theme-color', media: '(prefers-color-scheme: dark)', content: theme.colors.gray[900] },
      { hid: 'theme-color-light', name: 'theme-color', media: '(prefers-color-scheme: light)', content: theme.colors.white }
    ],

    link: [
      { rel: 'manifest', href: '/public/manifest.json' },

      { rel: 'shortcut icon', type: 'image/png', href: '/public/icons/icon_512x512.main.png' },
      { rel: 'apple-touch-icon', href: '/public/icons/icon_512x512.main.png' }
    ]
  },

  colorMode: {
    fallback: 'dark',
    classPrefix: '',
    classSuffix: ''
  },

  generate: {
    fallback: true,
    subFolders: false
  },

  render: {
    asyncScripts: true
  },

  messages: {
    loading: 'Loading',
    error_404: 'Page Not Found',
    server_error: 'Server Error'
  },

  tailwindcss: {
    exposeConfig: true
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/styles/override.css'
  ],

  buildModules: [
    '~/modules/html-optimization',
    '~/modules/content-cleanup',
    'nuxt-dynamic-images',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '~modules/robots-config',
    '@nuxtjs/robots',
    '~modules/pwa-config',
    '@nuxtjs/pwa',
    '@nuxt/image'
  ],

  modules: [
    '~modules/content-config',
    '@nuxt/content',
    '~modules/feed-config',
    '@nuxtjs/feed',
    '~modules/sitemap-config',
    '@nuxtjs/sitemap',
  ],

  plugins: [
    '~/plugins/font-awesome'
  ]
}
