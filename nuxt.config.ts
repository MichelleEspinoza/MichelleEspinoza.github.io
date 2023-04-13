// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/MichelleEspinoza.github.io/'
    },
    css: ['~/assets/css/main.css'],
    //modules: ['@nuxtjs/tailwindcss'],
    postcss: {
      plugins: {
        tailwindcss: {cssPath: '~/assets/css/main.css',},
        autoprefixer: {}
      }
    }
  });
  
