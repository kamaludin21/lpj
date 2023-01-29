// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
    head: {
			htmlAttrs: {
				lang: 'en'
			},
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'My APP',
      meta: [
        { name: 'description', content: 'My APP Dashboard.' }
      ],
    }
  },
	css: ['~/assets/css/main.css'],	
	postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
