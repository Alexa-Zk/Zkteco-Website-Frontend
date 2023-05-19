<template lang="html">
    <div class="ps-shopping">
        <div class="ps-shopping__header">
            <p>
                <strong class="mr-2">{{ totalProductCategories }}</strong>
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
                        v-for="product in categories_products"
                        class="col-lg-4 col-md-4 col-sm-6 col-6 "
                        :key="product.id"
                    >
                        <product-category-default :product="product" />
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
//import ProductDefault from '~/components/elements/product/website/ProductDefault';
import ProductCategoryDefault from '~/components/elements/product/website/ProductCategoryDefault';

import ProductWide from '~/components/elements/product/ProductWide';

export default {
    name: 'LayoutShopSidebarCategories',
    components: { ProductWide, ProductCategoryDefault },
    props: ['categories_products', 'totalProductCategories', 'loading'],
    data() {
        return {
            listView: false,
            sort_by: 'created_at:desc',
            page: 1,
            pageSize: 12
        };
    },
    methods: {
        handleChangeViewMode() {
            this.listView = !this.listView;
        },
        async handleChangePagination(value) {
            const page = parseInt(value) === 1 ? 1 : 1 + (value - 1) * 12;
            let nextStartPage = parseInt(page);

            const slug = this.$route.params.id;
            const payload = {
                slug: slug,
                page: nextStartPage,
                sort_by: this.sort_by,
                perPage: this.pageSize
            };

            await this.$store.dispatch(
                'website/getSingleProductCategories',
                payload
            );
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },
    computed: {
        totals() {
            return this.totalProductCategories
                ? this.totalProductCategories
                : 0;
        }
    },

    computed: {
        paginationLenght() {
            return Math.ceil(this.totalProductCategories / 12);
        }
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
