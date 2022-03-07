<template lang="html">
    <header class="header header--1" data-sticky="true" id="headerSticky">
        <navigation-default />
        <div class="header__top">
            <div class="ps-container">
                <div class="header__left">
                    <nuxt-link to="/" class="ps-logo">
                        <img
                            loading="lazy"
                            src="/img/zkteco-logo.png"
                            width="133.64"
                            height="32"
                            alt="zkteco logo"
                        />
                    </nuxt-link>
                    <div class="menu--product-categories">
                        <div class="menu__toggle">
                            <i class="icon-menu"></i>
                            <span> {{ $t('header.shopByDepartment') }} </span>
                        </div>
                        <div class="menu__content">
                            <menu-categories />
                        </div>
                    </div>
                </div>
                <div class="navigation__right">
                    <menu-default />
                </div>
                <div class="form-group--nest">
                    <input
                        class="form-control"
                        type="email"
                        v-model="searchText"
                        placeholder="Search"
                        v-on:keyup.enter="submitQuery"
                    />
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
        background-color: rgba(0, 0, 0, 0.7);
        align-items: center;
        padding: 15px 0;
        .ps-container {
            place-items: center;
        }
        .form-group--nest {
            width: 300px;
            input {
                border-radius: 4px;
                border-color: #ccc;
                border-right: 1px solid #ccc;
            }
            .form-control {
                height: 40px;
                border: 1px solid #78bc27;
            }
        }
    }
}

.header--sticky {
    .header__left {
        .ps-logo {
            display: block !important;
        }
        .menu--product-categories {
            display: none !important;
        }
    }
}
</style>
`
