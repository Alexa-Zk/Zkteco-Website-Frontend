<template lang="html">
    <div class="ps-page--blog">
        <div class="container">
            <div class="ps-page__header">
                <h1>News Center</h1>
                <bread-crumb2 :breadcrumb="breadCrumb" />
            </div>
            <blog-sidebar layout="right" :loading="loading" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import BreadCrumb2 from '~/components/elements/BreadCrumb2';
import BlogSidebar from '~/components/partials/blog/BlogSidebar';

export default {
    head() {
        return {
            titleTemplate: 'News Center',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'News Center'
                }
            ]
        };
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    components: {
        BlogSidebar,
        BreadCrumb2
    },
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Our Blog'
                }
            ]
        };
    },
    computed: {
        ...mapState({
            loading: state => state.website.loading
        })
    },
    created() {
        let payloadLimited = {};
        let payload = {
            page: 0,
            perPage: 12
        };
        const responseTotal = this.$store.dispatch(
            'website/getArticlesTotal',
            payload
        );
        const responseLimited = this.$store.dispatch(
            'website/getArticlesLimited',
            payloadLimited
        );
        const response = this.$store.dispatch('website/getArticles', payload);
    }
};
</script>

<style lang="scss" scoped>
.ps-page-blog {
    .ps-page__header {
        padding: 30px 0 70px;
    }
}
</style>
