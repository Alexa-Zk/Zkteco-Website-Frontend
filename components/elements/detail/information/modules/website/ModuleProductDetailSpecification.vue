<template lang="html">
    <div class="ps-product__specification">
        
        <p class="categories">
            <strong> Categories:</strong>
            <nuxt-link to="/shop">
                <a>Consumer Electronics</a>
            </nuxt-link>
            <nuxt-link to="/shop">
                <a>Refrigerator</a>
            </nuxt-link>
            <nuxt-link to="/shop">
                <a>Babies & Moms</a>
            </nuxt-link>
        </p>
        <p class="tags">
            <strong> Tags</strong>
            <nuxt-link to="/shop">
                <a>sofa</a>
            </nuxt-link>
            <nuxt-link to="/shop">
                <a>technologies</a>
            </nuxt-link>
            <nuxt-link to="/shop">
                <a>wireless</a>
            </nuxt-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'ModuleProductDetailSpecification',
    props: {
        product: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
