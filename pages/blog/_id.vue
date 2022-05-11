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

import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    name: 'BlogPost',
    head() {
        const name = this.formattedArticle ? this.formattedArticle.title : '';
        const image = this.formattedArticle
            ? this.formattedArticle.image[0].url
            : 'https://www.zkteco-wa.com/img/zkteco-logo.png';
        const excerpt = this.formattedArticle
            ? this.formattedArticle.excerpt
            : 'Blog Post - excerpt';
        if (this.formattedArticle) {
            return {
                title: name,
                titleTemplate(title) {
                    return `${title}`;
                },
                meta: [
                    {
                        hid: 'title',
                        name: 'title',
                        content: name
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: excerpt
                    },
                    {
                        hid: 'twitter:title',
                        name: 'twitter:title',
                        content: name
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
                        content: name
                    },
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: name
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
                        content: name
                    }
                ]
            };
        } else {
            return {};
        }
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
    
    mounted() {
        this.getProductCategories()
    },
    methods: {
        handleClosePanel() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        },
        async getProductCategories () {
            this.loading = true
            const reponse = await Repository.get( `${subBaseUrl}/articles?slug=${this.$route.params.id}`)
                .then(response => {
                    this.articles = response.data
                    this.loading = false
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
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
    },
    // jsonld() {
    //     if (this.formattedArticle) {
    //         return {
    //             '@context': 'https://schema.org',
    //             '@type': 'NewsArticle',
    //             url: `https://www.zkteco-wa.com/blog/${this.formattedArticle.slug}`,
    //             mainEntityOfPage: {
    //                 '@type': 'WebPage',
    //                 '@id': `https://www.zkteco-wa.com/blog/${this.formattedArticle.slug}`
    //             },
    //             headline: `https://www.zkteco-wa.com/blog/${this.formattedArticle.title}`,
    //             description: `https://www.zkteco-wa.com/blog/${this.formattedArticle.excerpt}`,
    //             image: `https://www.zkteco-wa.com/blog/${this.formattedArticle.image[0].url}`,
    //             author: {
    //                 '@type': 'Person',
    //                 name: `https://www.zkteco-wa.com/blog/${this.formattedArticle.Author}`
    //             },
    //             datePublished: `https://www.zkteco-wa.com/blog/${this.formattedArticle.created_at}`,
    //             dateModified: `https://www.zkteco-wa.com/blog/${this.formattedArticle.created_at}`,
    //             publisher: {
    //                 '@type': 'Organization',
    //                 name: 'ZKTeco West Africa',
    //                 logo: {
    //                     '@type': 'ImageObject',
    //                     url: 'https://www.zkteco-wa.com/img/zkteco-logo1.png'
    //                 }
    //             }
    //         };
    //     } else {
    //         return {};
    //     }
    // }
};
</script>

<style lang="scss" scoped>
.container {
    margin-bottom: 60px;
}
</style>
