import Cookies from 'js-cookie';
import Repository, {
    serializeQuery,
    serializePayload
} from '~/repositories/Repository.js';
import { baseUrl } from '~/repositories/Repository';


export const state = () => ({
    product: null,
    products: null,
    searchResults: null,
    cartProducts: null,
    wishlistItems: null,
    compareItems: null,
    brands: null,
    categories: null,
    total: 0,
    overallTotal: 0,
    page: 1,
    per_page: 12,
    order: 'asc',
    search: '',
    userOrders: '',
    singleUserOrders: ''
});

export const mutations = {
    setProducts(state, payload) {
        state.products = payload;
    },

    clearState(state, payload) {
        state.cartProducts = null
    },

    setCartProducts(state, payload) {
        state.cartProducts = payload;
    },
    setWishlistItems(state, payload) {
        state.wishlistItems = payload;
    },
    setCompareItems(state, payload) {
        state.compareItems = payload;
    },

    setProduct(state, payload) {
        state.product = payload;
    },

    setBrands(state, payload) {
        state.brands = payload;
    },

    setCategories(state, payload) {
        state.categories = payload;
    },

    setSearchResults(state, payload) {
        state.searchResults = payload;
    },

    setTotal(state, payload) {
        state.total = payload;
    },

    setTotalProducts(state, payload) {
        state.overallTotal = payload
    },

    setAllUserOrders(state, payload) {
        state.userOrders = payload;
    },

    setSingleUserOrders(state, payload) {
        state.singleUserOrders = payload;
    }
};

export const actions = {
    async getProducts({ state, commit }, payload) {
        let params = {
            page: Object.keys(payload).length === 0 ? state.page : payload.page,
            per_page: Object.keys(payload).length === 0 ? state.per_page : payload.per_page,
            order: Object.keys(payload).length === 0 ? state.order : 'asc'
        };
        const reponse = await Repository.get(
            `${baseUrl}/integrations/products?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setProducts', response.data.data.data);
                commit('setTotalProducts', response.data.data.total);
                return response.data.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getTotalRecords({ commit, state }, payload) {
        commit('setTotal', state.products.length);
    },

    async clearAllCartState({ commit, state }, payload) {
        commit('clearState', payload);
    },

    async getProductsById({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/integrations/products/${payload}`
        )
            .then(response => {
                commit('setProduct', response.data.data);
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductByKeyword({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/integrations/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setSearchResults', response.data.data);
                commit('setTotal', response.data.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    getCartProducts({ commit }, payload) {
        let params = {
            include: payload
        };
        const reponse = Repository.get(`${baseUrl}/integrations/products`, {
            params
        })
            .then(response => {
                commit('setCartProducts', response.data.data.data);
                return response.data.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    getOrders({ commit }, payload) {
        const reponse = Repository.post(
            `${baseUrl}/integrations/orders`,
            payload
        )
            .then(response => {
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    getAllUserOrders({ commit }, payload) {
        const params = {
            per_page: 100,
        };
        const reponse = Repository.get(`${baseUrl}/integrations/orders/?${serializeQuery(params)}`)
            .then(response => {
                commit('setAllUserOrders', response.data.data);
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    getOrderDetails({ commit }, payload) {
        const reponse = Repository.get(
            `${baseUrl}/integrations/orders/${payload}`
        )
            .then(response => {
                commit('setSingleUserOrders', response.data.data.data);
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getWishlishtProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item}`;
            } else {
                query = query + `&id=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/products?${query}`)
            .then(response => {
                commit('setWishlistItems', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCompareProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item}`;
            } else {
                query = query + `&id=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/products?${query}`)
            .then(response => {
                commit('setCompareItems', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductBrands({ commit }) {
        const reponse = await Repository.get(`${baseUrl}/brands`)
            .then(response => {
                commit('setBrands', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductCategories({ state, commit }) {
        let params = {
            page: state.page,
            per_page: state.per_page
        };
        const reponse = await Repository.get(
            `${baseUrl}/integrations/products/categories?${serializeQuery(
                params
            )}`
        )
            .then(response => {
                commit('setCategories', response.data.data);
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductByCategoriesId({ state, commit }, payload) {
        let params = {
            per_page: state.per_page,
            order: 'asc'
        };
        const reponse = await Repository.get(
            `${baseUrl}/integrations/trend-categories-products/?${serializeQuery(params)}&category_id=[${payload}]`
        )
            .then(response => {
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductsByBrands({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/brands?${query}`)
            .then(response => {
                if (response.data) {
                    const brands = response.data;
                    let products = [];
                    brands.forEach(brand => {
                        brand.products.forEach(product => {
                            products.push(product);
                        });
                    });
                    commit('setProducts', products);
                    commit('setTotal', products.length);
                    return products;
                } else {
                    return null;
                }
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getProductsByPriceRange({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setProducts', response.data);
                commit('setSearchResults', response.data);
                commit('setTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
