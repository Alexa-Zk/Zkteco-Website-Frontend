const calculateAmount = obj =>
    Object.values(obj)
        .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
        .toFixed(2);

export const state = () => ({
    total: 0,
    amount: 0,
    cartItems: [],
    loading: false,
    quantity: 0
});

export const mutations = {
    initCart(state, payload) {
        state.cartItems = payload.cartItems;
        state.amount = payload.amount;
        state.total = payload.total;
    },

    setLoading(state, payload) {
        state.loading = payload;
    },

    clearState(state, payload) {
        state.total = 0;
        state.amount = 0;
        state.cartItems = [];
        state.quantity = 0
    },

    setQuantity(state, payload) {
        let existItem = state.cartItems.find(item => item.id == payload);
        state.quantity = existItem ? existItem.quantity : 0;
    },

    addItem(state, payload) {
        if (state.cartItems !== null) {
            let existItem = state.cartItems.find(item => item.id === payload.id);
            if (existItem) {
                existItem.quantity += payload.quantity;
            } else {
                state.cartItems.push(payload);
            }
            state.total++;
        } else {
            state.cartItems.push(payload);
            state.total = 1;
        }
        state.amount = calculateAmount(state.cartItems);
    },

    removeItem: (state, payload) => {
        const index = state.cartItems.findIndex(item => item.id === payload.id);
        state.total = state.total - payload.quantity;
        state.cartItems.splice(index, 1);
        state.amount = calculateAmount(state.cartItems);
        if (state.cartItems.length === 0) {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
        }
    },

    increaseItemQuantity(state, payload) {
        let selectedItem = state.cartItems.find(item => item.id == payload);
        if (selectedItem) {
            selectedItem.quantity++;
            state.total++;
            state.amount = calculateAmount(state.cartItems);
        }
    },

    decreaseItemQuantity(state, payload) {
        let selectedItem = state.cartItems.find(item => item.id == payload);
        if (selectedItem && selectedItem.quantity > 1) {
            selectedItem.quantity--;
            state.total--;
            state.amount = calculateAmount(state.cartItems);
        }
    },

    clearCart: state => {
        state.cartItems = [];
        state.amount = 0;
        state.total = 0;
    }
};

export const actions = {
    addProductToCart({ commit, state }, payload) {
        commit('addItem', payload);

        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });

    },

    clearAllCartState({ commit, state }, payload) {
        commit('clearState', payload);
    },

    removeProductFromCart({ commit, state }, payload) {
        commit('removeItem', payload);
        
        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    increaseCartItemQuantity({ commit, state }, payload) {

        commit('increaseItemQuantity', payload);
        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    getQuantity({ commit }, payload) {
        commit('setQuantity', payload);
    },

    decreaseCartItemQuantity({ commit, state }, payload) {
        commit('decreaseItemQuantity', payload);
        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    clearCart({ commit }) {
        commit('clearCart');
        const cookieParams = {
            total: 0,
            amount: 0,
            cartItems: []
        };
        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
};

export const getters = {
    getCartQuantity: state => {
        if (this.state.cartItems !== null) {
            const cartItem = this.state.cartItems.find(
                item => item.id === this.product.id
            );

            if (cartItem !== undefined) {
                return cartItem.quantity;
            } else {
                return null;
            }
        } else {
            return null;
        }
        return this.state.cartItems;
    },
};
