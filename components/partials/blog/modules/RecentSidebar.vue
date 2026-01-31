<template lang="html">
    <div class="recent-sidebar">
        <h3 class="widget__title">Recent Posts</h3>
        <div class="widget__content">
            <template v-if="articles">
                <nuxt-link
                    v-for="post in formattedArticles"
                    :to="`/blog/${post.slug}/`"
                    :key="post.id"
                >
                    <span>&#8226;</span> {{ post.title }}
                </nuxt-link>
            </template>
            <p v-else>No post.</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Sidebar',
    data() {
        return {};
    },

    computed: {
        ...mapState({
            articles: state => state.website.articlesLimited
        }),
        formattedArticles() {
            return this.articles ? this.articles : [];
        }
    }
};
</script>

<style lang="scss" scoped></style>
