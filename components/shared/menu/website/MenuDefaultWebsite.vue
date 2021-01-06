<template lang="html">
    <ul :class="className">
        <MenuMega1 />
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
