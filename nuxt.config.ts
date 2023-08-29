// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                dir: 'rtl',
                lang: 'fa'
            }
        }
    },
    css: [
        '~/assets/css/tailwind.css',
        '~/assets/css/main.css',
    ],
    modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-headlessui',
    '@formkit/nuxt',
    ],
    build: {
        transpile: ['vue-toastification']
    },
    runtimeConfig: {
        public: {
            apiBase: "http://127.0.0.1:8000/api/admin-panel"
        }
    }
})
