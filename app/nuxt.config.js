const name = '외 린'

module.exports = {
  env: {},
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: `${name} - Warin Manuschanok `,
    title: name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/vec32.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sarabun:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Monoton:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/index',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/',
    { path: '~/components/core/', prefix: 'core' },
    { path: '~/components/input/', prefix: 'v-input' },
    { path: '~/components/base/', prefix: 'base' }
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js'
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isClient }) {
      const isProd = process.env.NODE_ENV === 'production';
      if (isProd && isClient) {
        config.optimization.splitChunks.minSize = 1024 * 1024; // 244 Kib
        config.optimization.splitChunks.maxSize = 2 * 1024 * 1024; // 512 Kib
      }
      // config.module.rules.push({
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader'
      // })
      // config.module.rules.push({
      //   test: /\.ttf$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: false
      //   }
      // })

      // config.plugins.push(new CompressionPlugin())
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        removeComments: true
      }
    }
  },
  pwa: {
    name,
    theme_color: '#770000',
    lang: 'th'
  },
  // generate: {
  //   dir: process.env.NUXT_GENERATE_DIR || '../api/dist'
  // },
  server: {
    host: '0.0.0.0', // default: localhost
    port: 80
  },
  telemetry: false
}
