<template lang="html">
    <div class="ps-shopping">
        <div class="ps-shopping__header">
            <p>
                <strong class="mr-2">{{ totals }}</strong>
                Products found
            </p>
            <div class="ps-shopping__actions">
                
                <div class="ps-shopping__view">
                    <p>View</p>
                    <ul class="ps-tab-list">
                        <li :class="listView === true ? 'active' : ''">
                            <a href="#" @click.prevent="handleChangeViewMode">
                                <i class="icon-grid"></i>
                            </a>
                        </li>
                        <li :class="listView !== true ? 'active' : ''">
                            <a href="#" @click.prevent="handleChangeViewMode">
                                <i class="icon-list4"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
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
                <footer class="mt-30">
                    <!-- <v-pagination
                        v-model="page"
                        :length="paginationLenght"
                        @input="handleChangePagination"
                    /> -->
                </footer>
            </div>
            <div v-else class="ps-shopping-product">
                <product-wide
                    v-for="product in products"
                    :product="product"
                    :key="product.id"
                />
                <footer class="mt-30">
                    <!-- <v-pagination
                        v-model="page"
                        :length="paginationLenght"
                        @input="handleChangePagination"
                    /> -->
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductDefault from '~/components/elements/product/website/ProductDefault';
import ProductWide from '~/components/elements/product/ProductWide';

// Queries
import Products from '~/apollo/queries/products/allProducts';


export default {
    name: 'LayoutShopSidebar',
    components: { ProductWide, ProductDefault },
    data() {
        return {
            listView: false,
            page: 1,
            pageSize: 12,
            products: ''
        };
    },
    apollo: {
        products: {
            prefetch: true,
            query: Products,
        }
    },
    methods: {
        handleChangeViewMode() {
            this.listView = !this.listView;
        }
    },
    computed: {
        totals() {
            return this.products.length
        }
    }
};
</script>

<style lang="scss" scoped></style>
