// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'My App',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],
        }
    },
    dir: {
        pages: `themes/${process.env.THEME}/pages`,
        assets: `themes/${process.env.THEME}/assets`,
        public: `themes/${process.env.THEME}/public`,
        layouts: `themes/${process.env.THEME}/layouts`,
        static: `themes/${process.env.THEME}/static`,
    },

    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api'
        }
    }
})
