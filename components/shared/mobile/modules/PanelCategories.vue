<template lang="html">
    <div class="ps-panel--sidebar">
        <div class="ps-panel__header">
            <h3>Categories</h3>
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
                <li>
                    <a href="#" @click.prevent="handleGotoCategory(null)">
                        All Categories
                    </a>
                </li>
                <li v-for="category in categories">
                    <a @click.prevent="handleGotoCategory(category.id)" href="#">{{ category.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import categories from '~/static/data/static-categories.json';

export default {
    name: 'PanelCategories',
    methods: {
        handleClosePanel() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        },
        async handleGotoCategory(id) {
            if (id) {
                const url = `/store/shop`;
                const products = await this.$store.dispatch("product/getProductByCategoriesId", id)
                this.$store.commit('product/setProducts', products[0].product);
                this.$store.commit('product/setProducts', products[0].product);
                this.$store.commit('product/setTotalProducts', products[0].product.length);
                this.$store.commit('product/setTotal', products[0].product.length);
                await this.$router.push(url);
                this.handleClosePanel()
            } else {      
                let params = {
                    page: 1,
                    per_page: 12,
                    order: 'asc'
                };     
                const allProducts = await this.$store.dispatch('product/getProducts', params);
                this.$store.commit('product/setProducts', allProducts);
                await this.$store.dispatch('product/getTotalRecords');
                this.handleClosePanel()
            }
        },
    },
    computed: {
        ...mapState({
            categories: state => state.product.categories
        })
    }
};
</script>

<style lang="scss" scoped></style>
