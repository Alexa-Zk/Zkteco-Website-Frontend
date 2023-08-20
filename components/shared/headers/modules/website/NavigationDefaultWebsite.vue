<template lang="html">
    <nav class="navigation">
        <div class="ps-container">
            <div class="navigation__right">
                <ul class="mega-menu__list">
                    <!--li class="menu-item-has-dropdown">
                        <nuxt-link to="/about-us">
                            About Us
                        </nuxt-link>
                    </li -->

                    <li class="menu-item-has-dropdown">
                        <div class="dropdown">
                            <button>
                                Company
                                <i class="icon-chevron-down"></i>
                            </button>

                            <div class="dropdown-content">
                                <nuxt-link to="/about-us">
                                    About Us
                                </nuxt-link>

                                <nuxt-link to="/experience-center">
                                    Experience Center
                                </nuxt-link>
                            </div>
                        </div>
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
                    <li
                        v-if="!isLoggedInToDownload"
                        class="menu-item-has-dropdown"
                    >
                        <nuxt-link to="/auth/login">
                            Login
                        </nuxt-link>
                    </li>

                    <li
                        v-else
                        @click="logoutDownloads"
                        style="cursor: pointer"
                        class="menu-item-has-dropdown"
                    >
                        Logout
                    </li>
                    |
                    <li class="menu-item-has-dropdown">
                        <client-only>
                            <v-google-translate
                                :defaultLanguageCode="defaultLanguageCode"
                                :languages="languages"
                            />
                        </client-only>
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
                                        <a :href="item.url">{{ item.title }}</a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </li>
                    <!-- <li class="menu-item-has-dropdown">
                        <nuxt-link to="/store/account/register">
                            Register
                        </nuxt-link>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import CurrencyDropdown from '../CurrencyDropdown';
import LanguageSwicher from '../LanguageSwicher';
// import MenuDefault from '~/components/shared/menu/website/MenuDefaultWebsite';
import { mapState } from 'vuex';
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
            defaultLanguageCode: 'en',
            items: [
                { title: 'International', url: 'https://www.zkteco.com/en/' },
                { title: 'Turkey', url: 'https://zkteco.com.tr/' },
                { title: 'Senegal', url: 'https://www.zkteco-ao.com/' }
            ],
            languages: [
                {
                    code: 'en',
                    name: 'English',
                    cname: '英语',
                    ename: 'English'
                },
                { code: 'fr', name: 'Français', cname: '法语', ename: 'French' }
            ]
        };
    },
    computed: {
        isLoggedInToDownload() {
            const tokenForDownloads = this.$cookies.get('download_token', {
                parseJSON: true
            });
            return tokenForDownloads ? true : false;
        }
    },
    methods: {
        logoutDownloads() {
            this.$store.dispatch('auth/logoutDownloadToken');
            window.location.reload(true);
        }
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

.dropdown {
    display: inline-block;
    position: relative;
    padding: 0 1.3rem;
    text-align: center;
}
.dropdown .icon-chevron-down {
    position: absolute;
    padding: 7px 0 0 8px;
    font-size: 1.1rem;
    font-weight: bolder;
    color: #000000;
}
.dropdown-content {
    display: none;
    position: absolute;
    width: 100%;
    overflow: auto;
    background: #e3e3e3;
    padding: 0.8rem 0;
    //box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.4);
    z-index: 999;
}
.dropdown:hover .dropdown-content {
    display: block;
}
.dropdown-content a {
    display: block;
    color: #000000;
    padding: 1.4rem 0rem;

    text-decoration: none;
    text-align: center;
    // padding: 0 5rem;
}
.dropdown-content a:hover {
    color: #ffffff;
    background-color: #fff;
}
</style>
