<template lang="html">
    <ul :class="className">
        <MenuProduct />
        <template v-for="item in mainMenu">
            <MenuDropdown v-if="item.subMenu" :menu-data="item" />
            <MenuMega v-else-if="item.mega" :menu-data="item" />
            <li
                class="menu-item-has-dropdown"
                v-else-if="item.redirect"
                :key="item.text"
            >
                <a href="https://ngteco.ng/">
                    {{ item.text }}
                </a>
            </li>
            <li class="menu-item-has-dropdown" v-else :key="item.text">
                <nuxt-link :to="item.url">
                    {{ item.text }}
                    <i :class="item.icon"></i>
                </nuxt-link>
            </li>
        </template>
    </ul>
</template>

<script>
import MenuDropdown from './MenuDropdown';
import MenuMega from './MenuMega';
import MenuProduct from './MenuProduct';
export default {
    name: 'MenuDefault',
    components: { MenuMega, MenuDropdown, MenuProduct },
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
                    text: 'Solutions',
                    url: '/solution',
                    extraClass: 'menu-item-has-children',
                    subClass: 'sub-menu',
                    subMenu: [
                        {
                            text: 'Classified By Industry',
                            url: '/solution-categories/classified-by-industry'
                        },
                        {
                            text: 'Classified By Application',
                            url:
                                '/solution-categories/classified-by-application'
                        }
                    ]
                },
                {
                    text: 'Support',
                    url: '/support/support',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: 'true',
                    megaContent: [
                        {
                            heading: 'Downloads',
                            megaItems: [
                                {
                                    text: 'Resources Center',
                                    url: '/support/download-center'
                                }
                            ]
                        },
                        {
                            heading: 'After Sales',
                            megaItems: [
                                {
                                    text: 'Anti-Counterfeit Enquiry',
                                    url: '/support/anti-counterfeiting'
                                },
                                {
                                    text: 'Support Ticket',
                                    url: '/support/support'
                                },
                                {
                                    text: 'Warranty Policy',
                                    url: '/support/product-warranty'
                                },
                                {
                                    text: 'FAQ',
                                    url: '/support/faq'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: 'Smart Home',
                    redirect: true
                },
                // {
                //     text: 'Partners Portal',
                //     url: '/store',
                //     extraClass: 'menu-item-has-children',
                //     subClass: 'sub-menu',
                //     icon: 'icon-cart'
                // },
                {
                    text: 'Authorised Partners',
                    url: '/website/page/store-locator'
                },
                {
                    text: 'BioTime NG',
                    url: '/biotime-ng'
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
