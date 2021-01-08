<template lang="html">
    <div class="ps-product__desc">
        <ul class="ps-list--dot">
            <p v-html="product.description"></p>
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

<style lang="scss" scoped>
.ps-product__desc {
    .ps-list--dot {
        p { 
            color: #666;
        }
    }
}

</style>
