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
                            <h1 class="text-uppercase">
                                {{ sub_product ? sub_product.name : 'Product Sub Categories' }}
                            </h1>
                        </div>
                        <layout-shop-sidebar
                            :categories_products="
                                sub_product ? sub_product : []
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
import LayoutShopSidebar from '~/components/partials/shop/website/LayoutShopSidebarCategories';

export default {
    head() {
        const name = this.sub_product
            ? this.sub_product.name
            : 'Product Sub Categories';
        return {
            titleTemplate: name,
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
            subProductCategories: '',
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
            sub_product: state => state.website.subProductCategories
        })
    },

    created() {
        const slug = this.$route.params.id;
        const response = this.$store.dispatch(
            'website/getSubProductCategories',
            slug
        );
    }
};
</script>

<style lang="scss" scoped>
.ps-page__header {
    margin-bottom: 0px;
}
</style>
