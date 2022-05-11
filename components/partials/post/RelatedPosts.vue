<template>
    <div class="ps-related-posts">
        <h3>Related Posts</h3>
        <div class="row">
            <!-- <div class="placeholder-image-grid" v-if="loading">
                <content-placeholders :rounded="true" v-for="x in 3" :key="x">
                    <content-placeholders-img />
                    <content-placeholders-heading />
                </content-placeholders>
            </div> -->
            <content-placeholders :rounded="true" v-for="x in 3" :key="x">
                <content-placeholders-img />
                <content-placeholders-heading />
            </content-placeholders>
            <div
                v-for="post in ourArticles"
                class="col-ps col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
                :key="post.id"
            >
                <post-grid :post="post" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PostGrid from '../../elements/post/PostGrid';

export default {
    name: 'RelatedPosts',
    components: { PostGrid },
   
    async created() {
        const response = await this.$store.dispatch(
            'website/getSingleArticlesCategories',
            this.$route.params.id
        );
    },
    computed: {
        ...mapState({
            loading: state => state.website.loading,
            singleArticlesCategories: state =>
                state.website.singleArticlesCategories
        }),
        ourArticles() {
            return this.singleArticlesCategories
                ? this.singleArticlesCategories[0].articles.slice(0, 3)
                : [];
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-related-posts {
    padding-top: 60px;
    padding-bottom: 60px;
    .row {
        .col-ps {
            @include media('<sm') {
                margin-bottom: 40px !important;
            }
            @include media('<xs') {
                margin-bottom: 40px;
            }
        }
    }
}

.placeholder-image-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
}
</style>
