<template lang="html">
    <div class="ps-shopping" v-if="products">
        <div class="ps-shopping__header">
            <p>
                <strong class="mr-2">{{ productsTotal }}</strong>
                Products found
            </p>
        </div>
        <div class="ps-shopping__content">
            
            <div v-if="listView === false" class="ps-shopping-product">
                <div class="row">
                    <div
                        v-for="product in products"
                        class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 "
                        :key="product.id"
                    >
                        <product-default :product="product" />
                    </div>
                </div>
                <footer class="mt-60">
                    <v-pagination
                        v-model="page"
                        :total-visible="7"
                        color="green"
                        :length="paginationLenght"
                        @input="handleChangePagination"
                    />
                </footer>
            </div>
            <div v-else class="ps-shopping-product">
                <product-wide
                    v-for="product in products"
                    :product="product"
                    :key="product.id"
                />
                <footer class="mt-30">
                    <v-pagination
                        :total-visible="7"
                        v-model="page"
                        :length="paginationLenght"
                        @input="handleChangePagination"
                    />
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductDefault from '~/components/elements/product/website/ProductDefault';
import ProductWide from '~/components/elements/product/ProductWide';

export default {
    name: 'LayoutShopSidebar',
    components: { ProductWide, ProductDefault },
    data() {
        return {
            listView: false,
            page: 1,
            pageSize: 12,
        };
    },
    methods: {
        handleChangeViewMode() {
            this.listView = !this.listView;
        },
        async handleChangePagination(value) {
            const params = {
                page: value * this.pageSize,
                sort_by: 'created_at:desc',
                perPage: 12,
            };
            await this.$store.dispatch('website/getProducts', params);
        },
    },
    computed: {
        ...mapState({
            products: state => state.website.products,
            productsTotal: state => state.website.productsTotal,
        
        }),
        paginationLenght() {
            if (this.productsTotal % 12 === 0) {
                return parseInt(this.productsTotal / this.pageSize);
            } else {
                return parseInt(this.productsTotal / 12 + 1);
            }
        }
    }
};
</script>

<style lang="scss">
</style>
