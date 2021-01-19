export const state = () => ({
    personalDetails: null,
    shippingCost: null,
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
        commit('setPersonalDetails', payload);
    },
    async getShippingCost({ commit }, payload) {
        commit('setShippingCost', payload);
    },
    async getDeliveryMethod({ commit }, payload) {
        commit('setDeliveryMethod', payload);
    },
};
