<template lang="html">
    <div class="ps-page--shop" id="shop-sidebar">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="container">
            <div class="ps-layout--shop">
                <div class="ps-layout__right">
                    <search-result />
                    <div class="search-container" id="search-container">
										<!-- <ais-instant-search
											:search-client="searchClient"
											index-name="dev_zkteco"
										>
											<div class="search-panel">
												<div class="search-panel__results">
													<ais-search-box
														placeholder="Search here…"
														class="searchbox"
														v-model="search"
													/>
													<ais-hits>
														<template slot="item" slot-scope="{ item }">
															<g-link :to="`/product/${item.slug}`" style="display: flex;">
																<div v-if="item.images" class="template-image">
																	
																</div>

																<div class="template-text">
																	<h1>
																		<ais-highlight :hit="item" attribute="name" />
																	</h1>
																	<p v-html="item.description">
																		<ais-highlight
																			:hit="item"
																			attribute="description"
																		/>
																	</p>
																	<div>
																		<ais-highlight :hit="item" attribute="created_at" />
																	</div>
																</div>
															</g-link>
														</template>
													</ais-hits>

													<div class="pagination"><ais-pagination /></div>
												</div>
											</div>
										</ais-instant-search> -->
									</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import algoliasearch from 'algoliasearch/lite';
// import 'instantsearch.css/themes/algolia-min.css';

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
            searchClient: algoliasearch(
                'PU7YBKHAE1',
                'faec1fbb3f516cc1c73d800b79f3c779'
            )
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
