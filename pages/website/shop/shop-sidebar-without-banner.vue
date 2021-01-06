<template lang="html">
    <div>
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-page--shop" id="shop-sidebar">
            <div class="container">
                <div class="ps-layout--shop">
                    <div class="ps-layout__left">
                        <shop-widget
                            v-if="categories !== null && brands !== null"
                        />
                    </div>
                    <div class="ps-layout__right">
                        <div class="ps-page__header">
                            <h1 class="text-uppercase">Products</h1>
                        </div>
                        <layout-shop-sidebar v-if="collections !== null" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopWidget from '~/components/partials/shop/modules/website/ShopWidget';
import LayoutShopSidebar from '~/components/partials/shop/website/LayoutShopSidebar';

export default {
    components: {
        LayoutShopSidebar,
        ShopWidget,
        BreadCrumb
    },
    transition() {
        return 'fadeIn';
    },
    layout: 'layout-default-website',
    data() {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'All Products'
                }
            ]
        };
    },
    computed: {
        ...mapState({
            collections: state => state.collection.collections,
            categories: state => state.product.categories,
            brands: state => state.product.brands
        })
    },
    async created() {
        const params = {
            _start: 1,
            _limit: 12
        };
        const collectionsParams = [
            'shop_best_sale_items',
            'shop-recommend-items'
        ];
        const collections = await this.$store.dispatch(
            'collection/getCollectionsBySlugs',
            collectionsParams
        );
        const products = await this.$store.dispatch(
            'product/getProducts',
            params
        );
        const brands = await this.$store.dispatch(
            'product/getProductBrands',
            params
        );
        const categories = await this.$store.dispatch(
            'product/getProductCategories',
            params
        );
    }
};
</script>

<style lang="scss" scoped></style>
