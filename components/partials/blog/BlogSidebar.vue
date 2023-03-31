<template lang="html">
    <div
        :class="
            layout === 'right' ? 'ps-blog--sidebar reverse' : 'ps-blog--sidebar'
        "
    >
        <div class="ps-blog__left">
            <div class="placeholder-image" v-if="loading">
                <content-placeholders v-for="x in 6" :key="x">
                    <content-placeholders-heading :img="true" />
                    <content-placeholders-text :lines="3" />
                </content-placeholders>
            </div>
            <div v-else>
                <post-small-thumbnail
                    v-for="post in filteredList"
                    :post="post"
                    :loading="loading"
                    :key="post.id"
                />
                <footer class="mt-60">
                    <v-pagination
                        v-model="page"
                        :total-visible="7"
                        color="green"
                        :length="paginationLenght"
                        @input="handleChangePagination"
                    />
                </footer>
            </div>
        </div>
        <div class="ps-blog__right">
            <Sidebar
                @searchBlogQuery="searchInputRequest"
                :searchQuery="searchQuery"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Pagination from '../../elements/Pagination';
import Sidebar from './modules/Sidebar';
import PostHorizontal from '../../elements/post/PostHorizontal';
import PostSmallThumbnail from '../../elements/post/PostSmallThumbnail';

export default {
    name: 'BlogSidebar',
    components: { PostSmallThumbnail, PostHorizontal, Sidebar, Pagination },
    data() {
        return {
            articles: '',
            searchQuery: null,
            page: 1,
            pageSize: 12
        };
    },
    props: {
        layout: {
            type: String,
            default: 'left'
        }
    },

    methods: {
        filterBlogs(value) {
            this.searchQuery = value;
        },
        async searchInputRequest(value) {
            console.log(' -value- ', value);
            this.searchQuery = value;
            const params = {
                page: 0,
                perPage: 12,
                order: 'asc',
                search: this.searchQuery.toLowerCase()
            };
            await this.$store.dispatch('website/getArticles', params);
        },
        async handleChangePagination(value) {
            window.scrollTo(0, 0);

            const compute = value - 1;

            let searchQueryIn =
                this.searchQuery == null || this.searchQuery == undefined
                    ? null
                    : { search: this.searchQuery };

            let params = {
                page: compute * 12,
                perPage: 12,
                order: 'asc',
                ...searchQueryIn
            };

            await this.$store.dispatch('website/getArticles', params);
        }
    },
    computed: {
        ...mapState({
            artic: state => state.website.articles,
            loading: state => state.website.loading,
            articlesTotal: state => state.website.articlesTotal
        }),
        paginationLenght() {
            if (this.articlesTotal % 12 === 0) {
                return parseInt(this.articlesTotal / this.pageSize);
            } else {
                return parseInt(this.articlesTotal / 12 + 1);
            }
        },
        ourArticles() {
            return this.artic ? this.artic : [];
        },

        filteredList() {
            return this.ourArticles;
        }
    }
};
</script>

<style lang="scss" scoped>
.placeholder-image {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 35px;
}
</style>
