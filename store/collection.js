import Repository, {
    serializeQuery,
    baseUrl
} from '~/repositories/Repository.js';

export const state = () => ({
    collections: null,
    categories: null,
    queries: null,
    productCategories: null
});

export const mutations = {
    setCollections(state, payload) {
        state.collections = payload;
    },

    setCategories(state, payload) {
        state.categories = payload;
    },
    setQueries(state, payload) {
        state.queries = payload;
    },

    setProductCategories(state, payload) {
        state.productCategories = payload;
    }
};

export const actions = {
    async getCollectionsBySlugs({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/collections?${query}`)
            .then(response => {
                commit('setCollections', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getCategoriesBySlugs({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(
            `${baseUrl}/product-categories?${query}`
        )
            .then(response => {
                commit('setCategories', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getCollectionById({ commit }, payload) {
        let params = {
            order: 'asc',
            per_page: 10,
        }
        const reponse = await Repository.get(
            `${baseUrl}/integrations/trend-categories-products/?${serializeQuery(params)}&category_id=[26,22,24]`
        )
            .then(response => {
                commit('setProductCategories', response.data.data);
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    
};
