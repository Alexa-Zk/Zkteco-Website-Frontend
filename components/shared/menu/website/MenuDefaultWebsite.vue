<template lang="html">
    <ul :class="className">
        <template v-for="item in mainMenu">
            <MenuDropdown v-if="item.subMenu" :menu-data="item" />
            <MenuMega v-else-if="item.mega" :menu-data="item" />
            <li class="menu-item-has-dropdown" v-else :key="item.text">
                <nuxt-link :to="item.url">
                    {{ item.text }}
                </nuxt-link>
            </li>
        </template>
    </ul>
</template>

<script>
import MenuDropdown from './MenuDropdown';
import MenuMega from './MenuMega';
export default {
    name: 'MenuDefault',
    components: { MenuMega, MenuDropdown },
    props: {
        className: {
            type: String,
            default: 'menu'
        }
    },
    data() {
        return {
            mainMenu: [
                {
                    text: this.$i18n.t('Products'),
                    url: '/website/shop/shop-sidebar-without-banner',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: 'true',
                    megaContent: [
                        {
                            heading: this.$i18n.t('Categories'),
                            megaItems: [
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.shopDefault'
                                    ),
                                    url: '/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.shopFullwidth'
                                    ),
                                    url: '/shop/shop-fullwidth'
                                },

                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.shopSidebar'
                                    ),
                                    url: '/shop/shop-sidebar'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.shopWithoutBanner'
                                    ),
                                    url: '/shop/shop-sidebar-without-banner'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.shopCarousel'
                                    ),
                                    url: '/shop/shop-carousel'
                                }
                            ]
                        }
                    ]
                },

               
                {
                    text: this.$i18n.t('Solutions'),
                    url: '/website/vendor/store-list-2',
                    extraClass: 'menu-item-has-children',
                    subClass: 'sub-menu',
                    subMenu: [
                        {
                            text: this.$i18n.t(
                                'Classified By Industry'
                            ),
                            url: '/website/vendor/1'
                        },
                        {
                            text: this.$i18n.t(
                                'Classified By Application'
                            ),
                            url: '/website/vendor/2'
                        },
                        
                    ]
                },

                {
                    text: this.$i18n.t('Support'),
                    url: '/',
                    extraClass: 'menu-item-has-children',
                    subClass: 'sub-menu',
                    subMenu: [
                        {
                            text: this.$i18n.t(
                                'Download Center'
                            ),
                            url: '/website/page/download-center'
                        },
                        {
                            text: this.$i18n.t(
                                'After Sales Service'
                            ),
                            url: '/website/page/after-sales'
                        },
                        
                    ]
                },

                {
                    text: this.$i18n.t('Store'),
                    url: '/store',
                    extraClass: 'menu-item-has-children',
                    subClass: 'sub-menu'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.menu-item-has-dropdown {
    a {
        color: white;
        &:hover {
            color: #78bc27;
        }
    }
}
</style>
