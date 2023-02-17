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
                            <h1 class="text-uppercase">Products</h1>
                        </div>
                        <LayoutProductStore :loading="loading" />
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
import LayoutProductStore from '~/components/partials/shop/website/LayoutProductStore';

export default {
    head() {
        return {
            titleTemplate: 'Products',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'ZKTeco west africa all product list'
                }
            ]
        };
    },
    components: {
        LayoutProductStore,
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
    async asyncData({ store }) {
        try {
            let payload = {};
            const response = await store.dispatch(
                'website/getProductAndTotalCount',
                payload
            );

            return { response };
        } catch (error) {}
    },

    computed: {
        ...mapState({
            loading: state => state.website.loading
        })
    }
};
</script>

<style lang="scss" scoped></style>
