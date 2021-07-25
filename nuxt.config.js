export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Simple App',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Don\'t Repeat Yourself' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap',
      },
    ]
  },

  loading: {
    color: '#098cdd',
    height: '4px',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '~/assets/styles/main.scss',
    'vue-multiselect/dist/vue-multiselect.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/axios' },
    { src: '~/plugins/vue-multiselect' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    debug: true,
    proxy: true,
    progress: false,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    cache: true,
    parallel: true,
    // transpile: ['vee-validate/dist/rules'],
  },
}
