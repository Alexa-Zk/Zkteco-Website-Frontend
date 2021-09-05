<template lang="html">
    <article class="ps-post ps-post--small-thumbnail">
        <div class="ps-post__thumbnail">
            <nuxt-link
                :to="`/blog/${post.slug}`"
                class="ps-post__overlay"
            ></nuxt-link>
            <img :src="post.image[0].url" :alt="post.title" />
            <div v-if="post.badge" class="ps-post__badge">
                <i class="{post.badge}"></i>
            </div>
        </div>
        <div class="ps-post__content">
            <div class="ps-post__top">
                <div class="ps-post__meta">
                    <nuxt-link
                        v-for="category in post.categories"
                        :to="`/news-center/categories/${category.id}`"
                        :key="category.id"
                    >
                        {{ category.name }}
                    </nuxt-link>
                </div>
                <nuxt-link :to="`/blog/${post.slug}`" class="ps-post__title">
                    {{ post.title }}
                </nuxt-link>
                <div class="ps-post__desc">
                    <p>
                        {{post.title}}
                    </p>
                </div>
            </div>
            <p>
                {{formatDate(post.updated_at)}}
            </p>
            <p>
                By: {{ post.Author }}
            </p>
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
    },
    methods: {
        formatDate (date) {
            let formated = new Date(date);
            return formated.toDateString();
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-post--small-thumbnail  {
    .ps-post__thumbnail  {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>