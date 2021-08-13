import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl, subBaseUrl } from '~/repositories/Repository';


export const state = () => ({
    products: null,
    productsRelated: null,
    singleProduct: null,
    solutions: null,
    articles: null,
    articlesLimited: null,
    articlesCategories: null,
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
    page: 1,
    perPage: 12,
    sort_by: 'created_at:desc'

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
        state.singleProduct = payload
    },

    setArticlesCategories(state, payload) {
        state.articlesCategories = payload
    },

    setSingleProductCategories(state, payload) {
        state.singleProductCategories = payload
    },

    setProductCategories(state, payload) {
        state.productCategories = payload
    },

    setSubProductCategories(state, payload) {
        state.subProductCategories = payload
    },

    setSolutionCategories(state, payload) {
        state.solutionCategories = payload
    },

    setNewsCategories(state, payload) {
        state.newsCategories = payload
    },

    setSolutions(state, payload) {
        state.solutions = payload
    },

    setHomepage(state, payload) {
        state.homePage = payload
    },

    setStoreLocator(state, payload) {
        state.storeLocator = payload
    }

};

export const actions = {
    async getProducts({ state, commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start: Object.keys(payload).length === 0 ? state.page : payload.page,
            _sort: Object.keys(payload).length === 0 ? state.sort_by : payload.sort_by,
            _limit: Object.keys(payload).length === 0 ? state.perPage : payload.perPage,
        };
        const reponse = await Repository.get(
                `${subBaseUrl}/products?${serializeQuery(params)}`
            )
            .then(response => {
                commit('setProducts', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async sendEnquiry({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(`${baseUrl}/integrations/enquiries`, payload)
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getArticles({ commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start: Object.keys(payload).length === 0 ? state.page : payload.page,
            _sort: 'created_at:desc',
            _limit: Object.keys(payload).length === 0 ? state.perPage : payload.perPage,
        };
        const reponse = await Repository.get(
                `${subBaseUrl}/articles?${serializeQuery(params)}`
            )
            .then(response => {
                commit('setArticles', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getArticlesLimited({ commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start: 0,
            _sort: 'created_at:desc',
            _limit: 4,

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

    async getSolutions({ commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start: 0,
            _sort: 'created_at:desc',
            _limit: 100,
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

    async getSingleProduct({ commit, dispatch }, payload) {
        commit('setLoading', true);
        let params = {
            slug_in: payload.id,
        };
        const reponse = await Repository.get(
                `${subBaseUrl}/products?${serializeQuery(params)}`
            )
            .then(response => {
                commit('setSingleProduct', response.data[0]);
                dispatch('getRelatedProducts', response.data[0].product_category)
                commit('setLoading', false);
                return response.data[0];
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getRelatedProducts({ commit }, payload) {
        let params = {
            slug_in: payload.id,
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

    async getSingleProductCategories({ commit }, slug) {
        commit('setLoading', true);
        let params = {
            slug_in: slug,
        };
        const reponse = await Repository.get(
                `${subBaseUrl}/product-categories/?${serializeQuery(params)}`
            )
            .then(response => {
                commit('setSingleProductCategories', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getAllProductCategories({ commit }, slug) {
        commit('setLoading', true);
        let params = {};
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

    async getArticlesCategories({ commit }, slug) {
        commit('setLoading', true);
        const reponse = await Repository.get(
                `${subBaseUrl}/categories/`
            )
            .then(response => {
                commit('setArticlesCategories', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSubProductCategories({ commit }, slug) {
        commit('setLoading', true);
        let params = {
            slug_in: slug,
        };
        const reponse = await Repository.get(
                `${subBaseUrl}/sub-product-categories/?${serializeQuery(params)}`
            )
            .then(response => {
                commit('setSubProductCategories', response.data[0]);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSolutionCategories({ commit }, slug) {
        commit('setLoading', true);
        let params = {
            slug_in: slug,
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
        let params = {
            slug_in: slug,
        };
        const reponse = await Repository.get(
                `${subBaseUrl}/categories/?${serializeQuery(params)}`
            )
            .then(response => {
                commit('setNewsCategories', response.data[0]);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
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
            page: Object.keys(payload).length === 0 ? state.page : payload.page,
            perPage: Object.keys(payload).length === 0 ? 100 : payload.perPage,
            query: Object.keys(payload).length === 0 ? '' : payload.query,
        };
        const reponse = await Repository.get(
                `${subBaseUrl}/store-locators/search?${serializeQuery(params)}`
            )
            .then(response => {
                commit('setStoreLocator', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
};