export default {
  target: 'static',

  components: true,

  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },

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

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: `Blake Kostner's slice of the web. Senior web engineer at System76. Core team at elementary. Open source proselytizer, and drive by contributor.` }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '~/modules/content-cleanup',
    '~/modules/dynamic-social-previews',

    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxt/content',
    '~modules/feed-config',
    '@nuxtjs/feed',
    '~modules/sitemap-config',
    '@nuxtjs/sitemap',
    '~modules/robots-config',
    '@nuxtjs/robots'
  ],

  plugins: [
    '~/plugins/font-awesome'
  ]
}
