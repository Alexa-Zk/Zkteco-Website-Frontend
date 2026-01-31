<template lang="html">
    <div class="ps-panel--sidebar">
        <div class="ps-panel__header">
            <h3>Armatura</h3>
            <a
                href="/armatura"
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
                <li v-for="category in getArmatura">
                    <nuxt-link :to="`/sub-categories/${category.slug}/`">{{
                        category.name
                    }}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PanelArmatura',

    computed: {
        ...mapState({
            loading: state => state.website.loading,
            categoryAndSubCategories: state =>
                state.website.categoryAndSubCategories,

            getArmatura(state) {
                const armature = state.website.categoryAndSubCategories;

                return armature != undefined
                    ? armature.find(e => e.slug === 'armatura')
                          .product_sub_categories
                    : [];
            }
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
