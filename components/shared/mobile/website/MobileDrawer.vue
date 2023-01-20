<template lang="html">
    <v-navigation-drawer v-model="drawer" width="100%" absolute temporary>
        <panel-shopping-cart v-if="currentDrawerContent === 'store'" />
        <panel-categories v-if="currentDrawerContent === 'products'" />
        <panel-menu v-if="currentDrawerContent === 'menu'" />
        <panel-search v-if="currentDrawerContent === 'search'" />
        <panel-solution v-if="currentDrawerContent === 'solutions'" />
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import PanelShoppingCart from '~/components/shared/mobile/website/modules/PanelShoppingCart';
import PanelCategories from '~/components/shared/mobile/website/modules/PanelCategories';
import PanelMenu from '~/components/shared/mobile/website/modules/PanelMenu';
import PanelSearch from '~/components/shared/mobile/website/modules/PanelSearch';
import PanelSolution from '~/components/shared/mobile/website/modules/PanelSolution';

export default {
    name: 'MobileDrawer',
    components: {
        PanelSearch,
        PanelMenu,
        PanelCategories,
        PanelShoppingCart,
        PanelSolution
    },
    computed: {
        ...mapState({
            appDrawer: state => state.app.appDrawer,
            currentDrawerContent: state => state.app.currentDrawerContent
        }),
        drawer: {
            get() {
                return this.appDrawer;
            },
            set(newValue) {
                return newValue;
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
