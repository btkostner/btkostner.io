export default {
  ssr: false,
  target: 'static',

  components: true,

  head: {
    title: 'btkostner.io',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxt/content'
  ],

  plugins: [
    '~/plugins/font-awesome'
  ]
}
