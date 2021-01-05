<template>
    <div class="ps-post--detail ps-post--parallax" v-if="articles">
        <div class="ps-post__header bg--cover">
            <div class="container">
                <div class="category">
                    <h4
                        v-for="category in articles.categories"
                        :key="category.name"
                    >
                        {{ category ? category.name : '' }}
                    </h4>
                </div>
                <h1>
                    {{ articles ? articles.title : '' }}
                </h1>
                <p>{{ articles ? articles.created_at : '' }}</p>
            </div>
        </div>
        <div class="container">
            <div class="ps-post__content">
                <p v-html="articles.body"></p>
            </div>
            <div class="ps-post__footer">
                <p class="ps-post__tags">
                    Tags:<a href="#" v-for="category in articles.categories"
                        :key="category.name">{{category ? category.name : ''}}</a>
                    
                </p>
                <div class="ps-post__social">
                    <a class="facebook" href="#">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a class="twitter" href="#">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a class="google" href="#">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a class="linkedin" href="#">
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
    props: ['articles']
};
</script>

<style lang="scss" scoped>
.ps-post--parallax {
    .ps-post__header {
        background-image: url('/img/bg/blog-detail.jpg');

        .category {
            display: flex;
            place-content: center;
            h4 {
                margin-left: 12px;
            }
        }
    }
    .ps-post__content {
        p {
            
            strong {
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 30px;
                line-height: 1.4em;
            }
            .image {
                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>
