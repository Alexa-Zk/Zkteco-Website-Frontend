<template lang="html">
    <ul class="menu--dropdown">
        <template v-for="item in categories">
            <!-- <menu-dropdown v-if="item.parent !== 0" :menu-data="item" :categories="categories" /> -->
            <!-- <menu-mega v-else-if="item.mega" :menu-data="item" /> -->
            <li :key="item.id" >
                <nuxt-link :to="`/store/shop/categories/${item.id}`">
                    {{ item.name }}
                </nuxt-link>
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
