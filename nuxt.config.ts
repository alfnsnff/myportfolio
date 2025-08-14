// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  app: {
    head: {
      title: 'CrecsPlays - Portofolio Developer',
      meta: [
        { name: 'description', content: 'Portofolio developer dengan desain unik' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/scss/main.scss'],
  modules: [
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/variables" as *;
          `
        }
      }
    }
  }
})