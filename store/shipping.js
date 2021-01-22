export const state = () => ({
    personalDetails: null,
    shippingCost: 0,
    deliveryMethod: null
});

export const mutations = {
    setPersonalDetails(state, payload) {
        state.personalDetails = payload;
    },
    setShippingCost(state, payload) {
        state.shippingCost = payload;
    },
    setDeliveryMethod(state, payload) {
        state.deliveryMethod = payload;
    },
};

export const actions = {
    async getpersonalDetails({ commit }, payload) {
        this.$cookies.set('shippingInfo', payload, {
            path: '/store',
            maxAge: 60 * 60 * 24 * 7
        });

        commit('setPersonalDetails', payload);
    },
    async getShippingCost({ commit }, payload) {
        this.$cookies.set('shippingCost', payload, {
            path: '/store',
            maxAge: 60 * 60 * 24 * 7
        });
        commit('setShippingCost', payload);
    },
    async getDeliveryMethod({ commit }, payload) {
        commit('setDeliveryMethod', payload);
    },
};
