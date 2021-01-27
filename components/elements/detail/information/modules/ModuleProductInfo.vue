<template lang="html">
    <div>
        <h1>{{ product.title }}</h1>
        <div class="ps-product__meta">
            <p>
                Categories:
                <nuxt-link to="/store/shop">
                    <a class="ml-2 text-capitalize">
                        {{ product.categories[0].name }}
                    </a>
                </nuxt-link>
            </p>
            <div class="ps-product__rating">
                <rating />
                <span>({{product.rating_count}} review)</span>
            </div>
        </div>
        <h4 v-if="product.is_sale === true" class="ps-product__price sale">
            <del class="mr-2"> {{currency}} {{ product.sale_price | formatMoney }}</del>
            {{currency}} {{ product.price | formatMoney }}
        </h4>
        <h4 v-else class="ps-product__price">
            {{currency}} {{ product.price | formatMoney }}
        </h4>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Rating from '~/components/elements/Rating';
export default {
    name: 'ModuleProductInfo',
    components: { Rating },
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        ...mapState({
            currency: state => state.app.currency
        })
    }
};
</script>

<style lang="scss" scoped></style>
