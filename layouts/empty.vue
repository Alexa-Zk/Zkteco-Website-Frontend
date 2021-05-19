<template lang="html">
    <client-only>
        <v-app>
            <v-main>
                <header-default />
                <header-mobile />
                <nuxt></nuxt>
                <navigation-list />
                <mobile-drawer />
            </v-main>
        </v-app>
    </client-only>
</template>

<script>

import HeaderDefault from '~/components/shared/headers/website/HeaderDefaultWebsite';
import HeaderMobile from '~/components/shared/mobile/website/HeaderMobile';
import NavigationList from '~/components/shared/mobile/website/NavigationList';
import MobileDrawer from '~/components/shared/mobile/website/MobileDrawer';
export default {
    components: { HeaderMobile, HeaderDefault, MobileDrawer, NavigationList }
};
</script>

<style lang="scss" scoped></style>
