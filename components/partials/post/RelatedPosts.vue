<template>
    <div class="ps-related-posts">
        <h3>Related Posts</h3>
        <div class="row">
            <div
                v-for="post in ourArticles"
                class="col-ps col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
                :key="post.id"
            >
                <post-grid :post="post" />
            </div>
        </div>
    </div>
</template>

<script>
import PostGrid from '../../elements/post/PostGrid';

// Queries
import relatedArticles from '~/apollo/queries/articles/relatedArticles';

export default {
    name: 'RelatedPosts',
    components: { PostGrid },
    data() {
        return {
            articles: '',
            categories: ''
        };
    },
    apollo: {
        categories: {
            prefetch: true,
            query: relatedArticles,
            variables() {
                return { id: this.id };
            }
        }
    },
    props: {
        id: {
            type: Number
        }
    },
    computed: {
        ourArticles() {
            return this.categories[0]
                ? this.categories[0].articles.slice(0, 3)
                : [];
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-related-posts {
    padding-top: 60px;
    padding-bottom: 60px;
    .row {
        .col-ps {
            @include media('<sm') {
                margin-bottom: 40px!important;
            }
            @include media('<xs') {
                margin-bottom: 40px;
            }
        }
    }
}
</style>
