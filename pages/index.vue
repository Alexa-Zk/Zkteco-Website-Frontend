<template lang="html">
    <main id="homepage-1">
        <home-banner :homeSlider="adSliders" />
        <site-feautures-fullwidth />
        <div class="ps-container">
            <related-posts />
        </div>
        <home-brand :partnersLogo="ourPartners" />
        <newsletters layout="fullwidth" />
    </main>
</template>
<script>
import { mapState } from "vuex";
import HomeBanner from '~/components/partials/homepage/website/default/HomeBanner';
import Newsletters from '~/components/partials/commons/website/Newsletters';
import SiteFeauturesFullwidth from '~/components/partials/commons/website/SiteFeaturesFullwidth';
import RelatedPosts from '~/components/partials/post/website/RelatedPosts';
import HomeBrand from '~/components/partials/shop/sections/website/ShopBrands';

export default {
    data() {
        return {
        };
    },
    components: {
        HomeBanner,
        HomeBrand,
        SiteFeauturesFullwidth,
        Newsletters,
        RelatedPosts
    },

    transition: 'zoom',
    layout: 'layout-default-website',

    computed: {
        ...mapState({
            homePage: state => state.website.homePage
        }),
        adSliders() {
            return this.homePage ? this.homePage[0].sliders : [];
        },
        ourPartners() {
            return this.homePage ? this.homePage[0].partners.slice(0, 8) : [];
        }
        
    },
    created() {
        let payload = {};
        const response = this.$store.dispatch('website/getArticles', payload);
        const homepage = this.$store.dispatch('website/getHomepage', payload);
    }
};
</script>
