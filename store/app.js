export const state = () => ({
    appDrawer: false,
    currentDrawerContent: null,
    currency: '₦',
    preloader: false,
    preloaderStore: false
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
    },

    setPreloader(state, payload) {
        state.preloader = payload;
    },

    setPreloaderStore(state, payload) {
        state.preloaderStore = payload;
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
    removeCookie ({commit}) {
        this.$cookies.remove('cart', {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
        this.$cookies.remove('shippingCost', {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
        this.$cookies.remove('shippingInfo', {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },
};
