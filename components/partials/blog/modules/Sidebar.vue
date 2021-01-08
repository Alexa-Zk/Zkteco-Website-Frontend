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
            <recent-sidebar />
        </aside>

    </div>
</template>

<script>
import RecentSidebar from "./RecentSidebar";

// Queries
import Categories from '~/apollo/queries/articles/allArticlesCategories';
import Articles from '~/apollo/queries/articles/homePageArticles';



export default {
    name: 'Sidebar',
    components: { RecentSidebar },
    data() {
        return {
            categories: '',
        };
    },
    apollo: {
        categories: {
            prefetch: true,
            query: Categories,
        },
    },
    computed: {
        Categories() {
            return this.categories;
        },
    },
};
</script>

<style lang="scss" scoped></style>
