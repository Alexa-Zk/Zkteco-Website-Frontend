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
                    v-model="searchQuery"
                />
                <button @click.prevent="searchButtonIcon">
                    <i class="icon-magnifier"></i>
                </button>
            </form>
        </aside>
        <aside class="widget widget--blog widget--categories">
            <h3 class="widget__title">Categories</h3>
            <div class="widget__content">
                <div v-if="loading">
                    <content-placeholders v-for="x in 2" :key="x">
                        <content-placeholders-text :lines="2" />
                    </content-placeholders>
                </div>
                <ul v-else>
                    <li v-for="category in Categories" :key="category.id">
                        <nuxt-link
                            :to="`/news-center/categories/${category.slug}`"
                        >
                            {{ category.name }}
                            <span class="widget__content_value">{{
                                category.articles.length
                            }}</span>
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
import RecentSidebar from './RecentSidebar';
import { mapState } from 'vuex';

export default {
    name: 'Sidebar',
    components: { RecentSidebar },
    //props: ['searchQuery'],
    data() {
        return {
            searchQuery: ''
        };
    },
    async created() {
        const response = await this.$store.dispatch(
            'website/getArticlesCategories'
        );
    },
    computed: {
        ...mapState({
            loading: state => state.website.loading,
            articlesCategories: state => state.website.articlesCategories
        }),
        Categories() {
            return this.articlesCategories;
        }
    },
    watch: {
        // searchQuery: function(newQuestion, oldQuestion) {
        //     this.$emit('searchBlogs', newQuestion);
        // }
    },
    methods: {
        searchButtonIcon() {
            this.$emit('searchBlogQuery', this.searchQuery);
        },
        trigger() {
            this.$refs.searchButtonIcon.click();
        }
    }
};
</script>

<style lang="scss" scoped>
.widget__content {
    .widget__content_value {
        background: green;
        color: white;
        padding: 2px 5px;
        margin-left: 10px;
    }
}
</style>
