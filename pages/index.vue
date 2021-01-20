<template lang="html">
    <main id="homepage-1">
        <!-- <home-banner /> -->
        <home-banner :homeSlider="adSliders"/>
        <site-feautures-fullwidth />
        <div class="ps-container">
            <related-posts />
        </div>
        <home-brand :partnersLogo="ourPartners" />
        <newsletters layout="fullwidth" />
        <subscriber-panel />
    </main>
</template>
<script>
import { mapState } from 'vuex';
import HomeBanner from '~/components/partials/homepage/website/default/HomeBanner';
import HomeBrand from '~/components/partials/shop/sections/website/ShopBrands';
import Newsletters from '~/components/partials/commons/website/Newsletters';
import SiteFeauturesFullwidth from '~/components/partials/commons/website/SiteFeaturesFullwidth';
import RelatedPosts from '~/components/partials/post/website/RelatedPosts';
import SubscriberPanel from '~/components/shared/SubscriberPanel';
// Queries
import homePages from '~/apollo/queries/homePages';

export default {
    data() {
        return {
            homePages: '',
            articles: ''
        };
    },
    apollo: {
        homePages: {
            prefetch: true,
            query: homePages
        },
    },
    components: {
        HomeBanner,
        HomeBrand,
        SiteFeauturesFullwidth,
        Newsletters,
        RelatedPosts,
        SubscriberPanel
    },

    transition: 'zoom',
    layout: 'layout-default-website',

    computed: {
        adSliders() {
            return this.homePages ? this.homePages[0].sliders: [];
        },
        ourPartners() {
            return this.homePages ? this.homePages[0].partners.slice(0,8): [];
        }
    },
};
</script>
