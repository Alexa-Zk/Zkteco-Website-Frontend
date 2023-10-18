<template lang="html">
    <div>
        <h1>{{ product.name }}</h1>
        <div class="ps-product__meta">
            <p>
                Categories:
                <nuxt-link
                    :to="
                        `/product-categories/${
                            product.product_categories
                                ? product.product_categories[0]
                                    ? product.product_categories[0].slug !==
                                      undefined
                                        ? product.product_categories[0].slug
                                        : 0
                                    : 0
                                : 0
                        }`
                    "
                >
                    <span
                        class="ml-2 text-capitalize"
                        v-for="category in product.product_categories"
                    >
                        {{ category.name ? category.name : 'NILL' }}
                    </span>
                </nuxt-link>
            </p>
            <!-- <div class="ps-product__rating">
                <rating />
                <span>(1 review)</span>
            </div> -->
        </div>
        <!-- <h4 v-if="product.is_sale === true" class="ps-product__price sale">
            <del class="mr-2"> $ {{ product.sale_price.toFixed(2) }}</del>
            ${{ product.price.toFixed(2) }}
        </h4>
        <h4 v-else class="ps-product__price">
            ${{ product.price.toFixed(2) }}
        </h4> -->
    </div>
</template>

<script>
import Rating from '~/components/elements/Rating';
export default {
    name: 'ModuleProductInfo',
    components: { Rating },
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
