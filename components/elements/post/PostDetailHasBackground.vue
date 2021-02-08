<template id="post-with-background">
    <div class="ps-post--detail ps-post--parallax" v-if="articles">
        <div
            class="ps-post__header bg--cover"
            :style="{
                backgroundImage: 'url(' + articles.image[0].url + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }"
        ></div>
        <div class="container">
            <div class="ps-post__content post-header ">
                <h2>
                    {{ articles ? articles.title : '' }}
                </h2>
                <p>{{ articles ? formatDate(articles.created_at) : '' }}</p>
                <div class="category_tags">
                    <h4
                        v-for="category in articles.categories"
                        :key="category.name"
                    >
                        {{ category ? category.name : '' }}
                    </h4>
                </div>
            </div>
            <div class="ps-post__content">
                <p v-html="articles.body"></p>
            </div>
            <div class="ps-post__footer">
                <p class="ps-post__tags">
                    Tags:<a
                        :href="`/news-center/categories/${category.id}`"
                        v-for="category in articles.categories"
                        :key="category.name"
                        >{{ category ? category.name : '' }}</a
                    >
                </p>
                <div class="ps-post__social">
                    <a
                        class="facebook"
                        :href="
                            `https://www.facebook.com/sharer/sharer.php?u=${url}`
                        "
                    >
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a
                        class="instagram"
                        :href="
                            `https://api.whatsapp.com/send?url=${url}?title=${articles.name}`
                        "
                    >
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a
                        class="whatsapp"
                        :href="
                            `https://wa.me/2348175555514?text=I%20am%20interested%20in%20your%20product%20for%20sale%20url=${url}%20title=${articles.name}`
                        "
                    >
                        <i class="fa fa-whatsapp"></i>
                    </a>

                    <a
                        class="twitter"
                        :href="
                            `https://twitter.com/intent/tweet?text=ZKTeco%20News%20Articles%20-%20${articles.title}%20-%20${url}`
                        "
                    >
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a
                        class="linkedin"
                        :href="
                            `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${articles.name}&summary=${articles.body}`
                        "
                    >
                        <i class="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostDetailHasBackground',
    props: ['articles'],
    data() {
        return {
            url: ''
        };
    },
    methods: {
        formatDate(date) {
            let formated = new Date(date);
            return formated.toDateString();
        }
    },
    mounted() {
        this.url = window.location.href;
    }
};
</script>

<style lang="scss">
.ps-post--parallax {
    .ps-post__header {
        // background-image: url('/img/bg/blog-detail.jpg');
        padding: 120px 0;
        .category {
            display: flex;
            place-content: center;
            h4 {
                margin-left: 12px;
            }
        }
    }

    .post-header {
        padding: 30px 0 10px;
        .category_tags {
            display: flex;
            h4 {
                background: orange;
                color: white;
                padding: 0px 10px;
                border-radius: 20px;
                font-size: 16px;
                display: flex;
                align-items: center;
                margin-right: 12px;
            }
        }
    }
    .ps-post__content {
        padding: 10px 0;
        .image {
            img {
                width: 100%;
            }
        }
        p {
            strong {
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 30px;
                line-height: 1.4em;
            }
            figure {
                img {
                    width: 100% !important;
                }
            }
        }
    }
}
</style>
