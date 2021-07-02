export default {
  target: 'static',

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

      { hid: 'description', name: 'description', content: `Blake Kostner's slice of the web. Senior web engineer at System76. Core team at elementary. Open source proselytizer, and drive by contributor.` }
    ],

    link: [
      { rel: 'manifest', href: '/public/manifest.json' },

      { rel: 'shortcut icon', type: 'image/png', href: '/public/icons/icon_512x512.main.png' },
      { rel: 'apple-touch-icon', href: '/public/icons/icon_512x512.main.png' }
    ]
  },

  generate: {
    fallback: true,
    subFolders: false
  },

  messages: {
    loading: 'Loading',
    error_404: 'Page Not Found',
    server_error: 'Server Error'
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/styles/override.css'
  ],

  buildModules: [
    '~/modules/html-optimization',
    '~/modules/content-cleanup',
    'nuxt-dynamic-images',
    '~modules/color-config',
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
