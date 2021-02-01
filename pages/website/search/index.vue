<template lang="html">
    <div class="ps-page--shop" id="shop-sidebar">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="container">
            <div class="ps-layout--shop">
                <div class="ps-layout__right">
                    <search-result />
                    <div class="search-container" id="search-container">
									</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import BreadCrumb from '~/components/elements/BreadCrumb';
import SearchResult from '~/components/partials/search/WebsiteSearchResult';

export default {
    transition() {
        return 'fadeIn';
    },
    layout: 'layout-default-website',
    components: {
        SearchResult,
        BreadCrumb
    },
    data() {
        return {
            keyword: '',
            
        };
    },
    computed: {
        ...mapState({
            searchResults: state => state.product.searchResults
        }),
        keyword() {
            return this.$route.query.keyword;
        }
    },

    data() {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Search Result'
                }
            ]
        };
    },

    async created() {
        this.keyword = this.$route.query.keyword;
    }
};
</script>

<style lang="scss" scoped>
.ps-layout--shop {
    .ps-layout__right {
        max-width: unset;
    }
}
</style>
