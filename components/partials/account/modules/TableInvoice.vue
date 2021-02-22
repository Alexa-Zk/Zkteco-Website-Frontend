<template lang="html">
    <table class="table ps-table--shopping-cart">
        <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>
                    <ProductCart :product="product" />
                </td>
                <td>{{getCartItemIndex(product)}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {mapState} from 'vuex';
import ProductCart from '~/components/elements/product/ProductCart';
export default {
    name: 'TableInvoice',
    components: { ProductCart },
    props: {
        products: {
            type: Array,
            default: []
        }
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            total: state => state.cart.total,
            amount: state => state.cart.amount,
            cartProducts: state => state.product.cartProducts,
            currency: state => state.app.currency
        })
    },
    methods: {
        getCartItemIndex (product) {
            const selected = this.cartItems.filter(item => item.id === product.id)
            return selected[0] ? selected[0].quantity : 0
        }
    }
};
</script>

<style lang="scss" scoped></style>
