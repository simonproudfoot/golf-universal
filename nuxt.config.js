export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Totems',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    host: '0' // default: localhost
  },
  ssr: false, // Disable Server Side rendering

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/colors.scss',
    '~/assets/scss/type.scss',
    '~/assets/scss/main.scss'

  ],
  gsap: {
    extraPlugins: {
      cssRule: true,
    }
  },


  
  babel:{
    plugins: [
      ['@babel/plugin-proposal-private-methods', { loose: true }]
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~//plugins/websocket.js', '~/plugins/vidle.js',],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
