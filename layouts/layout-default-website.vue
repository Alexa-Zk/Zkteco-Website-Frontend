<template lang="html">
    <client-only>
        <v-app>
            <v-main>
                <!-- <loading
                    :active.sync="preloader"
                    :can-cancel="true"
                    :on-cancel="onCancel"
                    :is-full-page="fullPage"
                    loader="bars"
                    color="#78bc27"
                ></loading> -->
                <header-default />
                <header-mobile />
                <nuxt />
                <footer-fullwidth />
                <navigation-list />
                <mobile-drawer />
                <notify />
            </v-main>
        </v-app>
    </client-only>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

import {mapState} from 'vuex';
import HeaderDefault from '~/components/shared/headers/website/HeaderDefaultWebsite';
import HeaderMobile from '~/components/shared/mobile/website/HeaderMobile';
import NavigationList from '~/components/shared/mobile/website/NavigationList';
import MobileDrawer from '~/components/shared/mobile/website/MobileDrawer';
import FooterFullwidth from '~/components/shared/footers/website/FooterFullwidth';
import Notify from '~/components/elements/commons/notify';
export default {
    name: 'layout-default-website',
    components: {
        FooterFullwidth,
        Loading,
        MobileDrawer,
        NavigationList,
        HeaderMobile,
        HeaderDefault,
        Notify
    },
    data() {
        return {
            fullPage: true
        };
    },
    computed: {
        ...mapState({
            preloader: state => state.app.preloader
        })
    },
    methods: {
        onCancel() {
            console.log('User cancelled the loader.');
        }
    }
};
</script>

<style lang="scss" scoped></style>
