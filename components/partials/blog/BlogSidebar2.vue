<template lang="html">
    <div
        :class="
            layout === 'right' ? 'ps-blog--sidebar reverse' : 'ps-blog--sidebar'
        "
    >
        <div class="ps-blog__left">
            <div class="placeholder-image" v-if="loading">
                <content-placeholders v-for="x in 9" :key="x">
                    <content-placeholders-heading :img="true" />
                    <content-placeholders-text :lines="3" />
                </content-placeholders>
            </div>
            <PostSmallThumbnail
                v-for="post in articles"
                :post="post"
                :key="post.id"
            />
            <!-- <Pagination /> -->
        </div>
        <div class="ps-blog__right">
            <Sidebar />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Pagination from '../../elements/Pagination';
import Sidebar from './modules/Sidebar';
import PostHorizontal from '../../elements/post/PostHorizontal';
import PostSmallThumbnail from '../../elements/post/website/PostSmallThumbnail';
// import { posts } from '~/static/data/blog-grid.json';

export default {
    name: 'BlogSidebar',
    components: { PostSmallThumbnail, PostHorizontal, Sidebar, Pagination },
    data() {
        return {
            // blogPosts: posts,
        };
    },
    props: {
        layout: {
            type: String,
            default: 'left'
        },
        articles: {
            type: Array,
            default: []
        }
    },
    computed: {
        ...mapState({
            loading: state => state.website.loading
        })
    }
};
</script>

<style lang="scss" scoped></style>
