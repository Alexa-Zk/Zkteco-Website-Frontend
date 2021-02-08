import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl, subBaseUrl } from '~/repositories/Repository';


export const state = () => ({
    products: null,
    productsTotal: 0,
    searchResults: null,
    loading: false,
    page: 1,
    perPage: 12,
    sort_by: 'created_at:desc'
    // https://admin.zkteco-wa.com/products?_sort=created_at:desc&_limit=12&_start=0
});

export const mutations = {
    setProducts(state, payload) {
        state.products = payload;
    },
    setProductsTotal(state, payload) {
        state.productsTotal = payload;
    },
    setSearchResults(state, payload) {
        state.searchResults = payload;
    }
};

export const actions = {
    async getProducts({ state, commit }, payload) {
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
};
