<template lang="html">
    <div class="ps-product__specification">
        
        <p class="categories">
            <strong> Categories:</strong>
            <nuxt-link :to="`/product-categories/${product.product_category.slug}`">
                <a class="ml-2 text-capitalize">
                    {{product.product_category.name}}
                </a>
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
