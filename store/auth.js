import Repository, {
    serializeQuery,
    serializePayload
} from '~/repositories/Repository.js';
import { baseUrl } from '~/repositories/Repository';
import axios from 'axios';

export const state = () => ({
    isLoggedIn: false,
    userInfo: null,
    authToken: null,
    singleUserInformation: null
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
    setUserInfo(state, payload) {
        state.userInfo = payload;
    },
    setAuthToken(state, payload) {
        state.authToken = payload;

        this.$cookies.set('id_token', payload, {
            path: '/store',
            maxAge: 60 * 60 * 24 * 7
        });
        axios.defaults.headers.common['Authorization'] = payload;
    },
    setUserInformation(state, payload) {
        state.singleUserInformation = payload;
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

    getAuthToken({ commit }, payload) {
        commit('setAuthToken', payload); 
    },
    
    async login({ commit, state }, payload) {

        const reponse = await Repository.post(`${baseUrl}/integrations/customers/login`, payload)
            .then(response => {

                commit('setUserInfo', response.data.data);
                commit('setIsLoggedIn', response.data.status);
                commit('setAuthToken', response.data.data.token);
            
                const cookieParams = {
                    userInfo: state.userInfo
                };

                this.$cookies.set('userInfo', cookieParams, {
                    path: '/store',
                    maxAge: 60 * 60 * 24 * 7
                });

                axios.defaults.headers.common['Authorization'] = response.data.data.token;
                                
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;

    },

    async register({ commit }, payload) {
        const reponse = await Repository.post(`${baseUrl}/integrations/customers`, payload )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getUserInformation({ commit }, payload) {
        const reponse = await Repository.get(`${baseUrl}/integrations/customers/logged-in`)
            .then(response => {
                
                commit('setUserInformation', response.data.data);  
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
};
