<template lang="html">
    <main id="homepage-1">
        <home-banner :images="adImages" />
        <site-feautures-fullwidth />
        <home-default-deal-of-day
            v-if="collections !== null"
            collection-slug="deal-of-the-day"
        />
        <home-ads-columns :images="adImages"/>

        <template>
            <conumer-electronics :collection-id="this.access_control" />
            <clothings :collection-id="this.home_automation" />
            <clothings :collection-id="this.cctv" />
        </template>
        <home-ads :images="adImages"/>
        <newsletters layout="fullwidth" />
        <!-- <demo-panel />  -->
    </main>
</template>
<script>
import { mapState } from 'vuex';
import DownloadApp from '~/components/partials/commons/DownloadApp';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import Newsletters from '~/components/partials/commons/Newsletters';
import SiteFeauturesFullwidth from '~/components/partials/commons/SiteFeauturesFullwidth';
import HomeAdsColumns from '~/components/partials/homepage/default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/default/HomeAds';
import NewArrivals from '~/components/partials/homepage/default/NewArrivals';
import HomeDefaultTopCategories from '~/components/partials/homepage/default/HomeDefaultTopCategories';
import GardenAndKitchen from '~/components/partials/homepage/default/GardenAndKitchen';
import Clothings from '~/components/partials/homepage/default/Clothings';
import ConumerElectronics from '~/components/partials/homepage/default/ConumerElectronics';
import HomeBanner from '~/components/partials/homepage/default/HomeBanner';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import NavigationList from '~/components/shared/mobile/NavigationList';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import MobileDrawer from '~/components/shared/mobile/MobileDrawer';
import HomeDefaultDealOfDay from '~/components/partials/homepage/default/HomeDefaultDealOfDay';
import DemoPanel from '~/components/shared/DemoPanel';

import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
     data() {
        return {
            ecommerceImages: '',
            articles: '',
            access_control: 22,
            home_automation: 26,
            cctv: 23,
            loading: false,
        };
    },
    
    middleware: 'authentication',
    components: {
        DemoPanel,
        HomeDefaultDealOfDay,
        MobileDrawer,
        HeaderMobile,
        NavigationList,
        HeaderDefault,
        HomeBanner,
        GardenAndKitchen,
        HomeAdsColumns,
        SiteFeauturesFullwidth,
        HomeAds,
        FooterFullwidth,
        DownloadApp,
        Newsletters,
        NewArrivals,
        HomeDefaultTopCategories,
        Clothings,
        ConumerElectronics
    },

    transition: 'zoom',
    layout: 'layout-default',

    computed: {
        ...mapState({
            collections: state => state.collection.collections
        }),
        adImages() {
            return this.ecommerceImages ? this.ecommerceImages[0]: [];
        },
    },

    async created() {
        await this.$store.dispatch('collection/getCollectionById')
    },

    mounted() {
        this.getEcommerceBanner()
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
        }
    },
};
</script>
