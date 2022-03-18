<template lang="html">
    <article class="ps-post">
        <div class="ps-post__thumbnail">
            <nuxt-link :to="`/blog/${post.slug}`" class="ps-post__overlay" />
            <img :src="post.image[0].url" :alt="post.title" />
        </div>
        <div class="ps-post__content">
            <div class="ps-post__meta">
                <nuxt-link
                    v-for="category in post.categories"
                    :to="`/news-center/categories/${category.slug}`"
                    :key="category.id"
                >
                    {{ category.name }}
                </nuxt-link>
            </div>
            <nuxt-link :to="`/blog/${post.slug}`" class="ps-post__title">
                {{ post.title }}
            </nuxt-link>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-post {
    position: relative;
    height: 100%;
    .ps-post__thumbnail {
        height: 210.42px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .ps-post__content {
        p {
            position: absolute;
            bottom: -21px;
        }
        .ps-post__meta {
            a {
                color: #78bc27;
            }
        }
        a {
            color: black;
        }
    }
}
</style>
