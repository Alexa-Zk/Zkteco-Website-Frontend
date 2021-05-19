<template lang="html">
    <div v-if="!isLoggedIn" class="ps-block--user-header">
        <div class="ps-block__left">
            <i class="icon-user"></i>
        </div>
        <div class="ps-block__right">
            <nuxt-link to="/store/account/login">
                {{ $t('header.login') }}
            </nuxt-link>
            <nuxt-link to="/store/account/register">
                {{ $t('header.register') }}
            </nuxt-link>
        </div>
    </div>
    <div v-else class="ps-block--user-account">
        <i class="icon-user"></i>
        <div class="ps-block__content">
            <ul class="ps-list--arrow">
                <li v-for="link in accountLinks" :key="link.text">
                    <nuxt-link :to="link.url">
                        {{ link.text }}
                    </nuxt-link>
                </li>
                <li class="ps-block__footer">
                    <a href="#" @click.prevent="handleLogout">
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'HeaderUserArea',
    computed: {
        ...mapState({
            isLoggedIn: state => state.auth.isLoggedIn
        })
    },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/store/account/user-information'
                },
                {
                    text: 'Address',
                    url: '/store/account/addresses'
                },
                {
                    text: 'My Orders',
                    url: '/store/account/recent-viewed-product'
                },
                {
                    text: 'Wishlist',
                    url: '/store/account/wishlist'
                }
            ]
        };
    },
    methods: {
        handleLogout() {
            this.$store.dispatch('auth/setAuthStatus', false);
            this.$router.push('/store/account/login')
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-block__right {
    a {
        color: #000;
    }
}
</style>
