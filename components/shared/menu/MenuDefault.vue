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
                    url: '/store',
                    extraClass: 'menu-item-has-children',
                    subClass: 'sub-menu',
                    
                },
                {
                    text: this.$i18n.t('Products'),
                    url: '/store/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                },
                {
                    text: this.$i18n.t('Help'),
                    url: '/store/',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: 'true',
                    megaContent: [
                        {
                            heading: this.$i18n.t('Quick Links'),
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
                {
                    text: this.$i18n.t('Website'),
                    url: '/',
                    extraClass: 'menu-item-has-children',
                    subClass: 'sub-menu',
                    
                },
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
