<template lang="html">
    <table class="table ps-table--responsive ps-table--shopping-cart">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in cartProducts" :key="product.id">
                <td data-label="Product">
                    <product-shopping-cart :product="product" />
                </td>
                <td data-label="Price" class="price"> {{currency}} {{ product.price | formatMoney }}</td>
                <td data-label="Quantity">
                    <product-shopping-table :product="product" />
                </td>
                <td data-label="Total">
                    {{currency}} {{
                        (cartItems[index].quantity * product.price).toFixed(2) | formatMoney
                    }}
                </td>
                <td data-label="Action">
                    <a
                        href="#"
                        @click.prevent="handleRemoveProductFromCart(product)"
                    >
                        <i class="icon-cross"></i>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState } from 'vuex';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';
import ProductShoppingTable from '~/components/elements/product/ProductShoppingTable';

export default {
    name: 'TableShoppingCart',
    components: { ProductShoppingCart, ProductShoppingTable },
    data () {
        return {
        }
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            total: state => state.cart.total,
            amount: state => state.cart.amount,
            cartProducts: state => state.product.cartProducts,
            currency: state => state.app.currency
        }),
        quantity() {
            if (this.cartItems !== null) {
                const cartItem = this.cartItems.find(
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
        },
    },
    methods: {
        async loadCartProducts() {
            const cookieCart = this.$cookies.get('cart', { parseJSON: true });
            let queries = [];
            cookieCart.cartItems.forEach(item => {
                queries.push(item.id);
            });
            if (this.cartItems.length > 0) {
                await this.$store.dispatch('product/getCartProducts', queries);
            } else {
                this.$store.commit('product/setCartProducts', null);
            }
        },
        handleRemoveProductFromCart(product) {
            const cartItem = this.cartItems.find(
                item => item.id === product.id
            );
            console.log(cartItem)
            this.$store.dispatch('cart/removeProductFromCart', cartItem);
            // this.loadCartProducts();
        },
        handleIncreaseQuantity(payload) {
            this.$store.dispatch('cart/increaseCartItemQuantity', payload);
            this.loadCartProducts();
            this.quantity++;
        },

        handleDescreaseQuantity(payload) {
            this.$store.dispatch('cart/decreaseCartItemQuantity', payload);
            this.loadCartProducts();
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
    }
};
</script>

<style lang="scss" scoped></style>
