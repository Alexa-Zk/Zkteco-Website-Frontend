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
import HomeBanner from '~/components/partials/homepage/website/default/HomeBanner';
import Newsletters from '~/components/partials/commons/website/Newsletters';
import SiteFeauturesFullwidth from '~/components/partials/commons/website/SiteFeaturesFullwidth';
import RelatedPosts from '~/components/partials/post/website/RelatedPosts';
import HomeBrand from '~/components/partials/shop/sections/website/ShopBrands';
// Queries
import homePages from '~/apollo/queries/homePages';
import articlesCategories from '~/apollo/queries/articles/articlesCategories';

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
        },
        categories: {
            prefetch: true,
            query: articlesCategories
        }
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
        adSliders() {
            return this.homePages ? this.homePages[0].sliders : [];
        },
        ourPartners() {
            return this.homePages ? this.homePages[0].partners.slice(0, 8) : [];
        }
    },
    created() {
        let payload = {};
        const response = this.$store.dispatch(
            'website/getArticlesLimited',
            payload
        );
    }
};
</script>
