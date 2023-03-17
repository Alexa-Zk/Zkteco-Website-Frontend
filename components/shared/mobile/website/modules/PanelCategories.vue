<template lang="html">
    <div class="ps-panel--sidebar">
        <div class="ps-panel__header">
            <h3>Categores</h3>
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
                <li v-for="category in productCategories">
                    <nuxt-link :to="`/product-categories/${category.slug}`">{{
                        category.name
                    }}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    name: 'PanelCategories',

    data() {
        return {
            productCategories: null,
            loading: false
        };
    },
    mounted() {
        this.getProductCategories();
    },
    methods: {
        handleClosePanel() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        },
        async getProductCategories() {
            this.loading = true;
            const reponse = await Repository.get(
                `${subBaseUrl}/product-categories`
            )
                .then(response => {
                    this.productCategories = response.data;
                    this.loading = false;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
    }
};
</script>

<style lang="scss" scoped>
.placeholder-image {
    padding: 15px;
}
</style>
