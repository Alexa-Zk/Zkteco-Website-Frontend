<template lang="html">
    <div>
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-page--shop" id="shop-sidebar">
            <div class="container">
                <div class="ps-layout--shop">
                    <div class="ps-layout__left">
                        <shop-widget />
                    </div>
                    <div class="ps-layout__right" v-if="!loading">
                        <div class="ps-page__header">
                            <h1 class="text-uppercase">{{SubProductCategories.name}}</h1>
                        </div>
                        <layout-shop-sidebar :products="SubProductCategories.products" />
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

// Queries
import SubCategoriesWithProduct from '~/apollo/queries/products/subCategoriesWithProduct';


export default {
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
            ],
            loading: 0
        };
    },
    apollo: {
        $loadingKey: 'loading',
        subProductCategories: {
            prefetch: true,
            query: SubCategoriesWithProduct,
            variables() {
                return { id: this.$route.params.id };
            }
        }
    },
    computed: {
        SubProductCategories() {
            return this.subProductCategories[0];
        }
    },
    watch: {
        loading(newState, OldState) {
            if (this.loading === 1) {
                 const response = this.$store.commit("app/setPreloader", true)
            } else {
                 const response = this.$store.commit("app/setPreloader", false)
            }  
        }
    }
};
</script>

<style lang="scss" scoped></style>
