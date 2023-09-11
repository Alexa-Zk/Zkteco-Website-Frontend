<template lang="html">
    <div class="ps-product__specification">
        <p class="categories">
            <strong> Categories:</strong>
            <nuxt-link
                :to="
                    `/product-categories/${
                        product.product_categories
                            ? product.product_categories[0]
                                ? product.product_categories[0].slug !==
                                  undefined
                                    ? product.product_categories[0].slug
                                    : 0
                                : 0
                            : 0
                    }`
                "
            >
                <span
                    class="ml-2 text-capitalize"
                    v-for="category in product.product_categories"
                >
                    {{ category.name ? category.name : 'NILL' }}
                </span>
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
