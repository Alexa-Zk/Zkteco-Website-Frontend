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
                            url: '/solution-categories/classified-by-application'
                        },
                        
                    ]
                },

                {
                    text: 'Support',
                    url: '/',
                    extraClass: 'menu-item-has-children',
                    subClass: 'sub-menu',
                    subMenu: [
                        {
                            text: 'Download Center',
                            url: '/support/download-center'
                        },
                        {
                            text: 'After Sales Service',
                            url: '/support/after-sale'
                        },
                        
                    ]
                },
                {
                    text: 'Smart Home',
                    redirect: true
                },
                {
                    text: 'Store',
                    url: '/store',
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
