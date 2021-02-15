export default {
    head: {
        titleTemplate: 'ZKTeco West Africa',
        title: 'ZKTeco West Africa',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'ZKTeco is a globally-renowned provider of security, access control and time management solutions. ZKTeco focus on Biometrics of fingerprint, face recognition, ..'
            }
        ],
        link: [
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            }
        ]
    },
    generate: {
        fallback: true
    },

    css: [
        'swiper/dist/css/swiper.css',
        '~/static/fonts/Linearicons/Font/demo-files/demo.css',
        '~/static/fonts/font-awesome/css/font-awesome.css',
        '~/static/css/bootstrap.min.css',
        '~/assets/scss/style.scss'
    ],

    plugins: [
        { src: '~plugins/vueliate.js', ssr: false },
        { src: '~/plugins/swiper-plugin.js', ssr: false },
        { src: '~/plugins/vue-notification.js', ssr: false },
        { src: '~/plugins/axios.js', ssr: false },
        { src: '~/plugins/lazyLoad.js', ssr: false },
        { src: '~/plugins/flutterwave.js', ssr: false },
        { src: '~/plugins/vue-instantsearch.js', ssr: false },
        { src: '~/plugins/filters.js', ssr: false },
        { src: '~/plugins/routes.js', ssr: false },
        { src: '~/plugins/before-each.js', ssr: false }
    ],

    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt'
    ],

    styleResources: {
        scss: './assets/scss/env.scss'
    },

    loadingIndicator: {
        name: 'chasing-dots',
        color: 'purple',
        background: 'green'
    },

    modules: [
        '@nuxtjs/axios',
        'nuxt-i18n',
        '@nuxtjs/apollo',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
    ],
    robots: {
        Sitemap: 'https://zkteco-wa.com/sitemap.xml',
        UserAgent: '*'
    },
    sitemap: {
        hostname: 'https://zkteco-wa.com',
        exclude: [],
        routes: []
    },
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://admin.zkteco-wa.com/graphql'
            }
        }
    },

    i18n: {
        locales: [
            { code: 'en', file: 'en.json' },
            { code: 'fr', file: 'fr.json' }
        ],
        lazy: true,
        defaultLocale: 'en',
        langDir: 'lang/locales/'
    },

    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'active'
    },

    server: {
        port: 4002,
        host: 'localhost'
    }
};
