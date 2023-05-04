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
                            <!--h1 class="text-uppercase">{{ title }}</h1 -->
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

export default {
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
        })
    },

    async asyncData({ store, params }) {
        const payload = {
            slug: params.id,
            page: 0,
            sort_by: 'created_at:desc',
            perPage: 0
        };

        try {
            await store.dispatch('website/getSubProductCategories', payload);
        } catch (e) {}
    },
    head() {
        try {
            let description = 'ZKTeco | Product Sub-categories';
            let title = 'ZKTeco | Product Sub-categories';
            let keywords = 'ZKTeco | Product Sub-categories';

            if (this.$data.blogDetails[0] !== undefined) {
                let seo = this.$data.blogDetails[0].product_sub_category.SEO;
                description = seo
                    ? seo.description
                    : 'ZKTeco | Product Sub-categories';
                title = seo ? seo.title : 'ZKTeco | Product Sub-categories';
                keywords = seo ? seo.keywords : 'keywords';
            }

            return {
                title: title,
                titleTemplate(title) {
                    return `${title}`;
                },
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: description
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: keywords
                    }
                ]
            };
        } catch (error) {}
    }
};
</script>

<style lang="scss" scoped>
.ps-page__header {
    margin-bottom: 0px;
}
</style>
