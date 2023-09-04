const axios = require('axios');

async function _getProductRoutes() {
    try {
        let paths = [];
        const landingPage = ['bitome.africa'];
        const missProduct = [
            'pl-52d18e36e',
            'kit-8304xec-cl4-bs32b11m',
            'dl-32d26b',
            'es-32b11j',
            'dl-854n28b',
            'el-854n28',
            'proface-x-(sl)',
            'es-855l11-12-13h',
            'blade6040',
            'sbtl8000',
            'g4l',
            'dl-854n28b',
            'es-32d11j-12j',
            'bl-858m28l',
            'es-852o11-12-13h',
            'bs-855p12-13k',
            'bl-32g59e',
            'probg3000',
            'probio(qr)',
            'bs-31a11a',
            'speedface-m4',
            'kb100',
            'vr10',
            'omniac20Contact',
            'bs-32b11m',
            'pb4000',
            'speedface-v5lqr',
            'op1000-series',
            'dl-852t28b',
            'zkx6550a',
            'blade100100',
            'facedepot-7bl',
            'silkbio-101tc',
            'zkx6550v',
            'pl10b-pl10db',
            'es-35j11-12j',
            'es-32d11h-12h',
            'bl-852t28l',
            'zkbarrier-app',
            'speedface-v5ltd',
            'facekiosk-v43',
            'speedface-v5ltd',
            'facekiosk-v43',
            'sbtl8200',
            'plock-1',
            'zkbio-access-ivs',
            'pv10r',
            'al30b',
            'ts2200',
            'fbl2000-pro',
            'sc800',
            'zkbio-cvsecurity',
            'zkbio-cvsecurity',
            'biotime-cloud',
            'mb560',
            'procapture-x',
            'lprs1000',
            'bs-852o22c',
            'zkx5030c',
            'profac',
            'zkbio-access-ivs',
            'es-855p11-12-13h',
            'fbl4200-pro',
            'mb560',
            'pl10b-pl10db',
            'zkbio-zlink',
            'zk8500/',
            'bs-855l12-13k',
            'procapture-x',
            'sc800',
            'zkbarrier-app',
            'fbl6000-pro',
            'ps-32a10b',
            'pl-32c20d',
            'zkbio-sis',
            'fbl6000-pro',
            'bs-32b11a',
            'es-32d11j-12j',
            'procapture-t',
            'z8308xec-sl',
            'bs-31a11m',
            'zkx6550v',
            'el-855p28i',
            'facedepot-7bl',
            'zk-d3180s',
            'zkbio-wdms',
            'fbl1200-pro',
            'zkbiosecurity-3050-multi-language-version',
            'zkbio-sis',
            'bs-852o22c',
            'sbt1000s',
            'fbl2200-pro',
            'lprc100',
            'zkrf10m',
            'bs-852o22c',
            'zkx5030c',
            'profac',
            'iclock-880',
            'tl200',
            'bs-35j1213b',
            'es-32d11b',
            'proface-x',
            'kit-8304xec-cl4-bs32b11b',
            'silkbio-100tc',
            'es-32b11a',
            'sbtl2200',
            'revface15-ti',
            'dl-855p28b',
            'sw12-eu',
            'sw13-eu',
            'es-854n11-12-13h',
            'sw11-eu',
            'bs-858m12-13k',
            'op1200-series',
            'ts2000-pro-series',
            'sp1',
            'sbtl5200',
            'probio',
            'bl-855p28l',
            'zkb-barcode-scanner-series',
            'speedface-v4lti',
            'fht2400d-series',
            'biotime-africa'
        ];

        const missBlog = ['cctv', 'benefits-of-using-a'];

        const newCenter = [
            'smart-home',
            'time-attendance',
            'cctv',
            'categories/hotel-solutions'
        ];

        // const productCategories = [
        //     'time-attendance',
        //     'access-control',
        //     'surveillance',
        //     'smart-lock',
        //     'security-inspection',
        //     'smart-home-security',
        //     'armatura',
        //     'green-label',
        //     'entrance-control'
        // ];

        missBlog.map(v => paths.push(`/blog/${v.trim()}`));

        newCenter.map(v => paths.push(`/news-center/categories/${v.trim()}`));

        missProduct.map(v => paths.push(`/product/${v.trim()}`));

        landingPage.map(v => paths.push(`/${v.trim()}`));

        // productCategories.map(v => {
        //     paths.push(`/product-categories/${v.trim()}`);
        // });

        const productURL = axios.get(`https://admin.zkteco-wa.com/products`);

        const solutionURL = axios.get(
            `https://admin.zkteco-wa.com/solution-categories/categoryAndSubcategory`
        );

        const productsubURL = axios.get(
            `https://admin.zkteco-wa.com/sub-product-categories`
        );

        const blogURL = axios.get(`https://admin.zkteco-wa.com/articles`);

        const productCategoryURL = axios.get(
            `https://admin.zkteco-wa.com/product-categories/categoryAndSubcategory`
        );

        const products = await productURL;
        const solution = await solutionURL;
        const subcategory = await productsubURL;
        const blog = await blogURL;
        const productCategory = await productCategoryURL;

        const category = JSON.parse(JSON.stringify(productCategory.data));
        category.map(v => {
            let slug = v?.slug?.trim();
            if (slug != null || slug != undefined) {
                paths.push(`/product-categories/${slug}`);
            }
        });

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

                /*
                let { data: productCategoriesData } = await axios.get(
                    `https://admin.zkteco-wa.com/product-categories/categoryAndSubcategory`
                );
                const category = JSON.parse(
                    JSON.stringify(productCategoriesData)
                );

                const productCategoriesArray = category.map(v => {
                    if (
                        v?.slug != null ||
                        v?.slug != '' ||
                        v?.slug != undefined
                    ) {
                        return `/product-categories/${v?.slug.trim()}`;
                    }
                });
                */

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
                    //...productCategoriesArray,
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
