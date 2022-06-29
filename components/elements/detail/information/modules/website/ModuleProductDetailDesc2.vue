<template lang="html">
    <div class="ps-product__desc ps-post--detail">
        <ul class="ps-list--dot" v-html="product.description"></ul>

        <div class="ps-post__footer">
            <div class="ps-list--social-color ps-post__social">
                <a
                    class="facebook"
                    :href="
                        `https://www.facebook.com/sharer/sharer.php?u=${url}`
                    "
                >
                    <i class="fa fa-facebook"></i>
                </a>
                <a
                    class="twitter"
                    :href="
                        `https://twitter.com/intent/tweet?text=ZKTeco%20News%20Product%20-%20${product.name}%20-%20${url}`
                    "
                >
                    <i class="fa fa-twitter"></i>
                </a>
                <a
                    class="instagram"
                    :href="
                        `https://api.whatsapp.com/send?url=${url}?title=${product.name}`
                    "
                >
                    <i class="fa fa-instagram"></i>
                </a>
                <a
                    class="linkedin"
                    :href="
                        `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${product.name}&summary=${product.description}`
                    "
                >
                    <i class="fa fa-linkedin"></i>
                </a>
                <a
                    class="whatsapp"
                    :href="
                        `https://wa.me/2348175555514?text=I%20am%20interested%20in%20your%20product%20for%20sale%20url=${url}%20title=${product.name}`
                    "
                >
                    <i class="fa fa-whatsapp"></i>
                </a>
                <nuxt-link :to="`/product/${product.slug}`">
                    <span class="learn-more">Learn More</span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModuleProductDetailDesc',
    data() {
        return {
            url: ''
        };
    },
    props: {
        product: {
            type: Object,
            default: {}
        }
    },
    mounted() {
        this.url = window.location.href;
    }
};
</script>

<style lang="scss" scoped>
.ps-product__desc {
    // position: absolute;
    // bottom: 0;
}
.ps-post__footer {
    padding-bottom: 19px;
    .ps-post__social {
        // margin-top: 100px;
        display: flex;
        .learn-more {
            position: absolute;
            color: #06c !important;
            width: 80px !important;
        }
    }
}
</style>
