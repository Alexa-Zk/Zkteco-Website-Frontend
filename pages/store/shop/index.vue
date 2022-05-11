<template lang="html">
    <div class="ps-page--shop">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-container">
            <shop-banner :images="adImages" />
            <shop-brands :partnersLogo="ourPartners"/>
            <!-- <shop-categories /> -->
            <div class="ps-layout--shop">
                <div class="ps-layout__left">
                    <shop-widget v-if="widgetLoading === false" />
                    <loading v-else />
                </div>
                <div class="ps-layout__right">
                    <!-- <layout-shop v-if="collections !== null" /> -->

                    <layout-shop v-if="products !== null" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import BreadCrumb from '~/components/elements/BreadCrumb';
import LayoutShop from '~/components/partials/shop/LayoutShop';
import ShopWidget from '~/components/partials/shop/modules/ShopWidget';
import ShopBanner from '~/components/partials/shop/sections/ShopBanner';
import ShopBrands from '~/components/partials/shop/sections/ShopBrands';
import ShopCategories from '~/components/partials/shop/sections/ShopCategories';
import Loading from '~/components/elements/commons/Loading';
import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    name: 'index',
   
    components: {
        Loading,
        ShopCategories,
        ShopBrands,
        ShopBanner,
        ShopWidget,
        LayoutShop,
        BreadCrumb,
    },
    transition() {
        return 'fadeIn';
    },
    computed: {
        ...mapState({
            categories: state => state.product.categories,
            products: state => state.product.products
        }),
        adImages() {
            return this.ecommerceImages ? this.ecommerceImages[0]: [];
        },
        ourPartners() {
            return this.homePages ? this.homePages[0].partners.slice(0,8): [];
        }
    },
    layout: 'default-layout',
    data() {
        return {
            widgetLoading: true,
            loading: false,
            ecommerceImages: '',
            homePages: '',
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Shop Default'
                }
            ]
        };
    },
    mounted() {
        this.getEcommerceBanner();
        this.getHomePageImages();
    },
    methods: {
        async getEcommerceBanner () {
            this.loading = true
            const reponse = await Repository.get( `${subBaseUrl}/ecommerce-images`)
                .then(response => {
                    this.ecommerceImages = response.data
                    this.loading = false
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        },
        async getHomePageImages () {
            this.loading = true
            const reponse = await Repository.get( `${subBaseUrl}/home-pages`)
                .then(response => {
                    this.homePages = response.data
                    this.loading = false
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
    },
    async created() {
        const params = {
            _start: 1,
            _limit: 12
        };

        const payload = {};
        
        const products = await this.$store.dispatch(
            'product/getProducts',
            payload
        );
        const total = await this.$store.dispatch(
            'product/getTotalRecords',
            params
        );
        
        const categories = await this.$store.dispatch(
            'product/getProductCategories',
            params
        );
        if (categories) {
            setTimeout(
                function() {
                    this.widgetLoading = false;
                }.bind(this),
                150
            );
        }
    }
};
</script>

<style lang="scss" scoped></style>
