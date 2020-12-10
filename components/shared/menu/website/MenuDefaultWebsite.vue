<template lang="html">
    <ul :class="className">
        <template v-for="item in mainMenu">
            <MenuDropdown v-if="item.subMenu" :menu-data="item" />
            <MenuMega v-else-if="item.mega" :menu-data="item" />
            <li class="menu-item-has-dropdown" v-else :key="item.text">
                <nuxt-link :to="localePath(item.url)">
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
                    url: '/shop',
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
                    text: this.$i18n.t('Solution'),
                    url: '/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: 'true',
                    megaContent: [
                        {
                            heading: this.$i18n.t('Classified By Industry'),
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
                        },
                        {
                            heading: this.$i18n.t('Classified By Application'),
                            megaItems: [
                                {
                                    text: this.$i18n.t('menu.mainMenu.default'),
                                    url: '/product/1'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.extended'
                                    ),
                                    url: '/product/extended'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.fullContent'
                                    ),
                                    url: '/product/full-content'
                                },
                                {
                                    text: this.$i18n.t('menu.mainMenu.boxed'),
                                    url: '/product/boxed'
                                },
                                {
                                    text: this.$i18n.t('menu.mainMenu.sidebar'),
                                    url: '/product/sidebar'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.fullwidth'
                                    ),
                                    url: '/product/1'
                                }
                            ]
                        }
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
                                'menu.mainMenu.marketplaceFullWidth'
                            ),
                            url: '/'
                        },
                        {
                            text: this.$i18n.t(
                                'menu.mainMenu.homeMarketplaceV1'
                            ),
                            url: '/home/market-place'
                        },
                        {
                            text: this.$i18n.t(
                                'menu.mainMenu.homeMarketplaceV2'
                            ),
                            url: '/home/market-place-2'
                        },
                        {
                            text: this.$i18n.t(
                                'menu.mainMenu.homeMarketplaceV3'
                            ),
                            url: '/home/market-place-3'
                        },
                        {
                            text: this.$i18n.t(
                                'menu.mainMenu.homeMarketplaceV4'
                            ),
                            url: '/home/market-place-4'
                        }
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
