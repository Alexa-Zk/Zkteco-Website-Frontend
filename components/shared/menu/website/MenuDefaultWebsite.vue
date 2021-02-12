<template lang="html">
    <ul :class="className">
        <MenuMega1 />
        <template v-for="item in mainMenu">
            <MenuDropdown v-if="item.subMenu" :menu-data="item" />
            <MenuMega v-else-if="item.mega" :menu-data="item" />
            <li class="menu-item-has-dropdown" v-else-if="item.redirect" :key="item.text">
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
import MenuMega1 from './MenuMega1';
export default {
    name: 'MenuDefault',
    components: { MenuMega, MenuDropdown, MenuMega1 },
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
                    text: this.$i18n.t('Solutions'),
                    url: '/solution',
                    extraClass: 'menu-item-has-children',
                    subClass: 'sub-menu',
                    subMenu: [
                        {
                            text: this.$i18n.t(
                                'Classified By Industry'
                            ),
                            url: '/solution-categories/classified-by-industry'
                        },
                        {
                            text: this.$i18n.t(
                                'Classified By Application'
                            ),
                            url: '/solution-categories/classified-by-application'
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
                            url: '/support/download-center'
                        },
                        {
                            text: this.$i18n.t(
                                'After Sales Service'
                            ),
                            url: '/support/after-sale'
                        },
                        
                    ]
                },
                {
                    text: this.$i18n.t('Smart Home'),
                    redirect: true
                },
                {
                    text: this.$i18n.t('Store'),
                    url: '/website/page/coming-soon',
                    extraClass: 'menu-item-has-children',
                    subClass: 'sub-menu',
                    icon: 'icon-cart'
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
