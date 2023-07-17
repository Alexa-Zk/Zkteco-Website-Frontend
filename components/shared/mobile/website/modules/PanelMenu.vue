<template lang="html">
    <div class="ps-panel--sidebar">
        <div class="ps-panel__header">
            <h3>Menu</h3>
            <a
                href="#"
                class="ps-panel__close"
                @click.prevent="handleClosePanel"
            >
                <i class="icon icon-cross"></i>
            </a>
        </div>
        <div class="ps-panel__content">
            <!-- <div class="ps-site-actions">
                <div class="row">
                    <div class="col-6">
                        <mobile-currency-switcher />
                    </div>
                    <div class="col-6">
                        <mobile-languge-switcher />
                    </div>
                </div>
            </div> -->
            <v-list class="menu--mobile">
                <template v-for="menuItem in menu">
                    <v-list-group v-if="menuItem.subMenu" no-action>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <nuxt-link
                                    :to="menuItem.url"
                                    @click="handleClosePanel"
                                >
                                    {{ menuItem.text }}
                                </nuxt-link>
                            </v-list-item-content>
                        </template>
                        <mobile-submenu :menu="menuItem.subMenu" />
                    </v-list-group>
                    <v-list-group v-else-if="menuItem.mega" no-action>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <nuxt-link
                                    :to="menuItem.url"
                                    @click="handleClosePanel"
                                >
                                    {{ menuItem.text }}
                                </nuxt-link>
                            </v-list-item-content>
                        </template>
                        <v-list>
                            <template v-for="megaItem in menuItem.megaContent">
                                <v-list-group no-action>
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <nuxt-link
                                                :to="menuItem.url"
                                                @click="handleClosePanel"
                                            >
                                                {{ megaItem.heading }}
                                            </nuxt-link>
                                        </v-list-item-content>
                                    </template>
                                    <mobile-submenu
                                        :menu="megaItem.megaItems"
                                    />
                                </v-list-group>
                            </template>
                        </v-list>
                    </v-list-group>
                    <v-list-item v-else>
                        <v-list-item-content>
                            <nuxt-link
                                :to="menuItem.url"
                                @click="handleClosePanel"
                            >
                                {{ menuItem.text }}
                            </nuxt-link>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </div>
    </div>
</template>

<script>
import { mainMenu } from '~/static/data/menu-website.json';
import MobileSubmenu from '~/components/shared/mobile/modules/MobileSubmenu';
import MobileCurrencySwitcher from '~/components/shared/mobile/modules/MobileCurrencySwitcher';
import MobileLangugeSwitcher from '~/components/shared/mobile/modules/MobileLangugeSwitcher';
import MenuSolutionCategories from '~/components/shared/menu/website/MenuSolutionCategories';

//import MenuSolutionCategories from '~/components/shared/menu/website/MenuSolutionCategories ';

export default {
    name: 'PanelMenu',
    components: {
        MobileLangugeSwitcher,
        MobileCurrencySwitcher,
        MobileSubmenu,
        MenuSolutionCategories
    },
    data() {
        return {
            menu: [
                // {
                //     text: 'Solution',
                //     url: '/solution',
                //     extraClass: 'menu-item-has-children',
                //     subClass: 'sub-menu',
                //     subMenu: [
                //         {
                //             text: 'Classified by Industry',
                //             url: '/solution-categories/classified-by-industry'
                //         },
                //         {
                //             text: 'Classified by Application',
                //             url:
                //                 '/solution-categories/classified-by-application'
                //         }
                //     ]
                // },
                {
                    text: 'Support',
                    url: '/',
                    extraClass: 'menu-item-has-children',
                    subClass: 'sub-menu',
                    subMenu: [
                        {
                            text: 'Download ',
                            url: '/support/download-center'
                        },
                        {
                            text: 'After Sales ',
                            url: '/support/after-sale'
                        },
                        {
                            text: 'FAQ',
                            url: '/support'
                        },
                        // {
                        //     text: 'Support',
                        //     url: '/support/tickets'
                        // },
                        {
                            text: 'Warranty Policies',
                            url: '/support/product-warranty'
                        },
                        {
                            text: 'Anti Counterfeit Enquiry',
                            url: '/support/anti-counterfeiting'
                        }
                    ]
                },
                {
                    text: 'About Us',
                    url: '/about-us'
                },
                {
                    text: 'News Center',
                    url: '/news-center'
                },
                {
                    text: 'Contact Us',
                    url: 'contact'
                },
                // {
                //     text: 'Partners',
                //     url: '/store'
                // },
                // {
                //     text: 'Partners',
                //     url: '/website/page/store-locator'
                // },

                // {
                //     text: 'BioTime NG',
                //     url: '/biotime-ng'
                // },
                {
                    text: 'Project Consultation',
                    url: '/support/project-consultation'
                },
                {
                    text: 'ZK Authorized Distributor',
                    url: '/website/page/store-locator'
                },
                {
                    text: 'Case Study',
                    url: '/case-study'
                },
                {
                    text: 'Armatura',
                    url: '/armatura'
                },

                {
                    text: 'Login',
                    url: '/website/page/login'
                }
                // {
                //     text: 'Register',
                //     url: '/website/page/register'
                // },
            ]
        };
    },
    methods: {
        handleClosePanel() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        }
    }
};
</script>

<style lang="scss" scoped></style>
