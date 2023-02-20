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
            return this.$route.params.id
                .split('-')
                .join(' ')
                .toUpperCase();
        }
    },
    // async created() {
    //     return await this.productOnLoad();
    // },
    methods: {
        // async productOnLoad() {
        //     console.log(' XX:: ', this.$route.params.id);
        //     let id = this.$route.params.id;
        //     if (id != null || id != undefined || id != undefined) {
        //         const payload = {
        //             slug: id,
        //             page: 0,
        //             sort_by: 'created_at:desc',
        //             perPage: 0
        //         };
        //         await this.$store.dispatch(
        //             'website/getProductCategories',
        //             payload
        //         );
        //     }
        // }
    },
    async asyncData({ store, params }) {
        let id = params.id;
        if (id != null || id != '' || id != undefined) {
            const payload = {
                slug: id,
                page: 0,
                sort_by: 'created_at:desc',
                perPage: 0
            };

            await store.dispatch('website/getProductCategories', payload);
        }
        // return await this.productOnLoad();
        // const payload = {
        //     slug: params.id,
        //     page: 0,
        //     sort_by: 'created_at:desc',
        //     perPage: 0
        // };
        // try {
        //     const blogDetails = await store.dispatch(
        //         'website/getSingleProductCategories',
        //         payload
        //     );
        //     await store.dispatch(
        //         'website/getTotalSingleProductCategories',
        //         params.id
        //     );
        //     return {
        //         blogDetails
        //     };
        // } catch (e) {}
    }
    // head() {
    /*
        let description = 'ZKTeco | Product Categories';
        let title = 'ZKTeco | Product Categories';
        let keywords = 'ZKTeco | Product Categories';

        if (this.$data.blogDetails[0] !== undefined) {
            let seo = this.$data.blogDetails[0].product_category.SEO;
            description = seo ? seo.description : 'ZKTeco | Product Categories';
            title = seo ? seo.title : 'ZKTeco | Product Categories';
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
        */
    // }
};
</script>

<style lang="scss" scoped></style>
