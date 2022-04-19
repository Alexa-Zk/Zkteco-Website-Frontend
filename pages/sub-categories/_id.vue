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
                        <layout-shop-sidebar-sub
                            :loading="loading"
                            :categories_products="
                                sub_product ? sub_product : []
                            "
                            :totalProductCategories="
                                totalSingleProductCategories
                                    ? totalSingleProductCategories
                                    : 0
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
import LayoutShopSidebarSub from '~/components/partials/shop/website/LayoutShopSidebarSub';
//LayoutShopSidebarSub.vue

export default {
    head() {
        const name = this.$route.params.id.toUpperCase();

        return {
            title: 'Product Sub Categories',
            titleTemplate(title) {
                return `${name} - ${title}`;
            },
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: name
                }
            ]
        };
    },
    components: {
        LayoutShopSidebarSub,
        ShopWidget,
        BreadCrumb
    },
    transition() {
        return 'fadeIn';
    },
    layout: 'layout-default-website',
    data() {
        return {
            subProductCategories: '',
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
            sub_product: state => state.website.subProductCategories,
            totalSingleProductCategories: state =>
                state.website.totalSingleProductCategories,
            loading: state => state.website.loading
        }),
        title() {
            return this.$route.params.id.toUpperCase();
        }
    },

    created() {
        const slug = this.$route.params.id;
        const payload = {
            slug: slug,
            sort_by: this.sort_by,
            page: 0,
            perPage: 0
        };
        const response = this.$store.dispatch(
            'website/getSubProductCategories',
            payload
        );

        this.$store.dispatch('website/getTotalSubCategories', slug);
    }
};
</script>

<style lang="scss" scoped>
.ps-page__header {
    margin-bottom: 0px;
}
</style>
