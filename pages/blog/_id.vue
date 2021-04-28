<template lang="html">
    <div>
        <post-detail-has-background :articles="formattedArticle" />
        <div class="container">
            <related-posts :id="categoriesId" />
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
import relatedArticles from '~/apollo/queries/articles/relatedArticles';

export default {
    name: 'BlogPost',
    head() {
        const title = this.formattedArticle
            ? this.formattedArticle.title
            : 'Blog Post';
        const image = this.formattedArticle.image ? this.formattedArticle.image[0].url
            : 'Blog Post - Images';
        const excerpt = this.formattedArticle
            ? this.formattedArticle.excerpt
            : 'Blog Post - excerpt';

        console.log(image)
        return {
            titleTemplate: title,
            meta: [
                {
                    hid: 'title',
                    name: 'title',
                    content: title
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: excerpt
                },
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: title
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: excerpt
                },
                {
                    hid: 'twitter:image',
                    name: 'twitter:image',
                    content: image
                },
                {
                    hid: 'twitter:image:alt',
                    name: 'twitter:image:alt',
                    content: title
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: title
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: excerpt
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: image
                },
                {
                    hid: 'og:image:secure_url',
                    property: 'og:image:secure_url',
                    content: image
                },
                {
                    hid: 'og:image:alt',
                    property: 'og:image:alt',
                    content: title
                }
            ]
        };
    },
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
        formattedArticle() {
            return this.articles[0];
        },
        categoriesId() {
            return Number(
                this.articles[0] ? this.articles[0].categories[0].id : 1
            );
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    margin-bottom: 60px;
}
</style>
