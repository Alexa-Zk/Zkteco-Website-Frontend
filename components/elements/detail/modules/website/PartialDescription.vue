<template lang="html">
    <div class="ps-document">
        <p v-html="product.product_details">
        </p>
        
    </div>
</template>

<script>
export default {
    name: 'PartialDescription',
    props: {
        product: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
