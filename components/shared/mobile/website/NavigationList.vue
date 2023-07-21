<template lang="html">
    <div class="navigation--list">
        <div class="navigation__content">
            <a
                class="navigation__item"
                href="#"
                @click.prevent="handleOpenDrawer('menu')"
            >
                <i class="fa fa-navicon"></i>
                <span> Menu</span>
            </a>
            <a
                class="navigation__item"
                @click.prevent="handleOpenDrawer('products')"
            >
                <i class="fa fa-shopping-basket"></i>
                <span> Products</span>
            </a>
            <a
                class="navigation__item"
                @click.prevent="handleOpenDrawer('armatura')"
            >
                <i class="fa fa-shield"></i>
                <span> Armatura</span>
            </a>
            <a
                class="navigation__item"
                @click.prevent="handleOpenDrawer('solutions')"
            >
                <i class="fa fa-gears"></i>
                <span> Solutions</span>
            </a>

            <a
                class="navigation__item"
                @click.prevent="handleOpenDrawer('search')"
            >
                <i class="fa fa-search"></i>
                <span> Search</span>
            </a>

            <!--nuxt-link class="navigation__item" :to="`/store`">
                <i class="icon-bag2"></i>
                <span> Store</span>
            </nuxt-link -->
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'NavigationList',
    computed: {
        ...mapState({
            appDrawer: state => state.app.appDrawer
        })
    },
    data() {
        return {
            drawer: true
        };
    },
    methods: {
        async loadCartProducts() {
            const cookieCart = this.$cookies.get('cart', { parseJSON: true });
            let queries = [];
            cookieCart.cartItems.forEach(item => {
                queries.push(item.id);
            });
            if (queries.length > 0) {
                await this.$store.dispatch('product/getCartProducts', queries);
            }
        },
        handleOpenDrawer(drawer) {
            if (drawer === 'cart') {
                this.loadCartProducts();
            }
            this.$store.commit('app/setCurrentDrawerContent', drawer);
            this.$store.commit('app/setAppDrawer', !this.appDrawer);
        }
    }
};
</script>

<style lang="scss" scoped></style>
