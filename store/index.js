export const actions = {
    async nuxtServerInit({ commit, dispatch }) {
        const cartItems = this.$cookies.get('cart', { parseJSON: true });
        const wishlistItems = this.$cookies.get('wishlist', {
            parseJSON: true
        });
        const compareItems = this.$cookies.get('compare', { parseJSON: true });
        const auth = this.$cookies.get('auth', { parseJSON: true });
        const token = this.$cookies.get('id_token', { parseJSON: true });
        
        const currency = this.$cookies.get('currency', { parseJSON: true });
        const userInfo = this.$cookies.get('userInfo', {parseJSON: true});
        const shippingInfo = this.$cookies.get('shippingInfo', {parseJSON: true});
        const shippingCost = this.$cookies.get('shippingCost', {parseJSON: true});

        if (cartItems && cartItems.cartItems.length > 0) {
            commit('cart/initCart', {
                cartItems: cartItems.cartItems,
                total: cartItems.total,
                amount: cartItems.amount
            });
            let query = [];
            cartItems.cartItems.forEach(item => {
                query.push(item.id);
            });
            await dispatch('product/getCartProducts', query);
        }
        if (wishlistItems) {
            commit('wishlist/initWishlist', {
                items: wishlistItems.items,
                total: wishlistItems.total
            });
        }
        if (compareItems) {
            commit('compare/initCompare', {
                items: compareItems.items,
                total: compareItems.total
            });
        }
        if (auth) {
            commit('auth/setIsLoggedIn', Boolean(auth.isLoggedIn));

        }
        if (token) {
            commit('auth/setAuthToken', token);
        }

        if (currency) {
            commit('app/setCurrency', currency.data);
        }
        if (userInfo) {
            await dispatch('auth/getAuthToken', userInfo.userInfo.token);
            commit('auth/setUserInfo', userInfo.userInfo);
        }
        if (shippingInfo) {
            commit('shipping/setPersonalDetails', shippingInfo);
        }
        if (shippingCost) {
            commit('shipping/setShippingCost', shippingCost);
        }

    }
};
