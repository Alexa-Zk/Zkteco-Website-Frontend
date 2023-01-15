import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl, subBaseUrl } from '~/repositories/Repository';

export const state = () => ({
    products: null,
    productsRelated: null,
    singleProduct: null,
    solutions: null,
    solutionCategoriesAndSub: null,
    caseStudies: null,
    articles: null,
    articlesLimited: null,
    articlesCategories: null,
    singleArticlesCategories: null,
    productsTotal: 0,
    articlesTotal: 0,
    singleProductCategories: null,
    productCategories: null,
    subProductCategories: null,
    homePage: null,
    storeLocator: null,
    solutionCategories: null,
    newsCategories: null,
    searchResults: null,
    loading: false,
    page: 0,
    perPage: 12,
    downloadCategories: null,
    sort_by: 'created_at:desc',
    totalSingleProductCategories: 0,
    totalSingleProductSubCategories: 0,
    categoryAndSubCategories: null
});

export const mutations = {
    setLoading(state, payload) {
        state.loading = payload;
    },

    setProducts(state, payload) {
        state.products = payload;
    },

    setArticles(state, payload) {
        state.articles = payload;
    },

    setArticlesLimited(state, payload) {
        state.articlesLimited = payload;
    },

    setProductsTotal(state, payload) {
        state.productsTotal = payload;
    },

    setArticlesTotal(state, payload) {
        state.articlesTotal = payload;
    },

    setSearchResults(state, payload) {
        state.searchResults = payload;
    },

    setRelatedProducts(state, payload) {
        state.productsRelated = payload;
    },

    setSingleProduct(state, payload) {
        state.singleProduct = payload;
    },

    setArticlesCategories(state, payload) {
        state.articlesCategories = payload;
    },

    setSingleArticlesCategories(state, payload) {
        state.singleArticlesCategories = payload;
    },

    setSingleProductCategories(state, payload) {
        state.singleProductCategories = payload;
    },

    setProductCategories(state, payload) {
        state.productCategories = payload;
    },

    setSubProductCategories(state, payload) {
        state.subProductCategories = payload;
    },

    setSolutionCategories(state, payload) {
        state.solutionCategories = payload;
    },
    setSolutionCategoryAndSubCategories(state, payload){
        state.solutionCategoriesAndSub = payload;
    },

    setNewsCategories(state, payload) {
        state.newsCategories = payload;
    },

    setSolutions(state, payload) {
        state.solutions = payload;
    },

    setCaseStudies(state, payload) {
        state.caseStudies = payload;
    },

    setHomepage(state, payload) {
        state.homePage = payload;
    },

    setStoreLocator(state, payload) {
        state.storeLocator = payload;
    },

    setDownloadCategories(state, payload) {
        state.downloadCategories = payload;
    },

    setTotalSingleProductCategories(state, payload) {
        state.totalSingleProductCategories = payload;
    },

    setTotalSubCategories(state, payload) {
        state.totalSingleProductSubCategories = payload;
    },

    setCategoryAndSubCategories(state, payload) {
        state.categoryAndSubCategories = payload;
    }
};

export const actions = {
    async getProducts({ state, commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start:
                Object.keys(payload).length === 0 ? state.page : payload.page,
            _sort:
                Object.keys(payload).length === 0
                    ? state.sort_by
                    : payload.sort_by,
            _limit:
                Object.keys(payload).length === 0
                    ? state.perPage
                    : payload.perPage
        };

        const reponse = await Repository.get(
            `${subBaseUrl}/products?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setProducts', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({
                error: JSON.stringify(error)
            }));
        return reponse;
    },

    async sendEnquiry({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${baseUrl}/integrations/enquiries`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async requestAQuote({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${subBaseUrl}/request-a-quotes`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async requestAQuote({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${subBaseUrl}/request-a-quotes`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async requestAProductQuote({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${subBaseUrl}/product-quotes`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async projectConsultation({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${subBaseUrl}/project-consultations`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getArticles({ commit, state }, payload) {
        let searchQuery =
            payload.search == undefined ? '' : { _q: payload.search };
        commit('setLoading', true);
        let params = {
            _start:
                Object.keys(payload).length === 0 ? state.page : payload.page,
            _sort: 'created_at:desc',
            _limit:
                Object.keys(payload).length === 0
                    ? state.perPage
                    : payload.perPage,
            ...searchQuery
        };

        const URL = `${subBaseUrl}/articles?${serializeQuery(params)}`;
        const reponse = await Repository.get(URL)
            .then(response => {
                commit('setArticles', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));

        return reponse;
    },

    async getDownloadCategories({ commit }) {
        commit('setLoading', true);
        const response = await Repository.get(
            `${subBaseUrl}/product-file-categories`
        )
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        commit('setDownloadCategories', response);
        commit('setLoading', false);

        return response;
    },

    async getPaginatedProductFiles({ state, commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start:
                payload.page === 0 ||
                payload.page === undefined ||
                payload.page === null
                    ? state.page
                    : payload.page,
            _limit:
                payload.perPage === null ||
                payload.perPage === undefined ||
                payload.perPage === 0
                    ? state.perPage
                    : payload.perPage,
        };

        const reponse = await Repository.get(
            `${subBaseUrl}/product-files?product_file_category.category=${payload.category}&${serializeQuery(params)}`
        )
            .then(res => {
                const productFiles = res.data ? res.data : [];
                commit('setLoading', false);
                return productFiles;
            })
            .catch(error => ({
                error: JSON.stringify(error)
            }));
        return reponse;
    },
    
    async searchDownloadCategories({ commit }, payload) {
        commit('setLoading', true);
        let response;
            response = await Repository.get(
                `${subBaseUrl}/product-files?product_file_category.category=${payload.category}&_q=${payload.search}`
            )
                .then(response => {
                    commit('setLoading', false);
                    return response.data;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    },

    async getProductFilesCount({ commit }, payload) {
        let response;
            response = await Repository.get(
                `${subBaseUrl}/product-files/count?product_file_category.category=${payload.category}`
            )
                .then(response => {
                    return response.data;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    },

    async fetchProductFilesByCategory({ commit }, payload) {
        commit('setLoading', true);
        let response;
            response = await Repository.get(
                `${subBaseUrl}/product-files?product_file_category.category=${payload.category}&_limit=5`
            )
                .then(response => {
                    commit('setLoading', false);
                    return response.data;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    },

    async getArticlesLimited({ commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start: 0,
            _sort: 'created_at:desc',
            _limit: 4
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/articles?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setArticlesLimited', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getHomePageNewsCenter({ commit }) {
        commit('setLoading', true);
        const reponse = await Repository.get(
            `${subBaseUrl}/articles/home_page_news_center`
        )
            .then(response => {
                commit('setArticlesLimited', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSolutions({ commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start: 0,
            _sort: 'created_at:desc',
            _limit: 100
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/solutions?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setSolutions', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCaseStudies({ commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start: 0,
            _sort: 'sort_id:desc',
            _limit: 100
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/case-studies?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setCaseStudies', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSingleProduct({ commit, dispatch }, payload) {
        commit('setLoading', true);
        let params = {
            slug_in: payload.id
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/products?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setSingleProduct', response.data[0]);
                dispatch(
                    'getRelatedProducts',
                    response.data[0].product_category
                );
                commit('setLoading', false);
                return response.data[0];
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getRelatedProducts({ commit }, payload) {
        let params = {
            slug_in: payload.id
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/product-categories?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setRelatedProducts', response.data[0].products);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    // async getSingleProductCategories1({ commit }, slug) {
    //     commit('setLoading', true);
    //     let params = {
    //         slug_in: slug
    //     };
    //     const reponse = await Repository.get(
    //         `${subBaseUrl}/product-categories/?${serializeQuery(params)}`
    //     )
    //         .then(response => {
    //             commit('setSingleProductCategories', response.data);
    //             commit('setLoading', false);
    //             return response.data;
    //         })
    //         .catch(error => ({ error: JSON.stringify(error) }));
    //     return reponse;
    // },

    async getTotalSingleProductCategories({ commit }, slug) {
        let params = {
            'product_category.slug': slug
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/products/count?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setTotalSingleProductCategories', response.data);
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSingleProductCategories({ state, commit }, payload) {
        //getSingleProductCategories
        //https://admin.zkteco-wa.com/products?_limit=2&product_category.slug=time-attendance&_start=1

        commit('setLoading', true);
        let params = {
            _start:
                payload.page === 0 ||
                payload.page === undefined ||
                payload.page === null
                    ? state.page
                    : payload.page,
            _sort: payload.sort_by === 0 ? state.sort_by : payload.sort_by,
            _limit:
                payload.perPage === null ||
                payload.perPage === undefined ||
                payload.perPage === 0
                    ? state.perPage
                    : payload.perPage,
            'product_category.slug': payload.slug
        };

        const reponse = await Repository.get(
            `${subBaseUrl}/products?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setSingleProductCategories', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({
                error: JSON.stringify(error)
            }));
        return reponse;
    },

    async getAllProductCategories({ commit }, slug) {
        commit('setLoading', true);
        let params = { _sort: 'created_at:asc' };
        const reponse = await Repository.get(
            `${subBaseUrl}/product-categories/?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setProductCategories', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCategoryAndSubCategories({ commit }) {
        commit('setLoading', true);
        const reponse = await Repository.get(
            `${subBaseUrl}/product-categories/categoryAndSubcategory`
        )
            .then(response => {
                commit('setCategoryAndSubCategories', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSolutionCategoryAndSubCategories({ commit }) {
        commit('setLoading', true);
        const reponse = await Repository.get(
            `${subBaseUrl}/solution-categories/categoryAndSubcategory`
        )
            .then(response => {
                commit('setSolutionCategoryAndSubCategories', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getArticlesCategories({ commit }) {
        // commit('setLoading', true);
        // const reponse = await Repository.get(`${subBaseUrl}/categories/`)
        //     .then(response => {
        //         commit('setArticlesCategories', response.data);
        //         commit('setLoading', false);
        //         return response.data;
        //     })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        // return [];
    },

    async getArticlesCategories({ commit }) {
        // commit('setLoading', true);
        // const reponse = await Repository.get(`${subBaseUrl}/categories/`)
        //     .then(response => {
        //         commit('setArticlesCategories', response.data);
        //         commit('setLoading', false);
        //         return response.data;
        //     })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        // return reponse;
    },

    async getSingleArticlesCategories({ commit }, slug) {
        commit('setLoading', true);
        const reponse = await Repository.get(
            `${subBaseUrl}/categories?slug=${slug}`
        )
            .then(response => {
                commit('setSingleArticlesCategories', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSubProductCategories({ state, commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start:
                payload.page === 0 ||
                payload.page === undefined ||
                payload.page === null
                    ? state.page
                    : payload.page,
            _sort: payload.sort_by === 0 ? state.sort_by : payload.sort_by,
            _limit:
                payload.perPage === null ||
                payload.perPage === undefined ||
                payload.perPage === 0
                    ? state.perPage
                    : payload.perPage,
            'product_sub_category.slug': payload.slug
        };

        const reponse = await Repository.get(
            `${subBaseUrl}/products/?${serializeQuery(params)}`
        )
            .then(res => {
                const product = res.data ? res.data : [];
                commit('setSubProductCategories', product);
                commit('setLoading', false);
                return product;
            })
            .catch(error => ({
                error: JSON.stringify(error)
            }));
        return reponse;
    },

    async getTotalSingleProductCategories({ commit }, slug) {
        let params = {
            'product_category.slug': slug
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/products/count?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setTotalSingleProductCategories', response.data);
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getTotalSubCategories({ commit }, slug) {
        let params = {
            'product_sub_category.slug': slug
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/products/count?${serializeQuery(params)}`
        )
            .then(res => {
                commit('setTotalSingleProductCategories', res.data);
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSolutionCategories({ commit }, slug) {
        commit('setLoading', true);
        let params = {
            slug_in: slug
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/solution-categories/?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setSolutionCategories', response.data[0]);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getNewsCategories({ commit }, slug) {
        commit('setLoading', true);

        const response = await Repository.get(
            `${subBaseUrl}/getCategoriesBySlug/${slug}`
        )
            .then(response => {
                commit('setNewsCategories', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    },

    async getProductsTotal({ state, commit }, payload) {
        let params = {
            _limit: -1
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/products?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setProductsTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getArticlesTotal({ state, commit }, payload) {
        let params = {
            _limit: -1
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/articles?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setArticlesTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSearchResults({ state, commit }, payload) {
        let params = {
            _q: payload.query
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/products?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setSearchResults', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getHomepage({ commit }, slug) {
        commit('setLoading', true);
        let params = {};
        const reponse = await Repository.get(
            `${subBaseUrl}/home-pages/?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setHomepage', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getStoreLocator({ commit, state }, payload) {
        commit('setLoading', true);
        let params = {
            _sort: 'sort_id:desc',
            ...(payload.query && { _q: payload.query })
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/store-locators?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setStoreLocator', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
