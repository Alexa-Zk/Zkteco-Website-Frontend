<template lang="html">
    <div class="ps-product__sharing">
        <a
            class="facebook"
            :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`"
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
            class="google"
            :href="
                `https://api.whatsapp.com/send?url=${url}?title=${product.name}`
            "
        >
            <i class="fa fa-google-plus"></i>
        </a>
        <a
            class="linkedin"
            :href="
                `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${product.name}&summary=${product.description}`
            "
        >
            <i class="fa fa-linkedin"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ModuleProductDetailSharing',
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

<style lang="scss" scoped></style>
