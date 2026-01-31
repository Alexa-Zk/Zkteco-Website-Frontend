<template lang="html">
    <div class="ps-product ps-product--wide ps-product--search-result">
        <div class="ps-product__thumbnail">
            <nuxt-link :to="`/store/product/${product.id}/`">
                <img
                    :src="product.images[0] ? product.images[0].src : '' "
                    alt="martfury"
                />
            </nuxt-link>
        </div>
        <div class="ps-product__content">
            <nuxt-link :to="`/store/product/${product.id}/`" class="ps-product__title">
                {{ product.name }}
            </nuxt-link>
            <div class="ps-product__rating">
                <rating />
                <span>{{ product.rating_count }}</span>
            </div>
            <p class="ps-product__price sale">
                {{ currency }}{{ product.price }}
                
            </p>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
import Rating from '~/components/elements/Rating';
import { mapState } from 'vuex';
export default {
    name: 'ProductResult',
    components: { Rating },

    props: {
        product: {
            type: Object,
            require: true,
            default: {}
        }
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            currency: state => state.app.currency
        }),
        baseUrl() {
            return baseUrl;
        }
    }
};
</script>

<style lang="scss" scoped></style>
