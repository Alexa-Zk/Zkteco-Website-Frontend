const axios = require('axios');

const API = 'https://admin.zkteco-wa.com';

function isValidSlug(slug) {
  return typeof slug === 'string' && slug.trim().length > 0;
}

export async function buildDynamicRoutes() {
  try {
    const [
      { data: products },
      { data: solutions },
      { data: solutionCategories },
      { data: productCategories },
      { data: articles }
    ] = await Promise.all([
      axios.get(`${API}/products`),
      axios.get(`${API}/solutions`),
      axios.get(`${API}/solution-categories/categoryAndSubcategory`),
      axios.get(`${API}/product-categories/categoryAndSubcategory`),
      axios.get(`${API}/articles`)
    ]);

    const routes = new Set();

    products?.forEach(p =>
      isValidSlug(p?.slug) && routes.add(`/product/${p.slug}`)
    );

    solutions?.forEach(s =>
      isValidSlug(s?.slug) && routes.add(`/solution-details/${s.slug}`)
    );

    solutionCategories?.forEach(c =>
      isValidSlug(c?.slug) && routes.add(`/solution-categories/${c.slug}`)
    );

    productCategories?.forEach(c =>
      isValidSlug(c?.slug) && routes.add(`/product-categories/${c.slug}`)
    );

    articles?.forEach(a =>
      isValidSlug(a?.slug) && routes.add(`/blog/${a.slug}`)
    );

    return Array.from(routes);
  } catch (err) {
    console.error('[Sitemap] Failed to build routes', err);
    return [];
  }
}

export default {
    target: 'static',
    ssr: true,
    head() {
        const path = this.$route.path.endsWith('/')
            ? this.$route.path
            : `${this.$route.path}/`;

        return {
            link: [
                {
                    rel: 'canonical',
                    href: `https://zkteco-wa.com${path}`
                }
            ],
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

        };
    },

    generate: {
        fallback: true,
        crawler: true,
        routes: async () => {
            return await buildDynamicRoutes();
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
        gzip: true,
        trailingSlash: true,
        routes: async () => {
           const routes = await buildDynamicRoutes();
            return routes.map(r => r.endsWith('/') ? r : `${r}/`);
        },
        exclude: [
            '/admin/**',
            '/login',
            '/register'
        ]
    },

    robots: {
        UserAgent: '*',
        Sitemap: 'https://zkteco-wa.com/sitemap.xml'
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
    },

    postcss: {
        plugins: {
         cssnano:
           process.env.NODE_ENV === 'production'
             ? { preset: ['default', { discardComments: { removeAll: true } }] }
             : false, // disable cssnano when not in production
        },
     }
};
