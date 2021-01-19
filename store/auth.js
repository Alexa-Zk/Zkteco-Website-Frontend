import Repository, {
    serializeQuery,
    serializePayload
} from '~/repositories/Repository.js';
import { baseUrl } from '~/repositories/Repository';

export const state = () => ({
    isLoggedIn: false,
    userInfo: null
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },

    setUserInfo(state, payload) {
        state.userInfo = payload;
    }
};

export const actions = {
    setAuthStatus({ commit, state }, payload) {
        commit('setIsLoggedIn', payload);
        const cookieParams = {
            isLoggedIn: state.isLoggedIn
        };

        this.$cookies.set('auth', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },
    
    async login({ commit, state }, payload) {

        const reponse = await Repository.get(`${baseUrl}/integrations/customers/6` )
            .then(response => {
                
                commit('setUserInfo', response.data.data);
                commit('setIsLoggedIn', response.data.status);

                const cookieParams = {
                    userInfo: state.userInfo
                };
        
                this.$cookies.set('userInfo', cookieParams, {
                    path: '/store',
                    maxAge: 60 * 60 * 24 * 7
                });
                
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;

    },

    async register({ commit }, payload) {
        const reponse = await Repository.post(`${baseUrl}/integrations/customers`, payload )
            .then(response => {
                
                commit('setUserInfo', response.data.data);
                commit('setIsLoggedIn', response.data.status);

                const cookieParams = {
                    userInfo: state.userInfo
                };
        
                this.$cookies.set('userInfo', cookieParams, {
                    path: '/store',
                    maxAge: 60 * 60 * 24 * 7
                });
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
};
