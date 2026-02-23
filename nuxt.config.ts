// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxt/devtools',
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/icon',
        '@nuxt/fonts',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        'nuxt-studio',
        '@vueuse/nuxt',
    ],
    css: ['~/assets/css/main.css'],
    devtools: {
        enabled: true,
    },
    compatibilityDate: '2024-04-03',
    tailwindcss: {
        config: {
            theme: {
                extend: {
                    colors: {
                        cream: '#FDF8F3',
                        milk: '#FAF6F1',
                        blush: '#F5E1DA',
                        rose: '#E8C4BE',
                        lavender: '#D4C4E0',
                        sage: {
                            DEFAULT: '#B8C9B8',
                            700: '#6B8B6B',
                        },
                        sageLight: '#D4E0D4',
                        warm: '#EDE5DF',
                        text: '#4A4A4A',
                        textLight: '#6B6B6B',
                        accent: '#C9A9A0',
                    },
                    fontFamily: {
                        display: ['Cormorant Garamond', 'serif'],
                        body: ['Nunito', 'sans-serif'],
                    },
                },
            },
        },
    },
    router: {
        options: {
            scrollBehaviorType: 'smooth',
        },
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: true,
                quotes: 'single',
            },
        },
    },
})
