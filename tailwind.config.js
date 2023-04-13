/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './error.vue'
  ],
  safelist: [
      {
          pattern: /.*/,
      },
  ],
  title: 'DragonFish',
  theme: {
    extend: {
      colors: {
        blue: '#3371F2',
        bluegray: '#F5F5F5'
      },
      minHeight: {
        20: '20px'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      laptop: '1024px',
      xl: '1440px'
    },
    fontFamily: {
      Poppins: ['Roboto', 'sans-serif']
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px']
    }
  },
  plugins: []
};
