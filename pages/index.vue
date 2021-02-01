<template lang="html">
    <main id="homepage-1">
        <loading
            :active.sync="preloader"
            :can-cancel="true"
            :on-cancel="onCancel"
            :is-full-page="fullPage"
        ></loading>
        <!-- <home-banner /> -->
        <home-banner :homeSlider="adSliders" />
        <site-feautures-fullwidth />
        <div class="ps-container">
            <related-posts />
        </div>
        <home-brand :partnersLogo="ourPartners" />
        <newsletters layout="fullwidth" />
        <!-- <subscriber-panel /> -->
    </main>
</template>
<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

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
            articles: '',
            fullPage: true
        };
    },
    apollo: {
        homePages: {
            prefetch: true,
            query: homePages
        }
    },
    components: {
        Loading,
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
        ...mapState({
            preloader: state => state.app.preloader
        }),
        adSliders() {
            return this.homePages ? this.homePages[0].sliders : [];
        },
        ourPartners() {
            return this.homePages ? this.homePages[0].partners.slice(0, 8) : [];
        }
    },
     methods: {
        onCancel() {
            console.log('User cancelled the loader.')
        }
    }
};
</script>
