<template lang="html">
    <div class="ps-panel--sidebar">
        <div class="ps-panel__header">
            <h3>Solutions</h3>
            <a
                href="/product"
                class="ps-panel__close"
                @click.prevent="handleClosePanel"
            >
                <i class="icon icon-cross"></i>
            </a>
        </div>
        <div class="navigation__content">
            <ul class="menu--mobile">
                <div class="placeholder-image" v-if="loading">
                    <content-placeholders v-for="x in 3" :key="x">
                        <content-placeholders-heading :img="true" />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
                <li v-for="category in solutionCategoriesAndSub">
                    <nuxt-link :to="`/solution-categories/${category.slug}/`">{{
                        category.name
                    }}</nuxt-link>
                </li>

                <li>
                    <nuxt-link
                        :to="`/biotime.africa/`"
                        @click.prevent="handleClosePanel"
                    >
                        Biotime Africa
                    </nuxt-link>
                </li>
                <li>
                    <a href="https://ngteco.ng/">
                        Smart Home
                    </a>
                </li>
                <li>
                    <nuxt-link :to="`/africa-time-keeper`">
                        Africa Time Keeper
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PanelSolution',

    data() {
        return {
            loading: false
        };
    },

    computed: {
        ...mapState({
            solutionCategoriesAndSub: state =>
                state.website.solutionCategoriesAndSub,
            loading: state => state.website.loading
        })
    },

    methods: {
        handleClosePanel() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        }
    }
};
</script>

<style lang="scss" scoped>
.placeholder-image {
    padding: 15px;
}
</style>
