<template lang="html">
    <div id="shop-widgets">
        <aside class="widget widget_shop">
            <h4 class="widget-title">
                {{ $t('shop.widget.categories') }}
            </h4>
            <ul v-if="categories !== undefined" class="ps-list--categories">
                <li>
                    <nuxt-link :to="`/website/shop/shop-sidebar-without-banner`">
                        All Categories
                    </nuxt-link>
                </li>
                <li v-for="category in ProductCategories" :key="category.id">
                    
                    <nuxt-link :to="`/website/shop/catgories-product/${category.id}`">
                        {{ category.name }}
                    </nuxt-link>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { getColletionBySlug } from '~/utilities/product-helper';
import { serializeQuery } from '~/repositories/Repository';

// Queries
import Categories from '~/apollo/queries/products/allCategories';

export default {
    name: 'ShopWidget',
    computed: {
        ...mapState({
            categories: state => state.product.categories,
            brands: state => state.product.brands,
            products: state => state.product.products
        }),
        categorySlug() {
            return this.$route;
        },
        ProductCategories() {
            return this.productCategories;
        }
    },
    data() {
        return {
            productCategories: '',
            priceRange: [100, 1000],
            selectedBrands: []
        };
    },
    apollo: {
        productCategories: {
            prefetch: true,
            query: Categories,
        }
    },
    methods: {
        async handleGotoCategory(id) {
            console.log(id)
        },
    }
};
</script>

<style lang="scss" scoped></style>
