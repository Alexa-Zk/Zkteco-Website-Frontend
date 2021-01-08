<template lang="html">
    <div>
        <post-detail-has-background :articles="formattedArticle" />
        <div class="container">
            <related-posts />
            <!-- <post-comments /> -->
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import PostDetailHasBackground from '~/components/elements/post/PostDetailHasBackground';
import PostComments from '~/components/partials/post/PostComments';
import RelatedPosts from '~/components/partials/post/RelatedPosts';

// Queries
import singleArticles from '~/apollo/queries/articles/singleArticles';

export default {
    name: 'default',
    components: {
        RelatedPosts,
        PostComments,
        PostDetailHasBackground,
        BreadCrumb
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    data: () => {
        return {
            articles: '',
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Blog Detail'
                }
            ]
        };
    },
    apollo: {
        articles: {
            query: singleArticles,
            variables() {
                return { id: this.$route.params.id };
            }
        }
    },
    computed: {
        formattedArticle () {
            return this.articles[0]
        }
    },
};
</script>

<style lang="scss" scoped>
.container {
    margin-bottom: 60px;
}
</style>
