<template lang="html">
    <ul class="menu--dropdown">
        <template v-for="item in categories">
            <!-- <menu-dropdown v-if="item.parent !== 0" :menu-data="item" :categories="categories" /> -->
            <!-- <menu-mega v-else-if="item.mega" :menu-data="item" /> -->
            <li :key="item.id" >
                <a href="#" @click.prevent="handleGotoCategory(item.id)">
                    {{ item.name }}
                </a>
            </li>
        </template>
    </ul>
</template>

<script>
import { mapState } from 'vuex';
import MenuDefault from '~/components/shared/menu/MenuDefault';
import MenuDropdown from '~/components/shared/menu/MenuDropdown';
import MenuMega from '~/components/shared/menu/MenuMega';
export default {
    name: 'MenuCategories',
    components: { MenuMega, MenuDropdown, MenuDefault },
    data() {
        return {
            widgetLoading: true,
        };
    },
    computed: {
        ...mapState({
            categories: state => state.product.categories
        }),
    },
    methods: {
        async handleGotoCategory(id) {
            if (id) {
                const url = `/store/shop`;
                const products = await this.$store.dispatch("product/getProductByCategoriesId", id)
                this.$store.commit('product/setProducts', products[0].product);
                this.$store.commit('product/setProducts', products[0].product);
                this.$store.commit('product/setTotalProducts', products[0].product.length);
                this.$store.commit('product/setTotal', products[0].product.length);
                await this.$router.push(url);
            } else {               
                const allProducts = await this.$store.dispatch('product/getProducts');
                this.$store.commit('product/setProducts', allProducts);
                await this.$store.dispatch('product/getTotalRecords');
            }
        },
    },
    async created() {
        const params = {
            _start: 1,
            _limit: 12
        };        
        const categories = await this.$store.dispatch(
            'product/getProductCategories',
            params
        );
        if (categories) {
            setTimeout(
                function() {
                    this.widgetLoading = false;
                }.bind(this),
                150
            );
        }
    }
};
</script>

<style lang="scss" scoped></style>
