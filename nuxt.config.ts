// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  
  nitro: { compressPublicAssets: true },
    app: {
        baseURL: '/MichelleEspinoza.github.io/'
    },
    css: ['@/assets/css/main.css'],
    modules: [
      '@nuxtjs/tailwindcss',
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  });
  
