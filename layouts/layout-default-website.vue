<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <nuxt />
            <footer-fullwidth />
            <navigation-list />
            <mobile-drawer />
            <notify />
            <floating-action-button />
        </v-main>
    </v-app>
</template>

<script>
import HeaderDefault from '~/components/shared/headers/website/HeaderDefaultWebsite';
import HeaderMobile from '~/components/shared/mobile/website/HeaderMobile';
import NavigationList from '~/components/shared/mobile/website/NavigationList';
import MobileDrawer from '~/components/shared/mobile/website/MobileDrawer';
import FooterFullwidth from '~/components/shared/footers/website/FooterFullwidth';
import Notify from '~/components/elements/commons/notify';
import FloatingActionButton from '~/components/elements/commons/FloatingActionButton';
export default {
    name: 'layout-default-website',
    components: {
        FooterFullwidth,
        MobileDrawer,
        NavigationList,
        HeaderMobile,
        HeaderDefault,
        Notify,
        FloatingActionButton
    }
};
</script>

<style lang="scss" scoped></style>
