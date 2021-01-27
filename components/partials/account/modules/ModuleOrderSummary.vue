<template lang="html">
    <div class="ps-form__orders ps-block--checkout-order">
        <h3 v-if="shipping === false">Your Order</h3>
        <div class="ps-block--checkout-order">
            <div class="ps-block__content">
                <figure>
                    <figcaption>
                        <strong>Product</strong>
                        <strong>total</strong>
                    </figcaption>
                </figure>
                <figure class="ps-block__items">
                    <nuxt-link
                        v-for="(product, index) in cartProducts"
                        :to="`/store/product/${product.id}`"
                        :key="product.id"
                        class="ps-product__title"
                    >
                        {{ product.name }}
                        <br />
                        {{ cartItems[index].quantity }} x {{currency}} {{
                            product.price | formatMoney
                        }}
                    </nuxt-link>
                </figure>
                <figure>
                    <figcaption>
                        <strong>Subtotal</strong>
                        <small>{{currency}} {{ amount | formatMoney }}</small>
                    </figcaption>
                </figure>
                <figure v-if="shipping === true">
                    <figcaption>
                        <strong>Shipping</strong>
                        <small>{{currency}} {{shippingCost | formatMoney}}</small>
                    </figcaption>
                </figure>
                <figure v-else class="ps-block__shipping">
                    <h3>Shipping</h3>
                    <p>Calculated at next step</p>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ModuleOrderSummary',
    props: {
        shipping: {
            type: Boolean,
            default: () => false
        }
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            total: state => state.cart.total,
            amount: state => state.cart.amount,
            cartProducts: state => state.product.cartProducts,
            shippingCost: state => state.shipping.shippingCost,
            currency: state => state.app.currency
        })
    }
};
</script>

<style lang="scss" scoped></style>
