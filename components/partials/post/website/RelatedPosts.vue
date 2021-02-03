<template>
    <div class="ps-related-posts">
        <h3>News Center</h3>
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
import { newsPostsWebsite } from '~/static/data/posts';
import PostGrid from '~/components/elements/post/website/PostGrid';

// Queriest
import Articles from '~/apollo/queries/articles/homePageArticles';


export default {
    name: 'RelatedPosts',
    components: { PostGrid },
    data() {
        return {
            posts: newsPostsWebsite,
            articles: ''
        };
    },
    apollo: {
        articles: {
            query: Articles,
            prefetch: true,
            loadingKey: 'loading'
        }
    },
    computed: {
        ourArticles() {
            return this.articles.slice(0, 4)
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-related-posts {
    padding-top: 60px;
    padding-bottom: 20px;
    .row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        @include media('<sm') {
            grid-template-columns: 1fr 1fr;
        }
        @include media('<xs') {
            grid-template-columns: 1fr;
        }
        .col-lg-4 {
            width: 100%;
            max-width: 100%;
        }
    }
}
</style>
