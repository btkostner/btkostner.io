import { theme } from './tailwind.config.js'

// If the DEPLOY_PATH env is set, we change up routing to that path and add
// special noindex meta tags. This is used for deploying PRs to subpaths.
const DEPLOY_PATH = (process.env.DEPLOY_PATH === undefined) ? '' : process.env.DEPLOY_PATH
const HAS_DEPLOY_PATH = (DEPLOY_PATH !== '')

export default {
  target: 'static',
  modern: 'client',

  components: true,

  build: {
    publicPath: `/public/`
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
      { hid: 'theme-color-light', name: 'theme-color', media: '(prefers-color-scheme: light)', content: theme.colors.white },

      ...(HAS_DEPLOY_PATH ? [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ] : [])
    ],

    link: [
      { rel: 'manifest', href: `${DEPLOY_PATH}/public/manifest.json` },

      { rel: 'shortcut icon', type: 'image/png', href: `${DEPLOY_PATH}/public/icons/icon_512x512.main.png` },
      { rel: 'apple-touch-icon', href: `${DEPLOY_PATH}/public/icons/icon_512x512.main.png` }
    ],

    script: [
      ...(!HAS_DEPLOY_PATH ? [{
        defer: true,
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        'data-cf-beacon': JSON.stringify({ token: '45f98848214e48da9dd3b692f169c347' })
      }] : [])
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
    asyncScripts: true,
    base: (HAS_DEPLOY_PATH) ? `${DEPLOY_PATH}/` : '/'
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
