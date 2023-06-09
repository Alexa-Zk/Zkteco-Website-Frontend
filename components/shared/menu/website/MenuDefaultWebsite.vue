<template lang="html">
    <ul :class="className">
        <MenuProduct />
        <MenuArmatura />
        <MenuSolutionCategories />
        <template v-for="item in mainMenu">
            <MenuDropdown v-if="item.subMenu" :menu-data="item" />
            <MenuMega v-else-if="item.mega" :menu-data="item" />
            <li
                class="menu-item-has-dropdown"
                v-else-if="item.redirect"
                :key="item.text"
            ></li>
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
import MenuArmatura from './MenuArmatura';
import MenuSolutionCategories from './MenuSolutionCategories';
// import MenuBrand from './MenuBrand';
export default {
    name: 'MenuDefault',
    components: {
        MenuMega,
        MenuDropdown,
        MenuProduct,
        MenuArmatura,
        MenuSolutionCategories
        //MenuBrand
    },
    props: {
        className: {
            type: String,
            default: 'menu'
        }
    },
    data() {
        return {
            mainMenu: [
                // {
                //     text: 'Solutions',
                //     url: '/solution',
                //     extraClass: 'menu-item-has-children',
                //     subClass: 'sub-menu',
                //     subMenu: [
                //         {
                //             text: 'Classified By Industry',
                //             url: '/solution-categories/classified-by-industry'
                //         },
                //         {
                //             text: 'Classified By Application',
                //             url:
                //                 '/solution-categories/classified-by-application'
                //         }
                //     ]
                // },
                {
                    text: 'Support',
                    url: '/support',
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
                                },
                                {
                                    text: 'Software',
                                    url: '/software'
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
                                // {
                                //     text: 'Support Ticket',
                                //     url: '/support/tickets'
                                // },
                                {
                                    text: 'Warranty Policy',
                                    url: '/support/product-warranty'
                                },
                                {
                                    text: 'FAQ',
                                    url: '/support'
                                }
                            ]
                        }
                    ]
                },
                // {
                //     text: 'Smart Home',
                //     //redirect: true,
                //     url: 'http://ngteco.ng/'
                // },
                // {
                //     text: 'Partners Portal',
                //     url: '/store',
                //     extraClass: 'menu-item-has-children',
                //     subClass: 'sub-menu',
                //     icon: 'icon-cart'
                // },
                {
                    text: 'Partners',
                    url: '/website/page/store-locator'
                },
                // {
                //     text: 'BioTime NG',
                //     url: '/biotime-ng'
                // },
                {
                    text: 'Consultation',
                    url: '/support/project-consultation'
                },
                {
                    text: 'Case Study',
                    url: '/case-study'
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

.menu {
    font-size: 3px !important;
}
</style>
