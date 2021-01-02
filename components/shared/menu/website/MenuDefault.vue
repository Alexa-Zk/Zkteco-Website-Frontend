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
                            ]
                        },
                        
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
                               
                            ]
                        },
                    ]
                },
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
