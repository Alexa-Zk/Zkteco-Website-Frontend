export const state = () => ({
    appDrawer: false,
    currentDrawerContent: null,
    currency: '₦'
});

export const mutations = {
    setAppDrawer(state, payload) {
        state.appDrawer = payload;
    },

    setCurrentDrawerContent(state, payload) {
        state.currentDrawerContent = payload;
    },

    setCurrency(state, payload) {
        state.currency = payload;
    }
};

export const actions = {
    changeCurrency({ commit, state }, payload) {
        commit('setCurrency', payload);
        const cookieParams = {
            data: state.currency
        };

        this.$cookies.set('currency', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },
    removeCookie ({commit}, payload) {
        this.$cookies.remove("cart");
        this.$cookies.remove("shippingCost"),
        this.$cookies.remove("shippingInfo")
    }
};
