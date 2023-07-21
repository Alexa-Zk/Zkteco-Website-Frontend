<template lang="html">
    <div class="navigation__right">
        <!-- <nuxt-link to="/store/account/shopping-cart" class="header__extra">
            <i class="icon-bag2"></i>
            
        </nuxt-link> -->
        <nuxt-link to="/auth/login" class="header__extra">
            <i class="fa fa-user-o" style="font-size: 3.4rem;"></i>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'MobileHeaderActions'
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
