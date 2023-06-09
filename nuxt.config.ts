// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: 'one-dark-pro'
    }    
  },
  components: [{
    path: '~/components',
    global: true
  }]
})