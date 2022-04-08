const axios = require('axios');

export default {
    head: {
        titleTemplate: 'ZKTeco West Africa',
        title: 'ZKTeco West Africa',
        meta: [
            {
                charset: 'utf-8'
            }
        ]
    },
    generate: {
        fallback: true
    },

    css: [
        'swiper/dist/css/swiper.css',
        '~/static/fonts/Linearicons/Font/demo-files/demo.css',
        '~/static/css/bootstrap.min.css',
        '~/assets/scss/style.scss'
    ],

    plugins: [
        {
            src: '~plugins/vueliate.js',
            ssr: false
        },
        {
            src: '~/plugins/swiper-plugin.js',
            ssr: false
        },
        {
            src: '~/plugins/contentPlaceholders.js',
            ssr: false
        },
        {
            src: '~/plugins/vue-notification.js',
            ssr: false
        },
        {
            src: '~/plugins/axios.js',
            ssr: false
        },
        {
            src: '~/plugins/lazyLoad.js',
            ssr: false
        },
        {
            src: '~/plugins/filters.js',
            ssr: false
        },
        { src: '~/plugins/aos', ssr: false },
        { src: '~/plugins/v-google-translate.js', ssr: false },
        '~/plugins/jsonld.js'
    ],

    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt'
    ],

    build: {
        //     analyze: true,
        // // or
        //     analyze: {
        //         analyzerMode: 'static'
        //     }
    },

    styleResources: {
        scss: './assets/scss/env.scss'
    },

    loadingIndicator: {
        name: 'fading-circle',
        color: 'white',
        background: '#78bc27'
    },

    modules: [
        '@nuxtjs/axios',
        'nuxt-i18n',
        '@nuxtjs/apollo',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap'
    ],

    robots: {
        Sitemap: 'https://zkteco-wa.com/sitemap.xml',
        UserAgent: '*'
    },

    sitemap: {
        hostname: 'https://zkteco-wa.com',
        exclude: [],
        routes: async () => {
            let { data: productsData } = await axios.get(
                `https://admin.zkteco-wa.com/products`
            );
            const productArray = productsData.map(v => `/product/${v.slug}`);

            let { data: solutionData } = await axios.get(
                `https://admin.zkteco-wa.com/solutions`
            );
            const solutionArray = solutionData.map(
                v => `/solution-details/${v.slug}`
            );

            let { data: articlesData } = await axios.get(
                `https://admin.zkteco-wa.com/articles`
            );
            const articlesArray = articlesData.map(v => `/blog/${v.slug}`);

            return [...productArray, ...solutionArray, ...articlesArray];
        }
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
            {
                code: 'en',
                file: 'en.json'
            },
            {
                code: 'fr',
                file: 'fr.json'
            }
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
