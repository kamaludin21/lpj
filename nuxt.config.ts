// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({	
	runtimeConfig: {
		public: {
      nuxtAppName: process.env.NUXT_APP_NAME,
    }
    
  }
})
