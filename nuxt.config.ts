import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
  devtools: {enabled: true},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    '@': __dirname + '/src',
  },
  css: ['/src/assets/css/styles.css'],
  modules: ['@nuxtjs/eslint-module'],
})
