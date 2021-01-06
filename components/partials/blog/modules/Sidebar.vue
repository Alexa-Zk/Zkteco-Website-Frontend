<template lang="html">
    <div class="sidebar">
        <aside class="widget widget--blog widget--search">
            <form
                class="ps-form--widget-search"
                action="do_action"
                method="get"
            >
                <input
                    class="form-control"
                    type="text"
                    placeholder="Search..."
                />
                <button>
                    <i class="icon-magnifier"></i>
                </button>
            </form>
        </aside>
        <aside class="widget widget--blog widget--categories">
            <h3 class="widget__title">Categories</h3>
            <div class="widget__content">
                <ul>
                    <li v-for="category in Categories" :key="category.id">
                        <nuxt-link :to="`/website/blog/${category.id}`">
                            {{ category.name }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </aside>
        <aside class="widget widget--blog widget--recent-post">
            <h3 class="widget__title">Recent Posts</h3>
            <div class="widget__content">
                <template v-if="recentPosts.length > 0">
                    <nuxt-link
                        v-for="post in recentPosts"
                        :to="`/website/post/${post.id}`"
                        :key="post.id"
                    >
                        {{ post.title }}
                    </nuxt-link>
                </template>
                <p v-else>No post.</p>
            </div>
        </aside>

    </div>
</template>

<script>
import blogGrid from '~/static/data/blog-grid.json';

// Queries
import Categories from '~/apollo/queries/articles/allArticlesCategories';
import Articles from '~/apollo/queries/articles/homePageArticles';


export default {
    name: 'Sidebar',
    data() {
        return {
            categories: '',
            // articles: '',
            recentPosts: blogGrid.recentPosts
        };
    },
    apollo: {
        categories: {
            prefetch: true,
            query: Categories,
        },
        // articles: {
        //     prefetch: true,
        //     query: Articles,
        // }
    },
    computed: {
        Categories() {
            return this.categories;
        },
        // Articles() {
        //     return this.articles;
        // }
    },
};
</script>

<style lang="scss" scoped></style>
