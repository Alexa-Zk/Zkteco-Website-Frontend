<template lang="html">
    <main id="homepage-1">
        <home-banner :homeSlider="adSliders" />
        <site-feautures-fullwidth />
        <div class="ps-container">
            <related-posts />
        </div>
        <!--home-brand :partnersLogo="ourPartners" /--->
        <newsletters layout="fullwidth" />
    </main>
</template>
<script>
import HomeBanner from '~/components/partials/homepage/website/default/HomeBanner';
import Newsletters from '~/components/partials/commons/website/Newsletters';
import SiteFeauturesFullwidth from '~/components/partials/commons/website/SiteFeaturesFullwidth';
import RelatedPosts from '~/components/partials/post/website/RelatedPosts';
import HomeBrand from '~/components/partials/shop/sections/website/ShopBrands';

import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    data() {
        return {
            homePages: '',
            articles: '',
            fullPage: true
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
        adSliders() {
            return this.homePages ? this.homePages : [];
        }
    },
    created() {
        let payload = {};
        this.$store.dispatch('website/getArticlesLimited', payload);
    },
    mounted() {
        this.getHomePageBanners();
    },
    methods: {
        async getHomePageBanners() {
            this.loading = true;
            const reponse = await Repository.get(
                `${subBaseUrl}/home-pages/findBySlider`
            )
                .then(response => {
                    const res = response.data;
                    this.homePages = res[0].sliders;
                    this.loading = false;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
    }
};
</script>
