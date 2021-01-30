<template lang="html">
    <div class="navigation__right">
        <nuxt-link to="/store/account/shopping-cart" class="header__extra">
            <i class="icon-bag2"></i>
            <span>
                <i>{{ total }}</i>
            </span>
        </nuxt-link>
        <nuxt-link v-if="!isLoggedIn" to="/store/account/login" class="header__extra">
            <i class="icon-user"></i>
        </nuxt-link>
        <nuxt-link v-if="isLoggedIn" to="/store/account/user-information" class="header__extra">
            <i class="icon-user"></i>
        </nuxt-link>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'MobileHeaderActions',
    computed: {
        ...mapState({
            total: state => state.cart.total,
            isLoggedIn: state => state.auth.isLoggedIn
        })
    }
};
</script>

<style lang="scss" scoped>
.navigation__right {
    a {
        i {
            color: white;
        }
        span {
            background: white;
            i {
                color: #78bc27;
            }
        }
    }
}
</style>
