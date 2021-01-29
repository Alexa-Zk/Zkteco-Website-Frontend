<template lang="html">
    <div class="form-group--number">
        <button class="up" @click.prevent="handleIncreaseQuantity(product.id)">
            +
        </button>
        <button
            class="down"
            @click.prevent="handleDescreaseQuantity(product.id)"
        >
            -
        </button>
        <input class="form-control" v-model="quantityInput"  type="text" placeholder="1" value="1" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { baseUrl } from '~/repositories/Repository';
export default {
    name: 'ProductShoppingQuantity',
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            quantityInput: 0
        };
    },
    mounted() {
        if (this.cartItems !== null) {
            const cartItem = this.cartItems.find(
                item => item.id === this.product.id
            );
            if (cartItem !== undefined) {
                this.quantityInput = cartItem.quantity;
            } else {
                this.quanquantityInputtity1 = 0;
            }
        } else {
            this.quantityInput = 0;
        }
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            total: state => state.cart.total,
            amount: state => state.cart.amount,
            cartProducts: state => state.product.cartProducts
        }),
        quantity() {
            if (this.cartItems !== null) {
                const cartItem = this.cartItems.find(
                    item => item.id === this.product.id
                );

                if (cartItem !== undefined) {
                    this.quantityInput = cartItem.quantity;
                    return cartItem.quantity;
                } else {
                    this.quantityInput = 0;
                    return null;
                }
            } else {
                this.quantityInput = 0;
                return null;
            }
        }
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
        }
    }
};
</script>

<style lang="scss" scoped></style>
