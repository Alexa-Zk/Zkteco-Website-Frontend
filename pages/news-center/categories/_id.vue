<template lang="html">
    <div class="ps-page--blog">
        <div class="container" v-if="formattedCatArticle">
            <div class="ps-page__header">
                <h1>{{ formattedCatArticle.name }}</h1>
                <bread-crumb2 :breadcrumb="breadCrumb" />
            </div>
            <!-- <template v-if="loading > 0">
                Loading
            </template> -->
            <blog-sidebar
                layout="right"
                :articles="formattedCatArticle.articles"
            />
        </div>
    </div>
</template>

<script>
import BreadCrumb2 from '~/components/elements/BreadCrumb2';
import BlogList from '~/components/partials/blog/BlogList';
import BlogSidebar from '~/components/partials/blog/BlogSidebar2';

// Queries
import CategoriesArticles from '~/apollo/queries/articles/categoriesArticles';

export default {
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
    apollo: {
        categories: {
            query: CategoriesArticles,
            variables() {
                return { id: this.$route.params.id };
            },
            loadingKey: 'loading'
        }
    },
    computed: {
        formattedCatArticle() {
            return this.categories[0];
        }
    }
};
</script>

<style lang="scss" scoped></style>
