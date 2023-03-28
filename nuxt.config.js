const axios = require('axios');

async function _getProductRoutes() {
    try {
        let paths = [];
        const missProduct = [
            'pl-52d18e36e',
            'kit-8304xec-cl4-bs32b11m',
            'dl-32d26b',
            'es-32b11j'
        ];

        const missBlog = ['cctv'];

        const newCenter = ['smart-home', 'time-attendance', 'cctv'];

        missBlog.map(v => paths.push(`/blog/${v.trim()}`));

        newCenter.map(v => paths.push(`/news-center/categories/${v.trim()}`));

        missProduct.map(v => paths.push(`/product/${v.trim()}`));

        const productURL = axios.get(`https://admin.zkteco-wa.com/products`);

        const solutionURL = axios.get(
            `https://admin.zkteco-wa.com/solution-categories/categoryAndSubcategory`
        );

        const productsubURL = axios.get(
            `https://admin.zkteco-wa.com/sub-product-categories`
        );

        const blogURL = axios.get(`https://admin.zkteco-wa.com/articles`);

        const products = await productURL;
        const solution = await solutionURL;
        const subcategory = await productsubURL;
        const blog = await blogURL;

        products.data.map(v => {
            let slug = v?.slug?.trim();
            if (slug != null) {
                paths.push(`/product/${slug}`);
            }
        });

        solution.data.map(v => {
            let slug = v?.slug?.trim();
            if (slug != null) {
                paths.push(`/solution-categories/${slug}`);
            }
        });

        subcategory.data.map(v => {
            let slug = v?.slug?.trim();
            if (slug != null) {
                paths.push(`/sub-categories/${slug}`);
            }
        });

        blog.data.map(v => {
            let slug = v?.slug?.trim();
            if (slug != null) {
                paths.push(`/blog/${slug}`);
            }
        });
        return paths;
    } catch (error) {
        console.log('- error ', error);
    }
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

    loadingIndicator: {
        name: 'fading-circle',
        color: 'white',
        background: '#78bc27'
    },

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
            try {
                let { data: solutionCategoryData } = await axios.get(
                    `https://admin.zkteco-wa.com/solution-categories/categoryAndSubcategory`
                );

                const solutionCategoryArray = solutionCategoryData.map(v => {
                    if (
                        v?.slug != null ||
                        v?.slug != '' ||
                        v?.slug != undefined
                    )
                        return `/solution-categories/${v?.slug}`;
                });

                let { data: productCategoriesData } = await axios.get(
                    `https://admin.zkteco-wa.com/product-categories/categoryAndSubcategory`
                );

                const productCategoriesArray = productCategoriesData.map(v => {
                    if (
                        v?.slug != null ||
                        v?.slug != '' ||
                        v?.slug != undefined
                    )
                        return `/product-categories/${v?.slug}`;
                });

                let { data: productsData } = await axios.get(
                    `https://admin.zkteco-wa.com/products`
                );
                const productArray = productsData.map(
                    v => `/product/${v?.slug}`
                );

                let { data: solutionData } = await axios.get(
                    `https://admin.zkteco-wa.com/solutions`
                );
                const solutionArray = solutionData.map(
                    v => `/solution-details/${v?.slug}`
                );

                let { data: articlesData } = await axios.get(
                    `https://admin.zkteco-wa.com/articles`
                );
                const articlesArray = articlesData.map(v => {
                    let name = v?.slug
                        ?.split(' ')
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
            } catch (error) {
                console.log('- error ', error);
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
