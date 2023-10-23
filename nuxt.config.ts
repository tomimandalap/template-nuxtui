// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui-edge", "@nuxtjs/google-fonts", '@vueuse/nuxt',],
  vueuse: {
    autoImports: true,
  },
  imports: {
    dirs: ['./composables'],
  },
  googleFonts: {
    preload: true,
    families: {
      'Open+Sans': [400, 500, 600, 700],
    },
  },
  colorMode: {
    preference: 'light',
  },
  ui: {
    icons: ['iconoir']
  },
  runtimeConfig: {
    apiBaseUrl: '',
  },
})