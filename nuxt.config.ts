// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/MichelleEspinoza.github.io/'
  },
    runtimeConfig: {
      // Private config that is only available on the server
      apiSecret: '123',
      // Config within public will be also exposed to the client
      public: {
        apiBase: '/api'
      }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  });
  