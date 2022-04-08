import Repository, {
    serializeQuery,
    serializePayload
} from '~/repositories/Repository.js';
import { baseUrl, subBaseUrl } from '~/repositories/Repository';
import axios from 'axios';

export const state = () => ({
    isLoggedIn: false,
    isLoggedInToDownload: false,
    userInfo: null,
    userInfoDownload: null,
    authToken: null,
    authTokenForDownloads: null,
    singleUserInformation: null,
    billing: null,
    shipping: null
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
    setUserInfo(state, payload) {
        state.userInfo = payload;
    },
    setIsLoggedInDownload(state, payload) {
        state.isLoggedInToDownload = payload;
    },
    setUserInfoDownload(state, payload) {
        state.userInfoDownload = payload;

        this.$cookies.set('download_user_info', payload, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },
    setAuthToken(state, payload) {
        state.authToken = payload;

        this.$cookies.set('id_token', payload, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },
    setAuthTokenForDownloads(state, payload) {
        state.authTokenForDownloads = payload;
        state.isLoggedInToDownload = true;

        this.$cookies.set('download_token', payload, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },
    setUserInformation(state, payload) {
        state.singleUserInformation = payload;
    },
    setBilling(state, payload) {
        state.billing = payload;
    },
    setShipping(state, payload) {
        state.shipping = payload;
    }
};

export const actions = {
    getAuthToken({ commit }, payload) {
        commit('setAuthToken', payload);
    },

    logoutDownloadToken({ commit }) {
        commit('setIsLoggedInDownload', false);

        this.$cookies.remove('download_token', {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    async login({ commit, state }, payload) {
        const reponse = await Repository.post(
            `${baseUrl}/integrations/customers/login`,
            payload
        )
            .then(response => {
                commit('setUserInfo', response.data.data);
                commit('setIsLoggedIn', response.data.status);
                commit('setAuthToken', response.data.data.token);

                const cookieParams = {
                    userInfo: state.userInfo
                };

                this.$cookies.set('userInfo', cookieParams, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                });

                return response.data;
            })
            .catch(error => ({ error: error.response.data }));
        return reponse;
    },

    async loginDownloads({ commit, state }, payload) {
        const reponse = await Repository.post(
            `${subBaseUrl}/auth/local`,
            payload
        )
            .then(response => {
                const res =
                    response.data == null ||
                    response.data == undefined ||
                    response.data == ''
                        ? ''
                        : response.data;
                commit('setUserInfoDownload', res);
                commit('setIsLoggedInDownload', true);
                commit('setAuthTokenForDownloads', res.jwt);
                return response;
            })
            .catch(error => ({ error: error.response.data }));
        return reponse;
    },

    async registerDownload({ commit }, payload) {
        const reponse = await Repository.post(
            `${subBaseUrl}/auth/local/register`,
            payload
        )
            .then(response => {
                return response;
            })
            .catch(error => ({ error: error.response }));
        return reponse;
    },

    async forgetPassword({ commit }, payload) {
        const reponse = await Repository.post(
            `${subBaseUrl}/auth/forgot-password`,
            payload
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async register({ commit }, payload) {
        const reponse = await Repository.post(
            `${baseUrl}/integrations/customers`,
            payload
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async updateUserInformation({ dispatch }, payload) {
        const token = this.getters['auth/getToken'];
        const reponse = await Repository.put(
            `${baseUrl}/integrations/customers`,
            payload,
            { headers: { Authorization: token } }
        )
            .then(response => {
                dispatch('getUserInformation');
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async updateBilling({ commit, dispatch }, payload) {
        const token = this.getters['auth/getToken'];
        const reponse = await Repository.put(
            `${baseUrl}/integrations/customers/billing`,
            payload,
            {
                headers: {
                    Authorization: token
                }
            }
        )
            .then(response => {
                dispatch('getBilling');
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async updateShipping({ commit, dispatch }, payload) {
        const token = this.getters['auth/getToken'];
        const reponse = await Repository.put(
            `${baseUrl}/integrations/customers/shipping`,
            payload,
            {
                headers: {
                    Authorization: token
                }
            }
        )
            .then(response => {
                dispatch('getShipping');
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getBilling({ commit }) {
        const token = this.getters['auth/getToken'];
        const reponse = await Repository.get(
            `${baseUrl}/integrations/customers/billing`,
            {
                headers: {
                    Authorization: token
                }
            }
        )
            .then(response => {
                commit(
                    'setBilling',
                    response.data.data !== '' ? response.data.data : {}
                );
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getShipping({ commit }) {
        const token = this.getters['auth/getToken'];
        const reponse = await Repository.get(
            `${baseUrl}/integrations/customers/shipping`,
            {
                headers: {
                    Authorization: token
                }
            }
        )
            .then(response => {
                commit(
                    'setShipping',
                    response.data.data !== '' ? response.data.data : {}
                );
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getUserInformation({ commit, state }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/integrations/customers/logged-in`,
            {
                headers: {
                    Authorization: state.authToken
                }
            }
        )
            .then(response => {
                commit('setUserInformation', response.data.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};

export const getters = {
    getToken: state => {
        return state.authToken;
    }
};
