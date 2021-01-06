<template lang="html">
    <div class="ps-panel--sidebar">
        <div class="ps-panel__header">
            <h3>Categores</h3>
            <a
                href="#"
                class="ps-panel__close"
                @click.prevent="handleClosePanel"
            >
                <i class="icon icon-cross"></i>
            </a>
        </div>
        <div class="navigation__content">
            <ul class="menu--mobile">
                <li v-for="category in ProductCategories">
                    <nuxt-link :to="`/website/shop/catgories-product/${category.id}`">{{ category.name }}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import categories from '~/static/data/static-categories.json';

// Queries
import Categories from '~/apollo/queries/products/allCategories';

export default {
    name: 'PanelCategories',
    computed: {
        categories() {
            return categories;
        },
        ProductCategories() {
            return this.productCategories;
        }
    },
    methods: {
        handleClosePanel() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        }
    },
    apollo: {
        productCategories: {
            prefetch: true,
            query: Categories,
        }
    },
};
</script>

<style lang="scss" scoped></style>
