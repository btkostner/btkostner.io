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
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '~/modules/content-cleanup',
    '~/modules/dynamic-social-previews',

    '@nuxt/content',
  ],

  plugins: [
    '~/plugins/font-awesome'
  ]
}
