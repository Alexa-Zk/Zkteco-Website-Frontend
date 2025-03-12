<template lang="html">
    <div>
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-page--shop" id="shop-sidebar">
            <div class="container">
                <div class="ps-layout--shop">
                    <div class="ps-layout__left">
                        <shop-widget />
                    </div>
                    <div class="ps-layout__right">
                        <h2>{{ title }}</h2>

                        <div class="ps-section__content" v-if="armaturas">
                            <article class="content_wrapper">
                                <div
                                    class="ps-content"
                                    v-html="armaturas.content"
                                ></div>
                            </article>
                        </div>

                        <div class="row" v-if="armaturaProducts">
                            <div
                                v-for="product in armaturaProducts"
                                class="col-lg-4 col-md-4 col-sm-6 col-6 "
                                :key="product.id"
                            >
                                <!-- <product-category-default :product="product" /> -->
                                <armatura-products :product="product" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopWidget from '~/components/partials/shop/modules/website/ShopWidget';
import LayoutShopSidebarCategories from '~/components/partials/shop/website/LayoutShopSidebarCategories';
import ArmaturaProducts from '~/components/elements/product/website/ArmaturaProducts';
import ProductCategoryDefault from '~/components/elements/product/website/ProductCategoryDefault';
import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    components: {
        LayoutShopSidebarCategories,
        ShopWidget,
        ArmaturaProducts,
        ProductCategoryDefault,
        BreadCrumb,
    },

    transition() {
        return 'fadeIn';
    },
    layout: 'layout-default-website',
    data() {
        return {
            loading: false,
            armaturaProducts: null,
            armaturas: null,
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'All Products'
                }
            ],
            sort_by: 'created_at:desc'
        };
    },

    computed: {
        title() {
            return 'Armatura';
        }
    },
    mounted() {
        this.getArmaturas();
        this.fetchAmarturaProducts();
    },
    methods: {
        async fetchAmarturaProducts() {
            const payload = {
                slug: 'armatura',
                page: 0,
                sort_by: 'created_at:desc',
                perPage: 0
            };
            const products = await this.$store.dispatch(
                'website/getSingleProductCategories',
                payload
            );
            this.armaturaProducts = products;
        },
        async getArmaturas() {
            this.loading = true;
            const reponse = await Repository.get(`${subBaseUrl}/armaturas`)
                .then(response => {
                    this.armaturas = response.data[0];
                    this.loading = false;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
    }
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px){
    .ps-product {
        padding: 29px;
    }
}
</style>
