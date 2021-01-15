export const state = () => ({
    personalDetails: null
});

export const mutations = {
    setPersonalDetails(state, payload) {
        state.personalDetails = payload;
    },
};

export const actions = {
    async getpersonalDetails({ commit }, payload) {
        commit('setPersonalDetails', payload);
    },

};
