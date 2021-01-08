<template>
    <div class="ps-related-posts">
        <h3>Related Posts</h3>
        <div class="row">
            <div
                v-for="post in ourArticles"
                class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
                :key="post.id"
            >
                <post-grid :post="post" />
            </div>
        </div>
    </div>
</template>

<script>
import { relatedPosts } from '~/static/data/posts';
import PostGrid from '../../elements/post/PostGrid';

// Queries
import articles from '~/apollo/queries/articles/homePageArticles';

export default {
    name: 'RelatedPosts',
    components: { PostGrid },
    data() {
        return {
            posts: relatedPosts,
            articles: ''
        };
    },
    apollo: {
        articles: {
            prefetch: true,
            query: articles,
        }
    },
    computed: {
        ourArticles() {
            return this.articles ? this.articles.slice(0, 3) : [];
        }
    }
};
</script>

<style scoped>
.ps-related-post {
    padding-top: 60px;
    padding-bottom: 60px;
}
</style>
