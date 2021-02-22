<template lang="html">
    <nav class="navigation">
        <div class="ps-container">
            <div class="navigation__right">
                <ul class="mega-menu__list">
                    <li class="menu-item-has-dropdown">
                        <nuxt-link to="/about">
                            About Us
                        </nuxt-link>
                    </li>
                    |
                    <li class="menu-item-has-dropdown">
                        <nuxt-link to="/news-center">
                            News Center
                        </nuxt-link>
                    </li>
                    |
                    <li class="menu-item-has-dropdown">
                        <nuxt-link to="/contact">
                            Contact Us
                        </nuxt-link>
                    </li>
                    |
                    <li class="menu-item-has-dropdown">
                        <nuxt-link to="/store/account/login">
                            Login
                        </nuxt-link>
                    </li>
                    |
                    <li>
                        <v-menu open-on-hover bottom offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn dark icon v-bind="attrs" v-on="on">
                                    <v-icon>mdi-earth</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                    v-for="(item, i) in items"
                                    :key="i"
                                >
                                    <v-list-item-title>
                                        <a :href="item.url">{{item.title}}</a>  
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </li>
                    |
                    <li class="menu-item-has-dropdown">
                        <nuxt-link to="/store/account/register">
                            Register
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import CurrencyDropdown from '../CurrencyDropdown';
import LanguageSwicher from '../LanguageSwicher';
// import MenuDefault from '~/components/shared/menu/website/MenuDefaultWebsite';
import MenuCategories from '~/components/shared/menu/MenuCategories';
export default {
    name: 'NavigationDefault',
    components: {
        MenuCategories,
        // MenuDefault,
        LanguageSwicher,
        CurrencyDropdown
    },
    data() {
        return {
            items: [
                { title: 'International', url: 'https://www.zkteco.com/en/' },
                { title: 'Turkey', url: 'https://zkteco.com.tr/' },
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.navigation {
    padding: 10px 0;
    .ps-container {
        .navigation__right {
            justify-content: flex-end;
            .mega-menu__list {
                display: flex;
                li {
                    margin: 0px 16px;
                    .v-btn--icon {
                        height: 0;
                        width: 0;
                        color: green;
                    }
                    a {
                        color: black;
                    }
                }
            }
        }
    }
}
</style>
