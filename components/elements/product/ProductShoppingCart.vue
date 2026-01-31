<template lang="html">
    <div class="ps-product--cart">
        <div class="ps-product__thumbnail">
            <nuxt-link :to="`/store/product/${product.id}/`">
                <img
                    :src="product.images[0] ? product.images[0].src : '' "
                    alt="martfury"
                />
            </nuxt-link>
        </div>
        <div class="ps-product__content">
            <nuxt-link :to="`/store/product/${product.id}/`">
                <a class="ps-product__title">{{ product.name }}</a>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
export default {
    name: 'ProductShoppingCart',
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        baseUrl() {
            return baseUrl;
        }
    }
};
</script>

<style lang="scss" scoped></style>
