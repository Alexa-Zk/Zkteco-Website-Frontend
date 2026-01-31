<template lang="html">
    <div class="ps-product__specification">
        
        <p class="categories">
            <strong> Categories:</strong>
            <nuxt-link v-for="category in product.categories" :key="category.id" :to="`/shop/${category.slug}/`">
                <a>{{category.name}}</a>
            </nuxt-link>
        </p>
        <p class="tags">
            <strong> Tags</strong>
            <nuxt-link v-for="tag in product.tags" :key="tag.slug" :to="`/shop/${tag.slug}/`" >
                <a>{{tag.name}}</a>
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
