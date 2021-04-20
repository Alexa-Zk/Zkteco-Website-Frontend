<template lang="html">
    <div class="ps-page--single">
        <div class="ps-section--custom">
            <div class="ps-container">
                <div class="ps-section__content">
                    <div class="ps-layout--shop">
                        <div class="ps-layout__left">
                            <shop-widget />
                        </div>
                        <div class="ps-layout__right">
                            <div class="ps-page__header">
                                <h1 class="text-uppercase">
                                    {{sub_product ? sub_product.name : 'Easter Promotion'}} 
                                </h1>
                            </div>
                            <div class="ps-banner">
                                <nuxt-link to="/promotions">
                                    <img
                                        src="~/static/img/website/promo.png"
                                        alt="Easter Promotion ZKTeco"
                                    />
                                </nuxt-link>
                            </div>
                            <layout-shop-sidebar
                                layout="promotion"
                                :categories_products="
                                    sub_product ? sub_product : []
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ShopWidget from '~/components/partials/shop/modules/website/ShopWidget';
import LayoutShopSidebar from '~/components/partials/shop/website/LayoutShopSidebarPromotion';

export default {
    head() {
        return {
            titleTemplate: `${this.sub_product ? this.sub_product.name : '' } - ZKTeco West Africa`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `${this.sub_product ? this.sub_product.name : ''} Promotion on ZKTeco West Africa`
                }
            ]
        };
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    components: {
        LayoutShopSidebar,
        ShopWidget
    },
    data: () => {
        return {};
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
            'easter-promo'
        );
    }
};
</script>

<style lang="scss" scoped>
.ps-section--custom {
    .ps-banner {
        height: 350px;
        margin: 40px 0px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .ps-page__header {
        h1 {
            margin-bottom: 20px;
            font-weight: 700;
            color: #000;
            font-size: 24px;
        }
    }
}

</style>
