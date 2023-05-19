<template lang="html">
    <div class="ps-shopping">
        <div class="ps-shopping__header">
            <p>
                <strong class="mr-2">{{ productsTotal }}</strong>
                Products found
            </p>
        </div>
        <div class="ps-shopping__content">
            <div class="ps-shopping-product">
                <div class="placeholder-image-grid" v-if="loading">
                    <content-placeholders
                        :rounded="true"
                        v-for="x in 9"
                        :key="x"
                    >
                        <content-placeholders-img />
                        <content-placeholders-heading />
                    </content-placeholders>
                </div>
                <div class="row" v-else>
                    <div
                        v-for="product in products"
                        class="col-lg-4 col-md-4 col-sm-6 col-6 "
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
            page: 1,
            pageSize: 12
        };
    },
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleChangeViewMode() {
            this.listView = !this.listView;
        },
        async handleChangePagination(value) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const params = {
                page: value * this.pageSize,
                sort_by: 'created_at:desc',
                perPage: 12
            };
            await this.$store.dispatch(
                'website/getProductAndTotalCount',
                params
            );
        }
    },
    computed: {
        ...mapState({
            products: state => state.website.products,
            productsTotal: state => state.website.productsTotal
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
.placeholder-image-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
}
</style>
