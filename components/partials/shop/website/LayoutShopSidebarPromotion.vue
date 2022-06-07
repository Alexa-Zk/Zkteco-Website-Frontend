<template lang="html">
    <div class="ps-shopping" v-if="categories_products">
        <div class="ps-page__header" v-if="layout !== 'promotion'">
            <h1 class="text-uppercase"> {{categories_products.name}}  </h1>
        </div>
        <div class="ps-shopping__header">
            <p>
                <strong class="mr-2">{{totals}}</strong>
                Products found
            </p>
        </div>
        <div class="ps-shopping__content">
            <div class="placeholder-image-grid" v-if="loading">
                <content-placeholders :rounded="true" v-for="x in 9" :key="x">
                    <content-placeholders-img />
                    <content-placeholders-heading />
                </content-placeholders>
            </div>
            <div v-else class="ps-shopping-product">
                <div class="row">
                    <div
                        v-for="product in categories_products.products"
                        class="col-lg-4 col-md-4 col-sm-6 col-6 "
                        :key="product.id"
                    >
                        <product-default :product="product" layout="promotion" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductDefault from '~/components/elements/product/website/PromotionProductDefault';
import ProductWide from '~/components/elements/product/ProductWide';

export default {
    name: 'LayoutShopSidebar',
    components: { ProductWide, ProductDefault },
    props: ['categories_products', 'layout'],
    data() {
        return {
            listView: false,
            page: 1,
            pageSize: 12
        };
    },
    methods: {
        handleChangeViewMode() {
            this.listView = !this.listView;
        }
    },
    computed: {
        totals() {
            return this.categories_products.products ? this.categories_products.products.length : 0;
        },
        ...mapState({
            loading: state => state.website.loading
        })
    }
};
</script>

<style lang="scss" scoped>
.placeholder-image-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
}
</style>
