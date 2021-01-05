<template lang="html">
    <div
        :class="
            layout === 'right' ? 'ps-blog--sidebar reverse' : 'ps-blog--sidebar'
        "
    >
        <div class="ps-blog__left">
            <PostSmallThumbnail
                v-for="post in articles"
                :post="post"
                :key="post.id"
            />
            <Pagination />
        </div>
        <div class="ps-blog__right">
            <Sidebar />
        </div>
    </div>
</template>

<script>
import Pagination from '../../elements/Pagination';
import Sidebar from './modules/Sidebar';
import PostHorizontal from '../../elements/post/PostHorizontal';
import PostSmallThumbnail from '../../elements/post/PostSmallThumbnail';
import { posts } from '~/static/data/blog-grid.json';

// Queries
import articles from '~/apollo/queries/articles/homePageArticles';

export default {
    name: 'BlogSidebar',
    components: { PostSmallThumbnail, PostHorizontal, Sidebar, Pagination },
    data() {
        return {
            blogPosts: posts,
            articles: ''
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
        },
    },
    computed: {
        ourArticles() {
            return this.articles ? this.articles : [];
        }
    },
};
</script>

<style lang="scss" scoped></style>
