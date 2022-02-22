<template lang="html">
    <div class="ps-page--blog">
        <div class="container" v-if="news_categories">
            <div class="ps-page__header">
                <h1>{{ news_categories.name }}</h1>
                <bread-crumb2 :breadcrumb="breadCrumb" />
            </div>
            <!-- <template v-if="loading > 0">
                Loading
            </template> -->
            <blog-sidebar
                layout="right"
                :articles="news_categories.articles"
            />
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import BreadCrumb2 from '~/components/elements/BreadCrumb2';
import BlogList from '~/components/partials/blog/BlogList';
import BlogSidebar from '~/components/partials/blog/BlogSidebar2';


export default {
    head() {
        return {
            titleTemplate: `${this.news_categories ? this.news_categories.name : '' }`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `${this.news_categories ? this.news_categories.name : ''} About ZKTeco West Africa`
                }
            ]
        };
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    components: {
        BlogSidebar,
        BlogList,
        BreadCrumb2
    },
    data: () => {
        return {

            categories: '',
            loading: 0,
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Our Press'
                }
            ]
        };
    },
    computed: {
        ...mapState({
            news_categories: state => state.website.newsCategories,
        }),
    },
    
   async created() {
        const slug = this.$route.params.id
        const response = await this.$store.dispatch('website/getNewsCategories', slug);
    },
};
</script>

<style lang="scss" scoped></style>
