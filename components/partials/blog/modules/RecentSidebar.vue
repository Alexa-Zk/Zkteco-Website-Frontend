<template lang="html">
    <div class="recent-sidebar">
        
        <h3 class="widget__title">Recent Posts</h3>
        <div class="widget__content">
            <template v-if="Articles.length > 0">
                <nuxt-link
                    v-for="post in Articles"
                    :to="`/website/post/${post.id}`"
                    :key="post.id"
                >
                    {{ post.title }}
                </nuxt-link>
            </template>
            <p v-else>No post.</p>
        </div>
    

    </div>
</template>

<script>
// Queries
import Articles from '~/apollo/queries/articles/homePageArticles';


export default {
    name: 'Sidebar',
    data() {
        return {
            articles: '',
        };
    },
    apollo: {
        articles: {
            prefetch: true,
            query: Articles,
        },
    },
    computed: {
        Articles() {
            return this.articles.slice(0, 4);
        },
    },
};
</script>

<style lang="scss" scoped></style>
