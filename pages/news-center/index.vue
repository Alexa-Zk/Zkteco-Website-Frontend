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
import BlogList from '~/components/partials/blog/BlogList';
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
        BlogList,
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
        let payload = {};
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
