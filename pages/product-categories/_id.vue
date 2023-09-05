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

import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    components: {
        LayoutShopSidebarCategories,
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
            ],
            sort_by: 'created_at:desc'
        };
    },

    computed: {
        ...mapState({
            singleProductCategories: state =>
                state.website.singleProductCategories,
            totalSingleProductCategories: state =>
                state.website.totalSingleProductCategories,
            loading: state => state.website.loading
        }),
        categoriesWithProduct() {
            return this.singleProductCategories
                ? this.singleProductCategories
                : [];
        },
        title() {
            return this.$route.params.id
                .split('-')
                .join(' ')
                .toUpperCase();
        }
    },
    async asyncData({ store, params, Repository }) {
        const payload = {
            slug: params.id,
            page: 0,
            sort_by: 'created_at:desc',
            perPage: 0
        };
        const category = await store.dispatch(
            'website/getProductCategoryBySlug',
            `${params.id}`
        );
        try {
            const blogDetails = await store.dispatch(
                'website/getSingleProductCategories',
                payload
            );

            return {
                blogDetails,
                category
            };
        } catch (e) {}
    },
    head() {
        let description = 'ZKTeco | Product Categories';
        let title = 'ZKTeco | Product Categories';
        let keywords = 'ZKTeco | Product Categories';

        //console.log('reponse::', this.$data.category.data[0].SEO);
        //console.log('blogDetails::', this.$data.blogDetails);

        if (this.$data.category.data[0] !== undefined) {
            const metaTag = this.$data.category.data[0];
            if (metaTag.SEO != null) {
                let seo = metaTag?.SEO;
                description = seo
                    ? seo.description
                    : 'ZKTeco | Product Categories';
                title = seo ? seo.title : 'ZKTeco | Product Categories';
                keywords = seo ? seo.keywords : 'keywords';
            }
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
    }
};
</script>

<style lang="scss" scoped></style>
