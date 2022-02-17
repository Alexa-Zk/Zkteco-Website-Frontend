<template lang="html">
    <v-app>
        <v-main>
            <header-biotime-cloud />
            <header-mobile />
            <nuxt />
            <footer-fullwidth />
            <navigation-list />
            <mobile-drawer />
        </v-main>
    </v-app>
</template>

<script>
import HeaderBiotimeCloud from '~/components/shared/headers/website/HeaderBiotimeCloud';
import HeaderMobile from '~/components/shared/mobile/website/HeaderMobile';
import NavigationList from '~/components/shared/mobile/website/NavigationList';
import MobileDrawer from '~/components/shared/mobile/website/MobileDrawer';
import FooterFullwidth from '~/components/shared/footers/website/FooterFullwidth';
import Notify from '~/components/elements/commons/notify';
export default {
    name: 'layout-default-website',
    components: {
        FooterFullwidth,
        MobileDrawer,
        NavigationList,
        HeaderMobile,
        HeaderBiotimeCloud,
        Notify,
    }
};
</script>

<style lang="scss" scoped></style>
