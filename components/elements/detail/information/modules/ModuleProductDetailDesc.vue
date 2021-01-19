<template lang="html">
    <div class="ps-product__desc">
        <p>
            Categories:
            <nuxt-link to="/shop">
                <strong> {{ product.categories[0].name }}</strong>
            </nuxt-link>
        </p>
        <ul class="ps-list--dot">
            <p v-html="product.description"></p>
            <!-- <p v-html="product.short_description"></p> -->
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ModuleProductDetailDesc',
    props: {
        product: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
