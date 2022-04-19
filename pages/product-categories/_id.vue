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
                        <div class="ps-page__header">
                            <h1 class="text-uppercase">{{ title }}</h1>
                        </div>
                        <layout-shop-sidebar-categories
                            :loading="loading"
                            :categories_products="
                                categoriesWithProduct
                                    ? categoriesWithProduct
                                    : 0
                            "
                            :totalProductCategories="
                                totalSingleProductCategories
                            "
                        />
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
import LayoutShopSidebarCategories from '~/components/partials/shop/website/LayoutShopSidebarCategories';

export default {
    components: {
        LayoutShopSidebarCategories,
        ShopWidget,
        BreadCrumb
    },

    head() {
        const name = this.$route.params.id.toUpperCase();
        return {
            titleTemplate: name,
            title: name,
            meta: [
                {
                    hid: 'title',
                    name: 'title',
                    content: name
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'ZKTeco west africa all product list'
                }
            ]
        };
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
            ],
            sort_by: 'created_at:desc'
        };
    },

    computed: {
        ...mapState({
            product: state => state.website.singleProductCategories,
            totalSingleProductCategories: state =>
                state.website.totalSingleProductCategories,
            loading: state => state.website.loading
        }),
        categoriesWithProduct() {
            return this.product ? this.product : [];
        },
        title() {
            return this.$route.params.id.toUpperCase();
        }
    },
    async created() {
        const slug = this.$route.params.id;
        const payload = {
            slug: slug,
            page: 0,
            sort_by: this.sort_by,
            perPage: 0
        };
        const response = await this.$store.dispatch(
            'website/getSingleProductCategories',
            payload
        );

        await this.$store.dispatch(
            'website/getTotalSingleProductCategories',
            slug
        );
    }
};
</script>

<style lang="scss" scoped></style>
