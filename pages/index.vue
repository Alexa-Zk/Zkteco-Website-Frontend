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
            <conumer-electronics :collection-id="this.id" />
            <clothings :collection-id="this.id1" />
            <!-- <garden-and-kitchen collection-slug="garden-and-kitchen" /> -->
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

// Queries
import EcommerceImages from '~/apollo/queries/storeHomePages';

export default {
     data() {
        return {
            ecommerceImages: '',
            articles: '',
            id: 15,
            id1: 26
        };
    },
    apollo: {
        ecommerceImages: {
            prefetch: true,
            query: EcommerceImages
        },
    },
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
        const queries = [
            'deal-of-the-day',
            'consumer-electronics',
            'clothings',
            'garden-and-kitchen',
            'new-arrivals-products'
        ];
        await this.$store.dispatch('collection/getCollectionById')
        await this.$store.dispatch('collection/getCollectionsBySlugs', queries);
    }
};
</script>