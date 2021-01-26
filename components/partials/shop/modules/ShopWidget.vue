<template lang="html">
    <div id="shop-widgets">
        <aside class="widget widget_shop">
            <h4 class="widget-title">
                {{ $t('shop.widget.categories') }}
            </h4>
            <ul v-if="categories !== undefined" class="ps-list--categories">
                <li>
                    <a href="#" @click.prevent="handleGotoCategory(null)">
                        All Categories
                    </a>
                </li>
                <li v-for="category in categories" :key="category.id">
                    <a
                        href="#"
                        @click.prevent="handleGotoCategory(category.id)"
                    >
                        {{ category.name }}
                    </a>
                </li>
            </ul>
        </aside>
        
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { getColletionBySlug } from '~/utilities/product-helper';
import { serializeQuery } from '~/repositories/Repository';

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
        }
    },
    data() {
        return {
            priceRange: [100, 1000],
            selectedBrands: []
        };
    },
    methods: {
        async handleGotoCategory(id) {
            if (id) {
                const url = `/shop?category=${id}`;
                const products = await this.$store.dispatch("product/getProductByCategoriesId", id)
                this.$store.commit('product/setProducts', products[0].product);
                this.$store.commit('product/setProducts', products[0].product);
                this.$store.commit('product/setTotalProducts', products[0].product.length);
                this.$store.commit('product/setTotal', products[0].product.length);
            } else {                
                const allProducts = await this.$store.dispatch('product/getProducts');
                this.$store.commit('product/setProducts', allProducts);
                await this.$store.dispatch('product/getTotalRecords');
            }
        },
    
        async handleFilterByBrand() {
            if (this.selectedBrands) {
                await this.$store.commit(
                    'collection/setQueries',
                    this.selectedBrands
                );

                await this.$store.dispatch(
                    'product/getProductsByBrands',
                    this.selectedBrands
                );
            } else {
                const params = {
                    _start: 1,
                    _limit: 12
                };
                await this.$store.commit('collection/setQueries', null);
                await this.$store.dispatch('product/getTotalRecords', params);
                await this.$store.dispatch('product/getProducts', params);
            }
        },

        async handleFilterByPriceRagne() {
            const params = {
                price_gt: this.priceRange[0],
                price_lt: this.priceRange[1],
                _start: 1,
                _limit: 999
            };
            console.log(this.priceRange);
            await this.$store.dispatch(
                'product/getProductsByPriceRange',
                params
            );
            await this.$router.push(`/search?${serializeQuery(params)}`);
        }
    }
};
</script>

<style lang="scss" scoped></style>
