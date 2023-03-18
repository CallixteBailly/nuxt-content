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