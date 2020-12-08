<template lang="html">
    <header class="header header--1" data-sticky="true" id="headerSticky">
        <div class="header__top">
            <div class="ps-container">
                <div class="header__left">
                    <nuxt-link to="/" class="ps-logo">
                        <img src="/img/zkteco-logo.png" alt="zkteco logo" />
                    </nuxt-link>
                    <div class="menu--product-categories">
                        <div class="menu__toggle">
                            <i class="icon-menu"></i>
                            <span> {{ $t('header.shopByDepartment') }} </span>
                        </div>
                        <div class="menu__content">
                            <menu-categories />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <navigation-default />
    </header>
</template>

<script>
import HeaderActions from '../modules/HeaderActions';
import NavigationDefault from '../modules/website/NavigationDefaultWebsite';
import MenuCategories from '~/components/shared/menu/MenuCategories';
import { stickyHeader } from '~/utilities/common-helpers';
export default {
    name: 'HeaderDefault',
    components: {
        MenuCategories,
        NavigationDefault,
        HeaderActions
    },
    mounted() {
        window.addEventListener('scroll', stickyHeader);
    }
};
</script>

<style lang="scss" scoped>
.header--1 {
    .header__top {
        background-color: $color-1st;
    }
}
</style>
`
