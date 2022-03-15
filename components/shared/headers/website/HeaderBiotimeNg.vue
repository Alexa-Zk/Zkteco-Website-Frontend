<template lang="html">
    <header class="header header--1" data-sticky="true" id="headerSticky">
        <div class="header__top">
            <div class="ps-container">
                <div class="bt-header-left">
                    <nuxt-link to="/" class="ps-logo">
                        <img
                            loading="lazy"
                            src="/img/ZKTECO-LOGO-NEW.png"
                            alt="biotime cloud logo"
                        />
                    </nuxt-link>
                </div>
                <div class="bt-header-right">
                    <ul>
                        <li>
                            <nuxt-link
                                to="#btc-characteristics"
                                class="ps-logo"
                            >
                                Characteristics
                            </nuxt-link>
                        </li>
                        <li>
                            <!--nuxt-link to="#btc-prices" class="ps-logo">
                                Prices
                            </nuxt-link-->
                            <nuxt-link to="#btc-prices" class="ps-logo">
                                Benefits
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#btc-faq" class="ps-logo">
                                FAQ
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import HeaderActions from '../modules/HeaderActions';
import NavigationDefault from '../modules/website/NavigationDefaultWebsite';
import MenuDefault from '~/components/shared/menu/website/MenuDefaultWebsite';
import MenuCategories from '~/components/shared/menu/MenuCategories';
import { stickyHeader } from '~/utilities/common-helpers';
export default {
    name: 'HeaderDefault',
    components: {
        MenuCategories,
        NavigationDefault,
        HeaderActions,
        MenuDefault
    },
    data() {
        return {
            searchText: ''
        };
    },
    mounted() {
        window.addEventListener('scroll', stickyHeader);
    },
    methods: {
        submitQuery() {
            if (this.searchText !== null || this.searchText !== '') {
                this.$router.push(`/website/search?keyword=${this.searchText}`);
            }
        }
    },
    async created() {
        // let slug = {}
        // const response = await this.$store.dispatch('website/getAllProductCategories', slug);
    }
};
</script>

<style lang="scss" scoped>
.header--1 {
    .header__top {
        background-color: white;
        align-items: center;
        padding: 13px 0;
        .ps-container {
            display: flex;
            justify-content: space-around;
            align-items: center;

            .bt-header-right {
                display: flex;
                justify-content: flex-end;
                ul {
                    display: flex;
                    li {
                        padding: 0 10px;
                        a {
                            padding: 0.5rem 1rem;
                            font-weight: 600;
                            color: #6c757d;
                            font-size: 16px;
                        }
                    }
                }
            }
            .bt-header-left {
                img {
                    height: 38px;
                    width: 123px;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>
