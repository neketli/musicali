// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxthub/core',
        '@nuxt/content',
        '@nuxt/devtools',
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/icon',
        '@nuxt/fonts',
        '@nuxtjs/tailwindcss',
        'nuxt-studio',
        '@vueuse/nuxt',
        '@nuxtjs/seo',
        'nuxt-yandex-metrika',
    ],

    devtools: {
        enabled: true,
    },
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },

    router: {
        options: {
            scrollBehaviorType: 'smooth',
        },
    },

    site: {
        url: 'https://musicali.ru',
        name: 'Musicali - Татьяна Ли педагог',
        description: 'Музыкальный педагог и логопед Татьяна Ли',
        defaultLocale: 'ru',
    },

    experimental: {
        appManifest: true,
    },
    compatibilityDate: '2024-04-03',

    hub: {
        blob: {
            driver: 's3',
            accessKeyId: process.env.NUXT_S3_ACCESS_KEY,
            secretAccessKey: process.env.NUXT_S3_SECRET_KEY,
            bucket: process.env.NUXT_S3_BUCKET,
            region: process.env.NUXT_S3_REGION,
            endpoint: process.env.NUXT_S3_ENDPOINT,
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

    image: {
        provider: 'none',
    },

    robots: {
        disallow: [
            '/private_pages',
        ],
    },

    studio: {
        repository: {
            provider: 'github',
            owner: 'neketli',
            repo: 'musicali',
        },
    },
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
        configPath: 'tailwind.config.ts',
    },

    yandexMetrika: {
        id: process.env.NUXT_YM_ID,
        debug: process.env.NODE_ENV !== 'production',
        options: {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
        },
    },
})
