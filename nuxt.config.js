const axios = require('axios');

async function _getProductRoutes() {
    const paths = [];
    const missProduct = [
        'pl-52d18e36e',
        'padlock',
        'pface202',
        'qr500-series-reader'
    ];

    const products = await axios.get(`https://admin.zkteco-wa.com/products`);

    const solution = await axios.get(
        `https://admin.zkteco-wa.com/solution-categories/categoryAndSubcategory`
    );

    products.data.forEach(v => {
        let slug = v.slug.trim();
        if (slug != null) {
            paths.push(`/product/${slug}`);
        }
    });

    solution.data.forEach(v => {
        let slug = v.slug.trim();
        if (slug != null) {
            paths.push(`/solution-categories/${slug}`);
        }
    });

    missProduct.map(v => paths.push(`/product/${v}`));
    return paths;
}

export default {
    target: 'static',
    ssr: true,

    head: {
        titleTemplate: 'ZKTeco West Africa',
        title: 'ZKTeco West Africa',
        meta: [
            {
                charset: 'utf-8'
            },
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
        ]
    },
    generate: {
        fallback: true,
        crawler: true,
        async routes() {
            const routes = await _getProductRoutes();
            return routes;
        }
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
        { src: '~plugins/vue-cookie-law.js', ssr: false },
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

    // loadingIndicator: {
    //     name: 'fading-circle',
    //     color: 'white',
    //     background: '#78bc27'
    // },

    modules: [
        '@nuxtjs/axios',
        'nuxt-i18n',
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
            let { data: solutionCategoryData } = await axios.get(
                `https://admin.zkteco-wa.com/solution-categories/categoryAndSubcategory`
            );

            const solutionCategoryArray = solutionCategoryData.map(v => {
                if (v.slug != null || v.slug != '' || v.slug != undefined)
                    return `/solution-categories/${v.slug}`;
            });

            let { data: productCategoriesData } = await axios.get(
                `https://admin.zkteco-wa.com/product-categories/categoryAndSubcategory`
            );

            const productCategoriesArray = productCategoriesData.map(v => {
                if (v.slug != null || v.slug != '' || v.slug != undefined)
                    return `/product-categories/${v.slug}`;
            });

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
            const articlesArray = articlesData.map(v => {
                let name = v.slug
                    .split(' ')
                    .join('-')
                    .toLowerCase();

                return `/blog/${name}`;
            });

            return [
                ...solutionCategoryArray,
                ...productCategoriesArray,
                ...productArray,
                ...solutionArray,
                ...articlesArray
            ];
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
