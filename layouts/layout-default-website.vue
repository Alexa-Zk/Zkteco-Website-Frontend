<template lang="html">
    <client-only>
        <v-app>
            <v-main>
                <!-- <header-default />
                <header-mobile /> -->
                <nuxt />
                <!-- <footer-fullwidth />
                <navigation-list />
                <mobile-drawer />
                <notify /> -->
            </v-main>
        </v-app>
    </client-only>
</template>

<script>
// import HeaderDefault from '~/components/shared/headers/website/HeaderDefaultWebsite';
// import HeaderMobile from '~/components/shared/mobile/website/HeaderMobile';
// import NavigationList from '~/components/shared/mobile/website/NavigationList';
// import MobileDrawer from '~/components/shared/mobile/website/MobileDrawer';
// import FooterFullwidth from '~/components/shared/footers/website/FooterFullwidth';
// import Notify from '~/components/elements/commons/notify';
export default {
    name: 'layout-default-website',
    components: {
        // FooterFullwidth,
        // MobileDrawer,
        // NavigationList,
        // HeaderMobile,
        // HeaderDefault,
        // Notify
    }
};
</script>

<style lang="scss" scoped></style>
