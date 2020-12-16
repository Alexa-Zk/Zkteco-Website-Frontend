<template lang="html">
    <ul :class="className">
        <template v-for="item in mainMenu">
            <MenuDropdown v-if="item.subMenu" :menu-data="item" />
            <MenuMega v-else-if="item.mega" :menu-data="item" />
            <li v-else :key="item.text">
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
                    text: this.$i18n.t('menu.mainMenu.home'),
                    url: '/store/',
                    extraClass: 'menu-item-has-children',
                    subClass: 'sub-menu',
                    // subMenu: [
                    //     {
                    //         text: this.$i18n.t(
                    //             'menu.mainMenu.marketplaceFullWidth'
                    //         ),
                    //         url: '/store/'
                    //     },
                    //     {
                    //         text: this.$i18n.t('menu.mainMenu.homeAutoParts'),
                    //         url: '/store/home/auto-part'
                    //     },
                    //     {
                    //         text: this.$i18n.t('menu.mainMenu.homeTechnology'),
                    //         url: '/store/home/technology'
                    //     },
                    //     {
                    //         text: this.$i18n.t('menu.mainMenu.homeOrganic'),
                    //         url: '/store/home/organic'
                    //     },
                    //     {
                    //         text: this.$i18n.t(
                    //             'menu.mainMenu.homeMarketplaceV1'
                    //         ),
                    //         url: '/store/home/market-place'
                    //     },
                    //     {
                    //         text: this.$i18n.t(
                    //             'menu.mainMenu.homeMarketplaceV2'
                    //         ),
                    //         url: '/store/home/market-place-2'
                    //     },
                    //     {
                    //         text: this.$i18n.t(
                    //             'menu.mainMenu.homeMarketplaceV3'
                    //         ),
                    //         url: '/store/home/market-place-3'
                    //     },
                    //     {
                    //         text: this.$i18n.t(
                    //             'menu.mainMenu.homeMarketplaceV4'
                    //         ),
                    //         url: '/store/home/market-place-4'
                    //     },
                    //     {
                    //         text: this.$i18n.t('menu.mainMenu.homeElectronic'),
                    //         url: '/store/home/electronic'
                    //     },
                    //     {
                    //         text: this.$i18n.t('menu.mainMenu.homeFurniture'),
                    //         url: '/store/home/furniture'
                    //     }
                    // ]
                },
                {
                    text: this.$i18n.t('menu.mainMenu.shop'),
                    url: '/store/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: 'true',
                    megaContent: [
                        {
                            heading: this.$i18n.t('menu.mainMenu.catalogPages'),
                            megaItems: [
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.shopDefault'
                                    ),
                                    url: '/store/shop'
                                },
                                // {
                                //     text: this.$i18n.t(
                                //         'menu.mainMenu.shopFullwidth'
                                //     ),
                                //     url: '/store/shop/shop-fullwidth'
                                // },
                                // {
                                //     text: this.$i18n.t(
                                //         'menu.mainMenu.shopCategories'
                                //     ),
                                //     url: '/store/shop/shop-categories'
                                // },
                                // {
                                //     text: this.$i18n.t(
                                //         'menu.mainMenu.shopSidebar'
                                //     ),
                                //     url: '/store/shop/shop-sidebar'
                                // },
                                // {
                                //     text: this.$i18n.t(
                                //         'menu.mainMenu.shopWithoutBanner'
                                //     ),
                                //     url: '/store/shop/shop-sidebar-without-banner'
                                // },
                                // {
                                //     text: this.$i18n.t(
                                //         'menu.mainMenu.shopCarousel'
                                //     ),
                                //     url: '/store/shop/shop-carousel'
                                // }
                            ]
                        },
                        {
                            heading: this.$i18n.t(
                                'menu.mainMenu.productLayout'
                            ),
                            megaItems: [
                                {
                                    text: this.$i18n.t('menu.mainMenu.default'),
                                    url: '/store/product/1'
                                },
                                // {
                                //     text: this.$i18n.t(
                                //         'menu.mainMenu.extended'
                                //     ),
                                //     url: '/store/product/extended'
                                // },
                                // {
                                //     text: this.$i18n.t(
                                //         'menu.mainMenu.fullContent'
                                //     ),
                                //     url: '/store/product/full-content'
                                // },
                                // {
                                //     text: this.$i18n.t('menu.mainMenu.boxed'),
                                //     url: '/store/product/boxed'
                                // },
                                // {
                                //     text: this.$i18n.t('menu.mainMenu.sidebar'),
                                //     url: '/store/product/sidebar'
                                // },
                                // {
                                //     text: this.$i18n.t(
                                //         'menu.mainMenu.fullwidth'
                                //     ),
                                //     url: '/store/product/1'
                                // }
                            ]
                        },
                        // {
                        //     heading: this.$i18n.t('menu.mainMenu.productTypes'),
                        //     megaItems: [
                        //         {
                        //             text: this.$i18n.t('menu.mainMenu.simple'),
                        //             url: '/store/product/1'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.imagesSwatches'
                        //             ),
                        //             url: '/store/product/image-swatches'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.countdown'
                        //             ),
                        //             url: '/store/product/countdown'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.affiliate'
                        //             ),
                        //             url: '/store/product/affiliate'
                        //         },
                        //         {
                        //             text: this.$i18n.t('menu.mainMenu.onSale'),
                        //             url: '/store/product/on-sale'
                        //         },
                        //         /*{
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.videoFeatured'
                        //             ),
                        //             url: '/store/product/video-featured'
                        //         },*/
                        //         {
                        //             text: this.$i18n.t('menu.mainMenu.grouped'),
                        //             url: '/store/product/groupped'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.outOfStock'
                        //             ),
                        //             url: '/store/product/out-of-stock'
                        //         }
                        //     ]
                        // },
                        // {
                        //     heading: this.$i18n.t(
                        //         'menu.mainMenu.ecomercePages'
                        //     ),
                        //     megaItems: [
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.shoppingCart'
                        //             ),
                        //             url: '/store/account/shopping-cart'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.checkout'
                        //             ),
                        //             url: '/store/account/checkout'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.whishlist'
                        //             ),
                        //             url: '/store/account/wishlist'
                        //         },
                        //         {
                        //             text: this.$i18n.t('menu.mainMenu.compare'),
                        //             url: '/store/account/compare'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.orderTracking'
                        //             ),
                        //             url: '/store/account/order-tracking'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.myAccount'
                        //             ),
                        //             url: '/store/account/login'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.loginOrregister'
                        //             ),
                        //             url: '/store/account/login'
                        //         }
                        //     ]
                        // }
                    ]
                },
                {
                    text: this.$i18n.t('Help'),
                    url: '/store/',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: 'true',
                    megaContent: [
                        {
                            heading: this.$i18n.t('menu.mainMenu.basicPage'),
                            megaItems: [
                                {
                                    text: this.$i18n.t('menu.mainMenu.aboutUs'),
                                    url: '/store/page/about-us'
                                },
                                {
                                    text: this.$i18n.t('menu.mainMenu.contact'),
                                    url: '/store/page/contact-us'
                                },
                                {
                                    text: this.$i18n.t('menu.mainMenu.faqs'),
                                    url: '/store/page/faqs'
                                },
                                // {
                                //     text: this.$i18n.t('menu.mainMenu.404'),
                                //     url: '/store/page/404-pape'
                                // }
                            ]
                        },
                        // {
                        //     heading: this.$i18n.t('menu.mainMenu.vendorPages'),
                        //     megaItems: [
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.becomeAVendor'
                        //             ),
                        //             url: '/store/vendor/become-a-vendor'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.vendorStore'
                        //             ),
                        //             url: '/store/vendor/vendor-store'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.storeList'
                        //             ),
                        //             url: '/store/vendor/store-list'
                        //         },
                        //         {
                        //             text: this.$i18n.t(
                        //                 'menu.mainMenu.storeList2'
                        //             ),
                        //             url: '/store/vendor/store-list-2'
                        //         }
                        //     ]
                        // }
                    ]
                },
                // {
                //     text: this.$i18n.t('menu.mainMenu.blogs'),
                //     url: '/store/blog',
                //     current: 'shop',
                //     extraClass: 'menu-item-has-children has-mega-menu',
                //     subClass: 'sub-menu',
                //     mega: 'true',
                //     megaContent: [
                //         {
                //             heading: this.$i18n.t('menu.mainMenu.blogLayout'),
                //             megaItems: [
                //                 {
                //                     text: this.$i18n.t('menu.mainMenu.grid'),
                //                     url: '/store/blog'
                //                 },
                //                 {
                //                     text: this.$i18n.t('menu.mainMenu.list'),
                //                     url: '/store/blog/blog-list'
                //                 },
                //                 {
                //                     text: this.$i18n.t(
                //                         'menu.mainMenu.smallThumb'
                //                     ),
                //                     url: '/store/blog/blog-small-thumbnail'
                //                 },
                //                 {
                //                     text: this.$i18n.t(
                //                         'menu.mainMenu.leftSidebar'
                //                     ),
                //                     url: '/store/blog/blog-left-sidebar'
                //                 },
                //                 {
                //                     text: this.$i18n.t(
                //                         'menu.mainMenu.rightSidebar'
                //                     ),
                //                     url: '/store/blog/blog-right-sidebar'
                //                 }
                //             ]
                //         },
                //         {
                //             heading: this.$i18n.t('menu.mainMenu.singleBlog'),
                //             megaItems: [
                //                 {
                //                     text: this.$i18n.t('menu.mainMenu.single1'),
                //                     url: '/store/post/detail-2'
                //                 },
                //                 {
                //                     text: this.$i18n.t('menu.mainMenu.single2'),
                //                     url: '/store/post/detail-2'
                //                 },
                //                 {
                //                     text: this.$i18n.t('menu.mainMenu.single3'),
                //                     url: '/store/post/detail-3'
                //                 },
                //                 {
                //                     text: this.$i18n.t('menu.mainMenu.single4'),
                //                     url: '/store/post/1'
                //                 }
                //             ]
                //         }
                //     ]
                // }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
