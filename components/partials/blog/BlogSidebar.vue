<template lang="html">
    <div
        :class="
            layout === 'right' ? 'ps-blog--sidebar reverse' : 'ps-blog--sidebar'
        "
    >
        <div class="ps-blog__left">
            <div class="placeholder-image" v-if="loading">
                <content-placeholders v-for="x in 9" :key="x">
                    <content-placeholders-heading :img="true" />
                    <content-placeholders-text :lines="3" />
                </content-placeholders>
            </div>
            <PostSmallThumbnail
                v-for="post in filteredList"
                :post="post"
                :loading="loading"
                :key="post.id"
            />
            <!-- <Pagination /> -->
        </div>
        <div class="ps-blog__right">
            <Sidebar @searchBlogs="filterBlogs" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Pagination from '../../elements/Pagination';
import Sidebar from './modules/Sidebar';
import PostHorizontal from '../../elements/post/PostHorizontal';
import PostSmallThumbnail from '../../elements/post/PostSmallThumbnail';

// Queries
import articles from '~/apollo/queries/articles/homePageArticles';

export default {
    name: 'BlogSidebar',
    components: { PostSmallThumbnail, PostHorizontal, Sidebar, Pagination },
    data() {
        return {
            articles: '',
            searchQuery: ''
        };
    },
    props: {
        layout: {
            type: String,
            default: 'left'
        }
    },
    apollo: {
        articles: {
            prefetch: true,
            query: articles
        }
    },
    methods: {
        filterBlogs(value) {
            this.searchQuery = value;
        }
    },
    computed: {
        ...mapState({
            artic: state => state.website.articles,
            loading: state => state.website.loading
        }),
        ourArticles() {
            return this.artic ? this.artic : [];
        },
        filteredList() {
            return this.ourArticles.filter(res => {
                return res.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase());
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.placeholder-image{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 35px;
}
</style>
